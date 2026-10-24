/* 互动配置单：模组列表式 UI（像我的世界装模组） */
/* 不兼容的选项会被自动禁用（置灰），并用大白话告诉你为什么 */
/* 数据源：服务器的 /api/parts 接口 */

(function () {
  'use strict';

  const SAVE_KEY = 'pc-guide-build';
  const BASE_POWER = 60; // 主板 / 内存 / 硬盘 / 风扇等基础功耗

  const CATEGORIES = [
    { key: 'cpu', label: 'CPU 处理器', icon: '🧠' },
    { key: 'motherboard', label: '主板', icon: '🏘️' },
    { key: 'gpu', label: '显卡', icon: '🎮' },
    { key: 'ram', label: '内存', icon: '⚡' },
    { key: 'storage', label: '硬盘', icon: '💾' },
    { key: 'psu', label: '电源', icon: '🔌' },
    { key: 'cooler', label: '散热器', icon: '❄️' },
    { key: 'case', label: '机箱', icon: '🏠' }
  ];

  // 分组的展示顺序（不在表里的组追加在最后）
  const GROUP_ORDER = {
    cpu: ['Intel', 'AMD'],
    motherboard: ['Intel 平台', 'AMD 平台'],
    gpu: ['核显方案', '亮机卡', 'GTX 9系', 'GTX 10系', 'GTX 16系', 'RTX 20系', 'RTX 30系', 'RTX 40系', 'RTX 50系', 'AMD', 'Intel'],
    ram: ['DDR5', 'DDR4'],
    storage: ['M.2 固态', '机械硬盘'],
    psu: ['小功率 ≤600W', '主流 650–850W', '大功率 1000W+'],
    cooler: ['风冷', '水冷'],
    case: ['海景房', '风道', '开放式', '手提']
  };

  // 分组前面的图标
  const GROUP_ICON = {
    'Intel': '🔵', 'AMD': '🔴', 'Intel 平台': '🔵', 'AMD 平台': '🔴',
    '核显方案': '💡', '亮机卡': '🔦', '风冷': '🌀', '水冷': '💨',
    '海景房': '🏖️', '风道': '🌬️', '开放式': '🦴', '手提': '🧳',
    'M.2 固态': '⚡', '机械硬盘': '💿', 'DDR5': '🚀', 'DDR4': '🐢',
    '小功率 ≤600W': '🌱', '主流 650–850W': '💪', '大功率 1000W+': '🐉'
  };

  const $ = (sel) => document.querySelector(sel);
  const pickerList = $('#picker-list');
  const presetRow = $('#preset-row');
  const errBox = $('#builder-error');

  let products = null;
  let presets = null;
  const selection = {};           // { categoryKey: productId }
  const openGroups = new Set();   // 记住用户手动展开的分组："cpu:Intel"

  /* ---------- 工具 ---------- */
  const fmtPrice = (p) => '¥' + p.toLocaleString('zh-CN');
  const esc = (s) => { const d = document.createElement('div'); d.textContent = String(s); return d.innerHTML; };
  const getById = (cat, id) => (products[cat] || []).find((p) => p.id === id);
  // 接口名 -> 厂商：LGA 开头是 Intel 平台，AM 开头是 AMD 平台
  const vendorOf = (socket) => /^LGA/.test(socket) ? 'Intel' : 'AMD';
  // 机箱能装的最大版型
  const RANK = { ITX: 0, 'M-ATX': 1, ATX: 2 };
  const biggestFit = (ffs) => ffs.reduce((m, f) => (RANK[f] > RANK[m] ? f : m), 'ITX');

  /* =========================================================
     兼容性引擎：成对规则
     每条规则返回 null（不适用）/ { level, text }
     level: 'ok'（兼容）/ 'warn'（警告，可选）/ 'block'（禁用）
     文案一律说人话，默认用户不懂任何术语
     ========================================================= */

  const RULES = [
    {
      // CPU × 主板：插槽
      cats: ['cpu', 'motherboard'],
      check: (cpu, mb) => {
        if (cpu.socket === mb.socket) return { level: 'ok', text: `接口对得上，${cpu.name} 能装进这块主板` };
        if (vendorOf(cpu.socket) !== vendorOf(mb.socket)) {
          return { level: 'block', text: `接口对不上：这块主板是 ${vendorOf(mb.socket)} 专用的，${vendorOf(cpu.socket)} 的 CPU 物理上装不进去` };
        }
        return { level: 'block', text: `接口对不上：CPU 要插 ${cpu.socket} 接口，这块主板是 ${mb.socket} 的，针脚不一样` };
      }
    },
    {
      // 内存 × 主板：DDR 代数
      cats: ['ram', 'motherboard'],
      check: (ram, mb) => (ram.type === mb.memoryType
        ? { level: 'ok', text: `内存跟主板匹配（都是 ${ram.type}）` }
        : { level: 'block', text: `内存插不进去：这块主板只支持 ${mb.memoryType}，选的却是 ${ram.type} 内存` })
    },
    {
      // 主板版型 × 机箱
      cats: ['motherboard', 'case'],
      check: (mb, cs) => (cs.formFactors.includes(mb.formFactor)
        ? { level: 'ok', text: `主板尺寸合适：${mb.formFactor} 放得下` }
        : { level: 'block', text: `机箱装不下 ${mb.formFactor} 大主板：这款机箱最大只支持 ${biggestFit(cs.formFactors)}` })
    },
    {
      // 显卡长度 × 机箱
      cats: ['gpu', 'case'],
      check: (gpu, cs) => {
        if (!gpu.length) return null;
        return gpu.length <= cs.maxGpuLength
          ? { level: 'ok', text: `显卡放得下：${gpu.length}mm，这机箱最长能塞 ${cs.maxGpuLength}mm` }
          : { level: 'block', text: `机箱装不下这显卡：显卡 ${gpu.length}mm，比限长 ${cs.maxGpuLength}mm 还长，塞不进去` };
      }
    },
    {
      // 散热器 × 机箱：风冷限高 / 水冷冷排
      cats: ['cooler', 'case'],
      check: (cl, cs) => (cl.type === '风冷'
        ? (cl.height <= cs.maxCoolerHeight
          ? { level: 'ok', text: `散热器高度 OK：${cl.height}mm，没超过限高 ${cs.maxCoolerHeight}mm` }
          : { level: 'block', text: `散热器太高了：${cl.height}mm，这机箱盖下来最多 ${cs.maxCoolerHeight}mm，会顶到侧板` })
        : ((cs.maxRadiator || 0) >= cl.radiator
          ? { level: 'ok', text: `水冷放得下：${cl.radiator}mm 冷排，机箱最多 ${cs.maxRadiator}mm` }
          : { level: 'block', text: `机箱装不下 ${cl.radiator}mm 水冷：这款最多放 ${cs.maxRadiator}mm 的冷排` }))
    },
    {
      // CPU × 散热器：扣具 + 压制力
      cats: ['cpu', 'cooler'],
      check: (cpu, cl) => {
        if (!cl.sockets.includes(cpu.socket)) {
          return { level: 'block', text: `散热器装不上：这款散热器不带 ${cpu.socket} 接口的扣具` };
        }
        return cl.tdpRating >= cpu.tdp
          ? { level: 'ok', text: `散热压得住：压制力 ${cl.tdpRating}W，CPU 发热 ${cpu.tdp}W` }
          : { level: 'warn', text: `散热可能压不住：CPU 发热 ${cpu.tdp}W，这款散热器最多压 ${cl.tdpRating}W` };
      }
    },
    {
      // 电源 × 机箱：尺寸规格
      cats: ['psu', 'case'],
      check: (psu, cs) => (psu.type === cs.psuType
        ? { level: 'ok', text: `电源尺寸合适：${psu.type} 放得进这机箱` }
        : { level: 'block', text: `电源放不下：这是 ${psu.type} 大电源，这机箱只装得下 ${cs.psuType} 小电源` })
    },
    {
      // CPU × 显卡：核显 / 矿卡逻辑
      cats: ['cpu', 'gpu'],
      check: (cpu, gpu) => {
        if (gpu.noOutput) {
          // P106 一类矿卡没有显示输出
          return cpu.igpu !== false
            ? { level: 'warn', text: `${gpu.name} 没有显示输出接口：显示器得插主板上，靠 CPU 核显输出画面` }
            : { level: 'block', text: `${gpu.name} 自己没有显示输出接口，而 ${cpu.name} 又没核显——显示器没地方插，点不亮` };
        }
        if (gpu.id === 'gpu-0' || gpu.tdp === 0) {
          // 不装独显（核显方案）
          return cpu.igpu !== false
            ? { level: 'ok', text: 'CPU 自带核显，不装独显也能点亮' }
            : { level: 'block', text: `${cpu.name} 没有核显（型号带 F 的都这样），不装独立显卡屏幕点不亮` };
        }
        return null;
      }
    }
  ];

  // 功率规则（三体：CPU + 显卡 + 电源）
  function wattRule(sel) {
    const cpu = sel.cpu, gpu = sel.gpu, psu = sel.psu;
    if (!psu || (!cpu && !gpu)) return null;
    const total = (cpu ? cpu.tdp : 0) + (gpu ? gpu.tdp : 0) + ((cpu || gpu) ? BASE_POWER : 0);
    if (total === 0) return null;
    const rec = Math.ceil((total * 1.5) / 50) * 50;
    return psu.wattage >= rec
      ? { level: 'ok', text: `电源带得动：整机约 ${total}W，这款 ${psu.wattage}W 余量充足`, total, rec }
      : { level: 'warn', text: `电源可能带不动：整机约 ${total}W，这款只有 ${psu.wattage}W，建议至少 ${rec}W`, total, rec };
  }

  /**
   * 评估某个候选选项与当前选择是否兼容
   * @param {string|null} catKey 候选所属类别；null 表示评估"当前已选配置"整体
   * @param {object} prod 候选商品（catKey 非 null 时）
   * @returns {Array} 问题列表（block 在前，warn 在后）
   */
  function evaluate(catKey, prod) {
    const sel = {};
    CATEGORIES.forEach((c) => { sel[c.key] = c.key === catKey ? prod : getById(c.key, selection[c.key]); });

    const issues = [];
    RULES.forEach((r) => {
      // 评估候选时只看与它相关的规则；评估整体时看全部
      if (catKey && !r.cats.includes(catKey)) return;
      const a = sel[r.cats[0]], b = sel[r.cats[1]];
      if (!a || !b) return;
      const res = r.check(a, b);
      if (res && res.level !== 'ok') issues.push(res);
    });
    const w = wattRule(sel);
    if (w && w.level !== 'ok') issues.push(w);
    return issues;
  }

  /* ---------- 渲染：单个商品行 ---------- */
  function renderRow(cat, p) {
    const selected = selection[cat.key] === p.id;
    const issues = selected ? [] : evaluate(cat.key, p);
    const blocked = issues.some((i) => i.level === 'block');
    const warned = !blocked && issues.length > 0;

    const cls = ['prod-row', selected ? 'selected' : '', blocked ? 'disabled' : '', warned ? 'has-warn' : ''].filter(Boolean).join(' ');
    const title = blocked ? `⛔ ${issues.filter((i) => i.level === 'block').map((i) => i.text).join('；')}` : '';
    const status = blocked
      ? `<div class="prod-status bad">⛔ ${esc(issues.find((i) => i.level === 'block').text)}</div>`
      : (warned ? `<div class="prod-status warn">⚠️ ${esc(issues[0].text)}</div>` : '');

    return { html: `
        <div class="${cls}" data-cat="${cat.key}" data-id="${p.id}"${title ? ` title="${esc(title)}"` : ''}>
          <div class="prod-main">
            <span class="prod-name">
              ${esc(p.name)}
              ${(p.tags || []).map((t) => `<span class="tag-inline">${esc(t)}</span>`).join('')}
            </span>
            <span class="prod-right">
              <span class="prod-price">${fmtPrice(p.price)}</span>
              ${selected ? '<span class="prod-check">✓ 已选</span>' : ''}
            </span>
          </div>
          <div class="prod-desc">${esc(p.desc)}</div>
          ${status}
        </div>`, blocked };
  }

  /* ---------- 渲染：某个类目的分组折叠列表 ---------- */
  function renderPicker(cat) {
    const items = (products[cat.key] || []).slice().sort((a, b) => a.price - b.price);

    // 按预定义顺序分组，未知组追加到最后
    const orders = GROUP_ORDER[cat.key] || [];
    const groupNames = [...new Set(items.map((p) => p.group))];
    groupNames.sort((x, y) => {
      const ix = orders.indexOf(x), iy = orders.indexOf(y);
      return (ix === -1 ? 999 : ix) - (iy === -1 ? 999 : iy);
    });

    let disabledCount = 0;
    const groupsHtml = groupNames.map((g) => {
      const gItems = items.filter((p) => p.group === g);
      const rows = gItems.map((p) => renderRow(cat, p));
      const okCount = rows.filter((r) => !r.blocked).length;
      disabledCount += rows.length - okCount;
      const hasSelected = gItems.some((p) => p.id === selection[cat.key]);
      const isOpen = openGroups.has(cat.key + ':' + g) || hasSelected;
      const gIcon = GROUP_ICON[g] || '🔌';

      return `
        <details class="prod-group"${isOpen ? ' open' : ''} data-g="${esc(g)}">
          <summary>
            <span class="grp-name">${gIcon} ${esc(g)}</span>
            <span class="grp-count">${okCount}/${gItems.length} 款能装${hasSelected ? ' · 已选 1 款' : ''}</span>
          </summary>
          <div class="prod-list">${rows.map((r) => r.html).join('')}</div>
        </details>`;
    }).join('');

    const hint = disabledCount > 0
      ? `<div class="disabled-hint">🚫 当前配置下有 ${disabledCount} 个不兼容选项已被禁用（灰色项），悬停或点开查看原因</div>`
      : (items.length > 4 ? `<div class="disabled-hint">✅ 当前 ${items.length} 个选项全部能装</div>` : '');

    return `
      <div class="picker" data-cat="${cat.key}">
        <div class="picker-head">
          <div class="t"><span class="icon">${cat.icon}</span>${cat.label}</div>
          <div class="picked" id="picked-${cat.key}"></div>
        </div>
        ${groupsHtml}
        ${hint}
      </div>`;
  }

  /* ---------- 渲染：右侧汇总面板 ---------- */
  function renderSummary() {
    // 各类目已选行 + 价格
    const rowsHtml = CATEGORIES.map((cat) => {
      const p = getById(cat.key, selection[cat.key]);
      const picked = document.getElementById('picked-' + cat.key);
      if (picked) {
        picked.innerHTML = p
          ? `${esc(p.name)} <div class="price">${fmtPrice(p.price)}</div>`
          : '<span style="color:var(--text-soft)">未选择</span>';
      }
      return p ? `<div class="total-row"><span>${cat.icon} ${cat.label}</span><span class="v">${fmtPrice(p.price)}</span></div>` : '';
    }).filter(Boolean).join('');

    const totalPrice = CATEGORIES.reduce(
      (sum, cat) => sum + (getById(cat.key, selection[cat.key]) ? getById(cat.key, selection[cat.key]).price : 0), 0);
    const count = CATEGORIES.filter((c) => selection[c.key]).length;

    $('#summary-rows').innerHTML = rowsHtml +
      `<div class="total-row main"><span>💰 总价（${count}/8 项）</span><span class="v">${fmtPrice(totalPrice)}</span></div>`;

    // 功耗与电源
    const sel = {};
    CATEGORIES.forEach((c) => { sel[c.key] = getById(c.key, selection[c.key]); });
    const cpu = sel.cpu, gpu = sel.gpu, psu = sel.psu;
    const totalWatt = (cpu ? cpu.tdp : 0) + (gpu ? gpu.tdp : 0) + ((cpu || gpu) ? BASE_POWER : 0);
    const need = totalWatt * 1.5;
    $('#watt-label').textContent = totalWatt > 0 ? `整机参考功耗：约 ${totalWatt}W` : '整机功耗：——';
    $('#psu-label').textContent = psu ? `电源：${psu.wattage}W（建议 ≥${Math.ceil(need / 50) * 50}W）` : '电源：未选';

    const fill = $('#watt-fill');
    if (psu && totalWatt > 0) {
      const pct = Math.min(100, (psu.wattage / need) * 100);
      fill.style.width = pct + '%';
      fill.classList.toggle('over', psu.wattage < need);
      $('#psu-advice').innerHTML = psu.wattage >= need
        ? '✔️ 余量充足，负载下电源更安静省电，也为未来升级留了空间。'
        : '⚠️ 余量不足，高负载可能死机重启，建议换更大的电源。';
    } else {
      fill.style.width = '0%';
      $('#psu-advice').textContent = '选择 CPU、显卡与电源后自动评估。';
    }

    // 兼容性：评估当前整体配置
    const list = $('#compat-list');
    if (count === 0) {
      list.innerHTML = '<div class="compat-item warn">👆 先选择配件，自动开始检查</div>';
      return;
    }
    const issues = evaluate(null);
    if (issues.length === 0) {
      const pairs = RULES
        .map((r) => { const a = sel[r.cats[0]], b = sel[r.cats[1]]; return (a && b) ? r.check(a, b) : null; })
        .filter((res) => res && res.level === 'ok');
      list.innerHTML = pairs.map((r) => `<div class="compat-item ok">✅ ${esc(r.text)}</div>`).join('') +
        (count === CATEGORIES.length
          ? '<div class="compat-item ok">🎉 八项配件全部就绪且互相兼容，可以下单 / 动手装机了！</div>'
          : '<div class="compat-item warn">🛒 已选部分暂无不兼容项，继续补齐其它配件吧</div>');
    } else {
      list.innerHTML = issues.map((i) =>
        `<div class="compat-item ${i.level === 'block' ? 'bad' : 'warn'}">${i.level === 'block' ? '⛔' : '⚠️'} ${esc(i.text)}</div>`).join('');
    }
  }

  function renderAll() {
    pickerList.innerHTML = CATEGORIES.map(renderPicker).join('');
    renderSummary();

    // 监听分组展开/折叠，记住用户手动开合的状态
    pickerList.querySelectorAll('details.prod-group').forEach((det) => {
      det.addEventListener('toggle', () => {
        const key = det.closest('.picker').dataset.cat + ':' + det.dataset.g;
        if (det.open) openGroups.add(key); else openGroups.delete(key);
      });
    });
  }

  /* ---------- 参考配置 ---------- */
  function renderPresets() {
    presetRow.innerHTML = (presets || []).map((p) =>
      `<button class="btn btn-ghost btn-sm" data-preset="${p.id}">⚡ ${esc(p.name)} · ${esc(p.budget)}</button>`).join('');

    presetRow.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-preset]');
      if (!btn) return;
      const preset = presets.find((p) => p.id === btn.dataset.preset);
      if (!preset) return;
      CATEGORIES.forEach((cat) => { selection[cat.key] = preset[cat.key]; });
      renderAll();
      showToast(`已载入「${preset.name}」参考配置`);
    });
  }

  /* ---------- 保存 / 读取 / 重置 ---------- */
  function saveBuild() {
    const count = CATEGORIES.filter((c) => selection[c.key]).length;
    if (count === 0) { showToast('还没选择任何配件哦 😅'); return; }
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(selection));
      showToast(`💾 配置单已保存（${count}/8 项）`);
    } catch (e) { showToast('⚠️ 保存失败：浏览器不支持本地存储'); }
  }

  function loadBuild() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      CATEGORIES.forEach((cat) => {
        if (saved[cat.key] && getById(cat.key, saved[cat.key])) selection[cat.key] = saved[cat.key];
      });
    } catch (e) { /* 忽略损坏数据 */ }
  }

  function resetBuild() {
    CATEGORIES.forEach((cat) => { selection[cat.key] = null; });
    renderAll();
    showToast('↺ 已重置为空白配置');
  }

  /* ---------- 启动 ---------- */
  async function loadData() {
    try {
      const res = await fetch('/api/parts');
      if (!res.ok) throw new Error('状态码 ' + res.status);
      return (await res.json());
    } catch (err) {
      // 纯静态部署回退：使用打包进前端的离线数据（public/js/parts-data.js）
      if (window.__PARTS_DATA__) {
        console.info('[装机小站] 使用离线配件数据（静态部署模式）');
        return window.__PARTS_DATA__;
      }
      pickerList.innerHTML = '';
      errBox.style.display = 'block';
      errBox.textContent = '⚠️ 配件数据加载失败：' + err.message + '（请确认服务器正在运行：node server.js）';
      return null;
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    $('#btn-save').addEventListener('click', saveBuild);
    $('#btn-reset').addEventListener('click', resetBuild);

    const data = await loadData();
    if (!data) return;
    products = data.products;
    presets = data.presets;

    renderPresets();

    // 事件委托：点击选项行（details 的展开/折叠浏览器原生处理，无需管）
    pickerList.addEventListener('click', (e) => {
      const row = e.target.closest('.prod-row');
      if (!row) return; // 点到 summary 或空白处：交给浏览器折叠展开
      if (row.classList.contains('disabled')) {
        showToast('⛔ 这配件与当前配置不兼容，已被禁用');
        return;
      }
      selection[row.dataset.cat] = row.dataset.id;
      renderAll();
    });

    // URL 哈希快捷载入预设：/builder.html#preset-gaming
    const hash = location.hash.replace('#preset-', '');
    const auto = (presets || []).find((p) => p.id === hash);
    if (auto) {
      CATEGORIES.forEach((cat) => { selection[cat.key] = auto[cat.key]; });
    } else {
      loadBuild();
    }

    renderAll();
  });
})();

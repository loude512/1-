#!/usr/bin/env node
/**
 * 同步脚本：把 data/parts.json 转成 public/js/parts-data.js
 * 这样网站即使部署到「纯静态托管」（GitHub Pages / Vercel / Cloudflare Pages 等，
 * 没有后端服务器）也能完整运行；本地开发时前端仍优先使用服务器的 /api/parts 接口。
 *
 * 用法：node scripts/sync-data.js   （或 npm run sync-data）
 * 每次修改 data/parts.json 后重新运行一次即可。
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'parts.json');
const DST = path.join(ROOT, 'public', 'js', 'parts-data.js');

try {
  const json = fs.readFileSync(SRC, 'utf-8');
  // 顺手校验 JSON 合法性
  JSON.parse(json);
  const banner = `/* 自动生成：请勿手动修改。由 data/parts.json 经 scripts/sync-data.js 同步。\\n * 纯静态部署时的离线数据副本；本地开发优先使用服务器 API /api/parts。 */`;
  fs.writeFileSync(DST, `${banner}\nwindow.__PARTS_DATA__ = ${json.trim()};\n`, 'utf-8');
  console.log('✅ 已同步：data/parts.json -> public/js/parts-data.js (' + fs.statSync(DST).size + ' bytes)');
} catch (err) {
  console.error('❌ 同步失败：', err.message);
  process.exit(1);
}

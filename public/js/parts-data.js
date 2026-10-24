/* 自动生成：请勿手动修改。由 data/parts.json 经 scripts/sync-data.js 同步。\n * 纯静态部署时的离线数据副本；本地开发优先使用服务器 API /api/parts。 */
window.__PARTS_DATA__ = {
  "meta": {
    "title": "配件数据库",
    "updated": "2026-10",
    "description": "本网站的全部配件教学内容与配置单商品数据"
  },
  "components": [
    {
      "id": "cpu",
      "name": "CPU（中央处理器）",
      "icon": "🧠",
      "tagline": "电脑的“大脑”，负责所有运算与调度",
      "role": "CPU 决定了电脑的整体运算速度。你打开的每一个程序、每一帧游戏画面，都要经过 CPU 计算。它通常安装在主板的中央，被散热器压在下方。",
      "specs": [
        {
          "label": "核心数 / 线程数",
          "desc": "核心像工人的数量，线程像每人能同时干的活。日常办公 6 核够用，游戏推荐 6–8 核，视频剪辑等生产力建议 8 核以上。"
        },
        {
          "label": "主频 / 睿频",
          "desc": "运算的“节奏”，单位 GHz。基础频率决定日常速度，睿频是高负载时自动冲刺的最高速度，单核频率对游戏影响最明显。"
        },
        {
          "label": "插槽（平台）",
          "desc": "CPU 的物理接口，必须与主板插槽一致。Intel 常见 LGA1700，AMD 常见 AM5。买错就装不上去！"
        },
        {
          "label": "TDP 热设计功耗",
          "desc": "发热量的参考值，单位 W。TDP 越高，需要的散热器与电源越强。"
        },
        {
          "label": "核显",
          "desc": "CPU 内置的显卡。带核显的 CPU（如 i5-13400）不装独显也能亮屏；后缀带 F 的 Intel CPU 无核显，必须配独立显卡。"
        }
      ],
      "tips": [
        "盒装 CPU 通常附带原装散热器，散装更便宜但需自备散热器与硅脂。",
        "安装 CPU 时注意三角形对准标记，轻轻放下拉杆，切勿用力按压针脚（Intel 插槽针脚在主板上，AMD 在 CPU 上）。",
        "选购先看用途与预算，再对照主板插槽，不要盲目追求核心数。",
        "Intel 与 AMD 的 F 后缀含义相同——无核显（i5-13400F、R5 7500F 都是），不配独立显卡连机器都点亮不了。"
      ],
      "brands": [
        "Intel（酷睿系列）",
        "AMD（锐龙系列）"
      ]
    },
    {
      "id": "motherboard",
      "name": "主板（Motherboard）",
      "icon": "🏘️",
      "tagline": "电脑的“城市”，所有配件都连接在它上面",
      "role": "主板是连接 CPU、内存、显卡、硬盘、电源的中枢。它的接口规格决定了你能用哪些配件、能扩展多少设备。",
      "specs": [
        {
          "label": "芯片组",
          "desc": "主板的“级别”。Intel 的 B760/H770、AMD 的 B650/X670 等。字母越靠后功能越强，B 系列性价比最高，适合大多数人。"
        },
        {
          "label": "插槽",
          "desc": "必须与 CPU 插槽一致（LGA1700 或 AM5），否则无法安装。"
        },
        {
          "label": "版型",
          "desc": "ATX（大）、M-ATX（中）、ITX（小）。大主板接口多，小主板节省空间，需机箱支持对应尺寸。"
        },
        {
          "label": "内存插槽与类型",
          "desc": "注意支持 DDR4 还是 DDR5，两者不通用；插槽数量决定最大容量与双通道扩展空间。"
        },
        {
          "label": "M.2 / SATA 接口",
          "desc": "M.2 接口插高速 NVMe 固态硬盘，SATA 接机械硬盘或老款 SSD。接口数量决定你能装几块硬盘。"
        }
      ],
      "tips": [
        "主板决定了整台电脑的“上限”：接口、扩展性、超频能力都看它。",
        "装主板前先把机箱后面的挡板（I/O 挡板）装好，装完主板就不好装了。",
        "主板的供电相数影响高功耗 CPU 的稳定性，但普通用户不必过度纠结。"
      ],
      "brands": [
        "华硕（ASUS）",
        "微星（MSI）",
        "技嘉（GIGABYTE）",
        "华擎（ASRock）"
      ]
    },
    {
      "id": "gpu",
      "name": "显卡（GPU）",
      "icon": "🎮",
      "tagline": "电脑的“画家”，专门处理图形与游戏画面",
      "role": "显卡决定游戏帧数、3D 渲染、视频剪辑和 AI 计算的速度。对游戏玩家来说，它通常是最值得投入预算的配件。",
      "specs": [
        {
          "label": "GPU 核心型号",
          "desc": "决定性能档次，如 RTX 4060 / RTX 4070 / RX 7600 等。数字越大性能越强，同代内看后两位。"
        },
        {
          "label": "显存（VRAM）",
          "desc": "显卡自己的“内存”。1080P 游戏 8GB 够用，2K 建议 12GB 以上，AI 绘图显存越多越好。"
        },
        {
          "label": "TDP 功耗",
          "desc": "显卡是机箱里最耗电的配件之一，直接决定电源功率的选择。"
        },
        {
          "label": "尺寸与厚度",
          "desc": "显卡很长很厚，买前务必确认机箱的“显卡限长”和厚度是否兼容，否则装不进去。"
        }
      ],
      "tips": [
        "办公、看视频、轻度游戏可以用 CPU 核显，不必买独立显卡。",
        "NVIDIA 显卡支持 DLSS 与 CUDA（AI、生产力生态好）；AMD 显卡传统光栅性价比高。",
        "电源一定要留有余量：显卡瞬时功耗可能远超标称 TDP。",
        "二手矿卡水很深：P106 / RX580 等便宜寿命看脸，新手认准支持个人送保的渠道；P106 干脆没有显示输出，必须用带核显的 CPU，显示器要插在主板上。"
      ],
      "brands": [
        "NVIDIA（RTX 系列）",
        "AMD（Radeon 系列）",
        "Intel（Arc 系列）"
      ]
    },
    {
      "id": "ram",
      "name": "内存（RAM）",
      "icon": "⚡",
      "tagline": "电脑的“工作台”，暂时存放正在用的数据",
      "role": "内存容量决定了你能同时开多少程序而不卡顿。它是一条条插在主板上的小长条，断电后数据会清空，所以要配合硬盘保存文件。",
      "specs": [
        {
          "label": "容量",
          "desc": "日常办公 8GB 起步、16GB 主流；大型游戏 16GB 起步、32GB 更从容；视频剪辑与虚拟机建议 32GB 以上。"
        },
        {
          "label": "代数（DDR4 / DDR5）",
          "desc": "必须与主板支持的类型一致，DDR5 更新更快但价格略高，两者完全不通用。"
        },
        {
          "label": "频率",
          "desc": "如 DDR5-6000，单位 MHz。同代内频率越高越快，但差距远不如容量明显——先保容量，再追频率。"
        },
        {
          "label": "双通道",
          "desc": "两根内存组双通道比单根同容量快约 10–20%。所以“8GB × 2”优于“16GB 单根”！"
        }
      ],
      "tips": [
        "内存条插主板第 2、4 槽（A2/B2）可组双通道，大多数主板这样插最优。",
        "安装时对准防呆缺口，听到“咔哒”声即插紧。",
        "RGB 灯效不影响性能，按预算和机箱颜值需求选择。"
      ],
      "brands": [
        "金士顿（Kingston）",
        "芝奇（G.Skill）",
        "海盗船（Corsair）",
        "威刚（ADATA）"
      ]
    },
    {
      "id": "storage",
      "name": "硬盘（存储）",
      "icon": "💾",
      "tagline": "电脑的“仓库”，永久保存文件与系统",
      "role": "系统、游戏、照片、电影全部存在硬盘里。硬盘的速度直接影响开机速度和游戏加载时间。固态硬盘（SSD）比机械硬盘（HDD）快 5 倍以上。",
      "specs": [
        {
          "label": "NVMe M.2 固态",
          "desc": "目前的主流首选，读写可达 3000–7000MB/s，开机几秒钟，比 SATA 快一个时代。插主板 M.2 插槽。"
        },
        {
          "label": "SATA 固态",
          "desc": "速度约 550MB/s，适合给老电脑升级或做仓库盘。"
        },
        {
          "label": "机械硬盘 HDD",
          "desc": "速度慢但容量便宜，适合存大量电影、照片、冷数据。建议“小容量 NVMe 装系统 + 大容量 HDD 存资料”组合。"
        },
        {
          "label": "容量建议",
          "desc": "系统盘 512GB 起步；游戏玩家 1TB 起步（现在 3A 游戏动辄 100GB 以上）；纯生产力可上 2TB。"
        }
      ],
      "tips": [
        "M.2 固态有 NVMe 与 SATA 两种协议，买前确认主板 M.2 插槽支持哪种（现在大多支持 NVMe）。",
        "系统一定要装在速度最快的盘上，体验差距最大。",
        " 重要数据记得备份！硬盘有价，数据无价。"
      ],
      "brands": [
        "三星（Samsung）",
        "西部数据（WD）",
        "铠侠（Kioxia）",
        "致态（YoByte）"
      ]
    },
    {
      "id": "psu",
      "name": "电源（PSU）",
      "icon": "🔌",
      "tagline": "电脑的“心脏”，为所有配件输送电力",
      "role": "电源把市电转换成各配件需要的稳定直流电。电源功率不足或质量差，会导致死机、重启甚至损坏配件——它是最不该省钱的地方。",
      "specs": [
        {
          "label": "额定功率",
          "desc": "单位 W。电脑总功耗（CPU TDP + 显卡 TDP + 其他约 50W）乘 1.5–2 倍是推荐功率。如总功耗 400W，选 650W 最稳妥。"
        },
        {
          "label": "转换效率认证",
          "desc": "80PLUS 白牌 / 铜牌 / 金牌 / 白金 / 钛金。金牌性价比最高，转换效率约 90%，更省电、发热更小。"
        },
        {
          "label": "模组类型",
          "desc": "非模组线材全部焊死；半模组可拆部分线；全模组所有线可拔。全模组理线最清爽、机箱最整洁。"
        },
        {
          "label": "尺寸",
          "desc": "标准 ATX 与小尺寸 SFX。小机箱（ITX）通常需要 SFX 电源，买前确认。"
        }
      ],
      "tips": [
        "电源功率宁大勿小，大功率电源在低负载下反而更安静、更省电。",
        "杂牌电源是炸弹，只买知名品牌，省钱请从别处省。",
        "独立显卡的供电线（PCIe 8pin / 16pin）要插牢，新显卡注意 12VHPWR 接口是否插紧。"
      ],
      "brands": [
        "海韵（Seasonic）",
        "振华（Super Flower）",
        "海盗船（Corsair）",
        "鑫谷",
        "全汉（FSP）"
      ]
    },
    {
      "id": "case",
      "name": "机箱（Case）",
      "icon": "🏠",
      "tagline": "电脑的“房子”，装载并保护所有配件",
      "role": "机箱不仅决定外观颜值，还影响散热风道与硬件兼容性。再好的配置，机箱不兼容也装不进去。",
      "specs": [
        {
          "label": "主板兼容",
          "desc": "标注支持 ATX / M-ATX / ITX。大机箱一般向下兼容小板，小机箱装不了大板。"
        },
        {
          "label": "显卡限长",
          "desc": "机箱能容纳的最长显卡长度，如 320mm、360mm。买显卡前必须核对！"
        },
        {
          "label": "散热器限高 / 水冷位",
          "desc": "风冷看“CPU 散热器限高”（如 160mm）；水冷看机箱顶部/前部支持的冷排尺寸（240/280/360mm）。"
        },
        {
          "label": "风道设计",
          "desc": "前进风、后/上出风是经典风道。机箱风扇位越多、网孔越多，散热越好，但噪音与灰尘也需留意。"
        }
      ],
      "tips": [
        "“闷罐机箱”会让高端配置过热降频，散热优先于纯外观。",
        "装机前把机箱里的螺丝包收好，不同孔位用不同螺丝。",
        "理线好的机箱不仅好看，风道也更通畅，温度更低。"
      ],
      "brands": [
        "联力（LIAN LI）",
        "追风者（Phanteks）",
        "安钛克（Antec）",
        "先马",
        "酷冷至尊"
      ]
    },
    {
      "id": "cooler",
      "name": "CPU 散热器",
      "icon": "❄️",
      "tagline": "给 CPU “降温”的空调，压制发热保性能",
      "role": "CPU 满负荷工作时非常热，散热器把热量带走，防止 CPU 过热降频甚至损坏。盒装 CPU 附带的散热器能凑合用，但好散热器能让 CPU 更安静、更稳定地全速运行。",
      "specs": [
        {
          "label": "风冷",
          "desc": "金属塔 + 风扇，安全可靠、寿命长。百元级单塔满足中端 CPU，200 元级双塔可压 i7/R7。"
        },
        {
          "label": "水冷（一体式 AIO）",
          "desc": "冷头 + 水管 + 冷排 + 风扇，散热上限更高、颜值好。240 水冷≈中端风冷，360 水冷压制顶级 CPU。"
        },
        {
          "label": "扣具兼容",
          "desc": "散热器必须支持 CPU 的插槽（LGA1700 / AM5 等）。多数散热器附多种扣具，买前核对。"
        },
        {
          "label": "TDP 压制能力",
          "desc": "散热器的压制 TDP 应高于 CPU 的 TDP，才能保证满载不过热。"
        }
      ],
      "tips": [
        "风冷足够 90% 的用户；追求静音、颜值或顶级配置再考虑水冷。",
        "散热器与机箱限高、水冷与机箱冷排位必须同时核对。",
        "安装前在 CPU 上涂好硅脂（一小颗黄豆大小，居中），散热器底座会自然压平。",
        "安装顺序：先装 CPU → 内存 → M.2 → 散热器，装主板进机箱前完成更顺手。"
      ],
      "brands": [
        "利民（Thermalright）",
        "猫头鹰（Noctua）",
        "九州风神（DeepCool）",
        "酷冷至尊"
      ]
    },
    {
      "id": "monitor",
      "name": "显示器（选配）",
      "icon": "🖥️",
      "tagline": "与人眼交互的窗口，决定你“看到”的品质",
      "role": "电脑再快，画面也要通过显示器呈现。分辨率、刷新率、色域直接决定游戏与办公体验，是容易被忽视的重要一环。",
      "specs": [
        {
          "label": "分辨率",
          "desc": "1080P（1920×1080）入门、2K（2560×1440）主流甜点、4K 影视级。分辨率越高画面越细腻，但也越吃显卡性能。"
        },
        {
          "label": "刷新率",
          "desc": "60Hz 办公够用；电竞游戏 144Hz / 165Hz / 180Hz 起步；FPS 玩家可上 240Hz+。高刷用过就回不去了。"
        },
        {
          "label": "面板类型",
          "desc": "IPS 色彩好、可视角度大（主流首选）；VA 对比度高；FAST TN 响应最快（电竞）。"
        },
        {
          "label": "尺寸与比例",
          "desc": "24.5 英寸配 1080P、27 英寸配 2K、32 英寸配 4K 是黄金搭配，点距最舒适。"
        }
      ],
      "tips": [
        "2K 高刷显示器是当下甜点，搭配 RTX 4060Ti / 4070 级别显卡体验最佳。",
        "注意显示器的接口：高刷需要 HDMI 2.1 或 DisplayPort 1.4 接口才能跑满。",
        "有设计需求请关注色域（99% sRGB 起步）与色准（ΔE < 3）。"
      ],
      "brands": [
        "LG",
        "戴尔（DELL）",
        "小米 / Redmi",
        "AOC",
        "泰坦军团"
      ]
    }
  ],
  "products": {
    "cpu": [
      {
        "id": "cpu-7",
        "name": "Intel 酷睿 i3-10100F",
        "price": 450,
        "tdp": 65,
        "socket": "LGA1200",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "Intel 10代"
        ],
        "desc": "四核八线程入门神 U，10 代老平台亮机首选（无核显，需配独显或选 i5-10400）",
        "group": "Intel"
      },
      {
        "id": "cpu-9",
        "name": "AMD 锐龙 R5 5600",
        "price": 750,
        "tdp": 65,
        "socket": "AM4",
        "igpu": false,
        "coolerIncluded": true,
        "tags": [
          "AMD 5000系"
        ],
        "desc": "AM4 平台性价比之王，B550 主板老当益壮（无核显，需配独显）",
        "group": "AMD"
      },
      {
        "id": "cpu-8",
        "name": "Intel 酷睿 i5-12400",
        "price": 950,
        "tdp": 65,
        "socket": "LGA1700",
        "igpu": true,
        "coolerIncluded": true,
        "tags": [
          "Intel 12代"
        ],
        "desc": "12 代甜品，带 UHD 730 核显，不配独显也能日常办公",
        "group": "Intel"
      },
      {
        "id": "cpu-3",
        "name": "AMD 锐龙 R5 7500F",
        "price": 1099,
        "tdp": 65,
        "socket": "AM5",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "AMD 7000系"
        ],
        "desc": "6 核 12 线程，AM5 平台的游戏性价比神 U（无核显，需配独显）",
        "group": "AMD"
      },
      {
        "id": "cpu-1",
        "name": "Intel 酷睿 i5-13400F",
        "price": 1199,
        "tdp": 65,
        "socket": "LGA1700",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "Intel 13代"
        ],
        "desc": "10 核 16 线程，主流游戏与办公的高性价比之选（无核显，需配独显）",
        "group": "Intel"
      },
      {
        "id": "cpu-6",
        "name": "AMD 锐龙 R5 8600G",
        "price": 1299,
        "tdp": 65,
        "socket": "AM5",
        "igpu": true,
        "coolerIncluded": true,
        "tags": [
          "AMD 8000系"
        ],
        "desc": "Radeon 760M 核显强劲，不配独显也能网游办公，紧凑主机首选",
        "group": "AMD"
      },
      {
        "id": "cpu-2",
        "name": "Intel 酷睿 i5-14600KF",
        "price": 1799,
        "tdp": 125,
        "socket": "LGA1700",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "Intel 14代"
        ],
        "desc": "14 核 20 线程，可超频的进阶游戏 CPU，建议好散热",
        "group": "Intel"
      },
      {
        "id": "cpu-10",
        "name": "AMD 锐龙 R7 7800X3D",
        "price": 2499,
        "tdp": 120,
        "socket": "AM5",
        "igpu": true,
        "coolerIncluded": false,
        "tags": [
          "AMD 7000系"
        ],
        "desc": "游戏神 U！3D V-Cache 大缓存技术，游戏帧数遥遥领先",
        "group": "AMD"
      },
      {
        "id": "cpu-4",
        "name": "AMD 锐龙 R7 9700X",
        "price": 2499,
        "tdp": 65,
        "socket": "AM5",
        "igpu": true,
        "coolerIncluded": true,
        "tags": [
          "AMD 9000系"
        ],
        "desc": "8 核 16 线程，新一代 Zen5，游戏与生产力兼修（自带核显与散热器）",
        "group": "AMD"
      },
      {
        "id": "cpu-5",
        "name": "Intel 酷睿 i7-14700KF",
        "price": 2799,
        "tdp": 125,
        "socket": "LGA1700",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "Intel 14代"
        ],
        "desc": "20 核 28 线程，高端游戏与剪辑全能（功耗较高，需强散热）",
        "group": "Intel"
      },
      {
        "id": "cpu-11",
        "name": "Intel 酷睿 i9-14900KF",
        "price": 3799,
        "tdp": 125,
        "socket": "LGA1700",
        "igpu": false,
        "coolerIncluded": false,
        "tags": [
          "Intel 14代"
        ],
        "desc": "14 代旗舰 i9，消费级单核王者（功耗爆炸，建议 360 水冷压制）",
        "group": "Intel"
      }
    ],
    "motherboard": [
      {
        "id": "mb-1",
        "name": "微星 B760M-A WIFI",
        "price": 999,
        "socket": "LGA1700",
        "memoryType": "DDR5",
        "formFactor": "M-ATX",
        "m2Slots": 2,
        "desc": "B760 高人气 M-ATX，DDR5 + WIFI，适合 most 主流配置",
        "group": "Intel 平台"
      },
      {
        "id": "mb-2",
        "name": "华硕 TUF B760M PLUS",
        "price": 1249,
        "socket": "LGA1700",
        "memoryType": "DDR5",
        "formFactor": "M-ATX",
        "m2Slots": 2,
        "desc": "军规供电，稳定耐用，B760 进阶之选",
        "group": "Intel 平台"
      },
      {
        "id": "mb-3",
        "name": "微星 B650M MORTAR WiFi",
        "price": 1199,
        "socket": "AM5",
        "memoryType": "DDR5",
        "formFactor": "M-ATX",
        "m2Slots": 2,
        "desc": "AM5 平台口碑 M-ATX，迫击炮供电扎实",
        "group": "AMD 平台"
      },
      {
        "id": "mb-4",
        "name": "华硕 ROG STRIX B650E-A",
        "price": 2099,
        "socket": "AM5",
        "memoryType": "DDR5",
        "formFactor": "ATX",
        "m2Slots": 3,
        "desc": "B650E 高端 ATX，PCIe 5.0 显卡槽，扩展拉满",
        "group": "AMD 平台"
      },
      {
        "id": "mb-5",
        "name": "华擎 B760M Pro RS",
        "price": 849,
        "socket": "LGA1700",
        "memoryType": "DDR4",
        "formFactor": "M-ATX",
        "m2Slots": 2,
        "desc": "DDR4 版经济型 B760，老平台升级更省钱",
        "group": "Intel 平台"
      },
      {
        "id": "mb-6",
        "name": "华硕 PRIME H410M-F",
        "price": 450,
        "socket": "LGA1200",
        "memoryType": "DDR4",
        "formFactor": "M-ATX",
        "m2Slots": 1,
        "desc": "10 代酷睿搭档，DDR4 经济平台，带 i3-10100 性价比拉满",
        "group": "Intel 平台"
      },
      {
        "id": "mb-7",
        "name": "微星 B550M MORTAR",
        "price": 700,
        "socket": "AM4",
        "memoryType": "DDR4",
        "formFactor": "M-ATX",
        "m2Slots": 2,
        "desc": "AM4 平台口碑神板，R5 5600 的绝配",
        "group": "AMD 平台"
      }
    ],
    "gpu": [
      {
        "id": "gpu-0",
        "name": "不装独立显卡（核显方案）",
        "price": 0,
        "tdp": 0,
        "length": 0,
        "group": "核显方案",
        "tags": [],
        "desc": "办公 / 影音 / 网游足够；CPU 必须带核显才能点亮"
      },
      {
        "id": "gpu-6",
        "name": "GT 610 1GB",
        "price": 99,
        "tdp": 30,
        "length": 170,
        "group": "亮机卡",
        "tags": [
          "亮机"
        ],
        "desc": "电子垃圾的代名词，99 元的亮机卡——能点亮，别指望打游戏"
      },
      {
        "id": "gpu-7",
        "name": "P106-100 6GB",
        "price": 100,
        "tdp": 130,
        "length": 240,
        "group": "亮机卡",
        "tags": [
          "矿卡",
          "无显示输出"
        ],
        "noOutput": true,
        "desc": "性能约等于 GTX1060 的矿卡，但完全没有显示输出接口，必须配带核显的 CPU、显示器插主板"
      },
      {
        "id": "gpu-8",
        "name": "GTX 750Ti 2GB",
        "price": 250,
        "tdp": 60,
        "length": 150,
        "group": "亮机卡",
        "tags": [
          "神卡"
        ],
        "desc": "六年钉子户神卡，连 6pin 外供电都不用插"
      },
      {
        "id": "gpu-30",
        "name": "GTX 960 2GB",
        "price": 299,
        "tdp": 120,
        "length": 240,
        "group": "GTX 9系",
        "tags": [
          "古董"
        ],
        "desc": "GTX 9 系入门，老电脑升级过渡用"
      },
      {
        "id": "gpu-9",
        "name": "GTX 1050Ti 4GB",
        "price": 350,
        "tdp": 75,
        "length": 200,
        "group": "亮机卡",
        "tags": [
          "亮机"
        ],
        "desc": "免外供电的入门卡，网游与办公足够"
      },
      {
        "id": "gpu-14",
        "name": "AMD RX 580 2048SP 8GB",
        "price": 350,
        "tdp": 185,
        "length": 240,
        "group": "AMD",
        "tags": [
          "矿卡"
        ],
        "desc": "赫赫有名的矿渣之友，性能尚可，买的就是一个心跳"
      },
      {
        "id": "gpu-31",
        "name": "GTX 970 4GB",
        "price": 499,
        "tdp": 145,
        "length": 250,
        "group": "GTX 9系",
        "tags": [
          "古董"
        ],
        "desc": "一代神卡 970，电子古董收藏向"
      },
      {
        "id": "gpu-10",
        "name": "GTX 1060 6GB",
        "price": 500,
        "tdp": 120,
        "length": 250,
        "group": "GTX 10系",
        "tags": [
          "矿卡"
        ],
        "desc": "一代神卡，Steam 硬件调查常青树，二手多为矿卡注意验货"
      },
      {
        "id": "gpu-28",
        "name": "GTX 1080 Ti 11GB",
        "price": 900,
        "tdp": 250,
        "length": 270,
        "group": "GTX 10系",
        "tags": [
          "神卡"
        ],
        "desc": "2017 年的卡皇，电子古董中的战斗机"
      },
      {
        "id": "gpu-11",
        "name": "GTX 1650 4GB",
        "price": 600,
        "tdp": 75,
        "length": 200,
        "group": "GTX 16系",
        "tags": [
          "亮机"
        ],
        "desc": "16 系入门，75W 不用外供电，品牌机好伴侣"
      },
      {
        "id": "gpu-12",
        "name": "GTX 1660 SUPER 6GB",
        "price": 750,
        "tdp": 125,
        "length": 230,
        "group": "GTX 16系",
        "tags": [],
        "desc": "1080P 常青树，没有光追，也没有烦恼"
      },
      {
        "id": "gpu-13",
        "name": "RTX 2060 6GB",
        "price": 900,
        "tdp": 160,
        "length": 230,
        "group": "RTX 20系",
        "tags": [],
        "desc": "光追 + DLSS 初代尝鲜，二手性价比之选"
      },
      {
        "id": "gpu-32",
        "name": "RTX 2070 8GB",
        "price": 1100,
        "tdp": 175,
        "length": 230,
        "group": "RTX 20系",
        "tags": [],
        "desc": "20 系中坚，1080P 高画质无压力"
      },
      {
        "id": "gpu-35",
        "name": "RTX 3050 Ti 4GB",
        "price": 1200,
        "tdp": 90,
        "length": 190,
        "group": "RTX 30系",
        "tags": [
          "亮机"
        ],
        "desc": "30 系入门亮机卡，功耗低、不怕矿（几乎没有矿）"
      },
      {
        "id": "gpu-36",
        "name": "RTX 3060 8GB",
        "price": 1300,
        "tdp": 170,
        "length": 240,
        "group": "RTX 30系",
        "tags": [],
        "desc": "3060 的 8GB 版，比 12GB 版便宜几百，中规中矩"
      },
      {
        "id": "gpu-24",
        "name": "AMD RX 6600 8GB",
        "price": 1300,
        "tdp": 132,
        "length": 200,
        "group": "AMD",
        "tags": [],
        "desc": "1080P A 卡性价比守门员"
      },
      {
        "id": "gpu-33",
        "name": "RTX 2070 SUPER 8GB",
        "price": 1400,
        "tdp": 215,
        "length": 240,
        "group": "RTX 20系",
        "tags": [],
        "desc": "2070 超级版，摸到 2080 的尾巴"
      },
      {
        "id": "gpu-34",
        "name": "RTX 2080 8GB",
        "price": 1700,
        "tdp": 215,
        "length": 260,
        "group": "RTX 20系",
        "tags": [],
        "desc": "曾经的 20 系旗舰，至今仍能打 2K"
      },
      {
        "id": "gpu-27",
        "name": "Intel Arc B580 12GB",
        "price": 2050,
        "tdp": 190,
        "length": 240,
        "group": "Intel",
        "tags": [],
        "desc": "Intel 终于能打的甜品卡，12GB 大显存性价比很高"
      },
      {
        "id": "gpu-4",
        "name": "AMD RX 7600 8GB",
        "price": 1899,
        "tdp": 170,
        "length": 240,
        "group": "AMD",
        "tags": [],
        "desc": "A 卡性价比之选，1080P 网游与 3A 通杀"
      },
      {
        "id": "gpu-15",
        "name": "RTX 3060 12GB",
        "price": 1500,
        "tdp": 170,
        "length": 245,
        "group": "RTX 30系",
        "tags": [],
        "desc": "12GB 大显存，AI 炼丹入门卡"
      },
      {
        "id": "gpu-16",
        "name": "RTX 3070 8GB",
        "price": 2000,
        "tdp": 220,
        "length": 245,
        "group": "RTX 30系",
        "tags": [],
        "desc": "2K 游戏主力，二手价格持续走低"
      },
      {
        "id": "gpu-25",
        "name": "AMD RX 6700 XT 12GB",
        "price": 2300,
        "tdp": 230,
        "length": 260,
        "group": "AMD",
        "tags": [],
        "desc": "2K 分辨率 A 卡中坚力量"
      },
      {
        "id": "gpu-1",
        "name": "RTX 4060 8GB",
        "price": 2299,
        "tdp": 115,
        "length": 245,
        "group": "RTX 40系",
        "tags": [],
        "desc": "1080P 高画质甜品卡，DLSS 3 加持"
      },
      {
        "id": "gpu-17",
        "name": "RTX 3080 10GB",
        "price": 2800,
        "tdp": 320,
        "length": 285,
        "group": "RTX 30系",
        "tags": [
          "矿卡"
        ],
        "desc": "曾经的旗舰，也是矿卡重灾区，认准支持个人送保的渠道"
      },
      {
        "id": "gpu-2",
        "name": "RTX 4060 Ti 8GB",
        "price": 2899,
        "tdp": 160,
        "length": 260,
        "group": "RTX 40系",
        "tags": [],
        "desc": "1080P 通吃 / 2K 入门，支持 DLSS 3 帧生成"
      },
      {
        "id": "gpu-39",
        "name": "RTX 5060 Ti 8GB",
        "price": 3199,
        "tdp": 180,
        "length": 240,
        "group": "RTX 50系",
        "tags": [],
        "desc": "50 系中端，2K 主力且功耗控制出色"
      },
      {
        "id": "gpu-3",
        "name": "RTX 4070 SUPER 12GB",
        "price": 4799,
        "tdp": 220,
        "length": 300,
        "group": "RTX 40系",
        "tags": [],
        "desc": "2K 高画质主力卡，可战部分 4K"
      },
      {
        "id": "gpu-18",
        "name": "RTX 3090 24GB",
        "price": 4500,
        "tdp": 350,
        "length": 336,
        "group": "RTX 30系",
        "tags": [
          "神卡"
        ],
        "desc": "90 系列元老！24GB 显存，平价 AI / 渲染神卡"
      },
      {
        "id": "gpu-37",
        "name": "RTX 5050 8GB",
        "price": 2099,
        "tdp": 130,
        "length": 220,
        "group": "RTX 50系",
        "tags": [
          "亮机"
        ],
        "desc": "50 系最便宜的一张，新装入门之选"
      },
      {
        "id": "gpu-38",
        "name": "RTX 5060 8GB",
        "price": 2699,
        "tdp": 145,
        "length": 220,
        "group": "RTX 50系",
        "tags": [],
        "desc": "50 系甜品，1080P 通吃、功耗极低"
      },
      {
        "id": "gpu-26",
        "name": "AMD RX 7900 XTX 24GB",
        "price": 6999,
        "tdp": 355,
        "length": 287,
        "group": "AMD",
        "tags": [],
        "desc": "A 卡旗舰，性能对标 RTX 4080 而价格更香"
      },
      {
        "id": "gpu-21",
        "name": "RTX 5070 Ti 16GB",
        "price": 6299,
        "tdp": 300,
        "length": 304,
        "group": "RTX 50系",
        "tags": [],
        "desc": "50 系新甜品，2K / 4K 通吃"
      },
      {
        "id": "gpu-20",
        "name": "RTX 4080 SUPER 16GB",
        "price": 7500,
        "tdp": 320,
        "length": 310,
        "group": "RTX 40系",
        "tags": [],
        "desc": "4K 门面守门员，高端全能"
      },
      {
        "id": "gpu-22",
        "name": "RTX 5080 16GB",
        "price": 8999,
        "tdp": 360,
        "length": 304,
        "group": "RTX 50系",
        "tags": [],
        "desc": "次世代旗舰，360W 依然能打"
      },
      {
        "id": "gpu-5",
        "name": "RTX 4090 D 24GB",
        "price": 13999,
        "tdp": 425,
        "length": 360,
        "group": "RTX 40系",
        "tags": [
          "卡皇"
        ],
        "desc": "90 系列中坚！4K / AI 生产力天花板（需 850W+ 大电源与大机箱）"
      },
      {
        "id": "gpu-23",
        "name": "RTX 5090 32GB",
        "price": 16499,
        "tdp": 575,
        "length": 345,
        "group": "RTX 50系",
        "tags": [
          "卡皇"
        ],
        "desc": "当代卡皇！575W 电老虎：必须 1000W 以上电源、限长 345mm+ 的大机箱"
      }
    ],
    "ram": [
      {
        "id": "ram-1",
        "name": "金士顿 FURY 16GB(8G×2) DDR5-6000",
        "price": 599,
        "type": "DDR5",
        "capacity": 16,
        "desc": "双通道 DDR5 主流频率，甜点容量",
        "group": "DDR5"
      },
      {
        "id": "ram-2",
        "name": "金士顿 FURY 32GB(16G×2) DDR5-6000",
        "price": 1099,
        "type": "DDR5",
        "capacity": 32,
        "desc": "游戏 + 剪辑从容不迫，战未来",
        "group": "DDR5"
      },
      {
        "id": "ram-3",
        "name": "威刚 XPG 16GB(8G×2) DDR4-3600",
        "price": 349,
        "type": "DDR4",
        "capacity": 16,
        "desc": "DDR4 平台高性价比双通道",
        "group": "DDR4"
      },
      {
        "id": "ram-4",
        "name": "芝奇焰锋戟 64GB(32G×2) DDR5-6000",
        "price": 2099,
        "type": "DDR5",
        "capacity": 64,
        "desc": "生产力神条，虚拟机 / AI / 剪辑随便造",
        "group": "DDR5"
      },
      {
        "id": "ram-5",
        "name": "威刚万紫千红 16GB(8G×2) DDR4-3200",
        "price": 249,
        "type": "DDR4",
        "capacity": 16,
        "desc": "AM4 / 10 代老平台搭档，便宜大碗的双通道",
        "group": "DDR4"
      }
    ],
    "storage": [
      {
        "id": "st-1",
        "name": "致态 TiPlus7100 1TB NVMe",
        "price": 549,
        "type": "NVMe SSD",
        "capacity": 1024,
        "desc": "国产之光，7000MB/s，系统 + 游戏全能",
        "group": "M.2 固态"
      },
      {
        "id": "st-2",
        "name": "三星 990 PRO 1TB NVMe",
        "price": 899,
        "type": "NVMe SSD",
        "capacity": 1024,
        "desc": "消费级 NVMe 天花板之一，顶级性能",
        "group": "M.2 固态"
      },
      {
        "id": "st-3",
        "name": "铠侠 RC20 2TB NVMe",
        "price": 799,
        "type": "NVMe SSD",
        "capacity": 2048,
        "desc": "大容量高性价比，游戏仓库盘",
        "group": "M.2 固态"
      },
      {
        "id": "st-4",
        "name": "西部数据 4TB 机械硬盘",
        "price": 699,
        "type": "HDD",
        "capacity": 4096,
        "desc": "大容量仓库盘，存电影 / 照片 / 冷数据（建议搭配固态做系统盘）",
        "group": "机械硬盘"
      }
    ],
    "psu": [
      {
        "id": "psu-1",
        "name": "利民 TG650 全模组 金牌 650W",
        "price": 399,
        "type": "ATX",
        "wattage": 650,
        "modular": "全模组",
        "rating": "金牌",
        "desc": "入门全模组金牌，主流配置稳妥之选",
        "group": "主流 650–850W"
      },
      {
        "id": "psu-2",
        "name": "振华 LEADEX VII 850W 金牌全模",
        "price": 799,
        "type": "ATX",
        "wattage": 850,
        "modular": "全模组",
        "rating": "金牌",
        "desc": "高端旗舰电源，ATX3.1，4090 也压得住",
        "group": "主流 650–850W"
      },
      {
        "id": "psu-3",
        "name": "鑫谷 GM750W 金牌全模组",
        "price": 499,
        "type": "ATX",
        "wattage": 750,
        "modular": "全模组",
        "rating": "金牌",
        "desc": "750W 高性价比，中高端配置的甜蜜点",
        "group": "主流 650–850W"
      },
      {
        "id": "psu-4",
        "name": "全汉 MS600 SFX 铜牌 600W",
        "price": 499,
        "type": "SFX",
        "wattage": 600,
        "modular": "半模组",
        "rating": "铜牌",
        "desc": "小机箱（ITX）专用 SFX 小电源",
        "group": "小功率 ≤600W"
      },
      {
        "id": "psu-5",
        "name": "先马平头熊 500W 铜牌",
        "price": 199,
        "type": "ATX",
        "wattage": 500,
        "modular": "非模组",
        "rating": "铜牌",
        "desc": "百元级办公电源，老平台与核显机够用",
        "group": "小功率 ≤600W"
      },
      {
        "id": "psu-6",
        "name": "振华 LEADEX VII 1000W 金牌全模",
        "price": 999,
        "type": "ATX",
        "wattage": 1000,
        "modular": "全模组",
        "rating": "金牌",
        "desc": "ATX3.1 新规范，4090 的入门伴侣",
        "group": "大功率 1000W+"
      },
      {
        "id": "psu-7",
        "name": "海韵 PRIME TX-1200 白金全模",
        "price": 1699,
        "type": "ATX",
        "wattage": 1200,
        "modular": "全模组",
        "rating": "白金",
        "desc": "5090 / 4090 旗舰标配，12 年质保信仰之选",
        "group": "大功率 1000W+"
      }
    ],
    "cooler": [
      {
        "id": "cl-0",
        "name": "使用 CPU 盒装自带散热器",
        "price": 0,
        "tdpRating": 65,
        "type": "风冷",
        "height": 60,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "免费方案，仅适合 65W 级 CPU",
        "group": "风冷"
      },
      {
        "id": "cl-5",
        "name": "九州风神 玄冰400 V2",
        "price": 69,
        "tdpRating": 150,
        "type": "风冷",
        "height": 155,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "百元级风冷经典，办公平台与老 CPU 的够用方案",
        "group": "风冷"
      },
      {
        "id": "cl-1",
        "name": "利民 AX120R SE 单塔风冷",
        "price": 139,
        "tdpRating": 180,
        "type": "风冷",
        "height": 155,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "百元风冷神塔，i5 / R5 轻松压制",
        "group": "风冷"
      },
      {
        "id": "cl-2",
        "name": "利民 PA120 双塔风冷",
        "price": 199,
        "tdpRating": 245,
        "type": "风冷",
        "height": 157,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "200 元级双塔，压制 i7 / R7 无压力",
        "group": "风冷"
      },
      {
        "id": "cl-3",
        "name": "九州风神 LE520 240 水冷",
        "price": 299,
        "tdpRating": 220,
        "type": "水冷",
        "height": 0,
        "radiator": 240,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "240 一体水冷，静音颜值兼顾（需机箱支持 240 冷排）",
        "group": "水冷"
      },
      {
        "id": "cl-4",
        "name": "VK C360 360 水冷",
        "price": 599,
        "tdpRating": 320,
        "type": "水冷",
        "height": 0,
        "radiator": 360,
        "sockets": [
          "LGA1700",
          "LGA1200",
          "AM5",
          "AM4"
        ],
        "desc": "360 旗舰水冷压制顶级 CPU（需机箱支持 360 冷排）",
        "group": "水冷"
      }
    ],
    "case": [
      {
        "id": "case-10",
        "name": "海景房 <ATX>",
        "price": 799,
        "group": "海景房",
        "formFactors": [
          "ATX",
          "M-ATX",
          "ITX"
        ],
        "maxGpuLength": 400,
        "maxCoolerHeight": 170,
        "maxRadiator": 360,
        "psuType": "ATX",
        "desc": "双面玻璃全景侧透，颜值担当；风道一般，适合不发烧的颜值党"
      },
      {
        "id": "case-11",
        "name": "海景房 <M-ATX>",
        "price": 599,
        "group": "海景房",
        "formFactors": [
          "M-ATX",
          "ITX"
        ],
        "maxGpuLength": 370,
        "maxCoolerHeight": 168,
        "maxRadiator": 240,
        "psuType": "ATX",
        "desc": "紧凑海景房，M-ATX 主板的专属秀场"
      },
      {
        "id": "case-12",
        "name": "风道机箱 <ATX>",
        "price": 699,
        "group": "风道",
        "formFactors": [
          "ATX",
          "M-ATX",
          "ITX"
        ],
        "maxGpuLength": 420,
        "maxCoolerHeight": 185,
        "maxRadiator": 360,
        "psuType": "ATX",
        "desc": "网孔高风量、散热优先，游戏与高性能配置的稳妥选择"
      },
      {
        "id": "case-13",
        "name": "风道机箱 <M-ATX>",
        "price": 399,
        "group": "风道",
        "formFactors": [
          "M-ATX",
          "ITX"
        ],
        "maxGpuLength": 350,
        "maxCoolerHeight": 168,
        "maxRadiator": 240,
        "psuType": "ATX",
        "desc": "经济实用型小风道箱，主流配置够用"
      },
      {
        "id": "case-14",
        "name": "ITX 开放式机箱",
        "price": 599,
        "group": "开放式",
        "formFactors": [
          "ITX"
        ],
        "maxGpuLength": 340,
        "maxCoolerHeight": 170,
        "maxRadiator": 240,
        "psuType": "ATX",
        "desc": "开放式骨架无侧板束缚，只装 ITX 小主板——折腾党与展示党的玩具"
      },
      {
        "id": "case-15",
        "name": "手提 ITX 机箱",
        "price": 499,
        "group": "手提",
        "formFactors": [
          "ITX"
        ],
        "maxGpuLength": 330,
        "maxCoolerHeight": 160,
        "maxRadiator": 240,
        "psuType": "SFX",
        "desc": "自带提手，LAN Party / 客厅主机的便携方案（需 SFX 小电源）"
      }
    ]
  },
  "presets": [
    {
      "id": "office",
      "name": "办公影音机",
      "desc": "文档、网课、视频，便宜大碗",
      "budget": "4000 元左右",
      "cpu": "cpu-6",
      "motherboard": "mb-3",
      "gpu": "gpu-0",
      "ram": "ram-1",
      "storage": "st-1",
      "psu": "psu-1",
      "cooler": "cl-1",
      "case": "case-13"
    },
    {
      "id": "gaming",
      "name": "主流游戏机",
      "desc": "1080P/2K 高画质畅玩 3A 大作",
      "budget": "7000 元左右",
      "cpu": "cpu-1",
      "motherboard": "mb-1",
      "gpu": "gpu-1",
      "ram": "ram-1",
      "storage": "st-1",
      "psu": "psu-3",
      "cooler": "cl-1",
      "case": "case-13"
    },
    {
      "id": "highend",
      "name": "高端全能机",
      "desc": "2K/4K 游戏 + 视频剪辑 + AI",
      "budget": "15000 元左右",
      "cpu": "cpu-5",
      "motherboard": "mb-1",
      "gpu": "gpu-3",
      "ram": "ram-2",
      "storage": "st-3",
      "psu": "psu-2",
      "cooler": "cl-2",
      "case": "case-12"
    },
    {
      "id": "flagship",
      "name": "发烧旗舰机",
      "desc": "5090 卡皇 + i9，4K 无损与 AI 天花板",
      "budget": "26000 元左右",
      "cpu": "cpu-11",
      "motherboard": "mb-2",
      "gpu": "gpu-23",
      "ram": "ram-2",
      "storage": "st-3",
      "psu": "psu-7",
      "cooler": "cl-4",
      "case": "case-12"
    }
  ]
};

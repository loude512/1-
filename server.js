/**
 * 电脑配件装机指导网站 —— 服务器
 * 零依赖的 Node.js 静态文件服务器，同时提供配件数据 API。
 * 启动：node server.js  （或 npm start）
 * 访问：http://127.0.0.1:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_FILE = path.join(__dirname, 'data', 'parts.json');

// 文件扩展名 -> MIME 类型映射表
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

/**
 * 读取配件数据（data/parts.json），失败时返回 null。
 */
function readPartsData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[数据] 读取 parts.json 失败:', err.message);
    return null;
  }
}

/**
 * 发送 JSON 响应
 */
function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(body);
}

/**
 * 发送静态文件，含安全路径校验（防止目录穿越）。
 */
function sendStaticFile(res, urlPath) {
  // 去掉查询参数并解码
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
  // 默认首页
  const filePath = cleanPath === '/' ? '/index.html' : cleanPath;

  // 解析为绝对路径，并确保仍位于 public 目录内
  const absPath = path.normalize(path.join(PUBLIC_DIR, filePath));
  if (!absPath.startsWith(PUBLIC_DIR + path.sep) && absPath !== PUBLIC_DIR) {
    sendJson(res, 403, { error: '禁止访问该路径' });
    return;
  }

  fs.stat(absPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 时返回友好的 JSON 提示（API 风格）或简单 404 页面
      if (filePath.startsWith('/api/')) {
        sendJson(res, 404, { error: '未找到该接口' });
      } else {
        sendJson(res, 404, { error: '页面未找到', path: filePath });
      }
      return;
    }

    const ext = path.extname(absPath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(absPath, (readErr, data) => {
      if (readErr) {
        sendJson(res, 500, { error: '服务器内部错误' });
        return;
      }
      res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-cache' });
      res.end(data);
    });
  });
}

/**
 * 创建 HTTP 服务器
 */
const server = http.createServer((req, res) => {
  const urlPath = req.url || '/';

  // 简单访问日志
  console.log(`[${new Date().toLocaleString('zh-CN')}] ${req.method} ${urlPath}`);

  // ---- API 路由 ----
  if (urlPath.startsWith('/api/parts')) {
    const data = readPartsData();
    if (data) {
      sendJson(res, 200, data);
    } else {
      sendJson(res, 500, { error: '配件数据加载失败' });
    }
    return;
  }

  if (urlPath.startsWith('/api/health')) {
    sendJson(res, 200, { status: 'ok', uptime: process.uptime() });
    return;
  }

  // ---- 静态资源 ----
  if (req.method === 'GET') {
    sendStaticFile(res, urlPath);
    return;
  }

  sendJson(res, 405, { error: '不支持的请求方法' });
});

server.listen(PORT, HOST, () => {
  console.log('═══════════════════════════════════════════');
  console.log(' 💻  电脑配件装机指导网站已启动');
  console.log('═══════════════════════════════════════════');
  console.log(` ➜  首页：       http://${HOST}:${PORT}`);
  console.log(` ➜  配件数据：   http://${HOST}:${PORT}/api/parts`);
  console.log(` ➜  健康检查：   http://${HOST}:${PORT}/api/health`);
  console.log(' ➜  按 Ctrl + C 停止服务器');
  console.log('═══════════════════════════════════════════');
});

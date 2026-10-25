import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
const root = path.resolve('out');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml', '.ico': 'image/x-icon' };
const compressed = new Map();
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); } catch { file = path.join(file, 'index.html'); }
    let body = await readFile(file);
    const ext = path.extname(file);
    const headers = { 'Content-Type': mime[ext] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', 'Cache-Control': /\.(woff2|webp|png|jpg)$/.test(file) || file.includes('_next') ? 'public, max-age=31536000, immutable' : 'no-cache' };
    if (req.headers['accept-encoding']?.includes('gzip') && /\.(html|js|css|txt|xml|svg)$/.test(file)) {
      const modified = (await stat(file)).mtimeMs;
      const cached = compressed.get(file);
      body = cached?.modified === modified ? cached.body : gzipSync(body);
      compressed.set(file, { modified, body }); headers['Content-Encoding'] = 'gzip'; headers.Vary = 'Accept-Encoding';
    }
    res.writeHead(200, headers); res.end(body);
  } catch { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(await readFile(path.join(root, '404.html')).catch(() => 'Not found')); }
}).listen(3000, '127.0.0.1', () => console.log('Local: http://127.0.0.1:3000'));

/**
 * Bài 2 — Block Event Loop và quan sát latency /health
 * Chạy: node exercises/02-block-event-loop.js
 */

const http = require('http');

const PORT = Number(process.env.PORT) || 3000;
const BLOCK_MS = Number(process.env.BLOCK_MS) || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/block') {
    const start = Date.now();
    while (Date.now() - start < BLOCK_MS) {
      /* CPU-bound: đóng băng event loop */
    }
    res.end(`blocked ${BLOCK_MS}ms\n`);
    return;
  }

  if (req.url === '/health') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true, ts: Date.now() }) + '\n');
    return;
  }

  res.statusCode = 404;
  res.end('Routes: GET /health  GET /block\n');
});

server.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
  console.log(`GET /health — ping nhanh`);
  console.log(`GET /block  — block ~${BLOCK_MS}ms`);
});

/**
 * Bài 1 — Server cố ý memory leak để profile
 * Chạy: node --expose-gc exercises/memory-leak-server.js
 */

const http = require('http');

const PORT = 3001;
/** @type {Array<{ id: number; payload: Buffer }>} */
const leakCache = [];
let id = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/leak') {
    leakCache.push({
      id: ++id,
      payload: Buffer.alloc(1024 * 1024, 'x'),
    });
    res.end(JSON.stringify({ entries: leakCache.length }) + '\n');
    return;
  }

  if (req.url === '/stats') {
    const m = process.memoryUsage();
    res.end(
      JSON.stringify(
        {
          heapUsedMB: Math.round(m.heapUsed / 1024 / 1024),
          rssMB: Math.round(m.rss / 1024 / 1024),
          leakCacheEntries: leakCache.length,
        },
        null,
        2,
      ) + '\n',
    );
    return;
  }

  if (req.url === '/gc' && global.gc) {
    global.gc();
    res.end('gc ok\n');
    return;
  }

  if (req.url === '/fix') {
    leakCache.length = 0;
    res.end('cache cleared\n');
    return;
  }

  res.statusCode = 404;
  res.end('Routes: /leak /stats /gc /fix\n');
});

server.listen(PORT, () => {
  console.log(`Memory lab http://localhost:${PORT}`);
});

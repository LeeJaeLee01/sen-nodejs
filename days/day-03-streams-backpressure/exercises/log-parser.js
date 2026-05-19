/**
 * Parse log lớn — Transform Stream + backpressure
 * Chạy: node exercises/log-parser.js <file.log>
 */

const fs = require('fs');
const path = require('path');
const { Transform, pipeline } = require('stream');
const { promisify } = require('util');

const pipelineAsync = promisify(pipeline);
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Usage: node log-parser.js <path-to-log>');
  process.exit(1);
}

const stats = { errorCount: 0, infoCount: 0 };

const parseLines = new Transform({
  transform(chunk, _enc, cb) {
    const lines = chunk.toString('utf8').split('\n');
    for (const line of lines) {
      if (line.includes('ERROR')) stats.errorCount++;
      if (line.includes(' INFO ')) stats.infoCount++;
    }
    cb();
  },
});

async function main() {
  const heapBefore = process.memoryUsage().heapUsed;
  const start = performance.now();

  await pipelineAsync(
    fs.createReadStream(path.resolve(inputFile), { highWaterMark: 16 * 1024 }),
    parseLines,
  );

  const heapAfter = process.memoryUsage().heapUsed;
  const sec = ((performance.now() - start) / 1000).toFixed(2);

  console.log('--- Results ---');
  console.log('ERROR lines (approx):', stats.errorCount);
  console.log('INFO lines (approx):', stats.infoCount);
  console.log('Time (s):', sec);
  console.log('Heap delta (MB):', ((heapAfter - heapBefore) / 1024 / 1024).toFixed(2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

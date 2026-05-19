/**
 * Tạo file log mẫu để test stream parser
 * Chạy: node exercises/generate-sample-log.js
 */

const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'sample.log');
const lines = Number(process.env.LINES) || 500_000;
const stream = fs.createWriteStream(out);

let i = 0;

function write() {
  let ok = true;
  while (i < lines && ok) {
    const level = i % 100 === 0 ? 'ERROR' : 'INFO';
    ok = stream.write(
      `2026-05-19T10:00:00Z ${level} request_id=${i} path=/api/v1/users\n`,
    );
    i++;
  }
  if (i < lines) {
    stream.once('drain', write);
  } else {
    stream.end(() => {
      const mb = (fs.statSync(out).size / 1024 / 1024).toFixed(1);
      console.log(`Wrote ${out} (${lines} lines, ~${mb} MB)`);
    });
  }
}

write();

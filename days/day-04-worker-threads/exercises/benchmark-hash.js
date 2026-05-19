/**
 * Benchmark hash CPU-bound: main thread vs worker pool
 */

const crypto = require('crypto');
const { Worker } = require('worker_threads');
const path = require('path');

const ROUNDS = Number(process.env.ROUNDS) || 200;
const WORKERS = Number(process.env.WORKERS) || 4;
const PAYLOAD_SIZE = 64 * 1024;

function hashOnMainThread() {
  const buf = crypto.randomBytes(PAYLOAD_SIZE);
  const start = performance.now();
  for (let i = 0; i < ROUNDS; i++) {
    crypto.createHash('sha512').update(buf).digest('hex');
  }
  return performance.now() - start;
}

function hashWithWorkers(count) {
  return new Promise((resolve, reject) => {
    const workerPath = path.join(__dirname, 'hash-worker.js');
    let done = 0;
    const start = performance.now();
    const perWorker = Math.ceil(ROUNDS / count);

    for (let w = 0; w < count; w++) {
      const worker = new Worker(workerPath, {
        workerData: { rounds: perWorker, payloadSize: PAYLOAD_SIZE },
      });
      worker.on('message', () => {
        done++;
        if (done === count) resolve(performance.now() - start);
      });
      worker.on('error', reject);
    }
  });
}

async function main() {
  console.log(`ROUNDS=${ROUNDS}  PAYLOAD=${PAYLOAD_SIZE} bytes  WORKERS=${WORKERS}\n`);
  const mainMs = hashOnMainThread();
  console.log(`Main thread:  ${mainMs.toFixed(0)} ms`);
  const workerMs = await hashWithWorkers(WORKERS);
  console.log(`${WORKERS} Workers:  ${workerMs.toFixed(0)} ms`);
  console.log(`Speedup:      ${(mainMs / workerMs).toFixed(2)}x`);
}

main().catch(console.error);

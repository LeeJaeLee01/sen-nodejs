const { parentPort, workerData } = require('worker_threads');
const crypto = require('crypto');

const { rounds, payloadSize } = workerData;
const buf = crypto.randomBytes(payloadSize);

for (let i = 0; i < rounds; i++) {
  crypto.createHash('sha512').update(buf).digest('hex');
}

parentPort.postMessage('done');

/**
 * Bài 3 — setTimeout(0) vs setImmediate TRONG fs.readFile callback
 * Chạy: node exercises/03-io-callback-order.js
 *
 * So sánh với 01-microtask-order.js (main script).
 */

const fs = require('fs');
const path = require('path');

const selfPath = path.join(__dirname, '01-microtask-order.js');

console.log('--- A: Main script (same as bài 1) ---');
console.log('A1: sync');
setTimeout(() => console.log('A2: setTimeout(0)'), 0);
setImmediate(() => console.log('A3: setImmediate'));
Promise.resolve().then(() => console.log('A4: Promise.then'));
process.nextTick(() => console.log('A5: nextTick'));
console.log('A6: sync end');

console.log('\n--- B: Inside fs.readFile callback ---');

fs.readFile(selfPath, 'utf8', () => {
  console.log('B1: inside I/O callback');
  setTimeout(() => console.log('B2: setTimeout(0) in I/O'), 0);
  setImmediate(() => console.log('B3: setImmediate in I/O'));
  Promise.resolve().then(() => console.log('B4: Promise.then in I/O'));
  process.nextTick(() => console.log('B5: nextTick in I/O'));
  console.log('B6: end I/O callback sync');
});

console.log('C: sync after fs.readFile() call');

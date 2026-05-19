/**
 * Error handling wrapper cho async tasks
 * TODO: Tích hợp Pino; đẩy log tới monitoring
 */

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {{ context?: Record<string, unknown>; rethrow?: boolean }} [opts]
 * @returns {Promise<T | undefined>}
 */
async function runSafe(fn, opts = {}) {
  const { context = {}, rethrow = false } = opts;
  try {
    return await fn();
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    const payload = {
      level: 'error',
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      ts: new Date().toISOString(),
    };
    console.error(JSON.stringify(payload));
    if (rethrow) throw error;
    return undefined;
  }
}

async function fetchUser(id) {
  if (id === 'bad') throw new Error('User not found');
  return { id, name: 'Demo' };
}

async function demo() {
  const ok = await runSafe(() => fetchUser('1'), {
    context: { op: 'fetchUser', requestId: 'req-001' },
  });
  console.log('OK result:', ok);

  const fail = await runSafe(() => fetchUser('bad'), {
    context: { op: 'fetchUser', requestId: 'req-002' },
  });
  console.log('Fail result:', fail);

  const parallel = await Promise.all([
    runSafe(() => fetchUser('1'), { context: { batch: 1 } }),
    runSafe(() => fetchUser('bad'), { context: { batch: 2 } }),
    runSafe(() => fetchUser('2'), { context: { batch: 3 } }),
  ]);
  console.log('Parallel (partial success):', parallel);
}

demo();

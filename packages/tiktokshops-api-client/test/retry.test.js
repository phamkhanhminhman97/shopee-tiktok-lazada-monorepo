const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { TiktokModule, TiktokApiError } = require('../dist');
const { isRetryableError, computeRetryDelayMs, resolveMaxRetries, resolveTimeoutMs, withRetry } = require('../dist/module/tiktokshops/common/retry');

function makeAxiosError({ status, headers, code } = {}) {
  const error = new Error('Request failed');
  error.isAxiosError = true;
  error.code = code;
  if (status !== undefined) {
    error.response = { status, data: { code: status, message: 'upstream error' }, headers: headers || {} };
  }
  error.toJSON = () => ({ message: error.message });
  return error;
}

function makeTiktok(extra = {}) {
  return new TiktokModule({ appKey: 'k', appSecret: 's', accessToken: 't', shopCipher: 'c', ...extra });
}

async function withMockedRequest(handler, run) {
  const original = axios.request;
  const calls = [];
  axios.request = async (options) => {
    calls.push(options);
    return handler(calls.length, options);
  };
  try {
    await run(calls);
  } finally {
    axios.request = original;
  }
}

test('isRetryableError: network errors and 408/429/5xx are retryable, other statuses and non-axios errors are not', () => {
  assert.equal(isRetryableError(makeAxiosError({ code: 'ECONNRESET' })), true);
  for (const status of [408, 429, 500, 502, 503, 504]) {
    assert.equal(isRetryableError(makeAxiosError({ status })), true, `status ${status}`);
  }
  for (const status of [400, 401, 403, 404]) {
    assert.equal(isRetryableError(makeAxiosError({ status })), false, `status ${status}`);
  }
  assert.equal(isRetryableError(new Error('plain')), false);
});

test('computeRetryDelayMs honors numeric and HTTP-date Retry-After, capped at 4s', () => {
  assert.equal(computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': '2' } }), 0), 2000);
  assert.equal(computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': '120' } }), 0), 4000);
  const inOneSecond = new Date(Date.now() + 1000).toUTCString();
  const delay = computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': inOneSecond } }), 0);
  assert.ok(delay >= 0 && delay <= 1000, `delay ${delay}`);
});

test('computeRetryDelayMs falls back to bounded exponential backoff', () => {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const delay = computeRetryDelayMs(makeAxiosError({ status: 500 }), attempt);
    assert.ok(delay >= 300 && delay <= 4000, `attempt ${attempt}: ${delay}`);
  }
});

test('resolveMaxRetries / resolveTimeoutMs validate config values', () => {
  assert.equal(resolveMaxRetries(undefined), 2);
  assert.equal(resolveMaxRetries({ maxRetries: 0 }), 0);
  assert.equal(resolveMaxRetries({ maxRetries: 5 }), 5);
  assert.equal(resolveMaxRetries({ maxRetries: -1 }), 2);
  assert.equal(resolveMaxRetries({ maxRetries: 1.5 }), 2);
  assert.equal(resolveTimeoutMs(undefined), 30000);
  assert.equal(resolveTimeoutMs({ timeoutMs: 1234 }), 1234);
  assert.equal(resolveTimeoutMs({ timeoutMs: 0 }), 30000);
  assert.equal(resolveTimeoutMs({ timeoutMs: Number.NaN }), 30000);
});

test('withRetry rethrows a non-retryable error immediately', async () => {
  let attempts = 0;
  await assert.rejects(
    () => withRetry(async () => { attempts += 1; throw makeAxiosError({ status: 400 }); }, 3),
    (error) => error.response.status === 400,
  );
  assert.equal(attempts, 1);
});

test('GET retries a transient 503 and then succeeds', async () => {
  await withMockedRequest(
    (attempt) => {
      if (attempt === 1) throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } });
      return { status: 200, data: { code: 0, data: { orders: [] } } };
    },
    async (calls) => {
      const result = await makeTiktok().order.getOrderDetail({ ids: ['1'] });
      assert.deepEqual(result.data, { orders: [] });
      assert.equal(calls.length, 2);
    },
  );
});

test('GET gives up after the retry budget and surfaces a TiktokApiError', async () => {
  await withMockedRequest(
    () => { throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } }); },
    async (calls) => {
      await assert.rejects(
        () => makeTiktok().order.getOrderDetail({ ids: ['1'] }),
        (error) => error instanceof TiktokApiError && error.status === 503,
      );
      assert.equal(calls.length, 3, '1 initial attempt + 2 retries');
    },
  );
});

test('config.maxRetries = 0 disables retries; larger values extend the budget', async () => {
  await withMockedRequest(
    () => { throw makeAxiosError({ status: 500, headers: { 'retry-after': '0' } }); },
    async (calls) => {
      await assert.rejects(() => makeTiktok({ maxRetries: 0 }).order.getOrderDetail({ ids: ['1'] }), TiktokApiError);
      assert.equal(calls.length, 1);
    },
  );
  await withMockedRequest(
    () => { throw makeAxiosError({ status: 500, headers: { 'retry-after': '0' } }); },
    async (calls) => {
      await assert.rejects(() => makeTiktok({ maxRetries: 3 }).order.getOrderDetail({ ids: ['1'] }), TiktokApiError);
      assert.equal(calls.length, 4);
    },
  );
});

test('POST is never retried automatically', async () => {
  await withMockedRequest(
    () => { throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } }); },
    async (calls) => {
      await assert.rejects(() => makeTiktok().order.getOrderList({ query: {}, body: {} }), TiktokApiError);
      assert.equal(calls.length, 1);
    },
  );
});

test('a TikTok business error (HTTP 200, code != 0) is not retried', async () => {
  await withMockedRequest(
    () => ({ status: 200, data: { code: 36009004, message: 'invalid param', request_id: 'r1' } }),
    async (calls) => {
      await assert.rejects(() => makeTiktok().order.getOrderDetail({ ids: ['1'] }), TiktokApiError);
      assert.equal(calls.length, 1);
    },
  );
});

test('config.timeoutMs is forwarded to axios', async () => {
  await withMockedRequest(
    () => ({ status: 200, data: { code: 0, data: {} } }),
    async (calls) => {
      await makeTiktok({ timeoutMs: 5000 }).order.getOrderDetail({ ids: ['1'] });
      await makeTiktok().order.getOrderDetail({ ids: ['1'] });
      assert.equal(calls[0].timeout, 5000);
      assert.equal(calls[1].timeout, 30000);
    },
  );
});

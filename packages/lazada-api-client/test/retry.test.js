const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { LazadaModule, LazadaApiError } = require('../dist');
const { isRetryableError, computeRetryDelayMs, resolveMaxRetries, resolveTimeoutMs, withRetry } = require('../dist/module/lazada/common/retry');

function makeAxiosError({ status, headers, code } = {}) {
  const error = new Error('Request failed');
  error.isAxiosError = true;
  error.code = code;
  if (status !== undefined) {
    error.response = { status, data: { code: String(status), message: 'upstream error' }, headers: headers || {} };
  }
  error.toJSON = () => ({ message: error.message });
  return error;
}

function makeLazada(extra = {}) {
  return new LazadaModule({ appKey: 'k', appSecret: 's', appAccessToken: 't', countryCode: 'sg', ...extra });
}

async function withMockedAxios(handlers, run) {
  const originalGet = axios.get;
  const originalPost = axios.post;
  const calls = { get: [], post: [] };
  axios.get = async (url, options) => {
    calls.get.push({ url, options });
    return handlers.get(calls.get.length);
  };
  axios.post = async (url, body, options) => {
    calls.post.push({ url, body, options });
    return handlers.post(calls.post.length);
  };
  try {
    await run(calls);
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
}

const OK = { status: 200, data: { code: '0', data: {} } };

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

test('computeRetryDelayMs honors numeric and HTTP-date Retry-After, capped at 4s, and otherwise backs off within bounds', () => {
  assert.equal(computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': '2' } }), 0), 2000);
  assert.equal(computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': '120' } }), 0), 4000);
  const delay = computeRetryDelayMs(makeAxiosError({ status: 429, headers: { 'retry-after': new Date(Date.now() + 1000).toUTCString() } }), 0);
  assert.ok(delay >= 0 && delay <= 1000, `delay ${delay}`);
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const backoff = computeRetryDelayMs(makeAxiosError({ status: 500 }), attempt);
    assert.ok(backoff >= 300 && backoff <= 4000, `attempt ${attempt}: ${backoff}`);
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
  await withMockedAxios(
    {
      get: (attempt) => {
        if (attempt === 1) throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } });
        return { status: 200, data: { code: '0', data: { ok: true } } };
      },
      post: () => OK,
    },
    async (calls) => {
      const result = await makeLazada().finance.getPayoutStatus({ created_after: '2025-01-01' });
      assert.deepEqual(result.data, { ok: true });
      assert.equal(calls.get.length, 2);
    },
  );
});

test('GET gives up after the retry budget and surfaces a LazadaApiError', async () => {
  await withMockedAxios(
    { get: () => { throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } }); }, post: () => OK },
    async (calls) => {
      await assert.rejects(
        () => makeLazada().finance.getPayoutStatus({ created_after: '2025-01-01' }),
        (error) => error instanceof LazadaApiError && error.status === 503,
      );
      assert.equal(calls.get.length, 3, '1 initial attempt + 2 retries');
    },
  );
});

test('config.maxRetries = 0 disables retries; larger values extend the budget', async () => {
  await withMockedAxios(
    { get: () => { throw makeAxiosError({ status: 500, headers: { 'retry-after': '0' } }); }, post: () => OK },
    async (calls) => {
      await assert.rejects(() => makeLazada({ maxRetries: 0 }).finance.getPayoutStatus({}), LazadaApiError);
      assert.equal(calls.get.length, 1);
    },
  );
  await withMockedAxios(
    { get: () => { throw makeAxiosError({ status: 500, headers: { 'retry-after': '0' } }); }, post: () => OK },
    async (calls) => {
      await assert.rejects(() => makeLazada({ maxRetries: 3 }).finance.getPayoutStatus({}), LazadaApiError);
      assert.equal(calls.get.length, 4);
    },
  );
});

test('POST is never retried automatically', async () => {
  await withMockedAxios(
    { get: () => OK, post: () => { throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } }); } },
    async (calls) => {
      await assert.rejects(() => makeLazada().finance.queryAccountTransactions({}), LazadaApiError);
      assert.equal(calls.post.length, 1);
    },
  );
});

test('a Lazada business error (HTTP 200, code != "0") is not retried', async () => {
  await withMockedAxios(
    { get: () => ({ status: 200, data: { code: 'IllegalAccessToken', message: 'bad token', request_id: 'r1' } }), post: () => OK },
    async (calls) => {
      await assert.rejects(() => makeLazada().finance.getPayoutStatus({}), LazadaApiError);
      assert.equal(calls.get.length, 1);
    },
  );
});

test('config.timeoutMs is forwarded to axios for GET and POST', async () => {
  await withMockedAxios(
    { get: () => OK, post: () => OK },
    async (calls) => {
      const lazada = makeLazada({ timeoutMs: 5000 });
      await lazada.finance.getPayoutStatus({});
      await lazada.finance.queryAccountTransactions({});
      await makeLazada().finance.getPayoutStatus({});
      assert.equal(calls.get[0].options.timeout, 5000);
      assert.equal(calls.post[0].options.timeout, 5000);
      assert.equal(calls.get[1].options.timeout, 30000);
    },
  );
});

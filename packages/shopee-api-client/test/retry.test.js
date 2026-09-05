const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const {
  httpGet,
  httpPost,
  isRetryableError,
  computeRetryDelayMs,
  SHOPEE_DEFAULT_MAX_RETRIES,
} = require('../dist/module/shopee/common/helper');

function makeAxiosError({ status, headers } = {}) {
  const error = new Error('Request failed');
  error.isAxiosError = true;
  if (status !== undefined) {
    error.response = { status, data: { error: 'shopee_error' }, headers: headers || {} };
  }
  error.toJSON = () => ({ message: error.message });
  return error;
}

test('isRetryableError returns true for network errors with no response', () => {
  const error = makeAxiosError();
  assert.equal(isRetryableError(error), true);
});

test('isRetryableError returns true for 429/500/502/503/504/408', () => {
  for (const status of [408, 429, 500, 502, 503, 504]) {
    assert.equal(isRetryableError(makeAxiosError({ status })), true, `status ${status} should be retryable`);
  }
});

test('isRetryableError returns false for 400/401/403/404', () => {
  for (const status of [400, 401, 403, 404]) {
    assert.equal(isRetryableError(makeAxiosError({ status })), false, `status ${status} should not be retryable`);
  }
});

test('isRetryableError returns false for non-axios errors', () => {
  assert.equal(isRetryableError(new Error('plain error')), false);
});

test('computeRetryDelayMs honors a numeric Retry-After header in seconds', () => {
  const error = makeAxiosError({ status: 429, headers: { 'retry-after': '2' } });
  assert.equal(computeRetryDelayMs(error, 0), 2000);
});

test('computeRetryDelayMs falls back to bounded exponential backoff without Retry-After', () => {
  const error = makeAxiosError({ status: 500 });
  const delay = computeRetryDelayMs(error, 0);

  assert.ok(delay >= 300 && delay <= 4000, `delay ${delay} should be within bounds`);
});

test('httpGet retries on a transient 503 and succeeds on the next attempt', async () => {
  const originalGet = axios.get;
  let attempts = 0;

  axios.get = async () => {
    attempts += 1;
    if (attempts === 1) {
      throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } });
    }
    return { data: { ok: true } };
  };

  try {
    const result = await httpGet('https://example.com');
    assert.deepEqual(result, { ok: true });
    assert.equal(attempts, 2);
  } finally {
    axios.get = originalGet;
  }
});

test('httpGet gives up after exceeding the max retry budget and throws ShopeeApiError', async () => {
  const originalGet = axios.get;
  let attempts = 0;

  axios.get = async () => {
    attempts += 1;
    throw makeAxiosError({ status: 503, headers: { 'retry-after': '0' } });
  };

  try {
    await assert.rejects(() => httpGet('https://example.com'));
    assert.equal(attempts, SHOPEE_DEFAULT_MAX_RETRIES + 1);
  } finally {
    axios.get = originalGet;
  }
});

test('httpGet does not retry on a non-retryable 400 response', async () => {
  const originalGet = axios.get;
  let attempts = 0;

  axios.get = async () => {
    attempts += 1;
    throw makeAxiosError({ status: 400 });
  };

  try {
    await assert.rejects(() => httpGet('https://example.com'));
    assert.equal(attempts, 1);
  } finally {
    axios.get = originalGet;
  }
});

test('httpPost never retries even on a transient 503 (mutation safety)', async () => {
  const originalPost = axios.post;
  let attempts = 0;

  axios.post = async () => {
    attempts += 1;
    throw makeAxiosError({ status: 503 });
  };

  try {
    await assert.rejects(() => httpPost('https://example.com', {}, { 'Content-Type': 'application/json' }));
    assert.equal(attempts, 1);
  } finally {
    axios.post = originalPost;
  }
});

test('httpGet passes DEFAULT_TIMEOUT_MS to axios.get', async () => {
  const originalGet = axios.get;
  let capturedOptions;

  axios.get = async (_url, options) => {
    capturedOptions = options;
    return { data: { ok: true } };
  };

  try {
    await httpGet('https://example.com');
    assert.equal(typeof capturedOptions.timeout, 'number');
    assert.ok(capturedOptions.timeout > 0);
  } finally {
    axios.get = originalGet;
  }
});

const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const {
  ShopeeApiError,
  httpPost,
  throwShopeeApiError,
} = require('../dist/module/shopee/common/helper');

test('throwShopeeApiError exposes Shopee code, request ID, status, context, and raw payload', () => {
  const raw = {
    error: 'common.error_auth',
    message: 'Invalid access_token.',
    request_id: 'request-1',
  };

  assert.throws(
    () => throwShopeeApiError(raw, 'getOrderDetail', 401),
    (error) => {
      assert.equal(error instanceof ShopeeApiError, true);
      assert.equal(error.code, 'common.error_auth');
      assert.equal(error.message, '[Shopee API Error - getOrderDetail] common.error_auth: Invalid access_token.');
      assert.equal(error.requestId, 'request-1');
      assert.equal(error.status, 401);
      assert.deepEqual(error.raw, raw);
      return true;
    },
  );
});

test('httpPost uses caller-provided headers', async () => {
  const originalPost = axios.post;
  let headers;

  axios.post = async (_url, _body, options) => {
    headers = options.headers;
    return { data: { ok: true } };
  };

  try {
    const result = await httpPost('https://example.com', {}, {
      'Content-Type': 'text/plain',
      'X-Test': '1',
    });

    assert.deepEqual(result, { ok: true });
    assert.deepEqual(headers, {
      'Content-Type': 'text/plain',
      'X-Test': '1',
    });
  } finally {
    axios.post = originalPost;
  }
});

test('httpPost converts axios response errors to ShopeeApiError', async () => {
  const originalPost = axios.post;

  axios.post = async () => {
    const error = new Error('Request failed with status code 401');
    error.isAxiosError = true;
    error.response = {
      status: 401,
      data: {
        error: 'common.error_auth',
        message: 'Invalid access_token.',
        request_id: 'request-2',
      },
    };
    error.toJSON = () => ({ message: error.message });
    throw error;
  };

  try {
    await assert.rejects(
      () => httpPost('https://example.com', {}, { 'Content-Type': 'application/json' }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'common.error_auth');
        assert.equal(error.requestId, 'request-2');
        assert.equal(error.status, 401);
        return true;
      },
    );
  } finally {
    axios.post = originalPost;
  }
});

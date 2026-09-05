const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { ShopeeModule } = require('../dist');

function withMockedAxiosPost(response, run) {
  const originalPost = axios.post;
  let call;

  axios.post = async (url, body, options) => {
    call = { url, body, options };
    if (response instanceof Error) throw response;
    return { data: response };
  };

  return run(() => call).finally(() => {
    axios.post = originalPost;
  });
}

test('generateAuthLink builds a signed URL and echoes back the redirect', async () => {
  const shopee = new ShopeeModule({ partnerId: 123456, partnerKey: 'test-partner-key' });

  const result = await shopee.generateAuthLink('https://example.com/callback');

  assert.equal(result.redirect, 'https://example.com/callback');
  assert.match(result.url, /^https:\/\/partner\.shopeemobile\.com\/api\/v2\/shop\/auth_partner\?/);
  assert.match(result.url, /partner_id=123456/);
  assert.match(result.url, /redirect=https%3A%2F%2Fexample\.com%2Fcallback/);
  assert.match(result.url, /sign=[a-f0-9]{64}/);
});

test('fetchToken requires either shopId or mainAccountId', async () => {
  const shopee = new ShopeeModule({ partnerId: 123456, partnerKey: 'test-partner-key' });

  await assert.rejects(() => shopee.fetchToken('auth-code'), /requires either shopId or mainAccountId/);
});

test('fetchToken posts partner_id/code/shop_id and returns the Shopee token response', async () => {
  await withMockedAxiosPost(
    { access_token: 'at-1', refresh_token: 'rt-1', expire_in: 14400, error: '', message: '', request_id: 'req-1' },
    async (getCall) => {
      const shopee = new ShopeeModule({ partnerId: 123456, partnerKey: 'test-partner-key', shopId: '999' });
      const result = await shopee.fetchToken('auth-code-abc');

      assert.equal(result.access_token, 'at-1');
      const call = getCall();
      assert.equal(call.body.code, 'auth-code-abc');
      assert.equal(call.body.shop_id, 999);
      assert.equal(call.body.partner_id, 123456);
    },
  );
});

test('fetchToken throws ShopeeApiError when Shopee returns an error payload', async () => {
  const { ShopeeApiError } = require('../dist');
  await withMockedAxiosPost(
    { error: 'invalid_auth_code', message: 'Auth code is invalid or expired.', request_id: 'req-2' },
    async () => {
      const shopee = new ShopeeModule({ partnerId: 123456, partnerKey: 'test-partner-key', shopId: '999' });

      await assert.rejects(
        () => shopee.fetchToken('bad-code'),
        (error) => {
          assert.equal(error instanceof ShopeeApiError, true);
          assert.equal(error.code, 'invalid_auth_code');
          return true;
        },
      );
    },
  );
});

test('refreshToken requires shopId and refreshToken in config', async () => {
  const shopee = new ShopeeModule({ partnerId: 123456, partnerKey: 'test-partner-key' });

  await assert.rejects(() => shopee.refreshToken(), /requires shopId/);
});

test('refreshToken posts refresh_token/shop_id and returns the new tokens', async () => {
  await withMockedAxiosPost(
    {
      access_token: 'at-new',
      refresh_token: 'rt-new',
      expire_in: 14400,
      error: '',
      message: '',
      request_id: 'req-3',
      shop_id: '999',
      partner_id: '123456',
    },
    async (getCall) => {
      const shopee = new ShopeeModule({
        partnerId: 123456,
        partnerKey: 'test-partner-key',
        shopId: '999',
        refreshToken: 'rt-old',
      });
      const result = await shopee.refreshToken();

      assert.equal(result.access_token, 'at-new');
      const call = getCall();
      assert.equal(call.body.refresh_token, 'rt-old');
      assert.equal(call.body.shop_id, 999);
    },
  );
});

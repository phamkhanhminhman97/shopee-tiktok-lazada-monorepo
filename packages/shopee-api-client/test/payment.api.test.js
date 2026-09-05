const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { ShopeeModule, ShopeeApiError } = require('../dist');

function makeShopee() {
  return new ShopeeModule({
    partnerId: 1,
    partnerKey: 'test-partner-key',
    shopId: '1000',
    accessToken: 'test-access-token',
  });
}

function withMockedAxiosGet(response, run) {
  const originalGet = axios.get;
  let call;

  axios.get = async (url, options) => {
    call = { url, options };
    if (response instanceof Error) throw response;
    return { data: response };
  };

  return run(() => call).finally(() => {
    axios.get = originalGet;
  });
}

test('getEscrowDetail sends order_sn and returns the Shopee escrow detail', async () => {
  await withMockedAxiosGet(
    {
      request_id: 'req-1',
      error: '',
      message: '',
      response: { order_sn: 'ORDER-1', buyer_user_name: 'buyer1', return_order_sn_list: [], order_income: {} },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getEscrowDetail('ORDER-1');

      assert.equal(result.response.order_sn, 'ORDER-1');
      assert.match(getCall().url, /order_sn=ORDER-1/);
    },
  );
});

test('getEscrowDetail throws ShopeeApiError when Shopee returns an error payload', async () => {
  await withMockedAxiosGet({ request_id: 'req-2', error: 'order_not_found', message: 'Order not found.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.getEscrowDetail('MISSING-ORDER'),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'order_not_found');
        return true;
      },
    );
  });
});

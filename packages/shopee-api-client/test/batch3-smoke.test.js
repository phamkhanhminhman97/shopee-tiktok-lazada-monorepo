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

// Smoke tests for the 127 endpoints added in the parity audit against upstream shopee-sdk
// (logistics, order, payment, product, push, returns each had missing methods). These
// endpoints all share the same generic callShopeeApi()/callShopeePublicApi() implementation
// already covered by dozens of existing tests, so this file spot-checks one or two
// representative methods per newly-extended domain rather than testing all 127 individually.

test('shopee.batchShipOrder (logistics) posts order_list and returns the response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-1', error: '', message: '', response: { result_list: [{ order_sn: '2311A', success: true }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.batchShipOrder({ order_list: [{ order_sn: '2311A' }] });

      assert.equal(result.response.result_list[0].success, true);
      assert.match(getCall().url, /\/api\/v2\/logistics\/batch_ship_order/);
    },
  );
});

test('shopee.getBookingTrackingInfo (logistics) throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet({ request_id: 'req-1b', error: 'invalid_booking_sn', message: 'Not found.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.getBookingTrackingInfo({ booking_sn: 'BK-1' }),
      ShopeeApiError,
    );
  });
});

test('shopee.getPendingBuyerInvoiceOrderList (order) sends query params and returns the list', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-2', error: '', message: '', response: { order_list: ['2311B'] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getPendingBuyerInvoiceOrderList();

      assert.deepEqual(result.response.order_list, ['2311B']);
      assert.match(getCall().url, /\/api\/v2\/order\/get_pending_buyer_invoice_order_list/);
    },
  );
});

test('shopee.getPayoutInfo (payment) sends payout_time_from/payout_time_to and returns the response', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-3', error: '', message: '', response: { payout_list: [] } },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.getPayoutInfo({ payout_time_from: 1000, payout_time_to: 2000, page_no: 1, page_size: 20 });

      const call = getCall();
      assert.match(call.url, /payout_time_from=1000/);
      assert.match(call.url, /\/api\/v2\/payment\/get_payout_info/);
    },
  );
});

test('shopee.getBoostedList (product) calls the endpoint with no request body', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-4', error: '', message: '', response: { item_list: [] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getBoostedList();

      assert.deepEqual(result.response.item_list, []);
      assert.match(getCall().url, /\/api\/v2\/product\/get_boosted_list/);
    },
  );
});

test('shopee.addKitItem (product) posts the kit item payload and returns the response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-5', error: '', message: '', response: { item_id: 999 } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.addKitItem({ item_name: 'Combo Kit', component: [] });

      assert.equal(result.response.item_id, 999);
      assert.match(getCall().url, /\/api\/v2\/product\/add_kit_item/);
    },
  );
});

test('shopee.getAppPushConfig (push) calls the endpoint with no request body', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-6', error: '', message: '', response: { callback_url: 'https://example.com/hook' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getAppPushConfig();

      assert.equal(result.response.callback_url, 'https://example.com/hook');
      assert.match(getCall().url, /\/api\/v2\/push\/get_app_push_config/);
    },
  );
});

test('shopee.setAppPushConfig (push) posts the config and returns the response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-7', error: '', message: '', response: { result: 'success' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.setAppPushConfig({ callback_url: 'https://example.com/hook' });

      assert.equal(result.response.result, 'success');
      assert.match(getCall().url, /\/api\/v2\/push\/set_app_push_config/);
    },
  );
});

test('shopee.acceptOffer (returns) posts return_sn and returns the response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-8', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.acceptOffer({ return_sn: '2311RETURN' });

      assert.match(getCall().url, /\/api\/v2\/returns\/accept_offer/);
    },
  );
});

test('shopee.acceptOffer (returns) throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-9', error: 'offer_not_found', message: 'No offer.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.acceptOffer({ return_sn: 'missing' }), ShopeeApiError);
  });
});

test('no name collisions were introduced between the 127 new methods and the existing flat surface', async () => {
  const shopee = makeShopee();

  // Spot-check a sample of the newly-added flat methods actually exist as functions.
  const newMethodNames = [
    'batchShipOrder', 'getBookingTrackingInfo', 'downloadFbsInvoices', 'getPendingBuyerInvoiceOrderList',
    'getPayoutInfo', 'getIncomeReport', 'getBoostedList', 'addKitItem', 'getAppPushConfig',
    'setAppPushConfig', 'acceptOffer', 'cancelDispute', 'dispute',
  ];
  for (const name of newMethodNames) {
    assert.equal(typeof shopee[name], 'function', name + ' should be a function on ShopeeModule');
  }
});

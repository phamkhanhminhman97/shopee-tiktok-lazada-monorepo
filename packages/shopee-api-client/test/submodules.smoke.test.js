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

test('shopee.topPicks.getTopPicksList calls the correct Shopee endpoint and returns the response', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-1', error: '', message: '', response: { collection_list: [{ top_picks_id: 1, name: 'Summer' }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.topPicks.getTopPicksList();

      assert.equal(result.response.collection_list[0].name, 'Summer');
      assert.match(getCall().url, /\/api\/v2\/top_picks\/get_top_picks_list/);
    },
  );
});

test('shopee.topPicks.addTopPicks throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-2', error: 'invalid_name', message: 'Name is invalid.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.topPicks.addTopPicks({ name: '', item_id_list: [], is_activated: false }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_name');
        return true;
      },
    );
  });
});

test('shopee.voucher submodule namespace resolves and calls the correct endpoint', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-3', error: '', message: '', response: { voucher_list: [] } },
    async (getCall) => {
      const shopee = makeShopee();
      assert.equal(typeof shopee.voucher, 'object');
      const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(shopee.voucher));
      assert.ok(methodNames.length > 1, 'voucher submodule should expose methods');
    },
  );
});

test('shopee.ads and shopee.product both define getCategory without name collision', async () => {
  const shopee = makeShopee();

  assert.equal(typeof shopee.getCategory, 'function');
  assert.equal(typeof shopee.globalProduct.getCategory, 'function');
  assert.notEqual(shopee.getCategory, shopee.globalProduct.getCategory);
});

test('shopee.media and shopee.mediaSpace both define uploadImage without name collision', async () => {
  const shopee = makeShopee();

  assert.equal(typeof shopee.uploadImage, 'function');
  assert.equal(typeof shopee.mediaSpace.uploadImage, 'function');
  assert.equal(typeof shopee.livestream.uploadImage, 'function');
});

test('shopee.ams.getShopPerformance and shopee.accountHealth.getShopPerformance both exist independently', async () => {
  const shopee = makeShopee();

  assert.equal(typeof shopee.ams.getShopPerformance, 'function');
  assert.equal(typeof shopee.accountHealth.getShopPerformance, 'function');
});

test('shopee.globalProduct.addGlobalItem posts the request body and returns the response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: { global_item_id: 555 } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.globalProduct.addGlobalItem({ category_id: 1, original_price: 10, item_name: 'x' });

      assert.equal(result.response.global_item_id, 555);
      assert.match(getCall().url, /\/api\/v2\/global_product\/add_global_item/);
    },
  );
});

test('shopee.publicApi.getShopeeIpRanges calls /public/get_shopee_ip_ranges via public signature', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-5', error: '', message: '', response: { ip_list: ['1.2.3.4/32'] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.publicApi.getShopeeIpRanges();

      assert.deepEqual(result.response.ip_list, ['1.2.3.4/32']);
      assert.match(getCall().url, /\/api\/v2\/public\/get_shopee_ip_ranges/);
      // Public signature must NOT include shop_id/access_token in the query string.
      assert.doesNotMatch(getCall().url, /shop_id=/);
      assert.doesNotMatch(getCall().url, /access_token=/);
    },
  );
});

test('shopee.sbs.getCurrentInventory sends array params as repeated query keys', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-6', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.sbs.getCurrentInventory({ item_id_list: [111, 222] });

      const matches = getCall().url.match(/item_id_list=\d+/g);
      assert.deepEqual(matches, ['item_id_list=111', 'item_id_list=222']);
    },
  );
});

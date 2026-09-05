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

test('getShopProfile returns the shop name/logo/description', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-1', error: '', message: '', response: { shop_name: 'My Shop', shop_logo: 'https://x/logo.png' } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getShopProfile();

      assert.equal(result.response.shop_name, 'My Shop');
    },
  );
});

test('updateShopProfile posts the changed fields and returns the updated profile', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-2', error: '', message: '', response: { shop_name: 'New Name' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.updateShopProfile({ shop_name: 'New Name' });

      assert.equal(result.response.shop_name, 'New Name');
      assert.equal(getCall().body.shop_name, 'New Name');
    },
  );
});

test('getShopInfo returns shop-level metadata', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-3', error: '', message: '', response: { shop_name: 'My Shop', region: 'SG', status: 'NORMAL' } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getShopInfo();

      assert.equal(result.response.status, 'NORMAL');
    },
  );
});

test('getShopInfo throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet({ request_id: 'req-4', error: 'auth_error', message: 'Invalid token.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getShopInfo(), ShopeeApiError);
  });
});

test('getShopNotification includes optional cursor/page_size query params', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-5', error: '', message: '', response: { cursor: 5 } },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.getShopNotification(3, 20);

      const call = getCall();
      assert.match(call.url, /cursor=3/);
      assert.match(call.url, /page_size=20/);
    },
  );
});

test('getWarehouseDetail includes optional warehouse_type query param', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-6', error: '', message: '', response: [{ warehouse_id: 1 }] },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getWarehouseDetail(2);

      assert.equal(result.response[0].warehouse_id, 1);
      assert.match(getCall().url, /warehouse_type=2/);
    },
  );
});

test('getShopHolidayMode returns the current holiday mode state', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-7', error: '', message: '', response: { holiday_mode_on: false } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getShopHolidayMode();

      assert.equal(result.response.holiday_mode_on, false);
    },
  );
});

test('setShopHolidayMode posts the holiday schedule', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-8', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.setShopHolidayMode({ holiday_mode_on: true, holiday_mode_type: 0 });

      assert.equal(getCall().body.holiday_mode_on, true);
    },
  );
});

test('getAuthorisedResellerBrand sends page_no/page_size and returns the brand list', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-9', error: '', message: '', response: { is_authorised_reseller: true, authorised_brand_list: [{ brand_id: 1 }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getAuthorisedResellerBrand({ page_no: 1, page_size: 10 });

      assert.equal(result.response.authorised_brand_list[0].brand_id, 1);
      const call = getCall();
      assert.match(call.url, /page_no=1/);
      assert.match(call.url, /page_size=10/);
    },
  );
});

test('getBrShopOnboardingInfo returns BR KYC onboarding info', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-10', error: '', message: '', response: { tax_id_type: 1, onboarding_status: 7 } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getBrShopOnboardingInfo();

      assert.equal(result.response.onboarding_status, 7);
    },
  );
});

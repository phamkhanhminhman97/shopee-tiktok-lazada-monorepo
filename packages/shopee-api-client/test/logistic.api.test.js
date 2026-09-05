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

function withMockedAxiosPostBinary(binaryData, run) {
  const originalPost = axios.post;
  let call;

  axios.post = async (url, body, options) => {
    call = { url, body, options };
    return { data: binaryData };
  };

  return run(() => call).finally(() => {
    axios.post = originalPost;
  });
}

test('getChannelList returns the Shopee logistics channel list', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-1', error: '', message: '', response: { logistics_channel_list: [{ logistics_channel_id: 1 }] } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getChannelList();

      assert.equal(result.response.logistics_channel_list[0].logistics_channel_id, 1);
    },
  );
});

test('getChannelList throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet({ request_id: 'req-2', error: 'auth_error', message: 'Invalid token.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getChannelList(), ShopeeApiError);
  });
});

test('shippingParameter sends order_sn as a query parameter', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-3', error: '', message: '', response: { info_needed: { dropoff: [], pickup: ['address_id'], non_integrated: [] } } },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.shippingParameter('ORDER-1');

      assert.match(getCall().url, /order_sn=ORDER-1/);
    },
  );
});

test('shipOrder posts pickup address_id and pickup_time_id', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.shipOrder('ORDER-1', 42, 'slot-1');

      const call = getCall();
      assert.equal(call.body.order_sn, 'ORDER-1');
      assert.equal(call.body.pickup.address_id, 42);
      assert.equal(call.body.pickup.pickup_time_id, 'slot-1');
    },
  );
});

test('shipOrder throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-5', error: 'logistics_error', message: 'Cannot ship yet.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.shipOrder('ORDER-1', 42, 'slot-1'), ShopeeApiError);
  });
});

test('getTrackingNumber includes optional package_number and response_optional_fields', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-6', error: '', message: '', response: { tracking_number: 'TRACK-1' } },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.getTrackingNumber('ORDER-1', 'PKG-1', 'first_mile_tracking_number');

      const call = getCall();
      assert.match(call.url, /package_number=PKG-1/);
      assert.match(call.url, /response_optional_fields=first_mile_tracking_number/);
    },
  );
});

test('getAddressList returns the Shopee address list', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-7', error: '', message: '', response: { address_list: [{ address_id: 1 }] } },
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getAddressList();

      assert.equal(result.response.address_list[0].address_id, 1);
    },
  );
});

test('createShippingDocument posts the order list and returns the Shopee response', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-8', error: '', message: '', response: { result_list: [{ order_sn: 'ORDER-1', status: 'PROCESSING' }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.createShippingDocument({ order_list: [{ order_sn: 'ORDER-1' }] });

      assert.equal(result.response.result_list[0].order_sn, 'ORDER-1');
      assert.deepEqual(getCall().body, { order_list: [{ order_sn: 'ORDER-1' }] });
    },
  );
});

test('createShippingDocument throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-9', error: 'logistics_error', message: 'Cannot create document.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.createShippingDocument({ order_list: [{ order_sn: 'ORDER-1' }] }),
      ShopeeApiError,
    );
  });
});

test('getShippingDocumentResult posts the order list and returns document status', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-10',
      error: '',
      message: '',
      response: { result_list: [{ order_sn: 'ORDER-1', status: 'READY' }] },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getShippingDocumentResult({ order_list: [{ order_sn: 'ORDER-1' }] });

      assert.equal(result.response.result_list[0].status, 'READY');
      assert.deepEqual(getCall().body, { order_list: [{ order_sn: 'ORDER-1' }] });
    },
  );
});

test('downloadShippingDocument returns the raw binary buffer from Shopee', async () => {
  const fakeBinary = Buffer.from("%PDF-1.4 fake waybill");

  await withMockedAxiosPostBinary(fakeBinary, async (getCall) => {
    const shopee = makeShopee();
    const result = await shopee.downloadShippingDocument({ order_list: [{ order_sn: 'ORDER-1' }] });

    assert.deepEqual(result, fakeBinary);
    assert.deepEqual(getCall().body, { order_list: [{ order_sn: 'ORDER-1' }] });
    assert.equal(getCall().options.responseType, 'arraybuffer');
  });
});

test('getTrackingInfo includes optional package_number', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-11', error: '', message: '', response: { tracking_info: [] } },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.getTrackingInfo('ORDER-1', 'PKG-1');

      const call = getCall();
      assert.match(call.url, /order_sn=ORDER-1/);
      assert.match(call.url, /package_number=PKG-1/);
    },
  );
});

test('massShipOrder posts the package list and returns success/fail lists', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-12',
      error: '',
      message: '',
      response: { success_list: [{ package_number: 'PKG-1' }], fail_list: [] },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.massShipOrder({ package_list: [{ package_number: 'PKG-1' }] });

      assert.equal(result.response.success_list[0].package_number, 'PKG-1');
      assert.deepEqual(getCall().body, { package_list: [{ package_number: 'PKG-1' }] });
    },
  );
});

test('massShipOrder throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-13', error: 'logistics_error', message: 'Cannot mass ship.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.massShipOrder({ package_list: [{ package_number: 'PKG-1' }] }),
      ShopeeApiError,
    );
  });
});

test('getMassShippingParameter posts the package list and returns shipping parameters', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-14',
      error: '',
      message: '',
      response: { info_needed: { dropoff: [], pickup: [], non_integrated: [] } },
    },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.getMassShippingParameter({ package_list: [{ package_number: 'PKG-1' }] });

      assert.deepEqual(getCall().body, { package_list: [{ package_number: 'PKG-1' }] });
    },
  );
});

test('updateShippingOrder posts order_sn and pickup details', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-15', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.updateShippingOrder({
        order_sn: 'ORDER-1',
        pickup: { address_id: 1, pickup_time_id: 'slot-1' },
      });

      const call = getCall();
      assert.equal(call.body.order_sn, 'ORDER-1');
      assert.equal(call.body.pickup.address_id, 1);
    },
  );
});

test('getMassTrackingNumber posts the package list and returns tracking numbers', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-16',
      error: '',
      message: '',
      response: { success_list: [{ package_number: 'PKG-1', tracking_number: 'TRACK-1' }], fail_list: [] },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getMassTrackingNumber({ package_list: [{ package_number: 'PKG-1' }] });

      assert.equal(result.response.success_list[0].tracking_number, 'TRACK-1');
      assert.deepEqual(getCall().body, { package_list: [{ package_number: 'PKG-1' }] });
    },
  );
});

test('getShippingDocumentParameter posts the order list and returns document parameters', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-17',
      error: '',
      message: '',
      response: { result_list: [{ order_sn: 'ORDER-1' }] },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getShippingDocumentParameter({ order_list: [{ order_sn: 'ORDER-1' }] });

      assert.equal(result.response.result_list[0].order_sn, 'ORDER-1');
    },
  );
});

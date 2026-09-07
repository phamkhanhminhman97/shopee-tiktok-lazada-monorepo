const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { LazadaModule, LazadaApiError } = require('../dist');

function makeLazada(countryCode) {
  return new LazadaModule({
    appKey: 'test-app-key',
    appSecret: 'test-app-secret',
    appAccessToken: 'test-access-token',
    countryCode,
  });
}

function withMockedAxiosGet(response, run) {
  const originalGet = axios.get;
  let call;

  axios.get = async (url, options) => {
    call = { url, options };
    if (response instanceof Error) throw response;
    return { data: response, status: 200 };
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
    return { data: response, status: 200 };
  };

  return run(() => call).finally(() => {
    axios.post = originalPost;
  });
}

// ============================================================
// Full domain expansion (production-grade API parity audit against the
// open Lazada OpenAPI spec: 33 domains, 363 endpoints). These smoke tests
// verify: every new submodule namespace is wired, GET/POST requests use
// correct regional routing + signing + transport, and Lazada error
// responses throw LazadaApiError consistently.
// ============================================================

const EXPECTED_SUBMODULES = [
  'choiceCustomized', 'content', 'crossBoarderProduct', 'eTickets', 'earlyBirdPrice',
  'fbl', 'finance', 'firstmileBigbagOnlyForCn', 'flexicombo', 'freeShipping',
  'fulfillment', 'instantMessaging', 'dg', 'ownLogistics', 'walletCorporateTopUp',
  'lazlike', 'lazlive', 'lazpay', 'logistics', 'logisticsStation', 'mediaCenter',
  'membership', 'order', 'product', 'productReview', 'redmart', 'returnAndRefund',
  'seller', 'sellerVoucher', 'serviceMarket', 'sponsoredSolutions', 'storeDecoration',
  'system',
];

test('LazadaModule exposes all 33 newly added domain submodule namespaces', () => {
  const lazada = makeLazada('sg');

  for (const propName of EXPECTED_SUBMODULES) {
    assert.equal(typeof lazada[propName], 'object', `lazada.${propName} should be an object`);
    assert.notEqual(lazada[propName], null, `lazada.${propName} should not be null`);
  }
});

test('shopee-sdk-parity-style expansion does not collide with pre-existing flat methods', () => {
  const lazada = makeLazada('sg');

  // Pre-existing flat methods (published before this expansion) must remain functions.
  const existingFlatMethods = [
    'getOrders', 'getAllOrders', 'getOrderDetail', 'getOrderItems', 'getMultipleOrderItems',
    'getShipmentProviders', 'packOrder', 'recreatePackage', 'setReadyToShip', 'printAWB',
    'getShippingLabel', 'traceOrder', 'confirmDeliveryForDBS', 'failedDeliveryForDBS',
    'getProducts', 'getProductItem', 'updateSellableQuantity', 'updateStatusProduct',
    'updatePrice', 'getCategoryTree', 'createProduct', 'getBrands',
    'generateAuthLink', 'fetchTokenWithAuthCode', 'refreshToken',
  ];
  for (const name of existingFlatMethods) {
    assert.equal(typeof lazada[name], 'function', `lazada.${name} should remain a function`);
  }

  // New domain submodules expose the SAME business concepts under a namespace,
  // without overwriting the flat methods above.
  assert.equal(typeof lazada.order.getOrders, 'function');
  assert.equal(typeof lazada.product.createProduct, 'function');
  assert.notEqual(lazada.getOrders, lazada.order.getOrders);
});

test('lazada.order.getOrder (GET) builds a signed regional URL and returns the response', async () => {
  await withMockedAxiosGet(
    { code: '0', data: { order_id: 12345 } },
    async (getCall) => {
      const lazada = makeLazada('sg');
      const result = await lazada.order.getOrder({ order_id: 12345 });

      assert.equal(result.data.order_id, 12345);
      const call = getCall();
      assert.match(call.url, /^https:\/\/api\.lazada\.sg\/rest\/order\/get\?/);
      assert.match(call.url, /app_key=test-app-key/);
      assert.match(call.url, /access_token=test-access-token/);
      assert.match(call.url, /sign=[0-9A-F]{64}/);
    },
  );
});

test('lazada.order.getOrder uses the vn endpoint by default when countryCode is omitted', async () => {
  await withMockedAxiosGet({ code: '0', data: {} }, async (getCall) => {
    const lazada = makeLazada(undefined);
    await lazada.order.getOrder({ order_id: 1 });

    assert.match(getCall().url, /^https:\/\/api\.lazada\.vn\/rest\//);
  });
});

test('lazada.order.getOrder uses the correct regional endpoint for each countryCode', async () => {
  const regions = {
    sg: 'api.lazada.sg', my: 'api.lazada.com.my', th: 'api.lazada.co.th',
    id: 'api.lazada.co.id', ph: 'api.lazada.com.ph', vn: 'api.lazada.vn',
  };

  for (const [code, host] of Object.entries(regions)) {
    await withMockedAxiosGet({ code: '0', data: {} }, async (getCall) => {
      const lazada = makeLazada(code);
      await lazada.order.getOrder({ order_id: 1 });
      assert.match(getCall().url, new RegExp('^https://' + host.replace(/\./g, '\\.') + '/rest/'));
    });
  }
});

test('lazada.order.setInvoiceNumber (POST) sends application/x-www-form-urlencoded body', async () => {
  await withMockedAxiosPost(
    { code: '0', data: { order_item_id: 1, invoice_number: 'INV-1' } },
    async (getCall) => {
      const lazada = makeLazada('sg');
      const result = await lazada.order.setInvoiceNumber({ order_item_id: 1, invoice_number: 'INV-1' });

      assert.equal(result.data.invoice_number, 'INV-1');
      const call = getCall();
      assert.equal(call.options.headers['Content-Type'], 'application/x-www-form-urlencoded');
      assert.match(call.body, /order_item_id=1/);
      assert.match(call.body, /invoice_number=INV-1/);
      // POST payload fields must NOT be duplicated into the URL query string.
      assert.doesNotMatch(call.url, /invoice_number=/);
      assert.match(call.url, /sign=[0-9A-F]{64}/);
    },
  );
});

test('throws LazadaApiError when Lazada returns a non-zero code (GET)', async () => {
  await withMockedAxiosGet(
    { code: 'IllegalAccessToken', message: 'invalid access token', request_id: 'req-1' },
    async () => {
      const lazada = makeLazada('sg');

      await assert.rejects(
        () => lazada.order.getOrder({ order_id: 1 }),
        (error) => {
          assert.equal(error instanceof LazadaApiError, true);
          assert.equal(error.code, 'IllegalAccessToken');
          assert.equal(error.requestId, 'req-1');
          return true;
        },
      );
    },
  );
});

test('throws LazadaApiError when Lazada returns a non-zero code (POST)', async () => {
  await withMockedAxiosPost(
    { code: 'InvalidParameter', message: 'bad request' },
    async () => {
      const lazada = makeLazada('sg');

      await assert.rejects(
        () => lazada.order.setInvoiceNumber({ order_item_id: 1, invoice_number: 'x' }),
        (error) => {
          assert.equal(error instanceof LazadaApiError, true);
          assert.equal(error.code, 'InvalidParameter');
          return true;
        },
      );
    },
  );
});

test('lazada.product.createProduct (POST, opaque payload) round-trips an arbitrary object', async () => {
  await withMockedAxiosPost(
    { code: '0', data: { item_id: 999, item_status: 'pending' } },
    async (getCall) => {
      const lazada = makeLazada('sg');
      const result = await lazada.product.createProduct({ payload: { anyField: 'anyValue', nested: { a: 1 } } });

      assert.equal(result.data.item_id, 999);
      const call = getCall();
      assert.match(call.body, /payload=/);
    },
  );
});

test('empty-request domains (e.g. product.getSellerItemLimit) call the endpoint with no body params', async () => {
  await withMockedAxiosGet(
    { code: '0', data: { limit: 3000 } },
    async (getCall) => {
      const lazada = makeLazada('sg');
      const result = await lazada.product.getSellerItemLimit();

      assert.equal(result.data.limit, 3000);
      const call = getCall();
      assert.match(call.url, /\/product\/seller\/item\/limit/);
    },
  );
});

// Spot-check a representative sample of the remaining 30 domains to confirm they are
// wired correctly end-to-end (namespace -> API function -> callLazadaApi -> axios),
// with the mock matching each method's real HTTP verb (verified against the OpenAPI spec).
const SAMPLE_DOMAIN_METHODS = [
  { ns: 'finance', method: 'queryLogisticsFeeDetail', verb: 'GET', path: '/lbs/slb/queryLogisticsFeeDetail' },
  { ns: 'fbl', method: 'getShipperInfo', verb: 'GET', path: '/fbl/shipper/get' },
  { ns: 'lazpay', method: 'openServiceBalanceQuery', verb: 'POST', path: '/wallet/open/service/balance/query' },
  { ns: 'seller', method: 'getSellerPerformance', verb: 'GET', path: '/seller/performance/get' },
  { ns: 'membership', method: 'getLinkMemberList', verb: 'GET', path: '/membership/linkmember/list' },
  { ns: 'sponsoredSolutions', method: 'listCategory', verb: 'GET', path: '/sponsor/solutions/category/listCategory' },
  { ns: 'returnAndRefund', method: 'getReverseOrdersForSeller', verb: 'GET', path: '/reverse/getreverseordersforseller' },
  { ns: 'system', method: 'refreshAccessToken', verb: 'POST', path: '/auth/token/refresh' },
];

for (const { ns, method, verb, path } of SAMPLE_DOMAIN_METHODS) {
  test(`lazada.${ns}.${method} is wired, calls the correct ${verb} endpoint, and returns the response`, async () => {
    const mockResponse = { code: '0', data: { ok: true } };
    const runner = verb === 'GET' ? withMockedAxiosGet : withMockedAxiosPost;

    await runner(mockResponse, async (getCall) => {
      const lazada = makeLazada('sg');
      assert.equal(typeof lazada[ns][method], 'function', `lazada.${ns}.${method} should be a function`);

      const result = await lazada[ns][method]({});

      assert.deepEqual(result.data, { ok: true });
      assert.match(getCall().url, new RegExp(path.replace(/[.*+?^${}()|[\]\\\\]/g, '\\\\$&')));
    });
  });
}

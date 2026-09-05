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

function withMockedAxiosGet(responses, run) {
  const originalGet = axios.get;
  const calls = [];
  let callIndex = 0;

  axios.get = async (url, options) => {
    calls.push({ url, options });
    const response = responses[Math.min(callIndex, responses.length - 1)];
    callIndex += 1;
    if (response instanceof Error) {
      throw response;
    }
    return { data: response };
  };

  return run(calls).finally(() => {
    axios.get = originalGet;
  });
}

function withMockedAxiosPost(responses, run) {
  const originalPost = axios.post;
  const calls = [];
  let callIndex = 0;

  axios.post = async (url, body, options) => {
    calls.push({ url, body, options });
    const response = responses[Math.min(callIndex, responses.length - 1)];
    callIndex += 1;
    if (response instanceof Error) {
      throw response;
    }
    return { data: response };
  };

  return run(calls).finally(() => {
    axios.post = originalPost;
  });
}

test('getOrderList sends time_from/time_to/page_size and returns the raw Shopee response', async () => {
  await withMockedAxiosGet(
    [
      {
        request_id: 'req-1',
        error: '',
        message: '',
        response: { more: false, next_cursor: '', order_list: [{ order_sn: '2201ABC123' }] },
      },
    ],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.getOrderList({ beforeMinutes: 60, pageSize: 50 });

      assert.equal(result.response.order_list.length, 1);
      assert.equal(result.response.order_list[0].order_sn, '2201ABC123');
      assert.equal(calls.length, 1);
      assert.match(calls[0].url, /page_size=50/);
      assert.match(calls[0].url, /time_from=\d+/);
      assert.match(calls[0].url, /time_to=\d+/);
    },
  );
});

test('getOrderList rejects pageSize outside 1-100 before calling Shopee', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getOrderList({ pageSize: 101 }), /pageSize must be an integer between 1 and 100/);
});

test('getOrderList rejects a date range wider than 15 days', async () => {
  const shopee = makeShopee();
  const timeTo = Math.floor(Date.now() / 1000);
  const timeFrom = timeTo - 16 * 24 * 60 * 60;

  await assert.rejects(() => shopee.getOrderList({ timeFrom, timeTo }), /maximum date range is 15 days/);
});

test('getOrderList throws ShopeeApiError when Shopee returns an error payload', async () => {
  await withMockedAxiosGet(
    [{ request_id: 'req-2', error: 'error_param', message: 'Invalid parameter.' }],
    async () => {
      const shopee = makeShopee();

      await assert.rejects(
        () => shopee.getOrderList({ pageSize: 10 }),
        (error) => {
          assert.equal(error instanceof ShopeeApiError, true);
          assert.equal(error.code, 'error_param');
          assert.equal(error.requestId, 'req-2');
          return true;
        },
      );
    },
  );
});

test('getOrders auto-paginates across multiple pages using next_cursor', async () => {
  await withMockedAxiosGet(
    [
      {
        request_id: 'req-3',
        error: '',
        message: '',
        response: { more: true, next_cursor: 'cursor-2', order_list: [{ order_sn: 'ORDER-1' }] },
      },
      {
        request_id: 'req-4',
        error: '',
        message: '',
        response: { more: false, next_cursor: '', order_list: [{ order_sn: 'ORDER-2' }] },
      },
    ],
    async (calls) => {
      const shopee = makeShopee();
      const orders = await shopee.getOrders({ beforeMinutes: 60 });

      assert.deepEqual(orders.map((o) => o.order_sn), ['ORDER-1', 'ORDER-2']);
      assert.equal(calls.length, 2);
      assert.match(calls[1].url, /cursor=cursor-2/);
    },
  );
});

test('getOrders stops when Shopee returns an empty order_list', async () => {
  await withMockedAxiosGet(
    [{ request_id: 'req-5', error: '', message: '', response: { more: true, next_cursor: '', order_list: [] } }],
    async (calls) => {
      const shopee = makeShopee();
      const orders = await shopee.getOrders({ beforeMinutes: 60 });

      assert.deepEqual(orders, []);
      assert.equal(calls.length, 1);
    },
  );
});

test('getOrderDetail rejects more than 50 order_sn values', async () => {
  const shopee = makeShopee();
  const manyOrderSns = Array.from({ length: 51 }, (_, i) => `ORDER-${i}`);

  await assert.rejects(() => shopee.getOrderDetail(manyOrderSns), /maximum limit for order_sn_list is 50/);
});

test('getOrderDetail sends order_sn_list and merged optional fields', async () => {
  await withMockedAxiosGet(
    [{ request_id: 'req-6', error: '', message: '', response: { order_list: [{ order_sn: 'ORDER-1' }] } }],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.getOrderDetail(['ORDER-1', 'ORDER-2']);

      assert.equal(result.response.order_list[0].order_sn, 'ORDER-1');
      assert.match(calls[0].url, /order_sn_list=ORDER-1%2CORDER-2/);
      assert.match(calls[0].url, /response_optional_fields=/);
    },
  );
});

test('cancelOrder requires item_list when cancel_reason is OUT_OF_STOCK', async () => {
  const shopee = makeShopee();

  await assert.rejects(
    () => shopee.cancelOrder({ order_sn: 'ORDER-1', cancel_reason: 'OUT_OF_STOCK' }),
    /item_list is required when cancel_reason is OUT_OF_STOCK/,
  );
});

test('cancelOrder posts the request body and returns the Shopee response', async () => {
  await withMockedAxiosPost([{ request_id: 'req-7', error: '', message: '', response: { update_time: 1700000000 } }], async (calls) => {
    const shopee = makeShopee();
    const result = await shopee.cancelOrder({ order_sn: 'ORDER-1', cancel_reason: 'CUSTOMER_REQUEST' });

    assert.equal(result.response.update_time, 1700000000);
    assert.equal(calls[0].body.order_sn, 'ORDER-1');
    assert.equal(calls[0].body.cancel_reason, 'CUSTOMER_REQUEST');
  });
});

test('searchPackageList posts filter/pagination/sort and returns the Shopee response', async () => {
  await withMockedAxiosPost(
    [
      {
        request_id: 'req-8',
        error: '',
        message: '',
        response: { packages_list: [{ order_sn: 'ORDER-1', package_number: 'PKG-1' }], pagination: { total_count: 1, more: false } },
      },
    ],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.searchPackageList({ pagination: { page_size: 20 } });

      assert.equal(result.response.packages_list[0].package_number, 'PKG-1');
      assert.deepEqual(calls[0].body, { pagination: { page_size: 20 } });
    },
  );
});

test('getPackageDetail rejects more than 50 package numbers', async () => {
  const shopee = makeShopee();
  const manyPackages = Array.from({ length: 51 }, (_, i) => `PKG-${i}`);

  await assert.rejects(() => shopee.getPackageDetail(manyPackages), /maximum limit for package_number_list is 50/);
});

test('getShipmentList maps Shopee response items to order_sn/package_number pairs', async () => {
  await withMockedAxiosGet(
    [
      {
        request_id: 'req-9',
        error: '',
        message: '',
        response: {
          more: false,
          next_cursor: '',
          order_list: [{ order_sn: 'ORDER-1', package_number: 'PKG-1', extra_field: 'ignored' }],
        },
      },
    ],
    async () => {
      const shopee = makeShopee();
      const result = await shopee.getShipmentList();

      assert.deepEqual(result, [{ order_sn: 'ORDER-1', package_number: 'PKG-1' }]);
    },
  );
});

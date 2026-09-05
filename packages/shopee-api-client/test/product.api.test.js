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
    if (response instanceof Error) throw response;
    if (typeof response === 'function') return { data: response(url) };
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
    if (response instanceof Error) throw response;
    return { data: response };
  };

  return run(calls).finally(() => {
    axios.post = originalPost;
  });
}

test('getProductItemList auto-paginates using has_next_page/next_offset', async () => {
  await withMockedAxiosGet(
    [
      { response: { item: [{ item_id: 1 }], next_offset: 100, has_next_page: true } },
      { response: { item: [{ item_id: 2 }], next_offset: 0, has_next_page: false } },
    ],
    async (calls) => {
      const shopee = makeShopee();
      const items = await shopee.getProductItemList();

      assert.deepEqual(items.map((i) => i.item_id), [1, 2]);
      assert.equal(calls.length, 2);
      assert.match(calls[0].url, /offset=0/);
      assert.match(calls[1].url, /offset=100/);
    },
  );
});

test('getModelList rejects a non-numeric itemId', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getModelList('not-a-number'), /itemId.*must be a number/);
});

test('getModelList sends item_id and returns Shopee model list', async () => {
  await withMockedAxiosGet(
    [
      {
        request_id: 'req-1',
        error: '',
        message: '',
        response: { tier_variation: [], model: [{ model_id: 1, tier_index: [], model_sku: 'SKU-1', model_status: 'MODEL_NORMAL' }] },
      },
    ],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.getModelList(123456);

      assert.equal(result.response.model[0].model_sku, 'SKU-1');
      assert.match(calls[0].url, /item_id=123456/);
    },
  );
});

test('getModelList throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosGet([{ request_id: 'req-2', error: 'item_id_not_found', message: 'Item not found.' }], async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.getModelList(999),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'item_id_not_found');
        return true;
      },
    );
  });
});

test('searchItem requires page_size', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.searchItem({ page_size: 0, item_name: 'shirt' }), /page_size.*greater than 0/);
});

test('searchItem requires at least one search filter', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.searchItem({ page_size: 10 }), /At least one search filter is required/);
});

test('searchItem appends repeated item_status query params', async () => {
  await withMockedAxiosGet(
    [{ request_id: 'req-3', error: '', message: '', response: { item_id_list: [1, 2], total_count: 2, next_offset: '' } }],
    async (calls) => {
      const shopee = makeShopee();
      await shopee.searchItem({ page_size: 10, item_status: ['NORMAL', 'BANNED'] });

      const matches = calls[0].url.match(/item_status=[^&]+/g);
      assert.deepEqual(matches, ['item_status=NORMAL', 'item_status=BANNED']);
    },
  );
});

test('updateStock posts item_id and stock_list with the given stock value', async () => {
  await withMockedAxiosPost(
    [{ request_id: 'req-4', error: '', message: '', response: { failure_list: [], success_list: [{ item_id: 1, model_id: 0 }] } }],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.updateStock(1, 50);

      assert.equal(result.response.success_list[0].item_id, 1);
      assert.equal(calls[0].body.item_id, 1);
      assert.equal(calls[0].body.stock_list[0].seller_stock[0].stock, 50);
    },
  );
});

test('unListItem posts item_list with parsed item_id and unlist flag', async () => {
  await withMockedAxiosPost(
    [{ request_id: 'req-5', error: '', message: '', response: { failure_list: [], success_list: [{ item_id: 1, unlist: true }] } }],
    async (calls) => {
      const shopee = makeShopee();
      await shopee.unListItem('1', true);

      assert.deepEqual(calls[0].body.item_list, [{ item_id: 1, unlist: true }]);
    },
  );
});

test('updatePrice throws ShopeeApiError when Shopee rejects the price update', async () => {
  await withMockedAxiosPost([{ request_id: 'req-6', error: 'price_out_of_range', message: 'Price is invalid.' }], async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.updatePrice('1', -5),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'price_out_of_range');
        return true;
      },
    );
  });
});

test('addItem validates required fields before calling Shopee', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.addItem({}), /original_price.*required/);
});

test('addItem posts a valid payload and returns the created item', async () => {
  const validBody = {
    original_price: 100,
    description: 'A great product',
    weight: 1.5,
    item_name: 'Test Product',
    category_id: 100182,
    dimension: { package_height: 10, package_length: 10, package_width: 10 },
    logistic_info: [{ logistic_id: 1, enabled: true }],
    image: { image_id_list: ['abc123'] },
  };

  await withMockedAxiosPost(
    [{ request_id: 'req-7', error: '', message: '', response: { item_id: 555, item_name: 'Test Product' } }],
    async (calls) => {
      const shopee = makeShopee();
      const result = await shopee.addItem(validBody);

      assert.equal(result.response.item_id, 555);
      assert.equal(calls[0].body.item_name, 'Test Product');
    },
  );
});

test('updateItem requires item_id', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.updateItem({ item_name: 'x' }), /item_id.*required/);
});

test('getCategory throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet([{ request_id: 'req-8', error: 'auth_error', message: 'Invalid token.' }], async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getCategory(), ShopeeApiError);
  });
});

test('getAttributes sends category_id and returns Shopee attributes', async () => {
  await withMockedAxiosGet(
    [{ request_id: 'req-9', error: '', message: '', response: { attribute_list: [] } }],
    async (calls) => {
      const shopee = makeShopee();
      await shopee.getAttributes(100182);

      assert.match(calls[0].url, /category_id=100182/);
    },
  );
});

test('getBrandList throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet([{ request_id: 'req-10', error: 'category_error', message: 'Invalid category.' }], async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getBrandList(100182), ShopeeApiError);
  });
});

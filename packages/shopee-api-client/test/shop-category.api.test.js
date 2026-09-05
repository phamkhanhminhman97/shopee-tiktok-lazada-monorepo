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

test('addShopCategory posts name/sort_weight and returns the new shop_category_id', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-1', error: '', message: '', response: { shop_category_id: 555 } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.addShopCategory({ name: 'Summer Sale', sort_weight: 10 });

      assert.equal(result.response.shop_category_id, 555);
      assert.equal(getCall().body.name, 'Summer Sale');
    },
  );
});

test('addShopCategory throws ShopeeApiError on error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-2', error: 'name_too_long', message: 'Name is too long.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.addShopCategory({ name: 'x'.repeat(999) }), ShopeeApiError);
  });
});

test('updateShopCategory posts shop_category_id and changed fields', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-3', error: '', message: '', response: { shop_category_id: 555, name: 'Winter Sale' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.updateShopCategory({ shop_category_id: 555, name: 'Winter Sale' });

      assert.equal(result.response.name, 'Winter Sale');
      assert.equal(getCall().body.shop_category_id, 555);
    },
  );
});

test('deleteShopCategory posts the target shop_category_id', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: { shop_category_id: 555, msg: 'deleted' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.deleteShopCategory(555);

      assert.equal(result.response.msg, 'deleted');
      assert.equal(getCall().body.shop_category_id, 555);
    },
  );
});

test('getShopCategoryList sends page_size/page_no and returns the category list', async () => {
  await withMockedAxiosGet(
    {
      request_id: 'req-5',
      error: '',
      message: '',
      response: { shop_categorys: [{ shop_category_id: 555, name: 'Summer Sale' }], total_count: 1, more: false },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getShopCategoryList({ page_size: 20, page_no: 1 });

      assert.equal(result.response.shop_categorys[0].shop_category_id, 555);
      const call = getCall();
      assert.match(call.url, /page_size=20/);
      assert.match(call.url, /page_no=1/);
    },
  );
});

test('addShopCategoryItemList rejects an empty item_list', async () => {
  const shopee = makeShopee();

  await assert.rejects(
    () => shopee.addShopCategoryItemList({ shop_category_id: 555, item_list: [] }),
    /item_list.*between 1 and 100/,
  );
});

test('addShopCategoryItemList rejects more than 100 items', async () => {
  const shopee = makeShopee();
  const manyItems = Array.from({ length: 101 }, (_, i) => i);

  await assert.rejects(
    () => shopee.addShopCategoryItemList({ shop_category_id: 555, item_list: manyItems }),
    /item_list.*between 1 and 100/,
  );
});

test('addShopCategoryItemList posts shop_category_id/item_list and returns updated count', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-6',
      error: '',
      message: '',
      response: { invalid_item_id_list: [], shop_category_id: 555, current_count: 3 },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.addShopCategoryItemList({ shop_category_id: 555, item_list: [1, 2, 3] });

      assert.equal(result.response.current_count, 3);
      assert.deepEqual(getCall().body.item_list, [1, 2, 3]);
    },
  );
});

test('deleteShopCategoryItemList posts shop_category_id/item_list and returns updated count', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-7', error: '', message: '', response: { shop_category_id: 555, invalid_item_id: [], current_count: 1 } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.deleteShopCategoryItemList({ shop_category_id: 555, item_list: [1, 2] });

      assert.equal(result.response.current_count, 1);
      assert.deepEqual(getCall().body.item_list, [1, 2]);
    },
  );
});

test('getShopCategoryItemList sends shop_category_id and optional pagination', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-8', error: '', message: '', response: { item_list: [1, 2, 3], total_count: 3, more: false } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getShopCategoryItemList({ shop_category_id: 555, page_size: 100, page_no: 0 });

      assert.deepEqual(result.response.item_list, [1, 2, 3]);
      const call = getCall();
      assert.match(call.url, /shop_category_id=555/);
      assert.match(call.url, /page_size=100/);
    },
  );
});

test('getShopCategoryItemList throws ShopeeApiError on error response', async () => {
  await withMockedAxiosGet({ request_id: 'req-9', error: 'category_not_found', message: 'Category not found.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getShopCategoryItemList({ shop_category_id: 999 }), ShopeeApiError);
  });
});

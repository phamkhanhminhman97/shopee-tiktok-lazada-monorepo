const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { TiktokModule } = require('../dist');

function makeTiktok() {
  return new TiktokModule({ appKey: 'k', appSecret: 's', accessToken: 't', shopCipher: 'c' });
}

async function capture(run) {
  const original = axios.request;
  let call;
  axios.request = async (options) => {
    call = options;
    return { status: 200, data: { code: 0, data: {} } };
  };
  try {
    await run(makeTiktok());
  } finally {
    axios.request = original;
  }
  return call;
}

// Regression coverage for endpoints that, in tiktokshops-api-client 1.1.0, silently dropped the caller's body or query.

test('regression: tiktok.event.updateShopWebhook sends its JSON body', async () => {
  const body = { event_type: 'ORDER_STATUS_CHANGE', address: 'https://example.com/hook' };
  const call = await capture((tiktok) => tiktok.event.updateShopWebhook(body));
  assert.equal(call.method, 'PUT');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('regression: tiktok.event.deleteShopWebhook sends its JSON body', async () => {
  const body = { event_type: 'ORDER_STATUS_CHANGE' };
  const call = await capture((tiktok) => tiktok.event.deleteShopWebhook(body));
  assert.equal(call.method, 'DELETE');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('regression: tiktok.product.searchInventory sends its JSON body', async () => {
  const body = { product_ids: ['p1', 'p2'] };
  const call = await capture((tiktok) => tiktok.product.searchInventory(body));
  assert.equal(call.method, 'POST');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('regression: tiktok.promotion.searchActivity / updateActivityProduct send their JSON body', async () => {
  const searchBody = { status: 'ONGOING', page_size: 10 };
  const search = await capture((tiktok) => tiktok.promotion.searchActivity(searchBody));
  assert.deepEqual(JSON.parse(search.data), searchBody);

  const updateBody = { products: [{ id: 'p1', activity_price_amount: '10' }] };
  const update = await capture((tiktok) => tiktok.promotion.updateActivityProduct(updateBody));
  assert.equal(update.method, 'PUT');
  assert.deepEqual(JSON.parse(update.data), updateBody);
});

test('regression: tiktok.affiliateSeller.createTargetCollaboration / editOpenCollaborationSettings send their JSON body', async () => {
  const createBody = { name: 'Target collab' };
  const create = await capture((tiktok) => tiktok.affiliateSeller.createTargetCollaboration(createBody));
  assert.deepEqual(JSON.parse(create.data), createBody);

  const editBody = { enable: true };
  const edit = await capture((tiktok) => tiktok.affiliateSeller.editOpenCollaborationSettings(editBody));
  assert.deepEqual(JSON.parse(edit.data), editBody);
});

test('regression: tiktok.analytics list endpoints send their query parameters', async () => {
  const query = { start_date_ge: '2025-01-01', end_date_lt: '2025-01-31', granularity: 'ALL' };
  const call = await capture((tiktok) => tiktok.analytics.getShopPerformance(query));
  const url = new URL(call.url);
  assert.equal(url.searchParams.get('start_date_ge'), '2025-01-01');
  assert.equal(url.searchParams.get('end_date_lt'), '2025-01-31');
  assert.equal(url.searchParams.get('granularity'), 'ALL');
});

test('regression: tiktok.product query-only GET endpoints send their query parameters', async () => {
  const call = await capture((tiktok) => tiktok.product.getGlobalCategories({ locale: 'en-US' }));
  assert.equal(new URL(call.url).searchParams.get('locale'), 'en-US');

  const seo = await capture((tiktok) => tiktok.product.getProductsSEOWords({ product_id: 'p1' }));
  assert.equal(new URL(seo.url).searchParams.get('product_id'), 'p1');
});

test('regression: tiktok.promotion.searchCoupon uses POST (the API reference specifies POST, not DELETE)', async () => {
  const body = { title: 'Spring sale' };
  const call = await capture((tiktok) => tiktok.promotion.searchCoupon(body));
  assert.equal(call.method, 'POST');
  assert.equal(new URL(call.url).pathname, '/promotion/202406/coupons/search');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('the misspelled createConversationwithCreator alias sends the same request as createConversationWithCreator', async () => {
  const body = { creator_open_id: 'c1', only_need_conversation_id: true };
  const alias = await capture((tiktok) => tiktok.affiliateSeller.createConversationwithCreator(body));
  const canonical = await capture((tiktok) => tiktok.affiliateSeller.createConversationWithCreator(body));

  assert.equal(alias.method, canonical.method);
  assert.equal(new URL(alias.url).pathname, new URL(canonical.url).pathname);
  assert.deepEqual(JSON.parse(alias.data), body);
  assert.deepEqual(JSON.parse(canonical.data), body);
});

// Endpoints whose path/version was corrected against the official TikTok Shop API reference.

test('regression: createConversationWithCreator targets POST /affiliate_seller/202508/conversations with creator_open_id', async () => {
  const body = { creator_open_id: 'creator-1' };
  const call = await capture((tiktok) => tiktok.affiliateSeller.createConversationWithCreator(body));
  assert.equal(call.method, 'POST');
  assert.equal(new URL(call.url).pathname, '/affiliate_seller/202508/conversations');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('regression: sellerSearchCreatorOnMarketplace targets POST /affiliate_seller/202608/marketplace_creators/search', async () => {
  const call = await capture((tiktok) =>
    tiktok.affiliateSeller.sellerSearchCreatorOnMarketplace({ query: { page_size: 10 }, body: { keyword: 'beauty' } }),
  );
  const url = new URL(call.url);
  assert.equal(call.method, 'POST');
  assert.equal(url.pathname, '/affiliate_seller/202608/marketplace_creators/search');
  assert.equal(url.searchParams.get('page_size'), '10');
  assert.deepEqual(JSON.parse(call.data), { keyword: 'beauty' });
  assert.notEqual(url.pathname, '/affiliate_seller/202412/conversations/messages/list/newest', 'must not collide with getLatestUnreadMessages');
});

test('regression: updateTargetCollaboration targets PUT /affiliate_seller/202508/target_collaborations/{id}', async () => {
  const body = {
    name: 'Spring',
    end_time: '1800000000',
    products: [{ id: 'p1', commission_rate: 1500 }],
    creator_user_open_ids: ['c1'],
    seller_contact_info: { email: 'seller@example.com' },
    free_sample_rule: { has_free_sample: false, is_sample_approval_exempt: false },
  };
  const call = await capture((tiktok) => tiktok.affiliateSeller.updateTargetCollaboration({ target_collaboration_id: 'tc-1', body }));
  assert.equal(call.method, 'PUT');
  assert.equal(new URL(call.url).pathname, '/affiliate_seller/202508/target_collaborations/tc-1');
  assert.deepEqual(JSON.parse(call.data), body);
});

test('markConversationRead keeps the path exactly as TikTok publishes it, including the "conversatons" misspelling', async () => {
  const call = await capture((tiktok) => tiktok.affiliateSeller.markConversationRead({ conversation_id: 'conv-1' }));
  assert.equal(new URL(call.url).pathname, '/affiliate_seller/202412/conversatons/read');
});

test('newer-version endpoints are exposed next to the older ones (getOrderDetail 202309 vs 202507)', async () => {
  const older = await capture((tiktok) => tiktok.order.getOrderDetail({ ids: ['1'] }));
  const newer = await capture((tiktok) => tiktok.order.getOrderDetail202507({ query: { ids: ['1'] } }));
  assert.equal(new URL(older.url).pathname, '/order/202309/orders');
  assert.equal(new URL(newer.url).pathname, '/order/202507/orders');
  assert.equal(new URL(newer.url).searchParams.get('ids'), '1');
});

test('generated multipart upload sends form-data and signs without the body', async () => {
  const original = axios.post;
  let call;
  axios.post = async (url, body, options) => ((call = { url, body, options }), { status: 200, data: { code: 0, data: {} } });
  try {
    await makeTiktok().affiliateSeller.uploadMessageImage({ body: { data: Buffer.from('img'), filename: 'a.png' } });
  } finally {
    axios.post = original;
  }
  assert.equal(new URL(call.url).pathname, '/affiliate_seller/202511/images/upload');
  assert.equal(typeof call.body.getHeaders, 'function');
});

const crypto = require('node:crypto');

// TikTok appends the request body to the signed string exactly as sent, including an empty JSON object.
test('regression: an empty JSON body ("{}") is signed because it is sent (previously the signature omitted it)', async () => {
  const call = await capture((tiktok) => tiktok.order.getOrderList({ query: { page_size: 20 }, body: {} }));
  assert.equal(call.data, '{}', 'the serialized body that is sent');

  const url = new URL(call.url);
  const query = {};
  url.searchParams.forEach((value, key) => { query[key] = value; });
  const keys = Object.keys(query).filter((key) => key !== 'sign' && key !== 'access_token').sort();
  const base = 's' + url.pathname + keys.map((key) => key + query[key]).join('') + call.data + 's';
  const expected = crypto.createHmac('sha256', 's').update(base).digest('hex');
  assert.equal(query.sign, expected, 'signature = HMAC(secret + path + sorted query + body + secret)');
});

test('no body is signed or sent when the endpoint has none', async () => {
  const call = await capture((tiktok) => tiktok.logistic.getWarehouseList());
  assert.equal(call.data, undefined);
});


test('multipart endpoint with several files and a query: both files are sent as form parts, the query is signed, the body is not', async () => {
  const original = axios.post;
  let call;
  axios.post = async (url, body, options) => ((call = { url, body, options }), { status: 200, data: { code: 0, data: {} } });
  try {
    await makeTiktok().returnRefund.uploadShippingDocumentAndTrackingInfo({
      query: { return_ids: ['r1', 'r2'] },
      body: {
        return_shipping_label: { data: Buffer.from('label-bytes'), filename: 'label.pdf' },
        return_qr_code: Buffer.from('qr-bytes'),
        tracking_number: 'TRK1',
        return_provider_id: 'prov-1',
      },
    });
  } finally {
    axios.post = original;
  }
  const url = new URL(call.url);
  assert.equal(url.pathname, '/return_refund/202405/returns/shipping_documents');
  assert.equal(url.searchParams.get('return_ids'), 'r1,r2');
  assert.equal(typeof call.body.getHeaders, 'function');
  const raw = call.body.getBuffer().toString();
  assert.match(raw, /name="return_shipping_label"; filename="label\.pdf"/);
  assert.match(raw, /name="return_qr_code"; filename="return_qr_code"/);
  assert.match(raw, /label-bytes/);
  assert.match(raw, /qr-bytes/);
  assert.match(raw, /name="tracking_number"[\s\S]*TRK1/);

  const query = {};
  url.searchParams.forEach((value, key) => { query[key] = value; });
  const keys = Object.keys(query).filter((key) => key !== 'sign').sort();
  const base = 's' + url.pathname + keys.map((key) => key + query[key]).join('') + 's'; // multipart body is not signed
  assert.equal(query.sign, crypto.createHmac('sha256', 's').update(base).digest('hex'));
});

test('Download Compass Task File is a plain GET that returns the file as JSON (data.file.base64)', async () => {
  const original = axios.request;
  let call;
  axios.request = async (options) => ((call = options), { status: 200, data: { code: 0, data: { file: { base64: 'aGVsbG8=' } } } });
  let result;
  try {
    result = await makeTiktok().affiliateSeller.downloadCompassTaskFile({ path: { task_id: 'task 1' } });
  } finally {
    axios.request = original;
  }
  assert.equal(call.method, 'GET');
  assert.equal(new URL(call.url).pathname, '/affiliate_seller/202603/compass/offline_tasks/task%201/file');
  assert.equal(Buffer.from(result.data.file.base64, 'base64').toString(), 'hello');
});


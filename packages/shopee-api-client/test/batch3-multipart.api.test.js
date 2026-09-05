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

// These three endpoints (order.upload_invoice_doc, logistics.upload_serviceable_polygon,
// returns.convert_image) all accept a binary file field and previously used the generic
// JSON callShopeeApi() helper by mistake, like the media-space/livestream bug found in a
// prior review. These tests pin the correct multipart/form-data behavior.

test('shopee.uploadInvoiceDoc posts multipart/form-data with order_sn/file_type/file', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-1', error: '', message: '', response: { invoice_doc: 'https://x/invoice.pdf' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.uploadInvoiceDoc({
        order_sn: '2311ABCDE',
        file_type: 1,
        file: Buffer.from('fake-pdf-bytes'),
      });

      assert.equal(result.response.invoice_doc, 'https://x/invoice.pdf');

      const call = getCall();
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
      assert.match(call.url, /\/api\/v2\/order\/upload_invoice_doc/);
    },
  );
});

test('shopee.uploadInvoiceDoc throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-2', error: 'invalid_file_type', message: 'Bad file type.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.uploadInvoiceDoc({ order_sn: '2311ABCDE', file_type: 1, file: Buffer.from('x') }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_file_type');
        return true;
      },
    );
  });
});

test('shopee.uploadServiceablePolygon posts multipart/form-data with the KML file', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-3', error: '', message: '', response: { task_id: 'task-1' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.uploadServiceablePolygon({ file: Buffer.from('fake-kml-bytes') });

      assert.equal(result.response.task_id, 'task-1');

      const call = getCall();
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
      assert.match(call.url, /\/api\/v2\/logistics\/upload_serviceable_polygon/);
    },
  );
});

test('shopee.convertImage posts multipart/form-data with return_sn/upload_image', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: { url: 'https://x/proof.jpg' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.convertImage({
        return_sn: '2311RETURN',
        upload_image: Buffer.from('fake-proof-bytes'),
      });

      assert.equal(result.response.url, 'https://x/proof.jpg');

      const call = getCall();
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
      assert.match(call.url, /\/api\/v2\/returns\/convert_image/);
    },
  );
});

test('shopee.convertImage throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-5', error: 'invalid_image', message: 'Bad proof image.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.convertImage({ return_sn: '2311RETURN', upload_image: Buffer.from('x') }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_image');
        return true;
      },
    );
  });
});


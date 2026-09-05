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

test('uploadImage rejects an empty images array', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.uploadImage({ images: [] }), /images.*must contain at least one image buffer/);
});

test('uploadImage posts a multipart/form-data body and returns uploaded image list', async () => {
  await withMockedAxiosPost(
    {
      request_id: 'req-1',
      error: '',
      message: '',
      response: { image_list: [{ image_id: 'img-1', image_url: 'https://example.com/img-1.jpg' }] },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.uploadImage({ images: [Buffer.from('fake-image-bytes')] });

      assert.equal(result.response.image_list[0].image_id, 'img-1');
      const call = getCall();
      // axios.post receives a FormData instance (multipart), not a plain object.
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.equal(typeof call.options.headers['content-type'], 'string');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
    },
  );
});

test('uploadImage throws ShopeeApiError when Shopee returns an error payload', async () => {
  await withMockedAxiosPost({ request_id: 'req-2', error: 'invalid_business', message: 'Invalid business type.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.uploadImage({ images: [Buffer.from('fake')] }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_business');
        return true;
      },
    );
  });
});

test('initVideoUpload posts video metadata and returns video_upload_id/part_size', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-3', error: '', message: '', response: { video_upload_id: 'vid-1', part_size: 4194304 } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.initVideoUpload({
        business: 3,
        scene: 1,
        file_name: 'demo.mp4',
        file_size: 1000000,
        duration: 30,
      });

      assert.equal(result.response.video_upload_id, 'vid-1');
      assert.equal(getCall().body.file_name, 'demo.mp4');
    },
  );
});

test('uploadVideoPart posts a multipart body with part_seq/part_md5', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: {} },
    async (getCall) => {
      const shopee = makeShopee();
      await shopee.uploadVideoPart({
        video_upload_id: 'vid-1',
        part_seq: 0,
        part_content: Buffer.from('chunk-bytes'),
        part_md5: 'deadbeef',
      });

      assert.equal(typeof getCall().body.getHeaders, 'function');
    },
  );
});

test('completeVideoUpload posts video_upload_id and returns the Shopee response', async () => {
  await withMockedAxiosPost({ request_id: 'req-5', error: '', message: '', response: {} }, async (getCall) => {
    const shopee = makeShopee();
    await shopee.completeVideoUpload({ video_upload_id: 'vid-1' });

    assert.equal(getCall().body.video_upload_id, 'vid-1');
  });
});

test('getVideoUploadResult sends video_upload_id and returns the current status', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-6', error: '', message: '', response: { status: 'PROCESSING' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getVideoUploadResult('vid-1');

      assert.equal(result.response.status, 'PROCESSING');
      assert.match(getCall().url, /video_upload_id=vid-1/);
    },
  );
});

test('cancelVideoUpload posts video_upload_id and returns the Shopee response', async () => {
  await withMockedAxiosPost({ request_id: 'req-7', error: '', message: '', response: {} }, async (getCall) => {
    const shopee = makeShopee();
    await shopee.cancelVideoUpload('vid-1');

    assert.equal(getCall().body.video_upload_id, 'vid-1');
  });
});

test('cancelVideoUpload throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-8', error: 'upload_already_completed', message: 'Cannot cancel.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.cancelVideoUpload('vid-1'), ShopeeApiError);
  });
});

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

// media-space.uploadImage and livestream.uploadImage both call Shopee endpoints
// that require multipart/form-data (binary image bytes), unlike the rest of the
// generated Batch 2 API surface which is JSON-only. This previously used the
// generic JSON callShopeeApi() helper by mistake; these tests pin the correct
// multipart behavior so a regression back to JSON breaks the build.

test('shopee.mediaSpace.uploadImage posts multipart/form-data with image/scene/ratio fields', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-1', error: '', message: '', response: { image_info_list: [{ image_info: { image_url: 'https://x/1.jpg' } }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.mediaSpace.uploadImage({
        image: [Buffer.from('fake-image-bytes')],
        scene: 'normal',
        ratio: '1:1',
      });

      assert.equal(result.response.image_info_list[0].image_info.image_url, 'https://x/1.jpg');

      const call = getCall();
      // Must be a FormData instance (multipart), not a plain JSON object.
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
      assert.match(call.url, /\/api\/v2\/media_space\/upload_image/);
    },
  );
});

test('shopee.mediaSpace.uploadImage throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-2', error: 'invalid_image', message: 'Bad image.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.mediaSpace.uploadImage({ image: [Buffer.from('x')] }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_image');
        return true;
      },
    );
  });
});

test('shopee.mediaSpace.uploadVideoPart posts multipart/form-data with video_upload_id/part_seq/content_md5/part_content', async () => {
  await withMockedAxiosPost({ request_id: 'req-3', error: '', message: '', response: {} }, async (getCall) => {
    const shopee = makeShopee();
    await shopee.mediaSpace.uploadVideoPart({
      video_upload_id: 'vid-1',
      part_seq: 0,
      content_md5: 'deadbeef',
      part_content: Buffer.from('chunk-bytes'),
    });

    const call = getCall();
    assert.equal(typeof call.body.getHeaders, 'function');
    assert.match(call.options.headers['content-type'], /multipart\/form-data/);
    assert.match(call.url, /\/api\/v2\/media_space\/upload_video_part/);
  });
});

test('shopee.livestream.uploadImage posts multipart/form-data with a single image field', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-4', error: '', message: '', response: { image_url: 'https://x/cover.jpg' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.livestream.uploadImage({ image: Buffer.from('fake-cover-bytes') });

      assert.equal(result.response.image_url, 'https://x/cover.jpg');

      const call = getCall();
      assert.equal(typeof call.body.getHeaders, 'function');
      assert.match(call.options.headers['content-type'], /multipart\/form-data/);
      assert.match(call.url, /\/api\/v2\/livestream\/upload_image/);
    },
  );
});

test('shopee.livestream.uploadImage throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-5', error: 'invalid_image', message: 'Bad cover image.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(
      () => shopee.livestream.uploadImage({ image: Buffer.from('x') }),
      (error) => {
        assert.equal(error instanceof ShopeeApiError, true);
        assert.equal(error.code, 'invalid_image');
        return true;
      },
    );
  });
});


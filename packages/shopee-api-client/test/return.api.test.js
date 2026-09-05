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

test('getReturnList rejects an invalid page_no', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getReturnList({ page_no: -1, page_size: 10 }), /page_no.*non-negative integer/);
});

test('getReturnList rejects page_size outside 1-100', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getReturnList({ page_no: 0, page_size: 500 }), /page_size.*between 1 and 100/);
});

test('getReturnList sends page_no/page_size/status and returns the Shopee response', async () => {
  await withMockedAxiosGet(
    {
      request_id: 'req-1',
      error: '',
      message: '',
      response: { return: [{ return_sn: 'RET-1', order_sn: 'ORDER-1', status: 'REQUESTED' }], more: false },
    },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getReturnList({ page_no: 0, page_size: 20, status: 'REQUESTED' });

      assert.equal(result.response.return[0].return_sn, 'RET-1');
      const call = getCall();
      assert.match(call.url, /page_no=0/);
      assert.match(call.url, /page_size=20/);
      assert.match(call.url, /status=REQUESTED/);
    },
  );
});

test('getReturnList throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosGet({ request_id: 'req-2', error: 'auth_error', message: 'Invalid token.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.getReturnList({ page_no: 0, page_size: 20 }), ShopeeApiError);
  });
});

test('getReturnDetail requires a returnSn', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getReturnDetail(''), /returnSn.*required/);
});

test('getReturnDetail sends return_sn and returns the Shopee return detail', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-3', error: '', message: '', response: { return_sn: 'RET-1', order_sn: 'ORDER-1', status: 'REQUESTED' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getReturnDetail('RET-1');

      assert.equal(result.response.return_sn, 'RET-1');
      assert.match(getCall().url, /return_sn=RET-1/);
    },
  );
});

test('getAvailableSolutions requires a returnSn', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.getAvailableSolutions(''), /returnSn.*required/);
});

test('getAvailableSolutions sends return_sn and returns available solutions', async () => {
  await withMockedAxiosGet(
    { request_id: 'req-4', error: '', message: '', response: { solution: [{ solution: 'RETURN_REFUND' }] } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.getAvailableSolutions('RET-1');

      assert.equal(result.response.solution[0].solution, 'RETURN_REFUND');
      assert.match(getCall().url, /return_sn=RET-1/);
    },
  );
});

test('confirmReturn requires a returnSn', async () => {
  const shopee = makeShopee();

  await assert.rejects(() => shopee.confirmReturn(''), /returnSn.*required/);
});

test('confirmReturn posts return_sn and returns the Shopee confirmation', async () => {
  await withMockedAxiosPost(
    { request_id: 'req-5', error: '', message: '', response: { return_sn: 'RET-1' } },
    async (getCall) => {
      const shopee = makeShopee();
      const result = await shopee.confirmReturn('RET-1');

      assert.equal(result.response.return_sn, 'RET-1');
      assert.equal(getCall().body.return_sn, 'RET-1');
    },
  );
});

test('confirmReturn throws ShopeeApiError on Shopee error response', async () => {
  await withMockedAxiosPost({ request_id: 'req-6', error: 'return_already_confirmed', message: 'Already confirmed.' }, async () => {
    const shopee = makeShopee();

    await assert.rejects(() => shopee.confirmReturn('RET-1'), ShopeeApiError);
  });
});

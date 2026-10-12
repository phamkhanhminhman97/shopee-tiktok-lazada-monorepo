const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { LazadaModule } = require('../dist');

function makeLazada() {
  return new LazadaModule({ appKey: 'k', appSecret: 's', appAccessToken: 't', countryCode: 'sg' });
}

async function capture(run) {
  const originalGet = axios.get;
  const originalPost = axios.post;
  let call;
  axios.get = async (url) => {
    call = { method: 'GET', url };
    return { status: 200, data: { code: '0', data: {} } };
  };
  axios.post = async (url, body) => {
    call = { method: 'POST', url, body };
    return { status: 200, data: { code: '0', data: {} } };
  };
  try {
    await run(makeLazada());
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
  return call;
}

// Four OpenAPI operations were previously collapsed into same-named sibling operations and therefore missing.

test('lazada.membership.getPartnerLinkMember calls GET /partner/get with buyer_id', async () => {
  const call = await capture((lazada) => lazada.membership.getPartnerLinkMember({ buyer_id: '42' }));
  const url = new URL(call.url);
  assert.equal(call.method, 'GET');
  assert.equal(url.pathname, '/rest/partner/get');
  assert.equal(url.searchParams.get('buyer_id'), '42');
});

test('lazada.membership.getPartnerLinkMemberList calls GET /partner/list with paging', async () => {
  const call = await capture((lazada) => lazada.membership.getPartnerLinkMemberList({ page_num: '1', page_size: '20' }));
  const url = new URL(call.url);
  assert.equal(call.method, 'GET');
  assert.equal(url.pathname, '/rest/partner/list');
  assert.equal(url.searchParams.get('page_num'), '1');
  assert.equal(url.searchParams.get('page_size'), '20');
});

test('lazada.dg.digitalTestInstallServiceCallBack calls POST /digital/test/install/servicecallback with a form body', async () => {
  const call = await capture((lazada) =>
    lazada.dg.digitalTestInstallServiceCallBack({ orderNo: 'o1', thirdOrderNo: 't1', type: 'INSTALL', jobStatus: 'DONE' }),
  );
  assert.equal(call.method, 'POST');
  assert.equal(new URL(call.url).pathname, '/rest/digital/test/install/servicecallback');
  const form = new URLSearchParams(call.body);
  assert.equal(form.get('orderNo'), 'o1');
  assert.equal(form.get('jobStatus'), 'DONE');
});

test('lazada.dg.digitalInsuranceTestNotificationCopy calls POST /digital/insurance/test/notificationcopy with a form body', async () => {
  const call = await capture((lazada) =>
    lazada.dg.digitalInsuranceTestNotificationCopy({
      orderNo: 'o1',
      thirdOrderNo: 't1',
      premium: '10',
      ePolicyLink: 'https://example.com/p.pdf',
      policyNo: 'P1',
      underwritingStatus: 'APPROVED',
    }),
  );
  assert.equal(call.method, 'POST');
  assert.equal(new URL(call.url).pathname, '/rest/digital/insurance/test/notificationcopy');
  assert.equal(new URLSearchParams(call.body).get('policyNo'), 'P1');
});

const crypto = require('node:crypto');
const { createSignature } = require('../dist/module/lazada/common/helper');

// Lazada's official signature guide: sort the parameters by name, concatenate name+value, put the API path in
// front, HMAC-SHA256 with the app secret, upper-case hex. Its reference code skips parameters with empty values.
function officialSignature(path, params, secret) {
  const keys = Object.keys(params).sort();
  let base = path;
  for (const key of keys) if (key !== 'sign' && params[key] !== undefined && params[key] !== null && params[key] !== '') base += key + params[key];
  return crypto.createHmac('sha256', secret).update(base, 'utf8').digest('hex').toUpperCase();
}

test('createSignature follows the official algorithm, including skipping empty-valued parameters', () => {
  const params = { foo: '1', bar: '2', foo_bar: '3', foobar: '4' };
  assert.equal(createSignature('/test/api', params, 'secret'), officialSignature('/test/api', params, 'secret'));
  // The guide's own example: "/test/api" + bar2 foo1 foo_bar3 foobar4
  assert.equal(
    createSignature('/test/api', params, 'secret'),
    crypto.createHmac('sha256', 'secret').update('/test/apibar2foo1foo_bar3foobar4').digest('hex').toUpperCase(),
  );

  const withEmpty = { ...params, empty: '', missing: undefined, nothing: null };
  assert.equal(createSignature('/test/api', withEmpty, 'secret'), createSignature('/test/api', params, 'secret'));
});


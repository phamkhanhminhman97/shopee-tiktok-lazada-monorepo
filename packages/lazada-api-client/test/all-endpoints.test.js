const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');
const axios = require('axios');

const { LazadaModule } = require('../dist');
const OFFICIAL = require('./fixtures/official-manifest.json');

const SECRET = 'sweep-app-secret';
const AUTH_HOST = 'https://auth.lazada.com';
const PROBE_KEY = 'probe_field';
const PROBE_VALUE = 'probe-value';
const REGIONAL_HOSTS = {
  sg: 'https://api.lazada.sg',
  vn: 'https://api.lazada.vn',
  ph: 'https://api.lazada.com.ph',
  my: 'https://api.lazada.com.my',
  th: 'https://api.lazada.co.th',
  id: 'https://api.lazada.co.id',
};

/**
 * Placeholder request argument with one enumerable key (probe_field=probe-value): whenever a method forwards its
 * request object, the probe is observable in the URL (GET) or form body (POST).
 */
const PROBE = new Proxy(
  {},
  {
    get: (_target, key) => (key === PROBE_KEY ? PROBE_VALUE : undefined),
    ownKeys: () => [PROBE_KEY],
    getOwnPropertyDescriptor: (_target, key) =>
      key === PROBE_KEY ? { value: PROBE_VALUE, enumerable: true, configurable: true, writable: true } : undefined,
  },
);

function makeLazada(countryCode) {
  return new LazadaModule({
    appKey: 'sweep-app-key',
    appSecret: SECRET,
    appAccessToken: 'sweep-token',
    countryCode,
  });
}

/** Independent re-implementation of the documented Lazada HMAC-SHA256 signature. */
function referenceSign(path, params) {
  const base = path + Object.keys(params).filter((key) => key !== 'sign').sort().map((key) => key + params[key]).join('');
  return crypto.createHmac('sha256', SECRET).update(base).digest('hex').toUpperCase();
}

function namespacesOf(lazada) {
  return Object.keys(lazada).filter((key) => lazada[key] && typeof lazada[key] === 'object' && typeof lazada[key].constructor === 'function' && lazada[key].constructor.name.startsWith('Lazada') && key !== 'config');
}

function methodsOf(instance) {
  // Include the methods inherited from the generated base classes.
  const names = new Set();
  for (let proto = Object.getPrototypeOf(instance); proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
    Object.getOwnPropertyNames(proto).forEach((name) => {
      if (name !== 'constructor' && typeof instance[name] === 'function') names.add(name);
    });
  }
  return [...names];
}

async function sweep(countryCode) {
  const originalGet = axios.get;
  const originalPost = axios.post;
  const records = [];
  let current;

  axios.get = async (url) => {
    current.calls.push({ method: 'GET', url, form: undefined });
    return { status: 200, data: { code: '0', data: {} } };
  };
  axios.post = async (url, body) => {
    current.calls.push({ method: 'POST', url, form: body });
    return { status: 200, data: { code: '0', data: {} } };
  };

  try {
    const lazada = makeLazada(countryCode);
    for (const namespace of namespacesOf(lazada)) {
      for (const name of methodsOf(lazada[namespace])) {
        current = { namespace, name, arity: lazada[namespace][name].length, calls: [] };
        await lazada[namespace][name](PROBE);
        records.push(current);
      }
    }
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
  return records;
}

test('the sweep covers 34 domain namespaces and every Lazada API implemented by the SDK', async () => {
  const records = await sweep('sg');
  const namespaces = new Set(records.map((record) => record.namespace));
  // 363 endpoints from the first audit + 4 spec operations (2 membership, 2 DG) that were previously collapsed
  // + 14 endpoints generated from the official reference (Store Flash Sale, Early Bird v2, ...).
  assert.equal(namespaces.size, 34);
  assert.equal(records.length, 381);

  const endpoints = new Set(records.map(({ calls }) => `${calls[0].method} ${new URL(calls[0].url).pathname}`));
  assert.equal(endpoints.size, 381, 'every method must target a distinct method+path');
});

test('every namespace method requests a path of the official Lazada API reference, with a verb it allows', async () => {
  const byPath = new Map(OFFICIAL.map((api) => [api.path, api]));
  const records = await sweep('sg');
  const problems = [];
  // Older early-bird (v1) endpoints that the current reference replaced with the /v2 ones.
  const LEGACY_PATHS = new Set(['/activity/early/bird/create', '/activity/early/bird/addSkus', '/activity/early/bird/deactivateSkus']);

  for (const { namespace, name, calls } of records) {
    const [{ method, url }] = calls;
    const apiPath = new URL(url).pathname.replace(/^\/rest/, '');
    const official = byPath.get(apiPath);
    if (!official) {
      if (!LEGACY_PATHS.has(apiPath)) problems.push(`lazada.${namespace}.${name} requests ${apiPath}, which is not in the official reference`);
      continue;
    }
    if (official.method !== 'GET/POST' && official.method !== method) {
      problems.push(`lazada.${namespace}.${name}: ${method} ${apiPath}, the official verb is ${official.method}`);
    }
  }
  assert.deepEqual(problems, []);

  const reached = new Set(records.map(({ calls }) => new URL(calls[0].url).pathname.replace(/^\/rest/, '')));
  // The only official APIs reached solely through the older flat methods (their namespace twin uses another path).
  const unreached = OFFICIAL.filter((api) => !reached.has(api.path)).map((api) => api.path).sort();
  assert.deepEqual(unreached, [], 'official APIs that no namespace method reaches');
});

test('every domain method issues exactly one well-formed, correctly signed request', async () => {
  for (const [countryCode, host] of Object.entries(REGIONAL_HOSTS)) {
    const records = await sweep(countryCode);

    for (const { namespace, name, calls } of records) {
      const label = `lazada.${namespace}.${name} [${countryCode}]`;
      assert.equal(calls.length, 1, `${label} must issue exactly one HTTP request`);

      const [{ method, url, form }] = calls;
      const parsed = new URL(url);
      const isAuthEndpoint = parsed.origin === AUTH_HOST;
      if (!isAuthEndpoint) assert.equal(parsed.origin, host, `${label} regional host`);
      assert.doesNotMatch(parsed.pathname, /undefined|\[object|\{|\}|\s/, label);

      const params = {};
      parsed.searchParams.forEach((value, key) => { params[key] = value; });
      if (form !== undefined) {
        new URLSearchParams(form).forEach((value, key) => { params[key] = value; });
      }

      if (isAuthEndpoint) {
        // OAuth token endpoints always use the fixed auth host and carry no injected credentials
        // (the caller supplies app_key/code/refresh_token in the request object).
        assert.equal(params.access_token, undefined, label);
      } else {
        assert.equal(params.app_key, 'sweep-app-key', label);
        assert.equal(params.sign_method, 'sha256', label);
        assert.match(params.timestamp, /^\d{13}$/, label);
        assert.equal(params.access_token, 'sweep-token', label);
      }
      assert.match(params.sign, /^[0-9A-F]{64}$/, label);

      const path = parsed.pathname.replace(/^\/rest/, '');
      assert.equal(params.sign, referenceSign(path, params), `${label} signature must match the documented algorithm`);
      assert.equal(method === 'POST', form !== undefined, label);
    }
  }
});

test('every method that takes a request object forwards it (GET -> query string, POST -> form body)', async () => {
  const records = await sweep('sg');
  const dropped = [];
  let forwarding = 0;

  for (const { namespace, name, arity, calls } of records) {
    const [{ method, url, form }] = calls;
    const label = `lazada.${namespace}.${name} (${method} ${new URL(url).pathname})`;
    const carrier = method === 'GET' ? new URL(url).searchParams : new URLSearchParams(form);
    const forwarded = carrier.get(PROBE_KEY) === PROBE_VALUE;
    if (arity === 0) continue;
    forwarding += 1;
    if (!forwarded) dropped.push(label);
  }

  assert.deepEqual(dropped, [], `methods dropping the request object: ${dropped.join(', ')}`);
  assert.ok(forwarding > 300, 'most endpoints take a request object');
});

test('POST payloads are sent in the body, never in the URL query string (avoids URL length limits)', async () => {
  const records = await sweep('sg');
  for (const { namespace, name, calls } of records) {
    const [{ method, url }] = calls;
    if (method !== 'POST') continue;
    assert.equal(new URL(url).searchParams.has(PROBE_KEY), false, `lazada.${namespace}.${name} leaked its payload into the URL`);
  }
});

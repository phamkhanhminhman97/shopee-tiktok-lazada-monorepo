#!/usr/bin/env node
/**
 * Generates the per-package API reference (packages/<pkg>/docs/API.md) for the
 * TikTok Shop and Lazada domain namespaces straight from the built SDK, so the
 * documentation can never drift from the code.
 *
 * Every namespace method is invoked once against a mocked HTTP layer and the
 * HTTP verb + path it actually requests is recorded.
 *
 *   node scripts/generate-api-docs.cjs           # (re)write the docs
 *   node scripts/generate-api-docs.cjs --check   # exit 1 when the docs are stale
 *
 * Requires `npm run build` first (it reads each package's dist/).
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');

/** Placeholder argument: stringifies to `{id}` and every property read yields another placeholder. */
const ANY = new Proxy(
  {},
  {
    get: (_target, key) => (key === Symbol.toPrimitive || key === 'toString' ? () => '{id}' : ANY),
    ownKeys: () => [],
  },
);

const TARGETS = [
  {
    dir: 'packages/tiktokshops-api-client',
    title: 'TikTok Shop API reference',
    exportName: 'TiktokModule',
    classPrefix: 'Tiktok',
    variable: 'tiktok',
    config: { appKey: 'docs', appSecret: 'docs', accessToken: 'docs', shopCipher: 'docs' },
    multipart: {
      'product.uploadProductImage': [{ data: Buffer.from('x') }],
      'product.uploadProductFile': [{ data: Buffer.from('x') }],
      'affiliateCreator.uploadShoppablePhotoFile': [{ body: { data: Buffer.from('x') } }],
      'affiliateCreator.uploadShoppableVideoFile': [{ body: { data: Buffer.from('x') } }],
      'affiliateSeller.uploadMessageImage': [{ body: { data: Buffer.from('x') } }],
      'affiliateSeller.uploadMessageImageV2': [{ body: { data: Buffer.from('x') } }],
      'customerService.uploadBuyerMessagesImage': [{ body: { data: Buffer.from('x') } }],
      'fulfillment.fulfillmentUploadDeliveryFile': [{ body: { data: Buffer.from('x') } }],
      'fulfillment.fulfillmentUploadDeliveryImage': [{ body: { data: Buffer.from('x') } }],
      'returnRefund.uploadShippingDocumentAndTrackingInfo': [{ query: { return_ids: ['r1'] }, body: { return_shipping_label: Buffer.from('x'), return_qr_code: Buffer.from('y'), tracking_number: 't', return_provider_id: 'p' } }],
    },
    intro: 'Every namespace hangs off a `TiktokModule` instance, e.g. `tiktok.order.getOrderList(...)`. Requests are signed (HMAC-SHA256), time out after 30 s, and idempotent GET requests are retried on transient failures. Errors are thrown as `TiktokApiError`.',
  },
  {
    dir: 'packages/lazada-api-client',
    title: 'Lazada API reference',
    exportName: 'LazadaModule',
    classPrefix: 'Lazada',
    variable: 'lazada',
    config: { appKey: 'docs', appSecret: 'docs', appAccessToken: 'docs', countryCode: 'sg' },
    multipart: {},
    intro: 'Every namespace hangs off a `LazadaModule` instance, e.g. `lazada.order.getOrder(...)`. Requests are signed (HMAC-SHA256), routed to the regional host from `countryCode`, time out after 30 s, and idempotent GET requests are retried on transient failures. Errors are thrown as `LazadaApiError`.',
  },
];

function methodsOf(instance) {
  // Include methods inherited from generated base classes.
  const names = new Set();
  for (let proto = Object.getPrototypeOf(instance); proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
    Object.getOwnPropertyNames(proto).forEach((name) => {
      if (name !== 'constructor' && typeof instance[name] === 'function') names.add(name);
    });
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

async function describe(target) {
  const pkgDir = path.join(root, target.dir);
  const axios = require(require.resolve('axios', { paths: [pkgDir] }));
  const sdk = require(path.join(pkgDir, 'dist'));
  const instance = new sdk[target.exportName](target.config);

  const originals = { request: axios.request, get: axios.get, post: axios.post };
  let last;
  const ok = { status: 200, data: { code: 0, data: {} } };
  axios.request = async (options) => ((last = { verb: options.method, url: options.url }), ok);
  axios.get = async (url) => ((last = { verb: 'GET', url }), { status: 200, data: { code: '0', data: {} } });
  axios.post = async (url) => ((last = { verb: 'POST', url }), { status: 200, data: { code: '0', data: {} } });

  const namespaces = [];
  try {
    for (const key of Object.keys(instance)) {
      const ns = instance[key];
      if (!ns || typeof ns !== 'object' || !ns.constructor.name.startsWith(target.classPrefix) || ns.constructor === Object) continue;
      const methods = [];
      for (const name of methodsOf(ns)) {
        last = undefined;
        const args = target.multipart[`${key}.${name}`] || [ANY, ANY, ANY];
        await ns[name](...args);
        const pathname = decodeURIComponent(new URL(last.url).pathname).replace(/^\/rest/, '');
        methods.push({ name, verb: last.verb, path: pathname });
      }
      namespaces.push({ key, label: ns.constructor.name.slice(target.classPrefix.length), methods });
    }
  } finally {
    axios.request = originals.request;
    axios.get = originals.get;
    axios.post = originals.post;
  }
  return namespaces;
}

function render(target, namespaces) {
  const total = namespaces.reduce((sum, ns) => sum + ns.methods.length, 0);
  const lines = [
    `# ${target.title}`,
    '',
    '> Generated by `npm run docs:api` from the built SDK. Do not edit by hand.',
    '',
    target.intro,
    '',
    `**${total} methods in ${namespaces.length} namespaces.**`,
    '',
    '| Namespace | Methods |',
    '| --- | ---: |',
    ...namespaces.map((ns) => `| [\`${target.variable}.${ns.key}\`](#${target.variable}${ns.key.toLowerCase()}) | ${ns.methods.length} |`),
    '',
  ];
  for (const ns of namespaces) {
    lines.push(`## \`${target.variable}.${ns.key}\``, '', `${ns.label} (${ns.methods.length} methods)`, '', '| Method | HTTP | Path |', '| --- | --- | --- |');
    for (const method of ns.methods) {
      lines.push(`| \`${method.name}\` | ${method.verb} | \`${method.path}\` |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

(async () => {
  let stale = false;
  for (const target of TARGETS) {
    const namespaces = await describe(target);
    const content = render(target, namespaces);
    const file = path.join(root, target.dir, 'docs', 'API.md');
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (checkOnly) {
      if (current !== content) {
        stale = true;
        console.error(`${path.relative(root, file)} is out of date - run "npm run docs:api"`);
      }
    } else {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, content);
      console.log(`wrote ${path.relative(root, file)} (${namespaces.length} namespaces)`);
    }
  }
  if (stale) process.exit(1);
  if (checkOnly) console.log('API docs are up to date');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

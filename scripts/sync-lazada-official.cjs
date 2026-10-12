#!/usr/bin/env node
/**
 * Syncs the Lazada client with the official Lazada Open Platform API reference (the same JSON the public
 * documentation site renders): generates typed request/response models, API functions and namespace classes for
 * the official APIs the hand-written client does not expose, and a manifest of every official API for the tests.
 *
 *   node scripts/sync-lazada-official.cjs             # fetch (cached) + generate
 *   node scripts/sync-lazada-official.cjs --refresh   # ignore the cache and re-download
 *   node scripts/sync-lazada-official.cjs --offline   # use the cache only
 *
 * Output (under packages/lazada-api-client):
 *   src/module/lazada/{api,dto/request,dto/response,submodules}/<domain>-official.*.ts
 *   test/fixtures/official-manifest.json
 * Existing hand-written namespaces extend the generated `Lazada<Domain>Official` base class.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkg = path.join(root, 'packages/lazada-api-client');
const src = path.join(pkg, 'src/module/lazada');
const cacheDir = path.join(root, '.cache/lazada-official');
const args = new Set(process.argv.slice(2));
const BASE = 'https://isvconsole.lazada.com/handler/share/apidoc';

/** Official category -> client namespace. `existing` namespaces already have a hand-written class. */
const DOMAINS = {
  'Early Bird Price API': { key: 'earlyBirdPrice', file: 'early-bird-price', cls: 'EarlyBirdPrice', existing: true },
  'Fulfillment API': { key: 'fulfillment', file: 'fulfillment', cls: 'Fulfillment', existing: true },
  'FBL API': { key: 'fbl', file: 'fbl', cls: 'Fbl', existing: true },
  'LazPay API': { key: 'lazpay', file: 'lazpay', cls: 'Lazpay', existing: true },
  'Store Flash Sale API': { key: 'storeFlashSale', file: 'store-flash-sale', cls: 'StoreFlashSale', existing: false },
};

async function getJson(url, cacheFile) {
  const file = path.join(cacheDir, cacheFile);
  if (!args.has('--refresh') && fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  if (args.has('--offline')) throw new Error('missing cache entry ' + cacheFile + ' (run without --offline)');
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  const json = await res.json();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(json.data));
  return json.data;
}

const words = (s) => String(s).replace(/[^A-Za-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
const pascal = (s) => words(s).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
const camel = (s) => { const p = pascal(s); return p.charAt(0).toLowerCase() + p.slice(1); };
const safeKey = (n) => (/^[A-Za-z_$][\w$]*$/.test(n) ? n : JSON.stringify(n));
const plain = (t) => String(t || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const docLine = (t, indent) => (plain(t) ? indent + '/** ' + plain(t).replace(/\*\//g, '*\\/') + ' */\n' : '');

function tsType(node, indent, optionalAll) {
  const base = String(node.type || '').replace(/\[\]$/, '');
  const isArray = /\[\]$/.test(String(node.type || ''));
  let inner;
  switch (base.toLowerCase()) {
    case 'string': inner = 'string'; break;
    case 'number': inner = 'number'; break;
    case 'boolean': inner = 'boolean'; break;
    case 'object': inner = node.children && node.children.length ? '{\n' + fields(node.children, indent + '  ', optionalAll) + indent + '}' : 'Record<string, unknown>'; break;
    default: inner = 'unknown';
  }
  return isArray ? (inner.startsWith('{') ? 'Array<' + inner + '>' : inner + '[]') : inner;
}
function fields(nodes, indent, optionalAll) {
  return (nodes || [])
    .map((n) => docLine(n.desc, indent) + indent + safeKey(n.name) + (optionalAll || !n.required ? '?' : '') + ': ' + tsType(n, indent, optionalAll) + ';\n')
    .join('');
}

function implementedPaths() {
  const generated = new Set(Object.values(DOMAINS).flatMap((d) => [`api/${d.file}-official.api.ts`, `submodules/${d.file}-official.submodule.ts`]));
  const found = new Set();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { if (entry.name !== 'dto') walk(full); continue; }
      if (!entry.name.endsWith('.ts') || generated.has(path.relative(src, full))) continue;
      const text = fs.readFileSync(full, 'utf8');
      for (const m of text.matchAll(/callLazadaApi<[^>]*>\(\s*['"`](\/[A-Za-z0-9_/.\-]+)['"`]/g)) found.add(m[1]);
      for (const m of text.matchAll(/['"`](\/[A-Za-z][A-Za-z0-9_/.\-]*)['"`]/g)) found.add(m[1]);
    }
  };
  walk(src);
  return found;
}

(async () => {
  const categories = (await getJson(`${BASE}/getApiCategoryMixed.json`, 'categories.json'));
  const official = [];
  for (const category of categories) for (const api of category.apiList || []) official.push({ category: category.name, path: api.path, method: api.methodType, title: api.title });
  const details = {};
  const queue = official.slice();
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const api = queue.shift();
      details[api.path] = await getJson(`${BASE}/getApi.json?path=${encodeURIComponent(api.path)}`, 'api/' + api.path.replace(/[^\w]/g, '_') + '.json');
    }
  }));

  fs.mkdirSync(path.join(pkg, 'test/fixtures'), { recursive: true });
  fs.writeFileSync(path.join(pkg, 'test/fixtures/official-manifest.json'), JSON.stringify(official.map(({ path: p, method, title, category }) => ({ path: p, method, title, category })).sort((a, b) => a.path.localeCompare(b.path)), null, 2) + '\n');

  const implemented = implementedPaths();
  const missing = official.filter((a) => !implemented.has(a.path));
  const unassigned = missing.filter((a) => !DOMAINS[a.category]);
  if (unassigned.length) console.log('official APIs without a namespace (not generated): ' + unassigned.map((a) => a.path).join(', '));

  const header = '// Generated by scripts/sync-lazada-official.cjs from the official Lazada Open Platform API reference. Do not edit by hand.\n\n';
  const byDomain = {};
  for (const api of missing) if (DOMAINS[api.category]) (byDomain[api.category] = byDomain[api.category] || []).push(api);
  let total = 0;

  for (const [category, list] of Object.entries(byDomain)) {
    const domain = DOMAINS[category];
    const models = list.map((a) => {
      const detail = (details[a.path].apiList || []).find((x) => x.path === a.path) || details[a.path].apiList[0];
      const method = camel(a.title);
      return {
        a, method, T: domain.cls + pascal(a.title),
        request: (detail.parameters && detail.parameters.data) || [],
        response: (detail.outputParameters && detail.outputParameters.data) || [],
        verb: a.method === 'GET' ? 'GET' : 'POST',
        official: a.method,
        desc: plain(detail.desc || detail.introduction || ''),
      };
    });
    let req = header; let res = header;
    for (const m of models) {
      if (m.request.length) req += `export interface ${m.T}Request {\n${fields(m.request, '  ', false)}}\n\n`;
      res += `export interface ${m.T}Response {\n  code?: string;\n  type?: string;\n  message?: string;\n  request_id?: string;\n${fields(m.response, '  ', true)}}\n\n`;
    }
    if (!/export /.test(req)) req += 'export {};\n';
    const reqTypes = models.filter((m) => m.request.length).map((m) => m.T + 'Request');
    const resTypes = models.map((m) => m.T + 'Response');
    let api = header + "import { LazadaConfig } from '../dto/request/config.request';\nimport * as LazadaHelper from '../common/helper';\n";
    if (reqTypes.length) api += `import type { ${reqTypes.join(', ')} } from '../dto/request/${domain.file}-official.request';\n`;
    api += `import type { ${resTypes.join(', ')} } from '../dto/response/${domain.file}-official.response';\n\n`;
    for (const m of models) {
      const hasReq = m.request.length > 0;
      const required = m.request.some((p) => p.required);
      const decl = hasReq ? (required ? `params: ${m.T}Request, ` : `params: ${m.T}Request = {}, `) : '';
      api += `/**\n * ${m.a.title} via Lazada \`${m.official} ${m.a.path}\`.\n${m.desc ? ' *\n * ' + m.desc.replace(/\*\//g, '*\\/') + '\n' : ''} *\n * @see https://open.lazada.com/apps/doc/api?path=${encodeURIComponent(m.a.path)}\n */\n`;
      api += `export async function ${m.method}(${decl}config: LazadaConfig): Promise<${m.T}Response> {\n  return LazadaHelper.callLazadaApi<${m.T}Response>('${m.a.path}', '${m.verb}', ${hasReq ? 'params as unknown as Record<string, unknown>' : '{}'}, config, '${m.method}');\n}\n\n`;
    }
    const className = domain.existing ? `Lazada${domain.cls}Official` : `Lazada${domain.cls}`;
    let sub = header + "import { LazadaConfig } from '../dto/request/config.request';\n";
    sub += `import { ${models.map((m) => m.method).join(', ')} } from '../api/${domain.file}-official.api';\n`;
    if (reqTypes.length) sub += `import type { ${reqTypes.join(', ')} } from '../dto/request/${domain.file}-official.request';\n`;
    sub += `import type { ${resTypes.join(', ')} } from '../dto/response/${domain.file}-official.response';\n\n`;
    sub += `/**\n * Lazada \`${category}\` endpoints generated from the official API reference.\n * Access them through \`lazada.${domain.key}.<method>()\`.\n */\nexport class ${className} {\n  constructor(protected config: LazadaConfig) {}\n\n`;
    for (const m of models) {
      const hasReq = m.request.length > 0;
      const required = m.request.some((p) => p.required);
      const decl = hasReq ? (required ? `params: ${m.T}Request` : `params: ${m.T}Request = {}`) : '';
      sub += `  async ${m.method}(${decl}): Promise<${m.T}Response> {\n    return await ${m.method}(${hasReq ? 'params, ' : ''}this.config);\n  }\n\n`;
    }
    sub = sub.replace(/\n\n$/, '\n') + '}\n';
    fs.writeFileSync(path.join(src, 'dto/request', domain.file + '-official.request.ts'), req);
    fs.writeFileSync(path.join(src, 'dto/response', domain.file + '-official.response.ts'), res);
    fs.writeFileSync(path.join(src, 'api', domain.file + '-official.api.ts'), api.replace(/\n\n$/, '\n'));
    fs.writeFileSync(path.join(src, 'submodules', domain.file + '-official.submodule.ts'), sub);
    console.log('  lazada.' + domain.key + ': ' + models.map((m) => m.method).join(', '));
    total += models.length;
  }
  console.log(`official APIs: ${official.length}, generated: ${total}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Generates the TikTok Shop client surface that the hand-written SDK-derived modules do not cover,
 * straight from the official TikTok Shop Partner Center API metadata (the same JSON the public
 * documentation site renders): typed request/response models, API functions and namespace classes.
 *
 *   node scripts/sync-tiktok-official.cjs             # fetch (cached) + generate
 *   node scripts/sync-tiktok-official.cjs --refresh   # ignore the cache and re-download
 *   node scripts/sync-tiktok-official.cjs --offline   # use the cache only
 *   node scripts/sync-tiktok-official.cjs --report    # only print coverage vs the official API
 *
 * Output (all under packages/tiktokshops-api-client/src/module/tiktokshops):
 *   api/<domain>-official.api.ts, dto/request/<domain>-official.request.ts,
 *   dto/response/<domain>-official.response.ts, submodules/<domain>-official.submodule.ts
 * Existing hand-written modules extend the generated `Tiktok<Domain>Official` base class.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkg = path.join(root, 'packages/tiktokshops-api-client');
const src = path.join(pkg, 'src/module/tiktokshops');
const cacheDir = path.join(root, '.cache/tiktok-official');
const args = new Set(process.argv.slice(2));
const ts = require('typescript');

const BASE = 'https://partner.tiktokshop.com/api/v1/document';
const QUERY = 'aid=359713&locale=en-US';
const VERBS = { 1: 'POST', 2: 'GET', 3: 'PUT', 4: 'DELETE' };
const STANDARD_QUERY = new Set(['app_key', 'sign', 'timestamp', 'shop_cipher']);

/** Official API group -> client namespace. `existing` domains already have a hand-written module. */
const DOMAINS = {
  Event: { key: 'event', file: 'event', cls: 'Event', existing: true },
  Seller: { key: 'seller', file: 'seller', cls: 'Seller', existing: true },
  Products: { key: 'product', file: 'product', cls: 'Product', existing: true },
  Promotion: { key: 'promotion', file: 'promotion', cls: 'Promotion', existing: true },
  Orders: { key: 'order', file: 'order', cls: 'Order', existing: true },
  Fulfillment: { key: 'fulfillment', file: 'fulfillment', cls: 'Fulfillment', existing: true },
  'Fulfilled by TikTok (FBT)': { key: 'fbt', file: 'fbt', cls: 'Fbt', existing: false },
  Logistics: { key: 'logistic', file: 'logistic', cls: 'Logistic', existing: true },
  'Return and refund': { key: 'returnRefund', file: 'return-refund', cls: 'ReturnRefund', existing: true },
  Finance: { key: 'finance', file: 'finance', cls: 'Finance', existing: true },
  Analytics: { key: 'analytics', file: 'analytics', cls: 'Analytics', existing: true },
  'Customer service': { key: 'customerService', file: 'customer-service', cls: 'CustomerService', existing: false },
  'Customer engagement': { key: 'customerEngagement', file: 'customer-engagement', cls: 'CustomerEngagement', existing: false },
  'Affiliate creator': { key: 'affiliateCreator', file: 'affiliate-creator', cls: 'AffiliateCreator', existing: false },
  'Affiliate partner': { key: 'affiliatePartner', file: 'affiliate-partner', cls: 'AffiliatePartner', existing: true },
  'Affiliate seller': { key: 'affiliateSeller', file: 'affiliate-seller', cls: 'AffiliateSeller', existing: true },
  'Supply chain': { key: 'supplyChain', file: 'supply-chain', cls: 'SupplyChain', existing: false },
  Tools: { key: 'tools', file: 'tools', cls: 'Tools', existing: false },
};

/** Endpoints implemented by hand (path fixed to the official one) whose request/response types come from the metadata. */
const TYPES_ONLY = new Set([
  'seller-search-creator-on-marketplace-202608',
  'create-conversation-with-creator-202508',
  'update-target-collaboration-202508',
]);

/** Endpoints this generator cannot express with the transport helpers (none at the moment). */
const UNSUPPORTED = {};

async function getJson(url, cacheFile) {
  const file = path.join(cacheDir, cacheFile);
  if (!args.has('--refresh') && fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  if (args.has('--offline')) throw new Error('missing cache entry ' + cacheFile + ' (run without --offline)');
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  const json = await res.json();
  if (json.code !== 0) throw new Error(url + ' -> code ' + json.code + ' ' + json.message);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(json.data));
  return json.data;
}

async function loadOfficial() {
  const tree = (await getJson(`${BASE}/tree?workspace_id=3&${QUERY}`, 'tree.json')).document_tree;
  const byId = Object.fromEntries(tree.map((n) => [n.document_id, n]));
  const chainOf = (n) => {
    const chain = [];
    for (let c = n; c; c = byId[c.parent_id]) chain.unshift(c.name);
    return chain;
  };
  const docs = tree.filter((n) => n.is_api_doc && !n.is_dir && n.document_path);
  const endpoints = [];
  const queue = docs.slice();
  const worker = async () => {
    while (queue.length) {
      const doc = queue.shift();
      let data;
      try {
        data = await getJson(`${BASE}/api_meta?src_document_id=${encodeURIComponent(doc.document_path)}&${QUERY}`, `meta/${doc.document_path}.json`);
      } catch (error) {
        if (args.has('--offline')) continue;
        continue; // overview / guide pages have no API metadata
      }
      const meta = data && data.document_api_meta;
      if (!meta || !meta.interface_path) continue;
      const chain = chainOf(doc);
      endpoints.push({ slug: doc.document_path, group: chain[1] || chain[0], title: meta.title || doc.name, meta });
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));
  return endpoints.sort((a, b) => a.slug.localeCompare(b.slug));
}

const normPath = (p) => p.replace(/\$\{[^}]*\}/g, '{}').replace(/\{[^}]*\}/g, '{}').replace(/[`'"]/g, '').trim();

/** Endpoints and method names implemented by the hand-written modules (everything except *-official files). */
function scanHandWritten() {
  const keys = new Set();
  const names = {};
  const apiDir = path.join(src, 'api');
  for (const f of fs.readdirSync(apiDir).filter((f) => f.endsWith('-v3.api.ts'))) {
    const sf = ts.createSourceFile(f, fs.readFileSync(path.join(apiDir, f), 'utf8'), ts.ScriptTarget.ES2020, true);
    sf.forEachChild((n) => {
      if (!(ts.isFunctionDeclaration(n) && n.name)) return;
      (function find(x) {
        if (ts.isCallExpression(x) && /callTiktok(Api|Multipart|AuthApi)$/.test(x.expression.getText())) {
          const multipart = /Multipart$/.test(x.expression.getText());
          keys.add((multipart ? 'POST' : x.arguments[1].getText().replace(/'/g, '')) + ' ' + normPath(x.arguments[0].getText()));
        }
        ts.forEachChild(x, find);
      })(n);
    });
  }
  const subDir = path.join(src, 'submodules');
  for (const f of fs.readdirSync(subDir).filter((f) => f.endsWith('-v3.submodule.ts'))) {
    const sf = ts.createSourceFile(f, fs.readFileSync(path.join(subDir, f), 'utf8'), ts.ScriptTarget.ES2020, true);
    const file = f.replace('-v3.submodule.ts', '');
    names[file] = new Set();
    sf.forEachChild((n) => {
      if (ts.isClassDeclaration(n)) n.members.forEach((m) => ts.isMethodDeclaration(m) && names[file].add(m.name.getText()));
    });
  }
  return { keys, names };
}

const words = (s) => s.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
const lowerFirst = (w) => w.charAt(0).toLowerCase() + w.slice(1);
const upperFirst = (w) => w.charAt(0).toUpperCase() + w.slice(1);
const camel = (s) => words(s).map((w, i) => (i === 0 ? lowerFirst(w) : upperFirst(w))).join('');
const pascal = (s) => words(s).map(upperFirst).join('');
const versionOf = (slug) => (slug.match(/(\d{6})$/) || [])[1] || '';

function safeKey(name) {
  return /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
}
function doc(text, indent) {
  if (!text) return '';
  const lines = String(text).replace(/\*\//g, '*\\/').replace(/\r/g, '').split('\n').map((l) => l.trimEnd());
  return indent + '/** ' + lines.join('\n' + indent + ' * ') + ' */\n';
}

/** Build a tree from the flat `^`-prefixed parameter list. */
function buildTree(params) {
  const roots = [];
  const stack = [];
  for (const p of params || []) {
    const depth = (p.name.match(/^\^+/) || [''])[0].length;
    const node = { name: p.name.slice(depth), type: p.type, required: p.required === 'Y', desc: p.desc, children: [] };
    stack.length = depth;
    (depth === 0 ? roots : stack[depth - 1].children).push(node);
    stack[depth] = node;
  }
  return roots;
}

function tsType(node, indent, optionalAll) {
  const body = () => {
    if (!node.children.length) return 'Record<string, unknown>';
    return '{\n' + fields(node.children, indent + '  ', optionalAll) + indent + '}';
  };
  switch (node.type) {
    case 'string': return 'string';
    case 'int': return 'number';
    case 'bool': return 'boolean';
    case 'file': return 'Buffer';
    case 'upload-file': return 'TiktokUploadFile';
    case '[]string': return 'string[]';
    case '[]int': return 'number[]';
    case 'object': return body();
    case '[]object': return 'Array<' + body() + '>';
    default: return 'unknown';
  }
}
function fields(nodes, indent, optionalAll) {
  return nodes
    .map((n) => doc(n.desc, indent) + indent + safeKey(n.name) + (optionalAll || !n.required ? '?' : '') + ': ' + tsType(n, indent, optionalAll) + ';\n')
    .join('');
}
function objectType(nodes, optionalAll) {
  if (!nodes.length) return 'Record<string, never>';
  return '{\n' + fields(nodes, '  ', optionalAll) + '}';
}

function plan(endpoints, handWritten) {
  const byDomain = {};
  const skipped = [];
  const covered = [];
  const used = {}; // domain file -> method name -> count
  const prelim = [];
  for (const e of endpoints) {
    const verb = VERBS[e.meta.method];
    const key = verb + ' ' + normPath(e.meta.interface_path);
    const typesOnly = TYPES_ONLY.has(e.slug);
    if (handWritten.keys.has(key) && !typesOnly) { covered.push(e.slug); continue; }
    const domain = DOMAINS[e.group];
    if (!domain) { skipped.push([e.slug, 'no namespace for group ' + e.group]); continue; }
    if (UNSUPPORTED[e.slug]) { skipped.push([e.slug, UNSUPPORTED[e.slug]]); continue; }
    prelim.push({ ...e, verb, key, domain, typesOnly });
  }
  // Method names: title in camelCase; version suffix when the name is taken by hand-written code or another endpoint.
  const baseName = (e) => camel(e.title) || camel(e.slug);
  const counts = {};
  prelim.forEach((e) => { const k = e.domain.file + ':' + baseName(e); counts[k] = (counts[k] || 0) + 1; });
  for (const e of prelim) {
    const base = baseName(e);
    const taken = handWritten.names[e.domain.file] && handWritten.names[e.domain.file].has(base);
    const version = versionOf(e.slug);
    e.method = taken || counts[e.domain.file + ':' + base] > 1 ? base + version : base;
    e.typeBase = 'Tiktok' + e.domain.cls + pascal(e.method) + (e.method.endsWith(version) ? '' : version);
    (byDomain[e.domain.file] = byDomain[e.domain.file] || { domain: e.domain, endpoints: [] }).endpoints.push(e);
  }
  return { byDomain, skipped, covered };
}

function endpointModel(e) {
  const m = e.meta;
  const pathParams = (m.request_path_param || []).map((p) => ({ name: p.name, type: p.type, required: true, desc: p.desc, children: [] }));
  for (const match of m.interface_path.matchAll(/\{([^}]+)\}/g)) {
    if (!pathParams.some((p) => p.name === match[1])) pathParams.push({ name: match[1], type: 'string', required: true, desc: '', children: [] });
  }
  const queryParams = buildTree((m.request_query_param || []).filter((p) => !STANDARD_QUERY.has(p.name)));
  const bodyParams = buildTree(m.request_body_param || []);
  const response = buildTree(m.response_param || []);
  const data = response.find((n) => n.name === 'data');
  const fileFields = bodyParams.filter((n) => n.type === 'file');
  const fileField = fileFields[0];
  // One file and no query: callTiktokMultipart(). Several files, or files next to query parameters: callTiktokMultipartFiles().
  const multiFiles = fileFields.length > 1 || (fileFields.length > 0 && queryParams.length > 0);
  return { pathParams, queryParams, bodyParams, dataNodes: data ? data.children : [], fileField, fileFields, multiFiles };
}

function genRequest(list) {
  let out = '// Generated by scripts/sync-tiktok-official.cjs from the official TikTok Shop API metadata. Do not edit by hand.\n\n';
  if (list.some((e) => endpointModel(e).multiFiles)) out += "import type { TiktokUploadFile } from './config.request';\n\n";
  for (const e of list) {
    const model = endpointModel(e);
    const t = e.typeBase;
    if (model.pathParams.length) out += `export type ${t}Path = ${objectType(model.pathParams, false)};\n\n`;
    if (model.queryParams.length) out += `export type ${t}Query = ${objectType(model.queryParams, false)};\n\n`;
    if (model.bodyParams.length) {
      if (model.multiFiles) {
        const bodyFields = model.bodyParams.map((n) => (n.type === 'file' ? { ...n, type: 'upload-file' } : n));
        out += `export type ${t}Body = ${objectType(bodyFields, false)};\n\n`;
      } else if (model.fileField) {
        const rest = model.bodyParams.filter((n) => n !== model.fileField);
        out += `export type ${t}Body = {\n  /** The file to upload. */\n  ${safeKey(model.fileField.name)}: Buffer;\n  /** File name sent with the upload. Defaults to \\\`file\\\`. */\n  filename?: string;\n${fields(rest, '  ', false)}};\n\n`;
      } else {
        out += `export type ${t}Body = ${objectType(model.bodyParams, false)};\n\n`;
      }
    }
    const parts = [];
    if (model.pathParams.length) parts.push(['path', `${t}Path`, true]);
    if (model.queryParams.length) parts.push(['query', `${t}Query`, model.queryParams.some((n) => n.required)]);
    if (model.bodyParams.length) parts.push(['body', `${t}Body`, model.bodyParams.some((n) => n.required)]);
    if (parts.length) {
      out += `export type ${t}Params = {\n${parts.map(([k, type, req]) => `  ${k}${req ? '' : '?'}: ${type};\n`).join('')}};\n\n`;
    }
  }
  return /export type /.test(out) ? out : out + 'export {};\n';
}

function genResponse(list) {
  let out = '// Generated by scripts/sync-tiktok-official.cjs from the official TikTok Shop API metadata. Do not edit by hand.\n\n';
  for (const e of list) {
    const model = endpointModel(e);
    out += `export type ${e.typeBase}Response = ${objectType(model.dataNodes, true)};\n\n`;
  }
  return out;
}

function genApi(list, domain) {
  const methods = list.filter((e) => !e.typesOnly);
  const typeImports = (suffixes, file) =>
    methods.flatMap((e) => suffixes(e)).filter(Boolean).sort();
  const reqTypes = new Set();
  const resTypes = new Set();
  let out = '// Generated by scripts/sync-tiktok-official.cjs from the official TikTok Shop API metadata. Do not edit by hand.\n\n';
  const body = [];
  for (const e of methods) {
    const model = endpointModel(e);
    const t = e.typeBase;
    const hasParams = model.pathParams.length || model.queryParams.length || model.bodyParams.length;
    const required = model.pathParams.length || model.queryParams.some((n) => n.required) || model.bodyParams.some((n) => n.required);
    if (hasParams) reqTypes.add(`${t}Params`);
    if (model.pathParams.length) reqTypes.add(`${t}Path`);
    if (model.queryParams.length) reqTypes.add(`${t}Query`);
    if (model.bodyParams.length) reqTypes.add(`${t}Body`);
    resTypes.add(`${t}Response`);
    const scopes = ((e.meta.api_auth_info_list || []).map((a) => a.scope_key).filter(Boolean));
    const header =
      '/**\n' +
      ` * ${e.title}\n` +
      (e.meta.env_desc ? ` *\n${String(e.meta.env_desc).replace(/\*\//g, '*\\/').split('\n').map((l) => ' * ' + l.trimEnd()).join('\n')}\n` : '') +
      ` *\n * Endpoint: \`${e.verb} ${e.meta.interface_path}\`\n` +
      (scopes.length ? ` * Scopes: ${scopes.join(', ')}\n` : '') +
      ` * @see https://partner.tiktokshop.com/docv2/page/${e.slug}\n */\n`;
    const pathExpr = model.pathParams.length
      ? '`' + e.meta.interface_path.replace(/\{([^}]+)\}/g, (_, n) => '${encodeURIComponent(String(params.path.' + n + '))}') + '`'
      : "'" + e.meta.interface_path + "'";
    const paramDecl = !hasParams ? '' : required ? 'params: ' + t + 'Params, ' : 'params: ' + t + 'Params = {}, ';
    const respType = `TiktokResponseCommon<${t}Response>`;
    let call;
    if (model.multiFiles) {
      const fieldsExpr = '{ ' + model.bodyParams.map((n) => `'${n.name}': params.body.${n.name}`).join(', ') + ' }';
      call = `  return TiktokHelper.callTiktokMultipartFiles<${respType}>(\n    ${pathExpr},\n    { ${model.queryParams.length ? 'query: params.query, ' : ''}fields: ${fieldsExpr} },\n    config,\n    '${e.method}',\n  );\n`;
    } else if (model.fileField) {
      const f = safeKey(model.fileField.name);
      const others = model.bodyParams.filter((n) => n !== model.fileField).map((n) => n.name);
      const fieldsExpr = '{ ' + [`'${model.fileField.name}': params.body.${model.fileField.name}`, ...others.map((n) => `'${n}': params.body?.${n}`)].join(', ') + ' }';
      call = `  return TiktokHelper.callTiktokMultipart<${respType}>(\n    ${pathExpr},\n    ${fieldsExpr},\n    '${model.fileField.name}',\n    params.body.filename || 'file',\n    config,\n    '${e.method}',\n  );\n`;
    } else {
      const opts = [];
      if (model.queryParams.length) opts.push('query: params' + (required ? '' : '') + '.query');
      if (model.bodyParams.length) opts.push('body: params.body');
      call = `  return TiktokHelper.callTiktokApi<${respType}>(\n    ${pathExpr},\n    '${e.verb}',\n    { ${opts.join(', ')} },\n    config,\n    '${e.method}',\n  );\n`;
    }
    body.push(header + `export async function ${e.method}(${paramDecl}config: TiktokConfig): Promise<${respType}> {\n${call}}\n`);
  }
  out += "import { TiktokConfig } from '../dto/request/config.request';\n";
  out += "import { TiktokResponseCommon } from '../dto/response/config.response';\n";
  out += "import * as TiktokHelper from '../common/helper';\n";
  if (reqTypes.size) out += `import type {\n${[...reqTypes].sort().map((n) => '  ' + n + ',\n').join('')}} from '../dto/request/${domain.file}-official.request';\n`;
  out += `import type {\n${[...resTypes].sort().map((n) => '  ' + n + ',\n').join('')}} from '../dto/response/${domain.file}-official.response';\n\n`;
  out += body.join('\n');
  return out;
}

function genSubmodule(list, domain) {
  const methods = list.filter((e) => !e.typesOnly);
  const names = methods.map((e) => e.method).sort();
  const reqTypes = new Set();
  const resTypes = new Set();
  const members = methods.map((e) => {
    const model = endpointModel(e);
    const t = e.typeBase;
    const hasParams = model.pathParams.length || model.queryParams.length || model.bodyParams.length;
    const required = model.pathParams.length || model.queryParams.some((n) => n.required) || model.bodyParams.some((n) => n.required);
    if (hasParams) reqTypes.add(`${t}Params`);
    resTypes.add(`${t}Response`);
    const decl = !hasParams ? '' : required ? 'params: ' + t + 'Params' : 'params: ' + t + 'Params = {}';
    const callArgs = (hasParams ? 'params, ' : '') + 'this.config';
    return `  /** ${e.title} - \`${e.verb} ${e.meta.interface_path}\` */\n  async ${e.method}(${decl}): Promise<TiktokResponseCommon<${t}Response>> {\n    return await ${e.method}(${callArgs});\n  }\n`;
  });
  let out = '// Generated by scripts/sync-tiktok-official.cjs from the official TikTok Shop API metadata. Do not edit by hand.\n\n';
  out += "import { TiktokConfig } from '../dto/request/config.request';\n";
  out += "import { TiktokResponseCommon } from '../dto/response/config.response';\n";
  out += `import {\n${names.map((n) => '  ' + n + ',\n').join('')}} from '../api/${domain.file}-official.api';\n`;
  if (reqTypes.size) out += `import type {\n${[...reqTypes].sort().map((n) => '  ' + n + ',\n').join('')}} from '../dto/request/${domain.file}-official.request';\n`;
  out += `import type {\n${[...resTypes].sort().map((n) => '  ' + n + ',\n').join('')}} from '../dto/response/${domain.file}-official.response';\n\n`;
  out += `/**\n * TikTok Shop \`${domain.cls}\` endpoints generated from the official API metadata.\n * Access them through \`tiktok.${domain.key}.<method>()\`.\n */\n`;
  const className = domain.existing ? `Tiktok${domain.cls}Official` : `Tiktok${domain.cls}`;
  out += `export class ${className} {\n  constructor(protected config: TiktokConfig) {}\n\n${members.join('\n')}}\n`;
  return out;
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

(async () => {
  const endpoints = await loadOfficial();
  const handWritten = scanHandWritten();
  const { byDomain, skipped, covered } = plan(endpoints, handWritten);
  const generated = Object.values(byDomain).reduce((n, d) => n + d.endpoints.filter((e) => !e.typesOnly).length, 0);
  console.log(`official endpoints: ${endpoints.length}, already implemented by key: ${covered.length}, to generate: ${generated}, skipped: ${skipped.length}`);
  skipped.forEach(([slug, why]) => console.log('  skipped', slug, '-', why));
  if (args.has('--report')) return;
  const manifest = {};
  for (const { domain, endpoints: list } of Object.values(byDomain)) {
    write(path.join(src, 'dto/request', domain.file + '-official.request.ts'), genRequest(list));
    write(path.join(src, 'dto/response', domain.file + '-official.response.ts'), genResponse(list));
    if (list.some((e) => !e.typesOnly)) {
      write(path.join(src, 'api', domain.file + '-official.api.ts'), genApi(list, domain));
      write(path.join(src, 'submodules', domain.file + '-official.submodule.ts'), genSubmodule(list, domain));
    }
    console.log('  ' + domain.key.padEnd(20), list.filter((e) => !e.typesOnly).length, 'methods');
    for (const e of list.filter((x) => !x.typesOnly)) {
      const model = endpointModel(e);
      const sections = [];
      if (model.pathParams.length) sections.push('path');
      if (model.queryParams.length) sections.push('query');
      if (model.bodyParams.length) sections.push('body');
      manifest[domain.key + '.' + e.method] = { slug: e.slug, verb: e.verb, path: e.meta.interface_path, sections, multipart: Boolean(model.fileField) };
    }
  }
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  write(path.join(pkg, 'test/fixtures/official-manifest.json'), JSON.stringify(sorted, null, 2) + '\n');
  console.log('  manifest: ' + Object.keys(sorted).length + ' methods');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { LAZADA_PRODUCT_STATUS, LZD_ALGORITHM, LZD_AUTH_PATHS, LZD_DIGEST, LZD_END_POINT, LZD_END_POINT_TOKEN, LZD_REGION_END_POINTS } from './constant';
import axios from 'axios';
import { createHmac } from 'crypto';
import { LazadaConfig } from '../dto/request/config.request';

export function concatDictionaryKeyValue(object) {
  return Object.keys(object).reduce(function (concatString, key) {
    return concatString.concat(key + object[key]);
  }, '');
}
export function createSignature(path, payload, appSecret) {
  const uri = concatDictionaryKeyValue(keySort(payload));
  const input = `${path}${uri}`;
  const hash = createHmac(LZD_ALGORITHM, appSecret).update(input).digest(LZD_DIGEST);
  return hash.toUpperCase();
}

export function parseToRequestParam(obj) {
  let str = '';
  for (const key in obj) {
    if (str != '') {
      str += '&';
    }
    str += key + '=' + encodeURIComponent(obj[key]);
  }
  return str;
}

export function keySort(unordered) {
  return Object.keys(unordered)
    .sort()
    .reduce(function (ordered, key) {
      ordered[key] = unordered[key];
      return ordered;
    }, {});
}

export function toRequestProductsXML(skus) {
  return `<Request> <Product> <Skus> ${skus.join(' ')} </Skus> </Product> </Request>`;
}

export function toProductXML(itemId, skuId, sellerSku, quantity) {
  return `<Sku> <ItemId>${itemId}</ItemId> <SkuId>${skuId}</SkuId> <SellerSku>${sellerSku}</SellerSku> <SellableQuantity>${quantity}</SellableQuantity> </Sku>`;
}

export function productParametersXML(itemId, skuId, sellerSku, status: LAZADA_PRODUCT_STATUS) {
  return `<Sku> <ItemId>${itemId}</ItemId> <SkuId>${skuId}</SkuId> <SellerSku>${sellerSku}</SellerSku><Status>${status}</Status></Sku>`;
}

export function priceParametersXML(itemId, skuId, sellerSku, price) {
  return `<Sku> <ItemId>${itemId}</ItemId> <SkuId>${skuId}</SkuId> <SellerSku>${sellerSku}</SellerSku><Price>${price}</Price></Sku>`;
}

async function httpGet(path: string, payload: Record<string, unknown>, appSecret: string) {
  const sortObject = keySort(payload);
  const params = parseToRequestParam(sortObject);
  const signature = createSignature(path, sortObject, appSecret);
  try {
    const res = await axios.get(`${LZD_END_POINT}${path}?${params}&sign=${signature}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function executePOST(path: string, payload: Record<string, unknown>, appSecret: string) {
  const sortObject = keySort(payload);
  const params = parseToRequestParam(sortObject);
  const signature = createSignature(path, sortObject, appSecret);
  try {
    const res = await axios.post(`${LZD_END_POINT}${path}?${params}&sign=${signature}`);

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function executeAuth(path: string, payload: Record<string, unknown>, appSecret: string) {
  const sortObject = keySort(payload);
  const params = parseToRequestParam(sortObject);
  const signature = createSignature(path, sortObject, appSecret);

  try {
    const res = await axios.get(`https://auth.lazada.com/rest${path}?${params}&sign=${signature}`);

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

function createProductParametersXML2(payload) {
  const { primaryCategory, images, name, description, disableAttributeAutoFill, brand_id, video, phoneType, warrantyType, skus } = payload;

  // Build the Skus XML
  const skusXML = skus
    .map((sku) => {
      return `
        <Sku>
            <SellerSku>${sku.sellerSku}</SellerSku>
            <quantity>${sku.quantity}</quantity>
            <price>${sku.price}</price>
            <special_price>${sku.specialPrice}</special_price>
            <package_height>${sku.packageHeight}</package_height>
            <package_length>${sku.packageLength}</package_length>
            <package_width>${sku.packageWidth}</package_width>
            <package_weight>${sku.packageWeight}</package_weight>
            <Images>
                ${sku.images.map((image) => `<Image>${image}</Image>`).join('\n')}
            </Images>
        </Sku>
    `;
    })
    .join('\n');

  // Build the final XML
  const xml = `<Request>
    <Product>
        <PrimaryCategory>${primaryCategory}</PrimaryCategory>
        <Images>
            ${images.map((image) => `<Image>${image}</Image>`).join('\n')}
        </Images>
        <Attributes>
            <name>${name}</name>
            <description>${description}</description>
            <disableAttributeAutoFill>${disableAttributeAutoFill}</disableAttributeAutoFill>
            <brand_id>${brand_id}</brand_id>
            <video>${video}</video>
            <phone_type>${phoneType}</phone_type>
            <warranty_type>${warrantyType}</warranty_type>
        </Attributes>
        <Skus>
            ${skusXML}
        </Skus>
    </Product>
</Request>`;

  return xml;
}

function getTimestampMilisec() {
  return new Date().getTime();
}

function getTimestampSec() {
  return Math.floor(Date.now() / 1000);
}

function isTokenExpired(time: number): boolean {
  if (time.toString().length === 13) {
    time = time / 1000;
  }
  const now = Math.floor(Date.now() / 1000);

  // If expiration time is less than or equal to current time, it's expired
  return time <= now;
}

// ============================================================
// Production-grade helpers (used by the newly added domain APIs).
//
// These coexist with the legacy `httpGet`/`executePOST`/`createSignature`
// helpers above, which remain unchanged for backward compatibility with the
// original Order/Product/Authorization APIs published before this addition.
// New code should prefer `callLazadaApi()`, which fixes two real
// production issues present in the legacy helpers:
//
//   1. Regional routing: the legacy `LZD_END_POINT` constant is hardcoded to
//      `api.lazada.vn`, ignoring `LazadaConfig.countryCode`. `resolveEndPoint()`
//      selects the correct regional host, defaulting to `vn` only when
//      `countryCode` is omitted (preserves old behavior for existing callers).
//   2. POST payload transport: the legacy `executePOST` puts the entire
//      payload in the query string, which risks exceeding URL length limits
//      for endpoints with large/nested JSON bodies (bulk updates, product
//      creation, etc). `httpPostForm()` sends payload fields as an
//      `application/x-www-form-urlencoded` body instead, matching Lazada's
//      documented POST convention, while still including every field in the
//      HMAC signature exactly like the legacy helpers do.
// ============================================================

/**
 * Lazada API error thrown by `callLazadaApi()` when the response has a
 * non-`"0"` `code` field, or when the underlying HTTP request itself fails
 * (network error, timeout, non-2xx status without a parseable Lazada error
 * body).
 */
class LazadaApiError extends Error {
  code: string;
  type?: string;
  requestId?: string;
  status?: number;
  raw?: unknown;
  context?: string;
  cause?: unknown;

  constructor(options: {
    code?: string;
    message?: string;
    type?: string;
    requestId?: string;
    status?: number;
    raw?: unknown;
    context?: string;
    cause?: unknown;
  } = {}) {
    const code = options.code || 'LazadaApiError';
    const message = options.message || 'Lazada API request failed.';
    const context = options.context ? ` - ${options.context}` : '';
    super(`[Lazada API Error${context}] ${code}: ${message}`);

    this.name = 'LazadaApiError';
    this.code = code;
    this.type = options.type;
    this.requestId = options.requestId;
    this.status = options.status;
    this.raw = options.raw;
    this.context = options.context;
    this.cause = options.cause;
  }
}

/** Default per-request timeout (ms) for every request made through `callLazadaApi()`. */
const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * Resolve the correct Lazada regional REST base URL for this config and path.
 *
 * Auth/token-exchange paths always use the fixed auth host regardless of
 * `countryCode`. Otherwise, the region is looked up from
 * `config.countryCode` (case-insensitively), falling back to `vn` (this
 * package's historical default) when `countryCode` is unset or unrecognized.
 */
function resolveEndPoint(config: LazadaConfig, path: string): string {
  if (LZD_AUTH_PATHS.has(path)) {
    return LZD_END_POINT_TOKEN;
  }
  const region = (config.countryCode || 'vn').toLowerCase();
  return LZD_REGION_END_POINTS[region] || LZD_END_POINT;
}

function throwLazadaApiError(raw: unknown, context?: string, status?: number, cause?: unknown): never {
  if (raw && typeof raw === 'object') {
    const r = raw as Record<string, unknown>;
    throw new LazadaApiError({
      code: typeof r.code === 'string' || typeof r.code === 'number' ? String(r.code) : 'LazadaError',
      message: typeof r.message === 'string' ? r.message : 'Lazada API returned an error response.',
      type: typeof r.type === 'string' ? r.type : undefined,
      requestId: typeof r.request_id === 'string' ? r.request_id : undefined,
      status,
      raw,
      context,
      cause,
    });
  }

  throw new LazadaApiError({
    code: 'LazadaError',
    message: typeof raw === 'string' ? raw : 'Lazada API returned an error response.',
    status,
    raw,
    context,
    cause,
  });
}

function handleLazadaError(err: unknown, context?: string): never {
  if (axios.isAxiosError(err)) {
    if (err.response?.data) {
      throwLazadaApiError(err.response.data, context, err.response.status, err);
    }
    throw new LazadaApiError({
      code: err.code || 'NetworkError',
      message: err.message,
      status: err.response?.status,
      raw: err.toJSON ? err.toJSON() : err,
      context,
      cause: err,
    });
  }

  throw new LazadaApiError({
    code: 'UnknownError',
    message: err instanceof Error ? err.message : String(err),
    raw: err,
    context,
    cause: err,
  });
}

/**
 * Build the base authenticated payload fields (`app_key`, `sign_method`,
 * `timestamp`, `access_token`) shared by every non-auth-exchange Lazada
 * request, matching the signing pool used by `callLazadaApi()`.
 */
function buildAuthFields(config: LazadaConfig): Record<string, string> {
  const fields: Record<string, string> = {
    app_key: config.appKey,
    sign_method: LZD_ALGORITHM,
    timestamp: String(getTimestampMilisec()),
  };
  if (config.appAccessToken) {
    fields.access_token = config.appAccessToken;
  }
  return fields;
}

/**
 * Flatten a payload for query-string / form-field transport: `undefined`/`null`
 * values are dropped, objects/arrays are JSON-stringified, everything else is
 * coerced to a string. Matches the form-encoding behavior of the reference
 * Lazada SDKs (complex values are JSON-stringified before form-encoding).
 */
function flattenPayloadForTransport(payload: Record<string, unknown>): Record<string, string> {
  const flat: Record<string, string> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) continue;
    flat[key] = typeof value === 'object' ? JSON.stringify(value) : String(value);
  }
  return flat;
}

/**
 * Perform a Lazada GET request with a bounded timeout, correct regional
 * routing, and structured error handling via `LazadaApiError`.
 */
async function httpGetJson<T = any>(path: string, payload: Record<string, unknown>, config: LazadaConfig, context?: string): Promise<T> {
  const authFields = LZD_AUTH_PATHS.has(path) ? {} : buildAuthFields(config);
  const merged = { ...authFields, ...flattenPayloadForTransport(payload) };
  const sorted = keySort(merged);
  const params = parseToRequestParam(sorted);
  const signature = createSignature(path, sorted, config.appSecret);
  const url = `${resolveEndPoint(config, path)}${path}?${params}&sign=${signature}`;

  try {
    const res = await axios.get(url, { timeout: DEFAULT_TIMEOUT_MS });
    const data = res.data;
    if (data && typeof data === 'object' && 'code' in data && String(data.code) !== '0') {
      throwLazadaApiError(data, context, res.status);
    }
    return data as T;
  } catch (err) {
    if (err instanceof LazadaApiError) throw err;
    return handleLazadaError(err, context);
  }
}

/**
 * Perform a Lazada POST request using `application/x-www-form-urlencoded`,
 * matching Lazada's documented POST convention. Every payload field
 * participates in the HMAC signature exactly like the legacy helpers, but
 * travels in the request body instead of the URL query string, avoiding URL
 * length limits for large/nested payloads.
 */
async function httpPostForm<T = any>(path: string, payload: Record<string, unknown>, config: LazadaConfig, context?: string): Promise<T> {
  const authFields = LZD_AUTH_PATHS.has(path) ? {} : buildAuthFields(config);
  const flatPayload = flattenPayloadForTransport(payload);
  const merged = { ...authFields, ...flatPayload };
  const sorted = keySort(merged);
  const signature = createSignature(path, sorted, config.appSecret);

  const authParams = parseToRequestParam(keySort(authFields));
  const url = `${resolveEndPoint(config, path)}${path}?${authParams}${authParams ? '&' : ''}sign=${signature}`;

  const form = new URLSearchParams();
  Object.entries(flatPayload).forEach(([key, value]) => form.set(key, value));

  try {
    const res = await axios.post(url, form.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: DEFAULT_TIMEOUT_MS,
    });
    const data = res.data;
    if (data && typeof data === 'object' && 'code' in data && String(data.code) !== '0') {
      throwLazadaApiError(data, context, res.status);
    }
    return data as T;
  } catch (err) {
    if (err instanceof LazadaApiError) throw err;
    return handleLazadaError(err, context);
  }
}

type LazadaApiMethod = 'GET' | 'POST';

/**
 * Generic authenticated Lazada API call helper backing the domain API
 * modules added after the original Order/Product/Authorization surface.
 *
 * Dispatches to `httpGetJson()` for GET or `httpPostForm()` for POST,
 * applying correct regional routing, a bounded timeout, and throwing
 * `LazadaApiError` on any Lazada error response (`code !== "0"`) or
 * transport failure.
 */
async function callLazadaApi<T = any>(
  path: string,
  method: LazadaApiMethod,
  payload: Record<string, unknown>,
  config: LazadaConfig,
  context?: string,
): Promise<T> {
  return method === 'GET'
    ? httpGetJson<T>(path, payload, config, context)
    : httpPostForm<T>(path, payload, config, context);
}

export {
  httpGet,
  getTimestampMilisec,
  getTimestampSec,
  isTokenExpired,
  createProductParametersXML2,
  LazadaApiError,
  resolveEndPoint,
  callLazadaApi,
  httpGetJson,
  httpPostForm,
  throwLazadaApiError,
};

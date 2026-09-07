import * as crypto from 'crypto-js';
import { TIKTOK_END_POINT, TIKTOK_END_POINT_AUTH } from './constant';
import { TiktokConfig } from '../dto/request/config.request';
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';

export function commonParameter(config, timestamp) {
  const { appKey } = config;
  const commonParam = '?app_key=' + appKey + '&sign=' + '' + '&timestamp=' + timestamp;

  return commonParam;
}

function commonParameter2(config, timestamp) {
  const { appKey, shopId, shopCipher } = config;
  const commonParam =
    '?app_key=' + appKey + '&sign=' + '' + '&timestamp=' + timestamp + '&shop_id=' + shopId + '&shop_cipher=' + shopCipher;

  return commonParam;
}

function objKeySort(obj) {
  const newKey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newKey.length; i++) {
    newObj[newKey[i]] = obj[newKey[i]];
  }
  return newObj;
}

function signRequest(params: Record<string, string>, path: string, config: Record<string, any>, body: Record<string, any>) {
  const { appSecret } = config;
  delete params['sign'];
  delete params['access_token'];
  const sortParam = objKeySort(params);
  let signstring = appSecret + path;

  for (const key in sortParam) {
    signstring = signstring + key + sortParam[key];
  }
  signstring = signstring + (!body ? appSecret : JSON.stringify(body) + appSecret);

  const signature = crypto.HmacSHA256(signstring, appSecret).toString();
  return signature;
}

function parseParmsURL(url) {
  const params = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

function genURLwithSignature(path, commonParam, config, body?) {
  const url = new URL(TIKTOK_END_POINT + path + commonParam);
  const params = parseParmsURL(url);
  const signature2 = signRequest(params, path, config, body);
  url.searchParams.set('sign', signature2);
  return url.toString();
}

function getTimestampHoursAgo(hours: number): number {
  const oldDate = new Date();
  oldDate.setMilliseconds(0);
  return Math.floor((oldDate.getTime() - hours * 60 * 60 * 1000) / 1000);
}

export function replacePackageId(path: string, packageId: string): string {
  return path.replace('{package_id}', packageId);
}

function replacePlaceholder(path: string, placeholder: string, replacement: string): string {
  return path.replace(`{${placeholder}}`, replacement);
}

function handleError(err: unknown) {
  if (axios.isAxiosError(err) && err.response) {
    return err.response.data;
  }
  return { error: 'Unknown error' };
}

function getHeaders(config: TiktokConfig, contentType = 'application/json') {
  return {
    'Content-Type': contentType,
    'x-tts-access-token': config.accessToken,
  };
}

async function httpPost(url: string, body: unknown, headers: Record<string, string | undefined>) {
  try {
    const res: AxiosResponse = await axios.post(url, body, {
      headers,
    });
    return res.data;
  } catch (err: unknown) {
    return handleError(err);
  }
}

async function httpGet(url: string, config: TiktokConfig) {
  try {
    const res: AxiosResponse = await axios.get(url, {
      headers: getHeaders(config),
    });
    return res.data;
  } catch (err: unknown) {
    return handleError(err);
  }
}

function getTimestamp() {
  return new Date().getTime();
}

function isAccessTokenValid(time: number): boolean {
  if (time.toString().length === 13) {
    time = time / 1000;
  }
  const now = Math.floor(Date.now() / 1000);
  return time > now;
}

function isTokenExpired(time: number): boolean {
  if (time.toString().length === 13) {
    time = time / 1000;
  }
  const now = Math.floor(Date.now() / 1000);

  // If expiration time is less than or equal to current time, it's expired
  return time <= now;
}

export {
  httpGet,
  httpPost,
  getHeaders,
  getTimestamp,
  commonParameter2,
  objKeySort,
  signRequest,
  parseParmsURL,
  genURLwithSignature,
  getTimestampHoursAgo,
  replacePlaceholder,
  isAccessTokenValid,
  isTokenExpired,
};

// ============================================================
// Production-grade helpers (used by the domain API modules covering the
// full TikTok Shop Open API surface: Affiliate Partner/Seller, Analytics,
// Event, Finance, Fulfillment, Logistics, Order, Product, Promotion,
// Return/Refund, Seller, Shop - 155 endpoints across 14 domains).
//
// These coexist with the legacy httpGet/httpPost/signRequest helpers
// above, which remain unchanged for backward compatibility with the
// original v1/v2 Order/Product/Authorization/Fulfillment APIs published
// before this addition.
//
// callTiktokApi() implements the exact request-building algorithm of the
// TikTok Shop v1 signature scheme (matching signRequest() above and the
// TikTok-documented signing rules): flatten query params (arrays joined by
// comma), merge in app_key/timestamp/optional shop_cipher/
// category_asset_cipher, sign with HMAC-SHA256 over
// "appSecret + path + sortedFlatQuery + jsonBody + appSecret", then send
// the JSON body (if any) with the x-tts-access-token header.
// ============================================================

/**
 * TikTok Shop API error thrown by callTiktokApi()/callTiktokMultipart()
 * when the response has a non-zero `code` field, or when the underlying
 * HTTP request itself fails (network error, timeout, non-2xx status).
 */
class TiktokApiError extends Error {
  code: number | string;
  requestId?: string;
  status?: number;
  raw?: unknown;
  context?: string;
  cause?: unknown;

  constructor(
    options: {
      code?: number | string;
      message?: string;
      requestId?: string;
      status?: number;
      raw?: unknown;
      context?: string;
      cause?: unknown;
    } = {},
  ) {
    const code = options.code ?? 'TiktokApiError';
    const message = options.message || 'TikTok Shop API request failed.';
    const context = options.context ? ` - ${options.context}` : '';
    super(`[TikTok Shop API Error${context}] ${code}: ${message}`);

    this.name = 'TiktokApiError';
    this.code = code;
    this.requestId = options.requestId;
    this.status = options.status;
    this.raw = options.raw;
    this.context = options.context;
    this.cause = options.cause;
  }
}

/** Default per-request timeout (ms) for every request made through callTiktokApi()/callTiktokMultipart(). */
const DEFAULT_TIMEOUT_MS = 30_000;

function throwTiktokApiError(raw: unknown, context?: string, status?: number, cause?: unknown): never {
  if (raw && typeof raw === 'object') {
    const r = raw as Record<string, unknown>;
    throw new TiktokApiError({
      code: typeof r.code === 'number' || typeof r.code === 'string' ? r.code : 'TiktokError',
      message: typeof r.message === 'string' ? r.message : 'TikTok Shop API returned an error response.',
      requestId: typeof r.request_id === 'string' ? r.request_id : undefined,
      status,
      raw,
      context,
      cause,
    });
  }

  throw new TiktokApiError({
    code: 'TiktokError',
    message: typeof raw === 'string' ? raw : 'TikTok Shop API returned an error response.',
    status,
    raw,
    context,
    cause,
  });
}

function handleTiktokError(err: unknown, context?: string): never {
  if (axios.isAxiosError(err)) {
    if (err.response?.data) {
      throwTiktokApiError(err.response.data, context, err.response.status, err);
    }
    throw new TiktokApiError({
      code: err.code || 'NetworkError',
      message: err.message,
      status: err.response?.status,
      raw: err.toJSON ? err.toJSON() : err,
      context,
      cause: err,
    });
  }

  throw new TiktokApiError({
    code: 'UnknownError',
    message: err instanceof Error ? err.message : String(err),
    raw: err,
    context,
    cause: err,
  });
}

/**
 * Flatten a query object for signing/transport: nested `query` objects are
 * spread one level, arrays are comma-joined, undefined/null values are
 * dropped, everything else is coerced with String(). Matches the
 * flattening behavior of the reference TikTok Shop SDKs.
 */
function flattenTiktokQuery(query: Record<string, unknown> | undefined): Record<string, string> {
  const flat: Record<string, string> = {};
  if (!query) return flat;
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      flat[key] = value.join(',');
    } else if (typeof value === 'object') {
      // A nested plain object (e.g. some 'query' wrappers pass an object one level deep) -
      // flatten its own entries the same way, matching Request.ts's 'query' special-case.
      for (const [innerKey, innerValue] of Object.entries(value as Record<string, unknown>)) {
        if (innerValue === undefined || innerValue === null) continue;
        flat[innerKey] = Array.isArray(innerValue) ? innerValue.join(',') : String(innerValue);
      }
    } else {
      flat[key] = String(value);
    }
  }
  return flat;
}

/**
 * Compute the TikTok Shop v1 HMAC-SHA256 signature:
 * HMAC_SHA256(appSecret + path + sortedFlatQueryConcat + jsonBody, appSecret)
 * where sortedFlatQueryConcat is every (non-sign, non-access_token) query
 * key+value concatenated in alphabetical key order, and jsonBody is the
 * JSON-stringified body (empty string when there is no body).
 */
function signTiktokRequest(path: string, flatQuery: Record<string, string>, appSecret: string, body?: unknown): string {
  const sortedKeys = Object.keys(flatQuery).sort();
  const sortedQuery = sortedKeys.map((key) => `${key}${flatQuery[key]}`).join('');
  const bodyString = body && typeof body === 'object' && Object.keys(body as Record<string, unknown>).length > 0 ? JSON.stringify(body) : '';
  const baseString = `${appSecret}${path}${sortedQuery}${bodyString}${appSecret}`;
  return crypto.HmacSHA256(baseString, appSecret).toString();
}

type TiktokApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * Generic authenticated TikTok Shop API call, backing the domain API
 * modules covering the full 155-endpoint surface added after the original
 * Order/Product/Authorization/Fulfillment v1/v2 APIs.
 *
 * Builds the signed request URL (including app_key, timestamp, and - when
 * present on config - shop_cipher/category_asset_cipher), sends body as
 * JSON when provided, and throws TiktokApiError on any TikTok error
 * response (code !== 0) or transport failure.
 */
async function callTiktokApi<T = any>(
  path: string,
  method: TiktokApiMethod,
  options: { query?: Record<string, unknown>; body?: Record<string, unknown> },
  config: TiktokConfig,
  context?: string,
): Promise<T> {
  const timestamp = Math.floor(Date.now() / 1000).toString();

  const unsignedQuery: Record<string, unknown> = {
    ...flattenTiktokQuery(options.query),
    app_key: config.appKey,
    timestamp,
  };
  if (config.shopCipher) {
    unsignedQuery.shop_cipher = config.shopCipher;
  }
  if (config.categoryAssetsCipher) {
    unsignedQuery.category_asset_cipher = config.categoryAssetsCipher;
  }

  const flatQuery = flattenTiktokQuery(unsignedQuery);
  const signature = signTiktokRequest(path, flatQuery, config.appSecret, options.body);

  const url = new URL(TIKTOK_END_POINT + path);
  Object.entries(flatQuery).forEach(([key, value]) => url.searchParams.append(key, value));
  url.searchParams.append('sign', signature);

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (config.accessToken) {
    headers['x-tts-access-token'] = config.accessToken;
  }

  try {
    const res: AxiosResponse = await axios.request({
      url: url.toString(),
      method,
      headers,
      data: options.body,
      timeout: DEFAULT_TIMEOUT_MS,
    });
    const data = res.data;
    if (data && typeof data === 'object' && 'code' in data && Number(data.code) !== 0) {
      throwTiktokApiError(data, context, res.status);
    }
    return data as T;
  } catch (err) {
    if (err instanceof TiktokApiError) throw err;
    return handleTiktokError(err, context);
  }
}

/**
 * Multipart/form-data TikTok Shop API call (used by uploadProductImage/
 * uploadProductFile). Per the reference SDK's multipart signing
 * convention, the signature is computed with an EMPTY body component
 * (multipart bodies are never included in the HMAC base string, unlike
 * JSON-body requests via callTiktokApi()), even though the actual
 * multipart body is still sent over the wire.
 */
async function callTiktokMultipart<T = any>(
  path: string,
  fields: Record<string, string | Buffer | undefined>,
  fileFieldName: string,
  filename: string,
  config: TiktokConfig,
  context?: string,
): Promise<T> {
  const timestamp = Math.floor(Date.now() / 1000).toString();

  const unsignedQuery: Record<string, unknown> = {
    app_key: config.appKey,
    timestamp,
  };
  if (config.shopCipher) {
    unsignedQuery.shop_cipher = config.shopCipher;
  }
  if (config.categoryAssetsCipher) {
    unsignedQuery.category_asset_cipher = config.categoryAssetsCipher;
  }

  const flatQuery = flattenTiktokQuery(unsignedQuery);
  // Multipart requests sign with NO body component (matches RequestMultipart.ts: body: undefined).
  const signature = signTiktokRequest(path, flatQuery, config.appSecret, undefined);

  const url = new URL(TIKTOK_END_POINT + path);
  Object.entries(flatQuery).forEach(([key, value]) => url.searchParams.append(key, value));
  url.searchParams.append('sign', signature);

  const form = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined) return;
    if (key === fileFieldName && Buffer.isBuffer(value)) {
      form.append(key, value, filename);
    } else {
      form.append(key, value);
    }
  });

  const headers: Record<string, string> = { ...form.getHeaders() };
  if (config.accessToken) {
    headers['x-tts-access-token'] = config.accessToken;
  }

  try {
    const res: AxiosResponse = await axios.post(url.toString(), form, {
      headers,
      timeout: DEFAULT_TIMEOUT_MS,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });
    const data = res.data;
    if (data && typeof data === 'object' && 'code' in data && Number(data.code) !== 0) {
      throwTiktokApiError(data, context, res.status);
    }
    return data as T;
  } catch (err) {
    if (err instanceof TiktokApiError) throw err;
    return handleTiktokError(err, context);
  }
}

export { TiktokApiError, callTiktokApi, callTiktokMultipart };

/**
 * TikTok Shop OAuth token-exchange call (getAccessToken / refreshAccessToken). Unlike
 * callTiktokApi(), these endpoints authenticate via app_key/app_secret sent directly as query
 * parameters (matching the reference SDK's authRequest()) and do NOT use HMAC signing.
 */
async function callTiktokAuthApi<T = any>(
  path: string,
  method: TiktokApiMethod,
  query: Record<string, string | undefined>,
  context?: string,
): Promise<T> {
  const url = new URL(TIKTOK_END_POINT_AUTH + path);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, value);
  });

  try {
    const res: AxiosResponse = await axios.request({
      url: url.toString(),
      method,
      headers: { 'Content-Type': 'application/json' },
      timeout: DEFAULT_TIMEOUT_MS,
    });
    const data = res.data;
    if (data && typeof data === 'object' && 'code' in data && Number(data.code) !== 0) {
      throwTiktokApiError(data, context, res.status);
    }
    return data as T;
  } catch (err) {
    if (err instanceof TiktokApiError) throw err;
    return handleTiktokError(err, context);
  }
}

export { callTiktokAuthApi };

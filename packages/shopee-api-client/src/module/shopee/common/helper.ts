import { ShopeeConfig } from '../dto/request/config.request';
import axios, { AxiosResponse } from 'axios';
import { createHmac } from 'crypto';

/**
 * Default per-request timeout (ms) applied to every Shopee HTTP call.
 * Prevents requests from hanging indefinitely when Shopee or the network
 * stalls.
 */
const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * Default retry policy for idempotent (GET) Shopee requests.
 * POST requests are never auto-retried by this SDK because Shopee mutation
 * endpoints (ship order, cancel order, add item, ...) are not guaranteed
 * idempotent, and a silent retry could duplicate a side effect.
 */
const DEFAULT_MAX_RETRIES = 2;
const DEFAULT_RETRY_BASE_DELAY_MS = 300;
const DEFAULT_RETRY_MAX_DELAY_MS = 4_000;

/** HTTP status codes considered safe/likely-transient to retry. */
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

interface ShopeeApiErrorOptions {
  code?: string;
  message?: string;
  requestId?: string;
  status?: number;
  raw?: unknown;
  context?: string;
  cause?: unknown;
}

class ShopeeApiError extends Error {
  code: string;
  requestId?: string;
  status?: number;
  raw?: unknown;
  context?: string;
  cause?: unknown;

  constructor(options: ShopeeApiErrorOptions = {}) {
    const code = options.code || 'ShopeeApiError';
    const message = options.message || 'Shopee API request failed.';
    const context = options.context ? ` - ${options.context}` : '';
    super(`[Shopee API Error${context}] ${code}: ${message}`);

    this.name = 'ShopeeApiError';
    this.code = code;
    this.requestId = options.requestId;
    this.status = options.status;
    this.raw = options.raw;
    this.context = options.context;
    this.cause = options.cause;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object';
}

function getStringField(source: Record<string, unknown>, key: string): string | undefined {
  const value = source[key];
  return typeof value === 'string' ? value : undefined;
}

function commonParameter(config: ShopeeConfig, signature: string, timestamp: number): string {
  const { partnerId, accessToken, shopId } = config;
  return `?shop_id=${shopId}&partner_id=${partnerId}&access_token=${accessToken}&sign=${signature}&timestamp=${timestamp}`;
}

function signPublicRequest(path: string, config: ShopeeConfig, timestamp: number): string {
  const { partnerId, partnerKey } = config;
  const baseString = `${partnerId}${path}${timestamp}`;
  return createHmac('sha256', partnerKey).update(baseString).digest('hex');
}

function signRequest(path: string, config: ShopeeConfig, timestamp: number): string {
  const { partnerId, accessToken, shopId, partnerKey } = config;
  const params = [partnerId, path, timestamp.toString(), accessToken, shopId].filter(
    (item): item is string => item !== null && item !== undefined,
  );
  const baseString = params.reduce((prev, curr) => (prev += curr), '');
  return createHmac('sha256', partnerKey).update(baseString).digest('hex');
}

function getTimestampNow(): number {
  return Math.floor(Date.now() / 1000);
}

function getTimestampMinutesAgo(minutes: number): number {
  return Math.floor((Date.now() - minutes * 60 * 1000) / 1000);
}

function buildCommonParams(
  config: ShopeeConfig,
  signature: string,
  timestamp: number,
  additionalParams?: Record<string, string | number | boolean>,
): string {
  const { partnerId, accessToken, shopId } = config;
  let paramString = `?shop_id=${shopId}&partner_id=${partnerId}&access_token=${accessToken}&sign=${signature}&timestamp=${timestamp}`;

  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      paramString += `&${key}=${encodeURIComponent(value)}`;
    });
  }
  return paramString;
}

function optionalField(): string[] {
  return [
    'buyer_user_id',
    'buyer_username',
    'estimated_shipping_fee',
    'recipient_address',
    'actual_shipping_fee',
    'goods_to_declare',
    'note',
    'note_update_time',
    'item_list',
    'pay_time',
    'dropshipper',
    'dropshipper_phone',
    'split_up',
    'buyer_cancel_reason',
    'cancel_by',
    'cancel_reason',
    'actual_shipping_fee_confirmed',
    'buyer_cpf_id',
    'fulfillment_flag',
    'pickup_done_time',
    'package_list',
    'shipping_carrier',
    'payment_method',
    'total_amount',
    'invoice_data',
    'checkout_shipping_carrier',
    'reverse_shipping_fee',
    'order_chargeable_weight_gram',
  ];
}

function throwShopeeApiError(raw: unknown, context?: string, status?: number, cause?: unknown): never {
  if (isRecord(raw)) {
    throw new ShopeeApiError({
      code: getStringField(raw, 'error') || getStringField(raw, 'code') || 'ShopeeError',
      message: getStringField(raw, 'message') || 'Shopee API returned an error response.',
      requestId: getStringField(raw, 'request_id') || getStringField(raw, 'requestId'),
      status,
      raw,
      context,
      cause,
    });
  }

  throw new ShopeeApiError({
    code: 'ShopeeError',
    message: typeof raw === 'string' ? raw : 'Shopee API returned an error response.',
    status,
    raw,
    context,
    cause,
  });
}

function handleError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    if (err.response?.data) {
      throwShopeeApiError(err.response.data, undefined, err.response.status, err);
    }

    throw new ShopeeApiError({
      code: err.code || 'NetworkError',
      message: err.message,
      status: err.response?.status,
      raw: err.toJSON ? err.toJSON() : err,
      cause: err,
    });
  }

  throw new ShopeeApiError({
    code: 'UnknownError',
    message: err instanceof Error ? err.message : String(err),
    raw: err,
    cause: err,
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Decide whether a failed request is safe to retry.
 *
 * Retries on network-level failures (no response received, e.g. ECONNRESET,
 * ETIMEDOUT, or axios own timeout) and on a small allow-list of HTTP status
 * codes that are typically transient (429 rate limit, 5xx server errors,
 * 408 request timeout).
 */
function isRetryableError(err: unknown): boolean {
  if (!axios.isAxiosError(err)) {
    return false;
  }

  if (!err.response) {
    // No response at all: connection reset, DNS failure, timeout, etc.
    return true;
  }

  return RETRYABLE_STATUS_CODES.has(err.response.status);
}

/**
 * Compute the delay (ms) before the next retry attempt.
 *
 * Honors the Shopee/HTTP standard `Retry-After` response header when
 * present (seconds or HTTP-date). Otherwise falls back to exponential
 * backoff with random jitter, capped at `DEFAULT_RETRY_MAX_DELAY_MS`.
 */
function computeRetryDelayMs(err: unknown, attempt: number): number {
  if (axios.isAxiosError(err) && err.response?.headers) {
    const retryAfterHeader = err.response.headers['retry-after'];
    if (retryAfterHeader) {
      const asSeconds = Number(retryAfterHeader);
      if (Number.isFinite(asSeconds) && asSeconds >= 0) {
        return Math.min(asSeconds * 1000, DEFAULT_RETRY_MAX_DELAY_MS);
      }
      const asDate = Date.parse(retryAfterHeader);
      if (!Number.isNaN(asDate)) {
        return Math.max(0, Math.min(asDate - Date.now(), DEFAULT_RETRY_MAX_DELAY_MS));
      }
    }
  }

  const exponential = DEFAULT_RETRY_BASE_DELAY_MS * 2 ** attempt;
  const jitter = Math.random() * DEFAULT_RETRY_BASE_DELAY_MS;
  return Math.min(exponential + jitter, DEFAULT_RETRY_MAX_DELAY_MS);
}

/**
 * Run a request function with automatic retry for idempotent (GET-style)
 * calls. Retries never apply to POST calls made through
 * `httpPost`/`httpPostDownload` because Shopee mutation endpoints are not
 * guaranteed idempotent.
 */
async function withRetry<T>(fn: () => Promise<T>, maxRetries: number): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (attempt === maxRetries || !isRetryableError(err)) {
        throw err;
      }

      await sleep(computeRetryDelayMs(err, attempt));
    }
  }

  // Unreachable: the loop always returns or throws above.
  throw lastError;
}

function getHeaders(_config?: ShopeeConfig, contentType = 'application/json'): Record<string, string> {
  return { 'Content-Type': contentType };
}

function isShopeeConfig(value: Record<string, string> | ShopeeConfig): value is ShopeeConfig {
  return 'partnerId' in value || 'partnerKey' in value;
}

function resolveHeaders(headersOrConfig?: Record<string, string> | ShopeeConfig): Record<string, string> {
  if (!headersOrConfig) {
    return getHeaders();
  }

  if (isShopeeConfig(headersOrConfig)) {
    return getHeaders(headersOrConfig);
  }

  return headersOrConfig;
}

async function httpPost<T = any>(url: string, body: unknown, headersOrConfig: Record<string, string> | ShopeeConfig): Promise<T> {
  const headers = resolveHeaders(headersOrConfig);
  try {
    const res: AxiosResponse<T> = await axios.post(url, body, { headers, timeout: DEFAULT_TIMEOUT_MS });
    return res.data;
  } catch (err) {
    handleError(err);
  }
}

async function httpPostDownload(url: string, body: unknown, headers: Record<string, string>): Promise<ArrayBuffer> {
  try {
    const res: AxiosResponse = await axios.post(url, body, {
      headers,
      responseType: 'arraybuffer',
      timeout: DEFAULT_TIMEOUT_MS,
    });
    return res.data as ArrayBuffer;
  } catch (err) {
    handleError(err);
  }
}

/**
 * Perform a Shopee GET request with a bounded timeout and automatic retry
 * on transient failures (network errors, 429, 5xx, 408). GET requests are
 * idempotent from a Shopee API perspective, so retrying is safe here.
 */
async function httpGet<T = any>(url: string, _config?: ShopeeConfig): Promise<T> {
  try {
    return await withRetry(async () => {
      const res: AxiosResponse<T> = await axios.get(url, {
        headers: getHeaders(_config),
        timeout: DEFAULT_TIMEOUT_MS,
      });
      return res.data;
    }, DEFAULT_MAX_RETRIES);
  } catch (err) {
    handleError(err);
  }
}

function isAccessTokenValid(time: number): boolean {
  return getTimestampNow() < time;
}

function isTokenExpired(time: number): boolean {
  const t = time.toString().length === 13 ? time / 1000 : time;
  return t <= getTimestampNow();
}

function refreshTokenExpire30Days(): number {
  return getTimestampNow() + 30 * 24 * 60 * 60;
}

export {
  ShopeeApiErrorOptions,
  ShopeeApiError,
  getTimestampMinutesAgo,
  signPublicRequest,
  signRequest,
  getTimestampNow,
  commonParameter,
  optionalField,
  httpGet,
  httpPost,
  httpPostDownload,
  getHeaders,
  throwShopeeApiError,
  buildCommonParams,
  isAccessTokenValid,
  isTokenExpired,
  refreshTokenExpire30Days,
};

export {
  DEFAULT_TIMEOUT_MS as SHOPEE_DEFAULT_TIMEOUT_MS,
  DEFAULT_MAX_RETRIES as SHOPEE_DEFAULT_MAX_RETRIES,
  isRetryableError,
  computeRetryDelayMs,
};

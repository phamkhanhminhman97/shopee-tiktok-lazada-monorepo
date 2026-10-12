import axios from 'axios';

/**
 * Transient-failure retry policy shared by the Lazada request helpers.
 *
 * Only idempotent GET requests are ever retried automatically. Lazada mutation
 * endpoints (create product, pack order, ready to ship, ...) are not guaranteed
 * to be idempotent, so a silent retry could duplicate a side effect.
 */

/** Default per-request timeout (ms). Override with `LazadaConfig.timeoutMs`. */
export const LAZADA_DEFAULT_TIMEOUT_MS = 30_000;
/** Default number of automatic retries for GET requests. Override with `LazadaConfig.maxRetries`. */
export const LAZADA_DEFAULT_MAX_RETRIES = 2;
const DEFAULT_RETRY_BASE_DELAY_MS = 300;
const DEFAULT_RETRY_MAX_DELAY_MS = 4_000;

/** HTTP status codes considered safe/likely-transient to retry. */
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

interface LazadaTransportConfig {
  timeoutMs?: number;
  maxRetries?: number;
}

/** Resolve the per-request timeout, falling back to the default for missing/invalid values. */
export function resolveTimeoutMs(config?: LazadaTransportConfig): number {
  const value = config?.timeoutMs;
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : LAZADA_DEFAULT_TIMEOUT_MS;
}

/** Resolve the GET retry budget, falling back to the default for missing/invalid values. `0` disables retries. */
export function resolveMaxRetries(config?: LazadaTransportConfig): number {
  const value = config?.maxRetries;
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : LAZADA_DEFAULT_MAX_RETRIES;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Decide whether a failed request is safe to retry.
 *
 * Retries on network-level failures (no response received, e.g. ECONNRESET,
 * ETIMEDOUT, or the axios timeout) and on a small allow-list of HTTP status
 * codes that are typically transient (429 rate limit, 5xx, 408).
 */
export function isRetryableError(err: unknown): boolean {
  if (!axios.isAxiosError(err)) {
    return false;
  }
  if (!err.response) {
    return true;
  }
  return RETRYABLE_STATUS_CODES.has(err.response.status);
}

/**
 * Compute the delay (ms) before the next retry attempt. Honors a `Retry-After`
 * response header (seconds or HTTP-date) when present, otherwise uses
 * exponential backoff with jitter, capped at 4 seconds.
 */
export function computeRetryDelayMs(err: unknown, attempt: number): number {
  if (axios.isAxiosError(err) && err.response?.headers) {
    const retryAfterHeader = err.response.headers['retry-after'];
    if (retryAfterHeader) {
      const asSeconds = Number(retryAfterHeader);
      if (Number.isFinite(asSeconds) && asSeconds >= 0) {
        return Math.min(asSeconds * 1000, DEFAULT_RETRY_MAX_DELAY_MS);
      }
      const asDate = Date.parse(String(retryAfterHeader));
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
 * Run `fn`, retrying up to `maxRetries` times on retryable transport errors.
 * Non-retryable errors, and the last error once the budget is spent, are rethrown unchanged.
 */
export async function withRetry<T>(fn: () => Promise<T>, maxRetries: number): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= maxRetries || !isRetryableError(err)) {
        throw err;
      }
      await sleep(computeRetryDelayMs(err, attempt));
    }
  }
}

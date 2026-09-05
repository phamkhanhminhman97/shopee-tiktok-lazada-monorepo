---
"shopee-api-client": minor
---

Hardened `shopee-api-client` for production use.

**Security**

- Upgraded `axios` from `^1.6.2` to `^1.20.0`, resolving 4 high-severity advisories (prototype pollution, proxy inheritance, request smuggling, DoS via form serialization).

**Reliability**

- Added a 30s default request timeout to every Shopee HTTP call so requests can no longer hang indefinitely.
- Added automatic retry with exponential backoff and jitter for idempotent GET requests on transient failures (network errors, 408, 429, 500, 502, 503, 504). Honors the `Retry-After` response header when Shopee provides one.
- POST requests are never auto-retried, to avoid duplicating side effects such as shipping or cancelling an order.

**Bug fixes**

- Fixed 10 methods (`fetchToken`, `refreshToken`, `getProductItemBaseInfo`, `updateStock`, `unListItem`, `updatePrice`, `getCategory`, `getAttributes`, `getBrandList`) that previously returned Shopee error payloads silently instead of throwing `ShopeeApiError`. These now behave consistently with the rest of the SDK.

**Added**

- Added Shopee Returns API support: `getReturnList()`, `getReturnDetail()`, `getAvailableSolutions()`, and `confirmReturn()`, matching `v2.returns.*` endpoints.

**Type safety**

- Removed all remaining `any` types from the public API surface and DTOs, replacing them with precise types or an honest `Record<string, unknown>` where Shopee does not publicly document an exact schema.

**Testing**

- Added 77 new unit tests covering `order.api`, `product.api`, `authorization.api`, `logistic.api`, `payment.api`, `return.api`, and the new timeout/retry behavior, raising line coverage from ~15% to ~92%.

---
"lazada-api-client": minor
---

`lazada-api-client` now covers **all 378 APIs** of the official Lazada Open Platform reference (381 methods in 34 namespaces, up from 363 in 33), retries transient failures and verifies push messages.

The previous release was ported from a community OpenAPI spec. This release checks every path and HTTP verb against the official API reference that Lazada's documentation site renders, and a new script (`npm run sync:lazada`) regenerates the part of the client that is not hand-written.

**Added**

- 14 official APIs that were missing: the whole `Store Flash Sale API` category (`lazada.storeFlashSale.*`: create, update, get, list, activate, deactivate), `earlyBirdPrice.createEarlyBirdActivityV2` / `earlyBirdActivityAddSkusV2` / `earlyBirdActivityDeactivateSkusV2` / `earlyBirdActivityIsWhitelistSeller`, `fulfillment.confirmCollectForDBS`, `fbl.getProductBatchList` / `queryInboundBatch` and `lazpay.redeemMpVoucher`. Typed request/response models come from the official parameter tables.
- 4 operations that the community spec had collapsed into same-named siblings: `membership.getPartnerLinkMember` / `getPartnerLinkMemberList` (`/partner/get`, `/partner/list`) and `dg.digitalTestInstallServiceCallBack` / `digitalInsuranceTestNotificationCopy`.
- Automatic retry for idempotent GET requests on network errors, HTTP 408, 429 and 5xx, with exponential backoff that honors `Retry-After`. New config options `LazadaConfig.timeoutMs` (default 30000) and `LazadaConfig.maxRetries` (default 2, `0` disables). POST requests are never retried.
- `verifyLazadaPushSignature()`, `createLazadaPushSignature()` and `parseLazadaPushPayload()` for incoming push messages. The scheme is the one in Lazada's official Push Mechanism guide (`HEX(HMAC-SHA256(app_key + message body, app_secret))` in the `Authorization` header).
- Generated, always-in-sync API reference at `docs/API.md` (every method with its HTTP verb and path).

**Bug fixes**

- Request signing now skips parameters with an empty value, as Lazada's reference signing code does (`areNotEmpty(key, value)`); previously an empty-string parameter was signed and the request was rejected with an invalid signature.

**Deprecated**

- The flat methods `printAWB()`, `confirmDeliveryForDBS()` and `failedDeliveryForDBS()` call endpoints (`/order/document/awb/pdf/get`, `/order/delivery/confirm`, `/order/failed_delivery/confirm`) that the current official reference no longer lists. Their behavior is unchanged; use the `lazada.fulfillment.*` equivalents, which call `/order/package/document/get`, `/order/package/sof/delivered` and `/order/package/sof/failed_delivery`.

**Known limitations**

- The older Early Bird endpoints (`createEarlyBirdActivity`, `earlyBirdActivityAddSkus`, `earlyBirdActivityDeactivateSkus`) call the original (non-`/v2`) paths, which the current official reference replaced with the `/v2` ones.
- The flat methods `getOrders()`, `getProductItem()`, ... still log errors and resolve to `undefined`; only the namespace methods throw `LazadaApiError`.

**Documentation**

- README documents the 34 namespaces, regional routing, error handling, retries and push verification.

**Testing**

- 26 new tests, including a sweep over every namespace method: regional host, signature (against an independent implementation), forwarded input, body-vs-URL transport across all six regions, official verb and path for each method, and a check that every official API is reached by some method.

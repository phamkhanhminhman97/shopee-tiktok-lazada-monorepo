# lazada-api-client

## 1.3.0

### Minor Changes

- bca257d: `lazada-api-client` now covers **all 378 APIs** of the official Lazada Open Platform reference (381 methods in 34 namespaces, up from 363 in 33), retries transient failures and verifies push messages.

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

## 1.2.0

### Minor Changes

- 3143f52: Expanded `lazada-api-client` to full parity with the [`lazada-sdk`](https://github.com/xKeNcHii/lazada-sdk) OpenAPI specification (33 domains, 363 endpoints) and fixed 2 production issues found in the pre-existing legacy request helpers.

  **Bug fixes**
  - Fixed regional routing: the legacy `LZD_END_POINT` constant was hardcoded to `api.lazada.vn`, ignoring `LazadaConfig.countryCode`. New requests now route to the correct regional host (sg/vn/ph/my/th/id) via `resolveEndPoint()`, defaulting to `vn` only when `countryCode` is omitted (preserves prior behavior for existing callers).
  - Fixed POST payload transport: the legacy `executePOST` helper put the entire payload into the URL query string, risking exceeding URL length limits for endpoints with large/nested JSON bodies. New POST requests send payload fields as `application/x-www-form-urlencoded` body content instead, matching Lazada's documented convention, while still including every field in the HMAC signature exactly like the legacy helper.

  **Added — full parity with the Lazada OpenAPI spec: 363 endpoints across 33 domains**
  - Exposed as typed **submodule namespaces** (e.g. `lazada.finance.getPayoutStatus()`, `lazada.fbl.getShipperInfo()`, `lazada.order.getOrder()`) to avoid name collisions with 8 method names that already existed on the flat surface.
  - New domains: Choice Customized, Content, Cross-Border Product, E-Tickets, Early Bird Price, FBL, Finance, Firstmile Bigbag (CN), Flexicombo, Free Shipping, Fulfillment, Instant Messaging, Lazada DG, Own Logistics, Wallet Corporate Top-Up, LazLike, LazLive, LazPay, Logistics, Logistics Station, Media Center, Membership, Order (v2), Product (v2), Product Review, Redmart, Return & Refund, Seller, Seller Voucher, Service Market, Sponsored Solutions, Store Decoration, System.
  - New low-level helpers `callLazadaApi()`/`httpGetJson()`/`httpPostForm()` in `common/helper.ts` backing the new domains, plus a dedicated `LazadaApiError` class thrown on any non-`"0"`-code response or transport failure.

  **Type safety**
  - Removed every `any` type from the package, including the pre-existing legacy Order/Product/Authorization files, cross-referencing fields against the OpenAPI spec to determine correct types (e.g. `promotion_id: any` → `number`, confirmed via matching fields in sibling domain schemas).

  **Testing**
  - Added 18 unit tests covering: all 33 submodule namespaces are wired without colliding with existing flat methods, GET/POST signing and regional-routing behavior, `LazadaApiError` thrown consistently for both verbs, multipart/opaque-payload round-tripping, empty-request handling, and representative smoke tests across 8 domains.

  **Documentation**
  - `LazadaApiError` is now exported from the package root for consumers to catch and inspect structured error responses.

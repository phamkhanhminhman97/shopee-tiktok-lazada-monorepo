---
"lazada-api-client": minor
---

Expanded `lazada-api-client` to full parity with the [`lazada-sdk`](https://github.com/xKeNcHii/lazada-sdk) OpenAPI specification (33 domains, 363 endpoints) and fixed 2 production issues found in the pre-existing legacy request helpers.

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


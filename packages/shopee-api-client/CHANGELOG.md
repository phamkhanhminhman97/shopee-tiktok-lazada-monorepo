# Changelog

## 2.3.0

### Minor Changes

- f1f1ed4: Expanded `shopee-api-client` to full parity with [`shopee-sdk`](https://github.com/congminh1254/shopee-sdk) (all 30 upstream domains, 446 endpoints) and fixed 5 multipart upload bugs found during the audit.

  **Bug fixes**
  - Fixed 5 file-upload endpoints (`uploadImage`/`uploadVideoPart` on `mediaSpace`, `uploadImage` on `livestream`, `uploadInvoiceDoc`, `uploadServiceablePolygon`, and `convertImage`) that sent binary payloads as JSON instead of `multipart/form-data`, which would have caused Shopee to reject every call with a signature or payload error.

  **Added — full parity with upstream shopee-sdk: 410 new endpoints across 29 Shopee domains**
  - Returns: `getReturnList()`, `getReturnDetail()`, `getAvailableSolutions()`, `confirmReturn()`, plus 11 more (`acceptOffer`, `dispute`, `convertImage`, `uploadProof`, `getReverseTrackingInfo`, and others) matching all of `v2.returns.*`.
  - Media, Shop, and Shop Category as flat methods on `ShopeeModule` (e.g. `shopee.uploadImage()`, `shopee.getShopProfile()`, `shopee.addShopCategory()`).
  - 20 additional domains — Account Health, Add-on Deal, Ads, AMS, Bundle Deal, Discount, FBS, First Mile, Follow Prize, Global Product, Livestream, Media Space, Merchant, Principal, Public, SBS, Shop Flash Sale, Top Picks, Video, and Voucher — exposed as typed **submodule namespaces** (e.g. `shopee.ads.createManualProductAds()`, `shopee.globalProduct.getCategory()`, `shopee.voucher.getVoucherList()`) to avoid name collisions with 12 method names that already existed on the flat surface (for example `getCategory`, `uploadImage`, `getShopPerformance`).
  - 127 additional flat methods filling gaps in the 6 domains that already existed in this package: `product` (47, including `addKitItem`, `addModel`, `getAttributeTree`, `getVariations`, `initTierVariation`, `registerBrand`), `logistics` (32, including `batchShipOrder`, `shipBooking`, `getBookingTrackingInfo`, `uploadServiceablePolygon`), `payment` (17, including `getIncomeReport`, `getPayoutInfo`, `getWalletTransactionList`, `getEscrowDetailBatch`), `order` (16, including `splitOrder`, `unsplitOrder`, `uploadInvoiceDoc`, `getBookingDetail`), `returns` (11, listed above), and `push` (4: `getAppPushConfig`, `setAppPushConfig`, `getLostPushMessage`, `confirmConsumedLostPushMessage`). A full method-level audit against every upstream manager file confirmed 0 remaining gaps.
  - New low-level helpers `callShopeeApi()`/`callShopeePublicApi()` in `common/helper.ts` backing the new domains, including repeated-query-key encoding for array parameters (`?item_id_list=1&item_id_list=2`) and a dedicated public (non-shop-authenticated) request signer for endpoints like `v2.public.get_shopee_ip_ranges`.
  - Added `form-data` as a direct dependency to support `multipart/form-data` uploads.

  **Type safety**
  - Removed every `any` type from the public API surface and DTOs (410 new endpoints included), replacing them with precise types, documented map shapes (e.g. `Record<string, number>` for Shopee Video audience-distribution metrics), recursive types for `v2.global_product.get_attribute_tree` and `v2.product.get_attribute_tree`, cross-referenced types confirmed against identical fields in sibling schemas (e.g. `promotion_id`/`activity_id` as `number`, `tier_index` as `number[]`), or an honest `Record<string, unknown>` / `unknown` where Shopee does not publicly document an exact schema (e.g. downloaded waybill/invoice file contents).

  **Testing**
  - Added 40 unit tests (up from 107, published in v2.2.0) covering every existing API module, all `multipart/form-data` upload paths (5 endpoints), smoke tests across all 20 new submodule namespaces, and representative smoke tests across the 127 newly filled-in flat methods — confirming no runtime name collisions were introduced anywhere in the expanded surface.

  **Documentation**
  - README now documents every domain, including the new submodule-namespace access pattern and a full per-domain method-to-endpoint reference table.

## 2.2.0

### Minor Changes

- 9b2b55a: Hardened `shopee-api-client` for production use.

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

All notable changes to `shopee-api-client` will be documented in this file.

## 2.1.0

### Minor Changes

- Hardened `shopee-api-client` for production use.

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

## 2.0.0

### Added

- Added official Shopee `v2.product.add_item`
- Added official Shopee `v2.product.update_item`.
- Added official Shopee `v2.product.get_model_list`.
- Added official Shopee `v2.product.search_item`.
- Added typed `addItem()` support for Shopee product creation.
- Added typed `updateItem()` support for Shopee product updates.
- Added typed `getModelList()` support for Shopee item variation/model retrieval.
- Added typed `searchItem()` support for Shopee product search.
- Added `ShopeeRequestAddItem`, `ShopeeResponseAddItem`, `ShopeeRequestUpdateItem`, `ShopeeResponseUpdateItem`, `ShopeeRequestGetModelList`, `ShopeeResponseGetModelList`, `ShopeeRequestSearchItem`, and `ShopeeResponseSearchItem` public exports.
- Added `ShopeeApiError` for typed API error handling with `code`, `requestId`, `status`, `raw`, and `context`.
- Added typed support for newer `addItem` request fields, including:
  - `description_info` and `description_type` for extended descriptions
  - `tax_info`
  - `ds_cat_rcmd_id`
  - `promotion_images`
  - `size_chart_info`
  - `certification_info`
  - `purchase_limit_info`
  - `compatibility_info`
  - `authorised_brand_id`
  - `scheduled_publish_time`
  - `medicine_id`
- Added local validation for required `addItem()` fields before sending the Shopee request.
- Added local validation for required `updateItem()` fields before sending the Shopee request.
- Added README examples for creating, updating, reading model lists, and searching Shopee product items.

### Changed

- Changed `ShopeeModule.addItem()` from `any` input/output to typed request and response contracts.
- Added `ShopeeModule.updateItem()` as the typed wrapper for `v2.product.update_item`.
- Added `ShopeeModule.getModelList()` as the typed wrapper for `v2.product.get_model_list`.
- Added `ShopeeModule.searchItem()` as the typed wrapper for `v2.product.search_item`.
- Changed `getProductItemList()` return type from `any` to `Record<string, unknown>[]`.
- Improved product response typings for optional Shopee response fields.
- Updated `addItem()` response typing to use Shopee's documented `attributes` field.
- Kept `attribute_list` as a deprecated backward-compatible alias for older package users.
- Improved internal helper typings and URL parameter handling.
- Improved HTTP helpers to preserve caller-provided headers.
- Changed `setConfig()` to merge all provided config fields instead of updating only tokens.

### Breaking Changes

- HTTP helper error handling now throws `ShopeeApiError` for Axios/Shopee HTTP failures instead of returning the raw error payload.
- Shopee API error responses now throw `ShopeeApiError`, which extends `Error`.

Before:

```ts
const result = await shopee.getOrderDetail(orderSn);

if (result.error) {
  // Handle Shopee error response here.
}
```

After:

```ts
import { ShopeeApiError } from "shopee-api-client";

try {
  const result = await shopee.getOrderDetail(orderSn);
} catch (error) {
  if (error instanceof ShopeeApiError) {
    console.log(error.code);
    console.log(error.requestId);
    console.log(error.raw);
  }
}
```

- `addItem()` now validates required payload fields and throws before calling Shopee when the request is incomplete.
- `updateItem()` validates required payload fields and throws before calling Shopee when the request is incomplete.
- Consumers using `addItem(body: any)` may need to update payloads to satisfy `ShopeeRequestAddItem`.

## 1.0.7

### Added

- Added Shopee Push Mechanism webhook helpers:
  - `verifyPushSignature(callbackUrl, rawBody, authorization)`
  - `parsePushPayload(rawBody)`
  - `createShopeePushSignature(callbackUrl, rawBody, partnerKey)`
- Added typed Shopee webhook payloads for auth/order push codes:
  - `1` Shop authorization
  - `2` Shop authorization canceled
  - `3` Order status update
  - `4` Order tracking number update
  - `12` Open API authorization expiry
  - `15` Shipping document status
- Added `SHOPEE_PUSH_CODE` constants for common webhook event codes.

### Changed

- Updated README webhook examples to verify against the raw request body before parsing payloads.

## 1.0.6

### Added

- Added `getOrderList()` for one-page raw Shopee `v2.order.get_order_list` responses, including `request_id`, `response.more`, and `response.next_cursor`.
- Added stronger TypeScript/JSDoc guidance for `getOrders()` vs `getOrderList()`.

### Changed

- Kept `getOrders()` as the auto-pagination convenience method that returns a flattened `ShopeeOrderListItem[]`.
- Improved order-list validation for page size and timestamp range.

### Fixed

- Fixed Shopee authorization link signing to use the public API sign base string: `partner_id + path + timestamp`.
- URL-encoded the Shopee authorization redirect URL.

## 1.0.5

### Added

- Added Shopee payment escrow detail support via `getEscrowDetail()`.
- Added detailed payment escrow response typings.

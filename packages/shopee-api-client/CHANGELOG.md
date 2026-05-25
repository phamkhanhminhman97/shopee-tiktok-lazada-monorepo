# Changelog

All notable changes to `shopee-api-client` will be documented in this file.

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
import { ShopeeApiError } from 'shopee-api-client';

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

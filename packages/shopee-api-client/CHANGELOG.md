# Changelog

All notable changes to `shopee-api-client` will be documented in this file.

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

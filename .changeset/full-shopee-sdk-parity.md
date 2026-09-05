---
"shopee-api-client": minor
---

Expanded `shopee-api-client` to full parity with [`shopee-sdk`](https://github.com/congminh1254/shopee-sdk) (all 30 upstream domains, 446 endpoints) and fixed 5 multipart upload bugs found during the audit.

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


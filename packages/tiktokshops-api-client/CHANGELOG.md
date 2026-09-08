# tiktokshops-api-client

## 1.1.0

### Minor Changes

- 3143f52: Expanded `tiktokshops-api-client` to full parity with the [`tiktok-shop-sdk`](https://github.com/hsib19/tiktok-shop-sdk) reference source (14 domains, 155 endpoints) and fixed 1 upstream type bug found during the audit.

  **Bug fixes**
  - Fixed `Finance.getWithdrawals()`'s declared return type in the upstream reference (it incorrectly returned `GetPaymentsResponse` instead of `GetWithdrawalsResponse` — a copy-paste typo, verified by comparing the two structurally different response shapes: `payments[]` vs `withdrawals[]`).
  - Fixed a template-literal renaming bug in the type generator that would have corrupted the `locale` field name into `Tiktoklocale` in outgoing request payloads.

  **Added — full parity with the reference SDK: 155 endpoints across 14 domains**
  - Exposed as typed **submodule namespaces** (e.g. `tiktok.order.getOrderList()`, `tiktok.product.createProduct()`, `tiktok.finance.getWithdrawals()`) to avoid name collisions with 7 method names that already existed on the flat surface (`getOrderList`, `getOrderDetail`, `getPriceDetail`, `getCategories`, `getAttributes`, `getBrands`, `createProduct`).
  - New domains: Affiliate Partner, Affiliate Seller, Analytics, Auth, Event, Finance, Fulfillment, Logistics, Order, Product, Promotion, Return/Refund, Seller, Shop.
  - New low-level helpers `callTiktokApi()`/`callTiktokMultipart()`/`callTiktokAuthApi()` in `common/helper.ts` backing the new domains, implementing the TikTok Shop v1 HMAC-SHA256 signature scheme (with `shop_cipher`/`category_asset_cipher` support) and the multipart-specific signing convention (empty body component in the HMAC base string).
  - Added `form-data` as a direct dependency to support `multipart/form-data` uploads (`uploadProductImage`, `uploadProductFile`).

  **Type safety**
  - Removed every remaining `any` type from the public API surface, including the pre-existing legacy v1/v2 endpoints, replacing them with precise types (many reused directly from the newly-generated, upstream-verified domain types) or an honest `unknown` where no verified response shape exists (e.g. undocumented legacy endpoints not covered by the reference SDK).
  - 466 type declarations generated via a TypeScript Compiler API (AST)-based pipeline rather than regex, fixing 6 classes of bugs found in an earlier regex-based approach (missed non-exported types, missed lowercase type names, missed cross-module imports, incomplete dependency-graph propagation, and the field-corruption rename bug above).

  **Testing**
  - Added 17 unit tests covering: all 14 submodule namespaces are wired without colliding with existing flat methods, GET/POST/multipart request signing and URL construction, TikTok error-response handling (`TiktokApiError`), the OAuth token-exchange convention (no HMAC signature), and representative smoke tests across 9 domains.
  - Audited 100% of the 155 endpoints against the reference SDK via AST-based path/HTTP-method comparison (not string matching), confirming 0 remaining discrepancies.

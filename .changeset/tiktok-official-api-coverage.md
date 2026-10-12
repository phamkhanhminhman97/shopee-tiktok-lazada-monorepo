---
"tiktokshops-api-client": minor
---

`tiktokshops-api-client` now covers **all 316 endpoints** in TikTok Shop's official API reference (352 methods in 20 namespaces, up from 155 methods in 14), fixes endpoints that silently dropped data or called the wrong path, and adds retries, webhook verification and a generated API reference.

The previous release was ported from a community SDK and was therefore only as complete as that SDK. This release checks every path, HTTP verb and parameter against the official Partner Center API metadata, and a new script (`npm run sync:tiktok`) regenerates the surface that is not hand-written.

**Added**

- 197 methods generated from the official metadata, with typed path/query/body/response models taken from the documentation: Fulfilled by TikTok (`tiktok.fbt`), Customer Service (`tiktok.customerService`), Customer Engagement (`tiktok.customerEngagement`), Affiliate Creator (`tiktok.affiliateCreator`), Supply Chain (`tiktok.supplyChain`) and Tools (`tiktok.tools`) are new namespaces; Analytics (live rooms), Product, Fulfillment, Return & Refund, Affiliate Seller/Partner, Finance, Logistics, Order, Promotion and Seller gained their missing endpoints. The generated request/response types are exported from the package root.
- Newer API versions sit next to the older ones: a suffixed method (for example `order.getOrderDetail202507`) calls the newer version, the unsuffixed method keeps calling the version it always called.
- Automatic retry for idempotent GET requests on network errors, HTTP 408, 429 and 5xx, with exponential backoff that honors `Retry-After`. New config options `TiktokConfig.timeoutMs` (default 30000) and `TiktokConfig.maxRetries` (default 2, `0` disables). POST/PUT/DELETE are never retried.
- `verifyTiktokWebhookSignature()`, `createTiktokWebhookSignature()` and `parseTiktokWebhookPayload()` for incoming webhook events, and the `TiktokWebhook*` payload types. The signature scheme (`Authorization` = lowercase hex HMAC-SHA256 of `app_key + raw body`, keyed with the app secret) is the one in TikTok Shop's official Webhooks overview.
- Generated, always-in-sync API reference at `docs/API.md` (every method with its HTTP verb and path).

**Bug fixes**

- 22 namespace methods sent their request **without the caller's body or query** (for example `event.updateShopWebhook`, `event.deleteShopWebhook`, `product.searchInventory`, `product.createGlobalProduct`, `product.deleteGlobalProducts`, `product.recommendGlobalCategory`, `product.createImageTranslationTasks`, `promotion.searchActivity`, `promotion.updateActivityProduct`, `affiliateSeller.createTargetCollaboration`, `affiliateSeller.editOpenCollaborationSettings`, the `analytics` list endpoints, `product.getGlobalCategories`, `product.getProductsSEOWords`, `product.productInformationIssueDiagnosis`, `product.getRecommendedProductTitleAndDescription` and `affiliateSeller.getOpenCollaborationCreatorContentDetail`). They now forward their input.
- Requests whose JSON body is the empty object (for example `order.getOrderList({ query, body: {} })`, an unfiltered order search) were sent with `{}` but signed as if they had no body. TikTok's signing rules append the request body exactly as sent, so those requests were rejected with an invalid signature. The serialized body is now both signed and sent.
- `promotion.searchCoupon` used the HTTP verb `DELETE`; the API reference specifies `POST`.
- Three affiliate endpoints called paths that do not exist in the official reference. `affiliateSeller.sellerSearchCreatorOnMarketplace` called the path of `getLatestUnreadMessages`; it now calls `POST /affiliate_seller/202608/marketplace_creators/search`. `affiliateSeller.createConversationWithCreator` now calls `POST /affiliate_seller/202508/conversations` and takes `creator_open_id` (the previous `creator_id` field is not part of the API). `affiliateSeller.updateTargetCollaboration` now calls `PUT /affiliate_seller/202508/target_collaborations/{id}` with the documented body. Their request/response types now come from the official documentation, so code that relied on the old (incorrect) field names needs to be updated.
- Legacy flat methods: `createProduct` could never run (its path constant had a leading space, so URL construction threw `Invalid URL`), `getBrands` called `/product/2309/brands` instead of `/product/202309/brands`, and `shipPackage`, `activeProduct`, `deactiveProduct` and `createProduct` signed their request without the JSON body, which TikTok Shop rejects.
- `affiliateSeller.createConversationwithCreator` (misspelled duplicate) is kept but marked `@deprecated`; use `createConversationWithCreator`.

**Known limitations**

- 35 older methods call API versions that the current official reference no longer lists (for example `analytics.getShopPerformance` at `202405`, `returnRefund.createReturn` at `202309`). They are kept for backward compatibility; check TikTok Shop's changelog before relying on them and prefer the newer generated methods where one exists.
- The request/response models of the generated methods are only as accurate as TikTok's published metadata, which has not been exercised against a live shop from this repository.

**Testing**

- 48 new tests, including a sweep over all 352 methods: each issues exactly one request, its signature matches an independent implementation of TikTok's algorithm, it forwards its query/body, and every generated method requests exactly the verb and path recorded from the official reference. Regression tests cover each fix above, retry/timeout behavior and webhook verification.

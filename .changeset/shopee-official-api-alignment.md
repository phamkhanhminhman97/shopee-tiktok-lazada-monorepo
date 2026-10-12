---
"shopee-api-client": minor
---

`shopee-api-client` now signs every API the way Shopee's official reference says it must, and covers **all 455 APIs** of the official Shopee Open Platform v2 reference (it covered 444).

These findings come from checking the client against the official API metadata that Shopee's documentation site renders (path, HTTP verb and **API type** of every API) and Shopee's "Calculating the sign parameter" guide. A new script (`npm run sync:shopee`) regenerates the pieces that depend on that metadata.

**Bug fixes**

- **Shopee has five API types and signs each with a different identity**: Shop (`shop_id`), Merchant (`merchant_id`), User (`user_id`), Principal (`principal_id`) and Public (no access token). The client signed everything as a shop API, so **104 methods could not authenticate**: the 40 Merchant APIs (`shopee.merchant.*`, `shopee.globalProduct.*`), the 40 User APIs (`shopee.livestream.*`), the 11 Principal APIs (`shopee.principal.*`) and 13 Public APIs (video upload, `media_space` uploads, payment method list, push configuration). Requests now carry and sign the identity of their API type. Merchant, User and Principal APIs need the new `merchantId`, `userId` and `principalId` config options; calling them without it throws a `ShopeeApiError` (`code: "ShopeeConfigError"`) before any request is sent.
- `callShopeeApi()`, `callShopeePublicApi()` and the multipart upload helpers signed the **short** path (for example `/account_health/get_late_orders`) while sending the request to `/api/v2/account_health/get_late_orders`. Shopee's guide signs the API path including the `/api/v2` prefix (the example is `/api/v2/shop/auth_partner`), which is what the older flat methods already did. All ~257 methods in the submodule namespaces and the media/invoice/return/livestream upload endpoints now sign the full path.
- GET requests sent list parameters as repeated keys (`?item_id_list=1&item_id_list=2`). Shopee documents them comma-separated in one parameter (`?order_sn_list=A%2CB`), which is what the flat methods already sent; the submodule helpers now do the same.
- `getEscrowDetailBatch()` used POST; the official reference documents GET with `order_sn_list` as a query parameter.
- `callShopeePublicApi()` appended the payload of POST calls to the URL query string in addition to the JSON body. For `publicApi.getTokenByResendCode` that put the resend code into the URL (and therefore into access logs). POST payloads are now sent only in the body.

**Added**

- `ShopeeConfig.merchantId`, `ShopeeConfig.userId` and `ShopeeConfig.principalId`.
- 11 APIs that were in the official reference but not in the client: `shopee.buybox.*` (5), `shopee.businessInsights.getMarketingHotListing` (BR only) and `shopee.productSsp.*` (5: `getSspDetail`, `getSspRecommendation`, `linkItemToSsp`, `searchSspList`, `unlinkItemFromSsp`).

**Known limitations**

- The legacy flat method `getAttributes()` still calls `/api/v2/product/get_attributes`, which the current official reference no longer lists (it documents `get_attribute_tree`).
- The new signing rules follow Shopee's documentation but were not exercised against a live Shopee shop from this repository. After upgrading, verify one call of each kind you use (a Shop API, and a Merchant/User/Principal API if you use those).

**Testing**

- A sweep over every submodule method and every flat method: each requests exactly the verb and path of its official API, carries the identity of its official API type, has a signature that matches an independent implementation of Shopee's algorithm, forwards its input, and keeps POST payloads out of the URL. The client is also checked to reach every official API.
- Regression tests for the signing fixes, the missing-identity error and the array encoding.

# shopee-api-client

[![npm](https://img.shields.io/npm/v/shopee-api-client)](https://www.npmjs.com/package/shopee-api-client)
[![Downloads](https://img.shields.io/npm/dm/shopee-api-client)](https://www.npmjs.com/package/shopee-api-client)
[![Types](https://img.shields.io/npm/types/shopee-api-client)](https://www.npmjs.com/package/shopee-api-client)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License](https://img.shields.io/npm/l/shopee-api-client)](https://opensource.org/licenses/ISC)

TypeScript client for [Shopee Open API v2](https://open.shopee.com/). Covers seller authorization, token management, orders, products, logistics, payment escrow, returns, media/video uploads, shop management, and 20 additional domains (ads, AMS, livestream, global product, vouchers, and more) via typed submodule namespaces.

> Unofficial package. Not affiliated with Shopee.

## Release notes

### v2.0.0

This release standardizes error handling and expands typed product APIs.

**Breaking change**

- Shopee HTTP/API failures now throw `ShopeeApiError` instead of returning raw error payloads.
- Code that previously checked `result.error` should migrate to `try/catch`.
- `addItem()` is now strongly typed and validates required payload fields before calling Shopee.

**Added**

- `ShopeeApiError` with `code`, `requestId`, `status`, `raw`, and `context`.
- Product APIs: `addItem()`, `updateItem()`, `getModelList()`, `searchItem()`.
- Public product request/response types for the new product APIs.
- README examples and official Shopee docs snapshots for the new product APIs.

See [CHANGELOG.md](./CHANGELOG.md) for the full release history.

## Requirements

- Node.js 16 or later

## Installation

```bash
npm install shopee-api-client
# or
yarn add shopee-api-client
# or
pnpm add shopee-api-client
```

## Quick start

```ts
import { ShopeeModule } from "shopee-api-client";

const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: process.env.SHOPEE_SHOP_ID!,
  accessToken: process.env.SHOPEE_ACCESS_TOKEN!,
  refreshToken: process.env.SHOPEE_REFRESH_TOKEN!,
});

const orders = await shopee.getOrders({
  beforeMinutes: 60,
  pageSize: 50,
  orderStatus: "READY_TO_SHIP",
});

console.log(orders);
```

## Configuration

```ts
const shopee = new ShopeeModule({
  partnerId: 123456,
  partnerKey: "YOUR_PARTNER_KEY",
  shopId: "YOUR_SHOP_ID",
  accessToken: "YOUR_ACCESS_TOKEN",
  refreshToken: "YOUR_REFRESH_TOKEN",
});
```

| Field | Required | Description |
| --- | --- | --- |
| `partnerId` | Yes | Shopee Open Platform partner ID |
| `partnerKey` | Yes | Shopee Open Platform partner key |
| `shopId` | Required for shop APIs | Shopee shop ID |
| `accessToken` | Required for private APIs | Access token used to call private Shopee APIs |
| `refreshToken` | Required for token refresh | Refresh token used to get a new access token |

## Authorization flow

Shopee private APIs require seller authorization before you can call order, product, logistics, and payment APIs.

```
1. Generate a Shopee authorization link
2. Redirect the seller to the authorization URL
3. The seller logs in and confirms authorization
4. Shopee redirects back to your callback URL with code and shop_id
5. Call fetchToken(code) to get access_token and refresh_token
6. Create a ShopeeModule with shopId, accessToken, and refreshToken
7. Use the client to call Shopee APIs, for example getOrders()
8. Call refreshToken() when the access token expires
```

### 1. Generate authorization link

Use `generateAuthLink(redirectURL)` to build the Shopee authorization URL.

```ts
import { ShopeeModule } from "shopee-api-client";

const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
});

const { url } = await shopee.generateAuthLink(
  "https://your-app.com/shopee/callback"
);

// Redirect seller to this URL
console.log(url);
```

**Function signature**

```ts
generateAuthLink(redirectURL: string): Promise<{
  url: string;
  redirect: string;
}>
```

**Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectURL` | `string` | Yes | Callback URL that Shopee redirects to after seller authorization |

**Return**

| Field | Type | Description |
| --- | --- | --- |
| `url` | `string` | Shopee authorization URL |
| `redirect` | `string` | The callback URL passed to `generateAuthLink` |

---

### 2. Handle Shopee callback

After the seller confirms authorization, Shopee redirects to your callback URL with `code` and `shop_id`.

```
https://your-app.com/shopee/callback?code=AUTH_CODE&shop_id=123456
```

| Query param | Description |
| --- | --- |
| `code` | Authorization code returned by Shopee |
| `shop_id` | Shopee shop ID that authorized your app |

Example with Express:

```ts
app.get("/shopee/callback", async (req, res) => {
  const code = req.query.code as string;
  const shopId = req.query.shop_id as string;

  if (!code || !shopId) {
    return res.status(400).send("Missing code or shop_id");
  }

  const shopee = new ShopeeModule({
    partnerId: Number(process.env.SHOPEE_PARTNER_ID),
    partnerKey: process.env.SHOPEE_PARTNER_KEY!,
    shopId,
  });

  const token = await shopee.fetchToken(code);

  return res.json(token);
});
```

---

### 3. Fetch access token

Use `fetchToken(authCode)` to exchange the authorization code for `access_token` and `refresh_token`.

```ts
const token = await shopee.fetchToken("AUTH_CODE_FROM_CALLBACK");
```

**Function signature**

```ts
fetchToken(authCode: string): Promise<ShopeeResponseFetchToken>
```

**Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | Authorization code returned by Shopee callback |

**Required config**

```ts
const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: "SHOPEE_SHOP_ID",
});
```

**Example response**

```json
{
  "request_id": "xxx",
  "error": "",
  "message": "",
  "access_token": "ACCESS_TOKEN",
  "refresh_token": "REFRESH_TOKEN",
  "expire_in": 14400
}
```

---

### 4. Use access token

After getting `access_token`, create a `ShopeeModule` with `shopId`, `accessToken`, and `refreshToken`.

```ts
const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: "SHOPEE_SHOP_ID",
  accessToken: "ACCESS_TOKEN",
  refreshToken: "REFRESH_TOKEN",
});

const orders = await shopee.getOrders({
  beforeMinutes: 60,
  pageSize: 50,
});

console.log(orders);
```

---

### 5. Refresh token

Use `refreshToken()` to get a new `access_token` and `refresh_token` before the current access token expires.

```ts
const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: "SHOPEE_SHOP_ID",
  refreshToken: "REFRESH_TOKEN",
});

const newToken = await shopee.refreshToken();

console.log(newToken);
```

**Function signature**

```ts
refreshToken(): Promise<ShopeeResponseRefreshAccessToken>
```

**Required config**

```ts
const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: "SHOPEE_SHOP_ID",
  refreshToken: "REFRESH_TOKEN",
});
```

**Example response**

```json
{
  "request_id": "xxx",
  "error": "",
  "message": "",
  "access_token": "NEW_ACCESS_TOKEN",
  "refresh_token": "NEW_REFRESH_TOKEN",
  "expire_in": 14400,
  "shop_id": 123456,
  "partner_id": 123456
}
```

**Token refresh notes**

- `refreshToken()` returns both a new `access_token` and a new `refresh_token`.
- Use the new `refresh_token` for the next refresh request — treat each refresh token as single-use.
- A new `access_token` is valid for approximately 4 hours.
- A new `refresh_token` is valid for approximately 30 days.
- After a new `access_token` is generated, the old one may remain valid for a short grace period.
- Never expose `partnerKey`, `accessToken`, or `refreshToken` in frontend code.

---

## Get orders

There are two order-list helpers:

| Method | Pagination | Return type | Use when |
| --- | --- | --- | --- |
| `getOrders()` | Auto-paginates all pages | `Promise<ShopeeOrderListItem[]>` | You only need the final order items |
| `getOrderList()` | One page per call | `Promise<ShopeeResponseOrderList>` | You need `request_id`, `response.more`, or `response.next_cursor` |

**Shorthand** — returns orders from the last N minutes:

```ts
const orders = await shopee.getOrders(60);
```

**With options:**

```ts
const orders = await shopee.getOrders({
  beforeMinutes: 60,
  timeRangeField: "create_time",
  orderStatus: "READY_TO_SHIP",
  responseOptionalFields: ["order_status"],
  requestOrderStatusPending: true,
  pageSize: 100,
});
```

**Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `beforeMinutes` | `number` | No | Get orders from the last N minutes |
| `timeFrom` | `number` | No | Start Unix timestamp in seconds. Max range with `timeTo` is 15 days |
| `timeTo` | `number` | No | End Unix timestamp in seconds. Defaults to current timestamp |
| `timeRangeField` | `string` | No | `create_time` or `update_time` |
| `orderStatus` | `ShopeeOrderStatus` | No | Filter by order status |
| `responseOptionalFields` | `string[]` | No | Optional fields to include in the response |
| `requestOrderStatusPending` | `boolean` | No | Whether to include pending orders |
| `pageSize` | `number` | No | Page size, from 1 to 100 |
| `cursor` | `string` | No | Cursor for `getOrderList()` manual pagination |
| `logisticsChannelId` | `number` | No | Logistics channel ID. Valid only for BR |

**Available `orderStatus` values**

```ts
type ShopeeOrderStatus =
  | "ALL"
  | "UNPAID"
  | "READY_TO_SHIP"
  | "PROCESSED"
  | "SHIPPED"
  | "COMPLETED"
  | "IN_CANCEL"
  | "CANCELLED"
  | "INVOICE_PENDING";
```

When `orderStatus` is `"ALL"`, the package omits `order_status` from the Shopee request so Shopee returns all statuses in the selected time range.

**Single-page raw response**

Use `getOrderList()` when you want to control pagination manually or store Shopee cursors.

```ts
const page = await shopee.getOrderList({
  beforeMinutes: 60,
  pageSize: 50,
  cursor: "",
  responseOptionalFields: ["order_status"],
});

console.log(page.response.more);
console.log(page.response.next_cursor);
console.log(page.response.order_list);
```

If `page.response.more` is `true`, pass `page.response.next_cursor` as `cursor` in the next `getOrderList()` call.

---

## Push Mechanism / Webhooks

Shopee Push Mechanism is Shopee's webhook system. Shopee sends an HTTP `POST` request to your callback URL, and the signature is in the `Authorization` header.

Use `verifyPushSignature()` to verify the request before processing it.

```ts
import express from "express";
import {
  ShopeeModule,
  SHOPEE_PUSH_CODE,
  type ShopeeKnownPushPayload,
} from "shopee-api-client";

const app = express();
const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
});

app.post(
  "/shopee/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const callbackUrl = "https://your-app.com/shopee/webhook";
    const authorization = req.header("authorization") ?? "";

    const isValid = shopee.verifyPushSignature(
      callbackUrl,
      req.body,
      authorization
    );

    if (!isValid) {
      return res.status(401).end();
    }

    const payload = shopee.parsePushPayload<ShopeeKnownPushPayload>(req.body);

    if (payload.code === SHOPEE_PUSH_CODE.ORDER_STATUS_UPDATE) {
      console.log(payload.data.ordersn, payload.data.status);
      // Fetch the latest order data from Shopee APIs here.
      // Push only tells you that data changed.
    }

    return res.status(204).end();
  }
);
```

Important webhook notes:

- Pass the full callback URL exactly as Shopee calls it.
- Pass the original raw request body. Do not pass `JSON.stringify(req.body)`.
- Return a `2xx` status with an empty body to avoid Shopee retries.
- Push tells you an event changed. Call the related Shopee API to fetch the latest data.

Common push codes:

| Code | Constant | Event |
| --- | --- | --- |
| `1` | `SHOP_AUTHORIZATION` | Shop authorization |
| `2` | `SHOP_AUTHORIZATION_CANCELED` | Shop authorization canceled |
| `3` | `ORDER_STATUS_UPDATE` | Order status update |
| `4` | `ORDER_TRACKING_NO` | Tracking number update |
| `12` | `OPEN_API_AUTHORIZATION_EXPIRY` | Authorization expires soon |
| `15` | `SHIPPING_DOCUMENT_STATUS` | Shipping document status update |

---

## Error handling

All methods throw if Shopee returns a non-empty `error` field. Wrap calls in `try/catch`:

```ts
try {
  const orders = await shopee.getOrders({ beforeMinutes: 60 });
} catch (err) {
  console.error(err.message); // Shopee error message, e.g. "Invalid access_token."
  console.error(err.code);    // Shopee error code,    e.g. "error_auth"
}
```

### Timeouts and automatic retry

Every request has a 30 second timeout. `GET` requests (order list, product list,
tracking info, etc.) automatically retry up to 2 times on transient failures —
network errors, `408`, `429`, `500`, `502`, `503`, and `504` — using exponential
backoff with jitter. Shopee's `Retry-After` header is honored when present.

`POST` requests (ship order, cancel order, add item, confirm return, etc.) are
never auto-retried, since Shopee does not guarantee these mutation endpoints are
idempotent. If a `POST` call fails, catch the `ShopeeApiError` and decide whether
it is safe to retry based on your own idempotency handling (e.g. checking order
state before resubmitting).

---

## Full example

```ts
import express from "express";
import { ShopeeModule } from "shopee-api-client";

const app = express();

// Step 1: redirect seller to Shopee authorization page
app.get("/connect/shopee", async (_req, res) => {
  const shopee = new ShopeeModule({
    partnerId: Number(process.env.SHOPEE_PARTNER_ID),
    partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  });

  const { url } = await shopee.generateAuthLink(
    "https://your-app.com/shopee/callback"
  );

  return res.redirect(url);
});

// Step 2: handle Shopee callback and exchange code for tokens
app.get("/shopee/callback", async (req, res) => {
  const code = req.query.code as string;
  const shopId = req.query.shop_id as string;

  if (!code || !shopId) {
    return res.status(400).json({ message: "Missing Shopee code or shop_id" });
  }

  const shopee = new ShopeeModule({
    partnerId: Number(process.env.SHOPEE_PARTNER_ID),
    partnerKey: process.env.SHOPEE_PARTNER_KEY!,
    shopId,
  });

  const token = await shopee.fetchToken(code);

  // Persist token.access_token, token.refresh_token, token.expire_in to your DB
  return res.json(token);
});
```

## Add Product Item

`addItem()` maps to Shopee `v2.product.add_item`. The package validates the required fields locally before sending the request.

```ts
const result = await shopee.addItem({
  item_name: "Basic T-shirt",
  description: "Cotton T-shirt",
  category_id: 123456,
  original_price: 99000,
  weight: 0.3,
  dimension: {
    package_length: 20,
    package_width: 15,
    package_height: 3,
  },
  logistic_info: [
    {
      logistic_id: 80014,
      enabled: true,
    },
  ],
  image: {
    image_id_list: ["IMAGE_ID_FROM_SHOPEE_MEDIA_API"],
  },
  seller_stock: [
    {
      stock: 10,
    },
  ],
});
```

When using rich descriptions, set `description_type: "extended"` together with `description_info`. Shopee accepts only one `video_upload_id` for this endpoint.

## Update Product Item

`updateItem()` maps to Shopee `v2.product.update_item`. Pass `item_id` and only the fields you want to update.

```ts
const result = await shopee.updateItem({
  item_id: 2800143058,
  item_name: "Updated Basic T-shirt",
  item_status: "UNLIST",
  weight: 0.35,
  dimension: {
    package_length: 20,
    package_width: 15,
    package_height: 4,
  },
});
```

Use `updatePrice()` and `updateStock()` for price and stock changes because Shopee exposes those as separate APIs.

## Get Model List

`getModelList()` maps to Shopee `v2.product.get_model_list` and returns variation/model details for an item.

```ts
const models = await shopee.getModelList(178312);

console.log(models.response.model);
```

## Search Items

`searchItem()` maps to Shopee `v2.product.search_item` and returns matching item IDs.

```ts
const result = await shopee.searchItem({
  page_size: 10,
  item_name: "apple",
  item_status: ["NORMAL", "UNLIST"],
});

console.log(result.response.item_id_list);
```

## Error Handling

From v2, Shopee HTTP/API failures throw `ShopeeApiError`.

### Before v2

```ts
const result = await shopee.getOrderDetail("ORDER_SN");

if (result.error) {
  console.log(result.error);
  console.log(result.message);
}
```

### v2 and later

```ts
import { ShopeeApiError } from "shopee-api-client";

try {
  const order = await shopee.getOrderDetail("ORDER_SN");
  console.log(order.response);
} catch (error) {
  if (error instanceof ShopeeApiError) {
    console.log(error.code);
    console.log(error.message);
    console.log(error.requestId);
    console.log(error.status);
    console.log(error.raw);
  }
}
```

`ShopeeApiError` fields:

| Field | Description |
| --- | --- |
| `code` | Shopee error code or network error code |
| `message` | Human-readable error message |
| `requestId` | Shopee `request_id`, when returned |
| `status` | HTTP status, when available |
| `raw` | Raw Shopee/axios error payload |
| `context` | SDK method context, for example `getOrderDetail` |

---

## Supported APIs

### Authorization

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate Shopee authorization URL |
| `fetchToken` | Exchange authorization code for access token and refresh token |
| `refreshToken` | Refresh access token and refresh token |

### Push Mechanism

| Method | Description |
| --- | --- |
| `verifyPushSignature` | Verify Shopee webhook Authorization header |
| `parsePushPayload` | Parse verified Shopee webhook raw body |
| `confirmConsumedLostPushMessage` | via Shopee `v2.push.confirm_consumed_lost_push_message`. |
| `getAppPushConfig` | via Shopee `v2.push.get_app_push_config`. |
| `getLostPushMessage` | via Shopee `v2.push.get_lost_push_message`. |
| `setAppPushConfig` | via Shopee `v2.push.set_app_push_config`. |

### Orders

| Method | Description |
| --- | --- |
| `getOrders` | Auto-paginate Shopee order list and return order items |
| `getOrderList` | Get one raw Shopee order-list page with cursor metadata |
| `getOrderDetail` | Get Shopee order detail |
| `cancelOrder` | Cancel order before shipment |
| `downloadFbsInvoices` | via Shopee `v2.order.download_fbs_invoices`. |
| `downloadInvoiceDoc` | via Shopee `v2.order.download_invoice_doc`. |
| `generateFbsInvoices` | via Shopee `v2.order.generate_fbs_invoices`. |
| `getBookingDetail` | via Shopee `v2.order.get_booking_detail`. |
| `getBookingList` | via Shopee `v2.order.get_booking_list`. |
| `getBuyerInvoiceInfo` | via Shopee `v2.order.get_buyer_invoice_info`. |
| `getEstimateCancelValue` | via Shopee `v2.order.get_estimate_cancel_value`. |
| `getFbsInvoicesResult` | via Shopee `v2.order.get_fbs_invoices_result`. |
| `getPendingBuyerInvoiceOrderList` | via Shopee `v2.order.get_pending_buyer_invoice_order_list`. |
| `getWarehouseFilterConfig` | via Shopee `v2.order.get_warehouse_filter_config`. |
| `handleBuyerCancellation` | via Shopee `v2.order.handle_buyer_cancellation`. |
| `handlePrescriptionCheck` | via Shopee `v2.order.handle_prescription_check`. |
| `setNote` | via Shopee `v2.order.set_note`. |
| `splitOrder` | via Shopee `v2.order.split_order`. |
| `unsplitOrder` | via Shopee `v2.order.unsplit_order`. |
| `uploadInvoiceDoc` | via Shopee `v2.order.upload_invoice_doc`. |

### Products

| Method | Description |
| --- | --- |
| `getProductItemList` | Get product item list |
| `getProductItemBaseInfo` | Get product base information |
| `getModelList` | Get item model and variation list |
| `searchItem` | Search item IDs by filters |
| `addItem` | Add product item |
| `updateItem` | Update product item |
| `updateStock` | Update product stock |
| `updatePrice` | Update product price |
| `unListItem` | List or unlist product item |
| `getCategory` | Get Shopee categories |
| `getAttributes` | Get category attributes |
| `getBrandList` | Get brand list |
| `addKitItem` | via Shopee `v2.product.add_kit_item`. |
| `addModel` | via Shopee `v2.product.add_model`. |
| `batchAddItem` | via Shopee `v2.product.batch_add_item`. |
| `batchPublishItemToOutletShop` | via Shopee `v2.product.batch_publish_item_to_outlet_shop`. |
| `batchUpdateOutletPrice` | via Shopee `v2.product.batch_update_outlet_price`. |
| `batchUpdateOutletStock` | via Shopee `v2.product.batch_update_outlet_stock`. |
| `boostItem` | via Shopee `v2.product.boost_item`. |
| `categoryRecommend` | via Shopee `v2.product.category_recommend`. |
| `deleteItem` | via Shopee `v2.product.delete_item`. |
| `deleteModel` | via Shopee `v2.product.delete_model`. |
| `generateKitImage` | via Shopee `v2.product.generate_kit_image`. |
| `getAitemByPitemId` | via Shopee `v2.product.get_aitem_by_pitem_id`. |
| `getAllVehicleList` | via Shopee `v2.product.get_all_vehicle_list`. |
| `getAttributeTree` | via Shopee `v2.product.get_attribute_tree`. |
| `getBatchTaskResult` | via Shopee `v2.product.get_batch_task_result`. |
| `getBoostedList` | via Shopee `v2.product.get_boosted_list`. |
| `getComment` | via Shopee `v2.product.get_comment`. |
| `getDirectItemList` | via Shopee `v2.product.get_direct_item_list`. |
| `getDirectShopRecommendedPrice` | via Shopee `v2.product.get_direct_shop_recommended_price`. |
| `getItemContentDiagnosisResult` | via Shopee `v2.product.get_item_content_diagnosis_result`. |
| `getItemExtraInfo` | via Shopee `v2.product.get_item_extra_info`. |
| `getItemLimit` | via Shopee `v2.product.get_item_limit`. |
| `getItemListByContentDiagnosis` | via Shopee `v2.product.get_item_list_by_content_diagnosis`. |
| `getItemPromotion` | via Shopee `v2.product.get_item_promotion`. |
| `getItemViolationInfo` | via Shopee `v2.product.get_item_violation_info`. |
| `getKitItemInfo` | via Shopee `v2.product.get_kit_item_info`. |
| `getKitItemLimit` | via Shopee `v2.product.get_kit_item_limit`. |
| `getMainItemList` | via Shopee `v2.product.get_main_item_list`. |
| `getMartItemByOutletItemId` | via Shopee `v2.product.get_mart_item_by_outlet_item_id`. |
| `getMartItemMappingById` | via Shopee `v2.product.get_mart_item_mapping_by_id`. |
| `getProductCertificationRule` | via Shopee `v2.product.get_product_certification_rule`. |
| `getRecommendAttribute` | via Shopee `v2.product.get_recommend_attribute`. |
| `getSizeChartDetail` | via Shopee `v2.product.get_size_chart_detail`. |
| `getSizeChartList` | via Shopee `v2.product.get_size_chart_list`. |
| `getVariations` | via Shopee `v2.product.get_variation_tree`. |
| `getVehicleListByCompatibilityDetail` | via Shopee `v2.product.get_vehicle_list_by_compatibility_detail`. |
| `getWeightRecommendation` | via Shopee `v2.product.get_weight_recommendation`. |
| `initTierVariation` | via Shopee `v2.product.init_tier_variation`. |
| `publishItemToOutletShop` | via Shopee `v2.product.publish_item_to_outlet_shop`. |
| `registerBrand` | via Shopee `v2.product.register_brand`. |
| `replyComment` | via Shopee `v2.product.reply_comment`. |
| `searchAttributeValueList` | via Shopee `v2.product.search_attribute_value_list`. |
| `searchUnpackagedModelList` | via Shopee `v2.product.search_unpackaged_model_list`. |
| `updateKitItem` | via Shopee `v2.product.update_kit_item`. |
| `updateModel` | via Shopee `v2.product.update_model`. |
| `updateSipItemPrice` | via Shopee `v2.product.update_sip_item_price`. |
| `updateTierVariation` | via Shopee `v2.product.update_tier_variation`. |

### Logistics

| Method | Description |
| --- | --- |
| `getChannelList` | Get logistics channels |
| `getShipmentList` | Get orders ready for shipment |
| `searchPackageList` | Search Shopee package list |
| `getPackageDetail` | Get package detail |
| `shippingParameter` | Get shipping parameters |
| `shipOrder` | Arrange shipment |
| `massShipOrder` | Arrange mass shipment |
| `getTrackingNumber` | Get tracking number |
| `getTrackingInfo` | Get tracking info |
| `createShippingDocument` | Create shipping document |
| `getShippingDocumentResult` | Get shipping document result |
| `downloadShippingDocument` | Download shipping document |
| `getMassShippingParameter` | Get mass shipping parameters |
| `updateShippingOrder` | Update shipping order |
| `getMassTrackingNumber` | Get mass tracking numbers |
| `getShippingDocumentParameter` | Get shipping document parameters |
| `getAddressList` | Get seller address list |
| `batchShipOrder` | via Shopee `v2.logistics.batch_ship_order`. |
| `batchUpdateTpfWarehouseTrackingStatus` | via Shopee `v2.logistics.batch_update_tpf_warehouse_tracking_status`. |
| `checkPolygonUpdateStatus` | via Shopee `v2.logistics.check_polygon_update_status`. |
| `createBookingShippingDocument` | via Shopee `v2.logistics.create_booking_shipping_document`. |
| `createShippingDocumentJob` | via Shopee `v2.logistics.create_shipping_document_job`. |
| `deleteAddress` | via Shopee `v2.logistics.delete_address`. |
| `deleteSpecialOperatingHour` | via Shopee `v2.logistics.delete_special_operating_hour`. |
| `downloadBookingShippingDocument` | via Shopee `v2.logistics.download_booking_shipping_document`. |
| `downloadShippingDocumentJob` | via Shopee `v2.logistics.download_shipping_document_job`. |
| `downloadToLabel` | via Shopee `v2.logistics.download_to_label`. |
| `getBookingShippingDocumentDataInfo` | via Shopee `v2.logistics.get_booking_shipping_document_data_info`. |
| `getBookingShippingDocumentParameter` | via Shopee `v2.logistics.get_booking_shipping_document_parameter`. |
| `getBookingShippingDocumentResult` | via Shopee `v2.logistics.get_booking_shipping_document_result`. |
| `getBookingShippingParameter` | via Shopee `v2.logistics.get_booking_shipping_parameter`. |
| `getBookingTrackingInfo` | via Shopee `v2.logistics.get_booking_tracking_info`. |
| `getBookingTrackingNumber` | via Shopee `v2.logistics.get_booking_tracking_number`. |
| `getMartPackagingInfo` | via Shopee `v2.logistics.get_mart_packaging_info`. |
| `getOperatingHourRestrictions` | via Shopee `v2.logistics.get_operating_hour_restrictions`. |
| `getOperatingHours` | via Shopee `v2.logistics.get_operating_hours`. |
| `getPauseStatus` | via Shopee `v2.logistics.get_pause_status`. |
| `getShippingDocumentDataInfo` | via Shopee `v2.logistics.get_shipping_document_data_info`. |
| `getShippingDocumentJobStatus` | via Shopee `v2.logistics.get_shipping_document_job_status`. |
| `setAddressConfig` | via Shopee `v2.logistics.set_address_config`. |
| `setMartPackagingInfo` | via Shopee `v2.logistics.set_mart_packaging_info`. |
| `setPauseStatus` | via Shopee `v2.logistics.set_pause_status`. |
| `shipBooking` | via Shopee `v2.logistics.ship_booking`. |
| `updateAddress` | via Shopee `v2.logistics.update_address`. |
| `updateChannel` | via Shopee `v2.logistics.update_channel`. |
| `updateOperatingHours` | via Shopee `v2.logistics.update_operating_hours`. |
| `updateSelfCollectionOrderLogistics` | via Shopee `v2.logistics.update_self_collection_order_logistics`. |
| `updateTrackingStatus` | via Shopee `v2.logistics.update_tracking_status`. |
| `uploadServiceablePolygon` | via Shopee `v2.logistics.upload_serviceable_polygon`. |

### Payment

| Method | Description |
| --- | --- |
| `getEscrowDetail` | Get Shopee payment escrow detail |
| `generateIncomeReport` | via Shopee `v2.payment.generate_income_report`. |
| `generateIncomeStatement` | via Shopee `v2.payment.generate_income_statement`. |
| `getBillingTransactionInfo` | via Shopee `v2.payment.get_billing_transaction_info`. |
| `getEscrowDetailBatch` | via Shopee `v2.payment.get_escrow_detail_batch`. |
| `getEscrowList` | via Shopee `v2.payment.get_escrow_list`. |
| `getIncomeDetail` | via Shopee `v2.payment.get_income_detail`. |
| `getIncomeOverview` | via Shopee `v2.payment.get_income_overview`. |
| `getIncomeReport` | via Shopee `v2.payment.get_income_report`. |
| `getIncomeStatement` | via Shopee `v2.payment.get_income_statement`. |
| `getItemInstallmentStatus` | via Shopee `v2.payment.get_item_installment_status`. |
| `getPaymentMethodList` | via Shopee `v2.payment.get_payment_method_list`. |
| `getPayoutDetail` | via Shopee `v2.payment.get_payout_detail`. |
| `getPayoutInfo` | via Shopee `v2.payment.get_payout_info`. |
| `getShopInstallmentStatus` | via Shopee `v2.payment.get_shop_installment_status`. |
| `getWalletTransactionList` | via Shopee `v2.payment.get_wallet_transaction_list`. |
| `setItemInstallmentStatus` | via Shopee `v2.payment.set_item_installment_status`. |
| `setShopInstallmentStatus` | via Shopee `v2.payment.set_shop_installment_status`. |

### Returns

| Method | Description |
| --- | --- |
| `getReturnList` | List return/refund requests with pagination and filters |
| `getReturnDetail` | Get one return/refund request detail by `return_sn` |
| `getAvailableSolutions` | Get the return/refund solutions available for a return |
| `confirmReturn` | Seller-side confirmation of a buyer return/refund request |
| `acceptOffer` | via Shopee `v2.returns.accept_offer`. |
| `cancelDispute` | via Shopee `v2.returns.cancel_dispute`. |
| `convertImage` | via Shopee `v2.returns.convert_image`. |
| `dispute` | via Shopee `v2.returns.dispute`. |
| `getReturnDisputeReason` | via Shopee `v2.returns.get_return_dispute_reason`. |
| `getReverseTrackingInfo` | via Shopee `v2.returns.get_reverse_tracking_info`. |
| `getShippingCarrier` | via Shopee `v2.returns.get_shipping_carrier`. |
| `offer` | via Shopee `v2.returns.offer`. |
| `queryProof` | via Shopee `v2.returns.query_proof`. |
| `uploadProof` | via Shopee `v2.returns.upload_proof`. |
| `uploadShippingProof` | via Shopee `v2.returns.upload_shipping_proof`. |

---

### Media

| Method | Description |
| --- | --- |
| `uploadImage` | Upload one or more images via `v2.media.upload_image` |
| `initVideoUpload` | Start a video upload session via `v2.media.init_video_upload` |
| `uploadVideoPart` | Upload one video chunk via `v2.media.upload_video_part` |
| `completeVideoUpload` | Finalize a video upload via `v2.media.complete_video_upload` |
| `getVideoUploadResult` | Poll video upload/transcode status via `v2.media.get_video_upload_result` |
| `cancelVideoUpload` | Cancel an in-progress video upload via `v2.media.cancel_video_upload` |

### Shop

| Method | Description |
| --- | --- |
| `getShopProfile` | Get shop name/logo/description via `v2.shop.get_profile` |
| `updateShopProfile` | Update shop name/logo/description via `v2.shop.update_profile` |
| `getShopInfo` | Get shop-level metadata via `v2.shop.get_shop_info` |
| `getShopNotification` | Get Seller Center notifications via `v2.shop.get_shop_notification` |
| `getWarehouseDetail` | Get warehouse address details via `v2.shop.get_warehouse_detail` |
| `getShopHolidayMode` | Check holiday mode status via `v2.shop.get_shop_holiday_mode` |
| `setShopHolidayMode` | Schedule holiday mode via `v2.shop.set_shop_holiday_mode` |
| `getAuthorisedResellerBrand` | Get authorised reseller brand list via `v2.shop.get_authorised_reseller_brand` |
| `getBrShopOnboardingInfo` | [BR shops only] Get KYC onboarding info via `v2.shop.get_br_shop_onboarding_info` |

### Shop Category

| Method | Description |
| --- | --- |
| `addShopCategory` | Create a shop-level product category via `v2.shop_category.add_shop_category` |
| `updateShopCategory` | Update a shop-level product category via `v2.shop_category.update_shop_category` |
| `deleteShopCategory` | Delete a shop-level product category via `v2.shop_category.delete_shop_category` |
| `getShopCategoryList` | List shop-level product categories via `v2.shop_category.get_shop_category_list` |
| `addShopCategoryItemList` | Assign items to a shop category via `v2.shop_category.add_item_list` |
| `deleteShopCategoryItemList` | Remove items from a shop category via `v2.shop_category.delete_item_list` |
| `getShopCategoryItemList` | List items in a shop category via `v2.shop_category.get_item_list` |

### Using submodule namespaces

```typescript
import { ShopeeModule } from 'shopee-api-client';

const shopee = new ShopeeModule({ /* ...config */ });

// Flat method (existing surface, e.g. product/order/logistics domains)
const categories = await shopee.getCategory();

// Submodule namespace (new domains added in v2.1.0, avoids name collisions)
const globalCategories = await shopee.globalProduct.getCategory();
const adCampaigns = await shopee.ads.getProductLevelCampaignIdList();
const vouchers = await shopee.voucher.getVoucherList({ status: 1, voucher_type: 1, page_no: 1, page_size: 20 });
```

### Submodule namespaces (v2.1.0+)

The 20 domains below were added after the initial flat-method surface and are accessed as **submodule namespaces** on the `ShopeeModule` instance (`shopee.<namespace>.<method>()`) instead of top-level methods, to avoid name collisions with existing flat methods (for example both `shopee.getCategory()` and `shopee.globalProduct.getCategory()` exist as distinct methods).

#### Account Health (`shopee.accountHealth.*`)

| Method | Shopee endpoint |
| --- | --- |
| `getLateOrders` | `v2.account_health.get_late_orders` |
| `getListingsWithIssues` | `v2.account_health.get_listings_with_issues` |
| `getMetricSourceDetail` | `v2.account_health.get_metric_source_detail` |
| `getPenaltyPointHistory` | `v2.account_health.get_penalty_point_history` |
| `getPunishmentHistory` | `v2.account_health.get_punishment_history` |
| `getShopPerformance` | `v2.account_health.get_shop_performance` |

#### Add-on Deal (`shopee.addOnDeal.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addAddOnDeal` | `v2.add_on_deal.add_add_on_deal` |
| `addAddOnDealMainItem` | `v2.add_on_deal.add_add_on_deal_main_item` |
| `addAddOnDealSubItem` | `v2.add_on_deal.add_add_on_deal_sub_item` |
| `deleteAddOnDeal` | `v2.add_on_deal.delete_add_on_deal` |
| `deleteAddOnDealMainItem` | `v2.add_on_deal.delete_add_on_deal_main_item` |
| `deleteAddOnDealSubItem` | `v2.add_on_deal.delete_add_on_deal_sub_item` |
| `endAddOnDeal` | `v2.add_on_deal.end_add_on_deal` |
| `getAddOnDeal` | `v2.add_on_deal.get_add_on_deal` |
| `getAddOnDealList` | `v2.add_on_deal.get_add_on_deal_list` |
| `getAddOnDealMainItem` | `v2.add_on_deal.get_add_on_deal_main_item` |
| `getAddOnDealSubItem` | `v2.add_on_deal.get_add_on_deal_sub_item` |
| `updateAddOnDeal` | `v2.add_on_deal.update_add_on_deal` |
| `updateAddOnDealMainItem` | `v2.add_on_deal.update_add_on_deal_main_item` |
| `updateAddOnDealSubItem` | `v2.add_on_deal.update_add_on_deal_sub_item` |

#### Ads (`shopee.ads.*`)

| Method | Shopee endpoint |
| --- | --- |
| `checkCreateGmsProductCampaignEligibility` | `v2.ads.check_create_gms_product_campaign_eligibility` |
| `createAutoProductAds` | `v2.ads.create_auto_product_ads` |
| `createGmsProductCampaign` | `v2.ads.create_gms_product_campaign` |
| `createManualProductAds` | `v2.ads.create_manual_product_ads` |
| `editAutoProductAds` | `v2.ads.edit_auto_product_ads` |
| `editGmsItemProductCampaign` | `v2.ads.edit_gms_item_product_campaign` |
| `editGmsProductCampaign` | `v2.ads.edit_gms_product_campaign` |
| `editManualProductAdKeywords` | `v2.ads.edit_manual_product_ad_keywords` |
| `editManualProductAds` | `v2.ads.edit_manual_product_ads` |
| `getAdsFacilShopRate` | `v2.ads.get_ads_facil_shop_rate` |
| `getAllCpcAdsDailyPerformance` | `v2.ads.get_all_cpc_ads_daily_performance` |
| `getAllCpcAdsHourlyPerformance` | `v2.ads.get_all_cpc_ads_hourly_performance` |
| `getCreateProductAdBudgetSuggestion` | `v2.ads.get_create_product_ad_budget_suggestion` |
| `getGmsCampaignPerformance` | `v2.ads.get_gms_campaign_performance` |
| `getGmsItemPerformance` | `v2.ads.get_gms_item_performance` |
| `getProductCampaignDailyPerformance` | `v2.ads.get_product_campaign_daily_performance` |
| `getProductCampaignHourlyPerformance` | `v2.ads.get_product_campaign_hourly_performance` |
| `getProductLevelCampaignIdList` | `v2.ads.get_product_level_campaign_id_list` |
| `getProductLevelCampaignSettingInfo` | `v2.ads.get_product_level_campaign_setting_info` |
| `getProductRecommendedRoiTarget` | `v2.ads.get_product_recommended_roi_target` |
| `getRecommendedItemList` | `v2.ads.get_recommended_item_list` |
| `getRecommendedKeywordList` | `v2.ads.get_recommended_keyword_list` |
| `getShopToggleInfo` | `v2.ads.get_shop_toggle_info` |
| `getTotalBalance` | `v2.ads.get_total_balance` |
| `listGmsUserDeletedItem` | `v2.ads.list_gms_user_deleted_item` |

#### AMS / Affiliate Marketing (`shopee.ams.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addAllProductsToOpenCampaign` | `v2.ams.add_all_products_to_open_campaign` |
| `batchAddProductsToOpenCampaign` | `v2.ams.batch_add_products_to_open_campaign` |
| `batchEditProductsOpenCampaignSetting` | `v2.ams.batch_edit_products_open_campaign_setting` |
| `batchGetProductsSuggestedRate` | `v2.ams.batch_get_products_suggested_rate` |
| `batchRemoveProductsOpenCampaignSetting` | `v2.ams.batch_remove_products_open_campaign_setting` |
| `createNewTargetedCampaign` | `v2.ams.create_new_targeted_campaign` |
| `editAffiliateListOfTargetedCampaign` | `v2.ams.edit_affiliate_list_of_targeted_campaign` |
| `editAllProductsOpenCampaignSetting` | `v2.ams.edit_all_products_open_campaign_setting` |
| `editProductListOfTargetedCampaign` | `v2.ams.edit_product_list_of_targeted_campaign` |
| `getAffiliatePerformance` | `v2.ams.get_affiliate_performance` |
| `getAutoAddNewProductToggleStatus` | `v2.ams.get_auto_add_new_product_toggle_status` |
| `getCampaignKeyMetricsPerformance` | `v2.ams.get_campaign_key_metrics_performance` |
| `getContentPerformance` | `v2.ams.get_content_performance` |
| `getConversionReport` | `v2.ams.get_conversion_report` |
| `getManagedAffiliateList` | `v2.ams.get_managed_affiliate_list` |
| `getOpenCampaignAddedProduct` | `v2.ams.get_open_campaign_added_product` |
| `getOpenCampaignBatchTaskResult` | `v2.ams.get_open_campaign_batch_task_result` |
| `getOpenCampaignNotAddedProduct` | `v2.ams.get_open_campaign_not_added_product` |
| `getOpenCampaignPerformance` | `v2.ams.get_open_campaign_performance` |
| `getOptimizationSuggestionProduct` | `v2.ams.get_optimization_suggestion_product` |
| `getPerformanceDataUpdateTime` | `v2.ams.get_performance_data_update_time` |
| `getProductPerformance` | `v2.ams.get_product_performance` |
| `getRecommendedAffiliateList` | `v2.ams.get_recommended_affiliate_list` |
| `getShopPerformance` | `v2.ams.get_shop_performance` |
| `getShopSuggestedRate` | `v2.ams.get_shop_suggested_rate` |
| `getTargetedCampaignAddableProductList` | `v2.ams.get_targeted_campaign_addable_product_list` |
| `getTargetedCampaignList` | `v2.ams.get_targeted_campaign_list` |
| `getTargetedCampaignPerformance` | `v2.ams.get_targeted_campaign_performance` |
| `getTargetedCampaignSettings` | `v2.ams.get_targeted_campaign_settings` |
| `getValidationList` | `v2.ams.get_validation_list` |
| `getValidationReport` | `v2.ams.get_validation_report` |
| `queryAffiliateList` | `v2.ams.query_affiliate_list` |
| `removeAllProductsOpenCampaignSetting` | `v2.ams.remove_all_products_open_campaign_setting` |
| `terminateTargetedCampaign` | `v2.ams.terminate_targeted_campaign` |
| `updateAutoAddNewProductSetting` | `v2.ams.update_auto_add_new_product_setting` |
| `updateBasicInfoOfTargetedCampaign` | `v2.ams.update_basic_info_of_targeted_campaign` |

#### Bundle Deal (`shopee.bundleDeal.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addBundleDeal` | `v2.bundle_deal.add_bundle_deal` |
| `addBundleDealItem` | `v2.bundle_deal.add_bundle_deal_item` |
| `deleteBundleDeal` | `v2.bundle_deal.delete_bundle_deal` |
| `deleteBundleDealItem` | `v2.bundle_deal.delete_bundle_deal_item` |
| `endBundleDeal` | `v2.bundle_deal.end_bundle_deal` |
| `getBundleDeal` | `v2.bundle_deal.get_bundle_deal` |
| `getBundleDealItem` | `v2.bundle_deal.get_bundle_deal_item` |
| `getBundleDealList` | `v2.bundle_deal.get_bundle_deal_list` |
| `updateBundleDeal` | `v2.bundle_deal.update_bundle_deal` |
| `updateBundleDealItem` | `v2.bundle_deal.update_bundle_deal_item` |

#### Discount (`shopee.discount.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addDiscount` | `v2.discount.add_discount` |
| `addDiscountItem` | `v2.discount.add_discount_item` |
| `deleteDiscount` | `v2.discount.delete_discount` |
| `deleteDiscountItem` | `v2.discount.delete_discount_item` |
| `deleteSipDiscount` | `v2.discount.delete_sip_discount` |
| `endDiscount` | `v2.discount.end_discount` |
| `getDiscount` | `v2.discount.get_discount` |
| `getDiscountList` | `v2.discount.get_discount_list` |
| `getSipDiscounts` | `v2.discount.get_sip_discounts` |
| `setSipDiscount` | `v2.discount.set_sip_discount` |
| `updateDiscount` | `v2.discount.update_discount` |
| `updateDiscountItem` | `v2.discount.update_discount_item` |

#### FBS / Fulfillment by Shopee (`shopee.fbs.*`)

| Method | Shopee endpoint |
| --- | --- |
| `queryBrShopBlockStatus` | `v2.fbs.query_br_shop_block_status` |
| `queryBrShopEnrollmentStatus` | `v2.fbs.query_br_shop_enrollment_status` |
| `queryBrShopInvoiceError` | `v2.fbs.query_br_shop_invoice_error` |
| `queryBrSkuBlockStatus` | `v2.fbs.query_br_sku_block_status` |

#### First Mile (`shopee.firstMile.*`)

| Method | Shopee endpoint |
| --- | --- |
| `bindCourierDeliveryFirstMileTrackingNumber` | `v2.first_mile.bind_courier_delivery_first_mile_tracking_number` |
| `bindFirstMileTrackingNumber` | `v2.first_mile.bind_first_mile_tracking_number` |
| `generateAndBindFirstMileTrackingNumber` | `v2.first_mile.generate_and_bind_first_mile_tracking_number` |
| `generateFirstMileTrackingNumber` | `v2.first_mile.generate_first_mile_tracking_number` |
| `getChannelList` | `v2.first_mile.get_channel_list` |
| `getCourierDeliveryChannelList` | `v2.first_mile.get_courier_delivery_channel_list` |
| `getCourierDeliveryDetail` | `v2.first_mile.get_courier_delivery_detail` |
| `getCourierDeliveryTrackingNumberList` | `v2.first_mile.get_courier_delivery_tracking_number_list` |
| `getCourierDeliveryWaybill` | `v2.first_mile.get_courier_delivery_waybill` |
| `getDetail` | `v2.first_mile.get_detail` |
| `getTrackingNumberList` | `v2.first_mile.get_tracking_number_list` |
| `getTransitWarehouseList` | `v2.first_mile.get_transit_warehouse_list` |
| `getUnbindOrderList` | `v2.first_mile.get_unbind_order_list` |
| `getWaybill` | `v2.first_mile.get_waybill` |
| `unbindFirstMileTrackingNumber` | `v2.first_mile.unbind_first_mile_tracking_number` |
| `unbindFirstMileTrackingNumberAll` | `v2.first_mile.unbind_first_mile_tracking_number_all` |

#### Follow Prize (`shopee.followPrize.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addFollowPrize` | `v2.follow_prize.add_follow_prize` |
| `deleteFollowPrize` | `v2.follow_prize.delete_follow_prize` |
| `endFollowPrize` | `v2.follow_prize.end_follow_prize` |
| `getFollowPrizeDetail` | `v2.follow_prize.get_follow_prize_detail` |
| `getFollowPrizeList` | `v2.follow_prize.get_follow_prize_list` |
| `updateFollowPrize` | `v2.follow_prize.update_follow_prize` |

#### Global Product (`shopee.globalProduct.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addGlobalItem` | `v2.global_product.add_global_item` |
| `addGlobalModel` | `v2.global_product.add_global_model` |
| `categoryRecommend` | `v2.global_product.category_recommend` |
| `createPublishTask` | `v2.global_product.create_publish_task` |
| `deleteGlobalItem` | `v2.global_product.delete_global_item` |
| `deleteGlobalModel` | `v2.global_product.delete_global_model` |
| `getAttributeTree` | `v2.global_product.get_attribute_tree` |
| `getBrandList` | `v2.global_product.get_brand_list` |
| `getCategory` | `v2.global_product.get_category` |
| `getGlobalItemId` | `v2.global_product.get_global_item_id` |
| `getGlobalItemInfo` | `v2.global_product.get_global_item_info` |
| `getGlobalItemLimit` | `v2.global_product.get_global_item_limit` |
| `getGlobalItemList` | `v2.global_product.get_global_item_list` |
| `getGlobalModelList` | `v2.global_product.get_global_model_list` |
| `getLocalAdjustmentRate` | `v2.global_product.get_local_adjustment_rate` |
| `getPublishTaskResult` | `v2.global_product.get_publish_task_result` |
| `getPublishableShop` | `v2.global_product.get_publishable_shop` |
| `getPublishedList` | `v2.global_product.get_published_list` |
| `getRecommendAttribute` | `v2.global_product.get_recommend_attribute` |
| `getShopPublishableStatus` | `v2.global_product.get_shop_publishable_status` |
| `getSizeChartDetail` | `v2.global_product.get_size_chart_detail` |
| `getSizeChartList` | `v2.global_product.get_size_chart_list` |
| `getVariations` | `v2.global_product.get_variations` |
| `initTierVariation` | `v2.global_product.init_tier_variation` |
| `searchGlobalAttributeValueList` | `v2.global_product.search_global_attribute_value_list` |
| `setSyncField` | `v2.global_product.set_sync_field` |
| `supportSizeChart` | `v2.global_product.support_size_chart` |
| `updateGlobalItem` | `v2.global_product.update_global_item` |
| `updateGlobalModel` | `v2.global_product.update_global_model` |
| `updateLocalAdjustmentRate` | `v2.global_product.update_local_adjustment_rate` |
| `updatePrice` | `v2.global_product.update_price` |
| `updateSizeChart` | `v2.global_product.update_size_chart` |
| `updateStock` | `v2.global_product.update_stock` |
| `updateTierVariation` | `v2.global_product.update_tier_variation` |

#### Livestream (`shopee.livestream.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addItemList` | `v2.livestream.add_item_list` |
| `applyItemSet` | `v2.livestream.apply_item_set` |
| `banUserComment` | `v2.livestream.ban_user_comment` |
| `createSession` | `v2.livestream.create_session` |
| `deleteItemList` | `v2.livestream.delete_item_list` |
| `deleteShowItem` | `v2.livestream.delete_show_item` |
| `endSession` | `v2.livestream.end_session` |
| `getItemCount` | `v2.livestream.get_item_count` |
| `getItemList` | `v2.livestream.get_item_list` |
| `getItemSetItemList` | `v2.livestream.get_item_set_item_list` |
| `getItemSetList` | `v2.livestream.get_item_set_list` |
| `getLatestCommentList` | `v2.livestream.get_latest_comment_list` |
| `getLikeItemList` | `v2.livestream.get_like_item_list` |
| `getRecentItemList` | `v2.livestream.get_recent_item_list` |
| `getSessionDetail` | `v2.livestream.get_session_detail` |
| `getSessionItemMetric` | `v2.livestream.get_session_item_metric` |
| `getSessionMetric` | `v2.livestream.get_session_metric` |
| `getShowItem` | `v2.livestream.get_show_item` |
| `postComment` | `v2.livestream.post_comment` |
| `startSession` | `v2.livestream.start_session` |
| `unbanUserComment` | `v2.livestream.unban_user_comment` |
| `updateItemList` | `v2.livestream.update_item_list` |
| `updateSession` | `v2.livestream.update_session` |
| `updateShowItem` | `v2.livestream.update_show_item` |
| `uploadImage` | `v2.livestream.upload_image` |

#### Media Space (`shopee.mediaSpace.*`)

| Method | Shopee endpoint |
| --- | --- |
| `cancelVideoUpload` | `v2.media_space.cancel_video_upload` |
| `completeVideoUpload` | `v2.media_space.complete_video_upload` |
| `getVideoUploadResult` | `v2.media_space.get_video_upload_result` |
| `initVideoUpload` | `v2.media_space.init_video_upload` |
| `uploadImage` | `v2.media_space.upload_image` |
| `uploadVideoPart` | `v2.media_space.upload_video_part` |

#### Merchant (`shopee.merchant.*`)

| Method | Shopee endpoint |
| --- | --- |
| `getMerchantInfo` | `v2.merchant.get_merchant_info` |
| `getMerchantPrepaidAccountList` | `v2.merchant.get_merchant_prepaid_account_list` |
| `getMerchantWarehouseList` | `v2.merchant.get_merchant_warehouse_list` |
| `getMerchantWarehouseLocationList` | `v2.merchant.get_merchant_warehouse_location_list` |
| `getShopListByMerchant` | `v2.merchant.get_shop_list_by_merchant` |
| `getWarehouseEligibleShopList` | `v2.merchant.get_warehouse_eligible_shop_list` |

#### Principal / Cross-border Performance (`shopee.principal.*`)

| Method | Shopee endpoint |
| --- | --- |
| `getClipVideoPerformance` | `v2.principal.get_clip_video_performance` |
| `getContentAffiliatePerformance` | `v2.principal.get_content_affiliate_performance` |
| `getPrincipalAffiliatePerformance` | `v2.principal.get_principal_affiliate_performance` |
| `getPrincipalLivestreamPerformance` | `v2.principal.get_principal_livestream_performance` |
| `getPrincipalSalesPerformanceDetail` | `v2.principal.get_principal_sales_performance_detail` |
| `getPrincipalVideoPerformance` | `v2.principal.get_principal_video_performance` |
| `getSessionLivestreamPerformance` | `v2.principal.get_session_livestream_performance` |
| `getShopAffiliatePerformance` | `v2.principal.get_shop_affiliate_performance` |
| `getShopLivestreamPerformance` | `v2.principal.get_shop_livestream_performance` |
| `getShopSalesPerformanceDetail` | `v2.principal.get_shop_sales_performance_detail` |
| `getShopVideoPerformance` | `v2.principal.get_shop_video_performance` |

#### Public (`shopee.publicApi.*`)

| Method | Shopee endpoint |
| --- | --- |
| `getMerchantsByPartner` | `v2.public.get_merchants_by_partner` |
| `getShopeeIpRanges` | `v2.public.get_shopee_ip_ranges` |
| `getShopsByPartner` | `v2.public.get_shops_by_partner` |
| `getTokenByResendCode` | `v2.public.get_token_by_resend_code` |

#### SBS / Shopee Business Services (`shopee.sbs.*`)

| Method | Shopee endpoint |
| --- | --- |
| `getBoundWhsInfo` | `v2.sbs.get_bound_whs_info` |
| `getCurrentInventory` | `v2.sbs.get_current_inventory` |
| `getExpiryReport` | `v2.sbs.get_expiry_report` |
| `getFulfillmentMappingInventoryList` | `v2.sbs.get_fulfillment_mapping_inventory_list` |
| `getStockAging` | `v2.sbs.get_stock_aging` |
| `getStockMovement` | `v2.sbs.get_stock_movement` |

#### Shop Flash Sale (`shopee.shopFlashSale.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addShopFlashSaleItems` | `v2.shop_flash_sale.add_shop_flash_sale_items` |
| `createShopFlashSale` | `v2.shop_flash_sale.create_shop_flash_sale` |
| `deleteShopFlashSale` | `v2.shop_flash_sale.delete_shop_flash_sale` |
| `deleteShopFlashSaleItems` | `v2.shop_flash_sale.delete_shop_flash_sale_items` |
| `getItemCriteria` | `v2.shop_flash_sale.get_item_criteria` |
| `getShopFlashSale` | `v2.shop_flash_sale.get_shop_flash_sale` |
| `getShopFlashSaleItems` | `v2.shop_flash_sale.get_shop_flash_sale_items` |
| `getShopFlashSaleList` | `v2.shop_flash_sale.get_shop_flash_sale_list` |
| `getTimeSlotId` | `v2.shop_flash_sale.get_time_slot_id` |
| `updateShopFlashSale` | `v2.shop_flash_sale.update_shop_flash_sale` |
| `updateShopFlashSaleItems` | `v2.shop_flash_sale.update_shop_flash_sale_items` |

#### Top Picks (`shopee.topPicks.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addTopPicks` | `v2.top_picks.add_top_picks` |
| `deleteTopPicks` | `v2.top_picks.delete_top_picks` |
| `getTopPicksList` | `v2.top_picks.get_top_picks_list` |
| `updateTopPicks` | `v2.top_picks.update_top_picks` |

#### Video / Shopee Video (`shopee.video.*`)

| Method | Shopee endpoint |
| --- | --- |
| `deleteVideo` | `v2.video.delete_video` |
| `editVideoInfo` | `v2.video.edit_video_info` |
| `getCoverList` | `v2.video.get_cover_list` |
| `getMetricTrend` | `v2.video.get_metric_trend` |
| `getOverviewPerformance` | `v2.video.get_overview_performance` |
| `getProdcutPerformanceList` | `v2.video.get_prodcut_performance_list` (sic — this typo exists in Shopee’s actual endpoint path) |
| `getUserDemographics` | `v2.video.get_user_demographics` |
| `getVideoDetail` | `v2.video.get_video_detail` |
| `getVideoDetailAudienceDistribution` | `v2.video.get_video_detail_audience_distribution` |
| `getVideoDetailMetricTrend` | `v2.video.get_video_detail_metric_trend` |
| `getVideoDetailPerformance` | `v2.video.get_video_detail_performance` |
| `getVideoDetailProductPerformance` | `v2.video.get_video_detail_product_performance` |
| `getVideoList` | `v2.video.get_video_list` |
| `getVideoPerformanceList` | `v2.video.get_video_performance_list` |
| `postVideo` | `v2.video.post_video` |

#### Voucher (`shopee.voucher.*`)

| Method | Shopee endpoint |
| --- | --- |
| `addVoucher` | `v2.voucher.add_voucher` |
| `deleteVoucher` | `v2.voucher.delete_voucher` |
| `endVoucher` | `v2.voucher.end_voucher` |
| `getVoucher` | `v2.voucher.get_voucher` |
| `getVoucherList` | `v2.voucher.get_voucher_list` |
| `updateVoucher` | `v2.voucher.update_voucher` |

---

## Related packages

| Package | Description |
| --- | --- |
| [`tiktokshops-api-client`](https://www.npmjs.com/package/tiktokshops-api-client) | TikTok Shop Open API client |
| [`lazada-api-client`](https://www.npmjs.com/package/lazada-api-client) | Lazada Open API client |
| [`shopee-tiktokshops-lazada-api`](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api) | All three clients in one package |

## License

ISC

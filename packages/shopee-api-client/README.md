# shopee-api-client

[![npm](https://img.shields.io/npm/v/shopee-api-client)](https://www.npmjs.com/package/shopee-api-client)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](../../LICENSE)

TypeScript client for [Shopee Open API v2](https://open.shopee.com/). Covers seller authorization, token management, orders, products, logistics, and payment escrow.

> Unofficial package. Not affiliated with Shopee.

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

### Orders

| Method | Description |
| --- | --- |
| `getOrders` | Auto-paginate Shopee order list and return order items |
| `getOrderList` | Get one raw Shopee order-list page with cursor metadata |
| `getOrderDetail` | Get Shopee order detail |
| `cancelOrder` | Cancel order before shipment |

### Products

| Method | Description |
| --- | --- |
| `getProductItemList` | Get product item list |
| `getProductItemBaseInfo` | Get product base information |
| `addItem` | Add product item |
| `updateStock` | Update product stock |
| `updatePrice` | Update product price |
| `unListItem` | List or unlist product item |
| `getCategory` | Get Shopee categories |
| `getAttributes` | Get category attributes |
| `getBrandList` | Get brand list |

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

### Payment

| Method | Description |
| --- | --- |
| `getEscrowDetail` | Get Shopee payment escrow detail |

---

## Related packages

| Package | Description |
| --- | --- |
| [`tiktokshops-api-client`](https://www.npmjs.com/package/tiktokshops-api-client) | TikTok Shop Open API client |
| [`lazada-api-client`](https://www.npmjs.com/package/lazada-api-client) | Lazada Open API client |
| [`shopee-tiktokshops-lazada-api`](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api) | All three clients in one package |

## License

ISC

# lazada-api-client

[![npm](https://img.shields.io/npm/v/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Downloads](https://img.shields.io/npm/dm/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Types](https://img.shields.io/npm/types/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License](https://img.shields.io/npm/l/lazada-api-client)](https://opensource.org/licenses/ISC)

TypeScript API client for **Lazada Open Platform**.

A Node.js / TypeScript package for integrating with Lazada: seller authorization, token management, and **381 typed API methods across 34 domains** that cover **all 378 APIs** of the official Lazada Open Platform reference (Orders, Products, Finance, Logistics, FBL, Returns & Refunds, Vouchers, Messaging, Sponsored Solutions and more), plus Payment Options.

- Typed request and response models for every method, no `any`.
- Requests are signed with the Lazada HMAC-SHA256 scheme and routed to the regional host chosen by `countryCode`.
- Automatic retry for idempotent GET requests, per-request timeouts, and a structured `LazadaApiError`.
- A push-message signature verifier for incoming Lazada callbacks.

> Unofficial package. This project is not affiliated with Lazada.

---

## Installation

```bash
npm install lazada-api-client
```

## Quick Start

```ts
import { LazadaModule } from "lazada-api-client";

const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  appAccessToken: process.env.LAZADA_ACCESS_TOKEN!,
  refreshToken: process.env.LAZADA_REFRESH_TOKEN!,
  countryCode: "sg",
});

// Fetch product list
const products = await lazada.getProducts();

// Fetch order list
const orders = await lazada.getOrders({
  created_after: "2024-01-01T00:00:00+08:00",
  limit: 100,
});
```

---

## Configuration

```ts
const lazada = new LazadaModule({
  appKey: "YOUR_APP_KEY",
  appSecret: "YOUR_APP_SECRET",
  appAccessToken: "YOUR_ACCESS_TOKEN",
  refreshToken: "YOUR_REFRESH_TOKEN",
  countryCode: "sg",
});
```

| Field | Required | Description |
|-------|----------|-------------|
| `appKey` | ✅ Yes | Lazada Open Platform APP Key |
| `appSecret` | ✅ Yes | APP Secret used to sign requests |
| `countryCode` | ❌ No | Country code: `sg`, `my`, `th`, `vn`, `id`, `ph`, `cb` |
| `shopId` | ❌ No | Custom store identifier |
| `appAccessToken` | ⚠️ Required for private APIs | Access token |
| `refreshToken` | ⚠️ Required for token refresh | Refresh token |
| `expiresIn` | ❌ No | Remaining access token lifetime (seconds) |
| `refreshExpiresIn` | ❌ No | Remaining refresh token lifetime (seconds) |
| `timeoutMs` | ❌ No | Per-request timeout in milliseconds for the domain namespaces (default `30000`) |
| `maxRetries` | ❌ No | Automatic retries for GET requests on transient failures (default `2`, `0` disables) |

---

## Authorization Flow

Lazada uses OAuth2.0 — seller authorization is required before calling APIs.

```text
1. Generate authorization URL → generateAuthLink()
2. Redirect seller to that URL
3. Seller logs in & confirms
4. Lazada redirects to callback URL with ?code=xxx
5. Exchange code for token → fetchTokenWithAuthCode(code)
6. Store access_token and refresh_token
7. Create LazadaModule with appAccessToken + refreshToken
8. Refresh token before expiry → refreshToken()
```

Token validity:
- `code`: valid for 30 minutes, single-use
- `access_token`: 10 days
- `refresh_token`: 50 days

### 1. Generate Authorization Link

```ts
const { url } = lazada.generateAuthLink(
  "https://your-app.com/lazada/callback",
  undefined,
  "CUSTOM_STATE"
);
// => url: "https://auth.lazada.com/oauth/authorize?response_type=code&..."
```

### 2. Handle Callback

```ts
// Express.js example
app.get("/lazada/callback", async (req, res) => {
  const code = req.query.code as string;

  if (!code) return res.status(400).send("Missing code");

  const lazada = new LazadaModule({
    appKey: process.env.LAZADA_APP_KEY!,
    appSecret: process.env.LAZADA_APP_SECRET!,
  });

  const token = await lazada.fetchTokenWithAuthCode(code);

  // Save token to DB (do not return to browser)
  await saveToken(token);

  res.send("Authorization successful!");
});
```

### 3. Fetch Access Token

```ts
const token = await lazada.fetchTokenWithAuthCode("AUTH_CODE_FROM_CALLBACK");

// Response
{
  access_token: "ACCESS_TOKEN",
  country: "sg",
  refresh_token: "REFRESH_TOKEN",
  expires_in: 864000,          // 10 days
  refresh_expires_in: 4320000, // 50 days
  country_user_info: [
    { country: "sg", user_id: "1152180742", seller_id: "1152180742", short_code: "SGLYT0OS" }
  ],
  account: "seller@example.com",
  code: "0"
}
```

### 4. Refresh Token

```ts
const newToken = await lazada.refreshToken();
// => Returns new access_token
```

---

## Order APIs (14 methods)

### 📋 API List

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 1 | [`getOrders()`](src/module/lazada/api/order.api.ts:64) | `GET /orders/get` | Get orders with filters & pagination (raw response) |
| 2 | [`getAllOrders()`](src/module/lazada/api/order.api.ts:100) | `GET /orders/get` | Auto-paginate through all orders (returns flat array) |
| 3 | [`getOrderDetail()`](src/module/lazada/api/order.api.ts:156) | `GET /order/get` | Get single order detail |
| 4 | [`getOrderItems()`](src/module/lazada/api/order.api.ts:187) | `GET /order/items/get` | Get items in an order |
| 5 | [`getMultipleOrderItems()`](src/module/lazada/api/order.api.ts:215) | `GET /orders/items/get` | Get items in multiple orders (max 50) |
| 6 | [`getShipmentProviders()`](src/module/lazada/api/order.api.ts:244) | `GET /order/shipment/providers/get` | Get available shipment providers |
| 7 | [`packOrder()`](src/module/lazada/api/order.api.ts:275) | `POST /order/fulfill/pack` | Pack order (SetToPack) |
| 8 | [`recreatePackage()`](src/module/lazada/api/order.api.ts:312) | `POST /order/fulfill/pack` | Repack order (SetRepack) |
| 9 | [`setReadyToShip()`](src/module/lazada/api/order.api.ts:345) | `POST /order/package/rts` | Set package ready to ship (SetRTS) |
| 10 | [`printAWB()`](src/module/lazada/api/order.api.ts:381) | `GET /order/document/awb/pdf/get` | Print AWB shipping label PDF |
| 11 | [`getShippingLabel()`](src/module/lazada/api/order.api.ts:410) | `POST /order/package/document/get` | Get shipping labels V2 |
| 12 | [`traceOrder()`](src/module/lazada/api/order.api.ts:441) | `GET /logistic/order/trace` | Trace logistics status |
| 13 | [`confirmDeliveryForDBS()`](src/module/lazada/api/order.api.ts:473) | `POST /order/delivery/confirm` | Confirm DBS delivery success |
| 14 | [`failedDeliveryForDBS()`](src/module/lazada/api/order.api.ts:505) | `POST /order/failed_delivery/confirm` | Confirm DBS delivery failed |

### `getOrders` vs `getAllOrders` — Key Differences

| Aspect | `getOrders()` | `getAllOrders()` |
|--------|---------------|------------------|
| **Return type** | [`LazadaResponseGetOrders`](src/module/lazada/dto/response/order.response.ts:153) — contains `{ code, data: { countTotal, count, orders }, request_id }` | [`LazadaOrderDetail[]`](src/module/lazada/dto/response/order.response.ts:54) — flat array of orders only |
| **Pagination** | Manual — you control `offset` and `limit` | Automatic — loops with `offset += 100` until all orders are collected |
| **Max limit** | 100 per request (configurable) | Fixed at 100 per internal request |
| **Max offset** | 5000 (enforced by API) | 5000 (stops automatically) |
| **Progress tracking** | ❌ Not available | ✅ Optional `onProgress(page, total, countSoFar)` callback |
| **Use case** | Fine-grained control over pagination, checking `countTotal` | Fetching all orders at once without manual pagination logic |

**Example — `getOrders()` with manual pagination:**
```ts
const page1 = await lazada.getOrders({ created_after, offset: 0, limit: 100 });
const page2 = await lazada.getOrders({ created_after, offset: 100, limit: 100 });
// ...continue incrementing offset
```

**Example — `getAllOrders()` with auto-pagination & progress:**
```ts
const allOrders = await lazada.getAllOrders(
  { created_after: "2024-01-01T00:00:00+08:00" },
  (page, total, countSoFar) => {
    console.log(`Page ${page}/${Math.ceil(total / 100)} — loaded ${countSoFar}`);
  }
);
// => LazadaOrderDetail[] — all orders
```

### Complete order processing flow example

```ts
import { LazadaModule, OrderStatusFilter } from "lazada-api-client";

const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  appAccessToken: process.env.LAZADA_ACCESS_TOKEN!,
  refreshToken: process.env.LAZADA_REFRESH_TOKEN!,
  countryCode: "sg",
});

// 1. Fetch pending orders
const orders = await lazada.getOrders({
  status: OrderStatusFilter.PENDING,
  created_after: "2024-06-01T00:00:00+08:00",
  limit: 100,
});

for (const order of orders.data?.orders ?? []) {
  // 2. Get order items
  const items = await lazada.getOrderItems(order.order_id!);
  const orderItemIds = (items.data?.items ?? []).map(i => i.order_item_id!);

  // 3. Get available shipment providers
  const providers = await lazada.getShipmentProviders(order.order_id!);

  // 4. Pack the order
  const packResult = await lazada.packOrder({
    order_id: order.order_id!,
    order_item_ids: orderItemIds,
    shipment_provider: providers.data?.providers?.[0]?.name,
  });

  // 5. Print AWB
  const packageId = packResult.data?.pack_order_result?.package_id;
  if (packageId) {
    const awb = await lazada.printAWB({
      order_id: order.order_id!,
      package_id: packageId,
    });
  }

  // 6. Set ready to ship
  await lazada.setReadyToShip({
    order_id: order.order_id!,
    package_id: packageId!,
  });
}
```

### DBS (Delivered by Seller)

```ts
// Confirm successful delivery (DBS)
await lazada.confirmDeliveryForDBS({
  order_id: "1234567890",
  order_item_ids: [111, 222],
});

// Confirm failed delivery (DBS)
await lazada.failedDeliveryForDBS({
  order_id: "1234567890",
  order_item_ids: [111, 222],
});
```

---

## Product APIs

### API List

| Method | Description | Notes |
|--------|-------------|-------|
| `getProducts()` | Get product list (auto-pagination) | |
| `getProductItem(itemId)` | Get product item detail | |
| `createProduct(payload)` | Create a new product | |
| `updateSellableQuantity(itemId, payload)` | Update sellable quantity | |
| `updateStatusProduct(itemId, payload)` | Update product status | |
| `updatePrice(itemId, payload)` | Update product price | |
| `getCategoryTree()` | Get category tree | |
| `getCategorySuggestion(productName)` | Get category suggestion | ⚠️ Not exposed on `LazadaModule` class — import directly from module |
| `getCategoryAttributes(categoryId)` | Get category attributes | ⚠️ Not exposed on `LazadaModule` class — import directly from module |
| `getBrands()` | Get brand list | |

> **Deprecated endpoints (legacy constants only):** The constant `SET_STATUS_TO_PACKED_BY_MARKETPLACE = '/order/pack'` is defined in `constant.ts` but **not used** by any exported function. The old Lazada `/order/pack` endpoint has been replaced by `/order/fulfill/pack` (used by [`packOrder()`](src/module/lazada/api/order.api.ts:275) and [`recreatePackage()`](src/module/lazada/api/order.api.ts:312)). Do not use the old endpoint.

### Example

```ts
// Product list
const products = await lazada.getProducts();

// Product detail
const product = await lazada.getProductItem(123456789);

// Update quantity
await lazada.updateSellableQuantity(123456789, {
  seller_sku: "SKU-RED-M",
  quantity: 10,
});

// Update price
await lazada.updatePrice(123456789, {
  seller_sku: "SKU-RED-M",
  price: "120000",
  special_price: "99000",
});

// Update status
await lazada.updateStatusProduct(123456789, {
  seller_sku: "SKU-RED-M",
  status: "active",
});
```

---

## Payment Options

Static helpers for looking up payment methods by country.

```ts
// Get payment methods by country
const methods = LazadaModule.getPaymentMethodsByCountry("SG");
// => ["MIXEDCARD", "DBS_IPP", "OCBC_IPP", "PAYPAL", ...]

// Check if a method is available in a country
const available = LazadaModule.isPaymentMethodAvailableInCountry("VN", "MOMO_WALLET");
// => true

// Get all unique payment methods
const all = LazadaModule.getAllPaymentMethods();

// Get countries supporting a method
const countries = LazadaModule.getCountriesByPaymentMethod("COD");
// => ["PH", "MY", "TH", "VN", "ID"]
```

---

## Supported APIs (Overview)

### Authorization
| Method | Description |
|--------|-------------|
| `generateAuthLink` | Generate Lazada authorization URL |
| `fetchTokenWithAuthCode` | Exchange authorization code for access token & refresh token |
| `refreshToken` | Refresh access token |

### Orders (14 methods)
| Method | Description |
|--------|-------------|
| `getOrders` | Get orders with filters & pagination (raw response with `countTotal`, `count`, `orders`) |
| `getAllOrders` | Auto-paginate through all orders (returns flat `LazadaOrderDetail[]` with progress callback) |
| `getOrderDetail` | Get single order detail |
| `getOrderItems` | Get items in an order |
| `getMultipleOrderItems` | Get items in multiple orders (max 50) |
| `getShipmentProviders` | Get available shipment providers |
| `packOrder` | Pack order items (SetToPack) using `/order/fulfill/pack` |
| `recreatePackage` | Repack order items (SetRepack) using `/order/fulfill/pack` |
| `setReadyToShip` | Set package ready to ship (SetRTS) |
| `printAWB` | Print AWB shipping label PDF |
| `getShippingLabel` | Get shipping labels V2 |
| `traceOrder` | Trace logistics status |
| `confirmDeliveryForDBS` | Confirm DBS delivery success |
| `failedDeliveryForDBS` | Confirm DBS delivery failed |

### Payment Options (static)
| Method | Description |
|--------|-------------|
| `getPaymentMethodsByCountry` | Get payment methods for a country |
| `isPaymentMethodAvailableInCountry` | Check if method is available in country |
| `getAllPaymentMethods` | Get all unique methods across all countries |
| `getCountriesByPaymentMethod` | Get countries supporting a method |

### Products
| Method | Description |
|--------|-------------|
| `getProducts` | Get product list (auto-pagination) |
| `getProductItem` | Get product item detail |
| `createProduct` | Create product |
| `updateSellableQuantity` | Update sellable quantity |
| `updateStatusProduct` | Update product status |
| `updatePrice` | Update product price |
| `getCategoryTree` | Get category tree |
| `getCategorySuggestion` | Get category suggestion (not on class, import directly) |
| `getCategoryAttributes` | Get category attributes (not on class, import directly) |
| `getBrands` | Get brand list |

---

## Full API coverage: domain namespaces

Besides the flat methods above, every Lazada domain is available as a typed namespace on the same `LazadaModule` instance:

```ts
const payout = await lazada.finance.getPayoutStatus({ created_after: "2025-01-01" });
const warehouses = await lazada.seller.getWarehouseBySellerId();
await lazada.fbl.getShipperInfo();
```

34 namespaces, 381 methods:

`choiceCustomized`, `content`, `crossBoarderProduct`, `eTickets`, `earlyBirdPrice`, `fbl`, `finance`, `firstmileBigbagOnlyForCn`, `flexicombo`, `freeShipping`, `fulfillment`, `instantMessaging`, `dg`, `ownLogistics`, `walletCorporateTopUp`, `lazlike`, `lazlive`, `lazpay`, `logistics`, `logisticsStation`, `mediaCenter`, `membership`, `order`, `product`, `productReview`, `redmart`, `returnAndRefund`, `seller`, `sellerVoucher`, `serviceMarket`, `sponsoredSolutions`, `storeDecoration`, `storeFlashSale`, `system`.

The full method, HTTP verb and path list is in the generated [API reference](./docs/API.md). Several APIs have a newer `V2` variant next to the original (for example `earlyBirdPrice.createEarlyBirdActivityV2`); the method without the suffix calls the older version.

> Three flat methods call older endpoints that the current official reference no longer lists and are marked `@deprecated`: use `lazada.fulfillment.printAWB()`, `lazada.fulfillment.confirmDeliveryForDBS()` and `lazada.fulfillment.failedDeliveryForDBS()` (their parameters differ: they take `packages: [{ package_id }]`).

> The namespaces are separate from the flat methods, so `lazada.getOrders()` and `lazada.order.getOrders()` can differ in parameters and response shape. Existing flat methods keep working unchanged.

## Regions

Namespace requests go to the regional host for `countryCode` (`sg`, `vn`, `ph`, `my`, `th`, `id`). When `countryCode` is omitted or not one of these (for example `cb`), the client uses `vn`, as in earlier releases, so always set `countryCode` for non-Vietnam shops. OAuth token endpoints always use `auth.lazada.com`.

## Error handling

Domain-namespace methods throw `LazadaApiError` when Lazada returns a non-`"0"` `code` or the request fails (network error, timeout, non-2xx status):

```ts
import { LazadaApiError } from "lazada-api-client";

try {
  await lazada.finance.getPayoutStatus({ created_after: "2025-01-01" });
} catch (error) {
  if (error instanceof LazadaApiError) {
    console.error(error.code, error.type, error.message, error.requestId, error.status);
  }
}
```

> The older flat methods (`getOrders`, `getProductItem`, ...) log the error and resolve to `undefined` on failure. Check their result before use.

## Timeouts and retries

Domain-namespace requests time out after 30 seconds (`timeoutMs`). GET requests are retried up to `maxRetries` times (default 2) on network errors, HTTP 408, 429 and 5xx, with exponential backoff that honors `Retry-After`. POST requests are never retried automatically, because Lazada mutations are not guaranteed to be idempotent.

```ts
const lazada = new LazadaModule({ ...config, timeoutMs: 10_000, maxRetries: 0 });
```

## Verifying push messages

Lazada signs push messages sent to your callback URL. Verify the `Authorization` header against the **raw** request body before you trust the payload:

```ts
import { verifyLazadaPushSignature, parseLazadaPushPayload } from "lazada-api-client";

app.post("/webhooks/lazada", express.raw({ type: "application/json" }), (req, res) => {
  const valid = verifyLazadaPushSignature({
    appKey: process.env.LAZADA_APP_KEY!,
    appSecret: process.env.LAZADA_APP_SECRET!,
    rawBody: req.body, // Buffer, exactly as received
    authorization: req.header("authorization") ?? "",
  });
  if (!valid) return res.sendStatus(401);

  const message = parseLazadaPushPayload(req.body);
  res.sendStatus(200);
});
```

The signature is `hex(HMAC_SHA256(appSecret, appKey + rawBody))`, compared in constant time. Do not re-serialize a parsed body: whitespace and key order change the signature.

> This is the scheme in Lazada's official [Push Mechanism guide](https://developer.alibaba.com/docs/doc.htm?treeId=499&articleId=120168&docType=1): `Authorization = HEX(HMAC-SHA256(Base, app_secret))` with `Base = app_key + message body`. The guide's own example elides the message body, so it cannot be used as a test vector; the tests here use an independent implementation of the same construction.

---

## Build

```bash
npm run build
```

## License

ISC

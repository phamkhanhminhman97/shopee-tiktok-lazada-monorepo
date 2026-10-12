# tiktokshops-api-client

[![npm](https://img.shields.io/npm/v/tiktokshops-api-client)](https://www.npmjs.com/package/tiktokshops-api-client)
[![Downloads](https://img.shields.io/npm/dm/tiktokshops-api-client)](https://www.npmjs.com/package/tiktokshops-api-client)
[![Types](https://img.shields.io/npm/types/tiktokshops-api-client)](https://www.npmjs.com/package/tiktokshops-api-client)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License](https://img.shields.io/npm/l/tiktokshops-api-client)](https://opensource.org/licenses/ISC)

TypeScript API client for **TikTok Shop Open API**.

This package helps Node.js / TypeScript backends integrate with TikTok Shop: seller authorization, token exchange and refresh, and **352 typed API methods across 20 domains** that cover **all 316 endpoints** in TikTok Shop's official API reference (Orders, Products, Fulfillment, FBT, Finance, Return & Refund, Promotion, Affiliate, Analytics, Customer Service, Customer Engagement, Logistics, Seller, Shop, Event, Auth, ...).

- Typed request and response models for every method, no `any`.
- Requests are signed with the TikTok Shop HMAC-SHA256 scheme; the JSON body is part of the signature.
- Automatic retry for idempotent GET requests, per-request timeouts, and a structured `TiktokApiError`.
- A webhook signature verifier for incoming TikTok Shop events.

> Unofficial package. This project is not affiliated with TikTok.

## Installation

```bash
npm install tiktokshops-api-client
```

## Quick Start

```ts
import { TiktokModule } from "tiktokshops-api-client";

const tiktok = new TiktokModule({
  appKey: process.env.TIKTOK_APP_KEY!,
  appSecret: process.env.TIKTOK_APP_SECRET!,
  serviceId: process.env.TIKTOK_SERVICE_ID!,
  shopId: process.env.TIKTOK_SHOP_ID!,
  shopCipher: process.env.TIKTOK_SHOP_CIPHER!,
  accessToken: process.env.TIKTOK_ACCESS_TOKEN!,
  refreshToken: process.env.TIKTOK_REFRESH_TOKEN!,
});

const orders = await tiktok.getOrderList({
  beforeHours: 24,
  pageSize: 20,
  sortField: "create_time",
  sortOrder: "ASC",
});

console.log(orders);
```

## Configuration

```ts
const tiktok = new TiktokModule({
  appKey: "YOUR_APP_KEY",
  appSecret: "YOUR_APP_SECRET",
  serviceId: "YOUR_SERVICE_ID",
  shopId: "YOUR_SHOP_ID",
  shopCipher: "YOUR_SHOP_CIPHER",
  accessToken: "YOUR_ACCESS_TOKEN",
  refreshToken: "YOUR_REFRESH_TOKEN",
});
```

| Field | Required | Description |
| --- | --- | --- |
| `appKey` | Yes | TikTok Shop app key from Partner Center |
| `appSecret` | Yes | TikTok Shop app secret used for auth and request signing |
| `serviceId` | Required for auth link generation | TikTok Shop service ID used to build seller authorization URL |
| `shopId` | Required for most seller APIs | TikTok Shop shop ID |
| `shopCipher` | Required for some seller APIs | TikTok Shop shop cipher |
| `accessToken` | Required for private APIs | TikTok Shop access token |
| `refreshToken` | Required for token refresh | TikTok Shop refresh token |
| `accessTokenExpire` | No | Access token expiration Unix timestamp |
| `refreshTokenExipre` | No | Refresh token expiration Unix timestamp |
| `categoryAssetsCipher` | Required for some Product APIs | Category assets cipher (sent as `category_asset_cipher`) |
| `timeoutMs` | No | Per-request timeout in milliseconds for the domain namespaces (default `30000`) |
| `maxRetries` | No | Automatic retries for GET requests on transient failures (default `2`, `0` disables) |

## Authorization Flow

TikTok Shop seller APIs require seller authorization before you can call order, product, and fulfillment APIs.

```text
1. Generate a seller authorization link with service_id
2. Redirect the seller to the authorization URL
3. The seller logs in and approves your app
4. TikTok redirects back to your callback URL with code and optional state
5. Call fetchTokenWithAuthCode(code) to get access_token and refresh_token
6. Store the token response on your server
7. Create a TikTok client with shopId, shopCipher, accessToken, and refreshToken
8. Refresh the access token before it expires
```

According to the current TikTok Shop docs:
- `code` expires in 30 minutes and can only be used once
- `access_token` is valid for 7 days
- `refresh_token` has its own expiration timestamp returned by the API

## 1. Generate Authorization Link

Use `generateAuthLink(serviceId?, state?, useUsDomain?)` to build the seller authorization URL.

```ts
import { TiktokModule } from "tiktokshops-api-client";

const tiktok = new TiktokModule({
  appKey: process.env.TIKTOK_APP_KEY!,
  appSecret: process.env.TIKTOK_APP_SECRET!,
  serviceId: process.env.TIKTOK_SERVICE_ID!,
});

const { url } = tiktok.generateAuthLink(
  undefined,
  "RANDOM_STATE",
  false
);

console.log(url);
```

### Function

```ts
generateAuthLink(
  serviceId?: string,
  state?: string,
  useUsDomain?: boolean
): {
  url: string;
  serviceId: string;
  state?: string;
}
```

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `serviceId` | `string` | No | TikTok Shop service ID. Defaults to `config.serviceId` |
| `state` | `string` | No | Optional CSRF protection value returned in the callback |
| `useUsDomain` | `boolean` | No | Use the US Partner Center authorization domain |

## 2. Handle TikTok Callback

After seller approval, TikTok redirects back to your callback URL.

Example callback URL:

```text
https://your-app.com/tiktok/callback?code=TTP_xxx&state=RANDOM_STATE
```

Read these query parameters from the callback:

| Query Param | Description |
| --- | --- |
| `code` | Authorization code returned by TikTok Shop |
| `state` | Optional custom state value passed to `generateAuthLink` |

Example with Express:

```ts
app.get("/tiktok/callback", async (req, res) => {
  const code = req.query.code as string;
  const state = req.query.state as string | undefined;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  const tiktok = new TiktokModule({
    appKey: process.env.TIKTOK_APP_KEY!,
    appSecret: process.env.TIKTOK_APP_SECRET!,
  });

  const token = await tiktok.fetchTokenWithAuthCode(code);

  return res.json({ state, token });
});
```

Do not return tokens to the browser in production. Persist them server-side and associate them with the seller account or shop in your system.

## 3. Fetch Access Token

Use `fetchTokenWithAuthCode(code)` to exchange the authorization code for `access_token` and `refresh_token`.

```ts
const token = await tiktok.fetchTokenWithAuthCode("AUTH_CODE_FROM_CALLBACK");
```

### Function

```ts
fetchTokenWithAuthCode(authCode: string): Promise<TiktokResponseAccessToken>
```

### Example Response

```ts
{
  code: 0,
  message: "success",
  data: {
    access_token: "TTP_ACCESS_TOKEN",
    access_token_expire_in: 1660556783,
    refresh_token: "TTP_REFRESH_TOKEN",
    refresh_token_expire_in: 1691487031,
    open_id: "7010736057180325637",
    seller_name: "Test Shop",
    seller_base_region: "ID",
    user_type: 0
  },
  request_id: "2022080809462301024509910319695C45"
}
```

## 4. Refresh Token

Use `refreshToken()` to get a new access token.

```ts
const tiktok = new TiktokModule({
  appKey: process.env.TIKTOK_APP_KEY!,
  appSecret: process.env.TIKTOK_APP_SECRET!,
  refreshToken: "REFRESH_TOKEN",
});

const newToken = await tiktok.refreshToken();

console.log(newToken);
```

### Function

```ts
refreshToken(): Promise<TiktokResponseRefreshToken>
```

## Orders

### Get Order List

```ts
const orders = await tiktok.getOrderList({
  beforeHours: 24,
  pageSize: 20,
  sortField: "create_time",
  sortOrder: "ASC",
});
```

If `orderStatus` is omitted or set to `ALL`, `order_status` is not sent and TikTok Shop returns all matching statuses.

```ts
const unpaidOrders = await tiktok.getOrderList({
  orderStatus: "UNPAID",
  createTimeGe: 1623812664,
  createTimeLt: 1623899064,
});
```

### Get Order Detail

```ts
const detail = await tiktok.getOrderDetail("ORDER_ID");
```

### Get Price Detail

```ts
const price = await tiktok.getPriceDetail("ORDER_ID");
```

## Fulfillment

```ts
const slots = await tiktok.getPackageTimeSlots("PACKAGE_ID");

await tiktok.shipPackage("PACKAGE_ID", {
  handover_method: "PICKUP",
  pickup_slot: {
    start_time: 1736236800,
    end_time: 1736240400,
  },
});

const document = await tiktok.getShippingDocument(
  "PACKAGE_ID",
  "SHIPPING_LABEL"
);
```

## Products

```ts
const categories = await tiktok.getCategories();
const brands = await tiktok.getBrands("601302");
const attributes = await tiktok.getAttributes("601302");
const product = await tiktok.getProductDetail("PRODUCT_ID");
```

## Supported APIs

| Group | Methods |
| --- | --- |
| Auth | `generateAuthLink`, `fetchTokenWithAuthCode`, `refreshToken`, `getAuthorizedShop` |
| Orders | `getOrderList`, `getOrderDetail`, `getPriceDetail` |
| Products | `getProductDetail`, `getCategories`, `getBrands`, `getAttributes`, `createProduct` |
| Fulfillment | `getPackageTimeSlots`, `shipPackage`, `getShippingDocument` |

## Full API coverage: domain namespaces

Besides the flat methods above, every TikTok Shop domain is available as a typed namespace on the same `TiktokModule` instance:

```ts
const { data } = await tiktok.order.getOrderList({
  query: { page_size: 20 },
  body: { order_status: "AWAITING_SHIPMENT" },
});

await tiktok.product.updateProductInventory({
  product_id: "1729",
  body: { skus: [{ id: "1730", inventory: [{ quantity: 12 }] }] },
});
```

| Namespace | Domain | Methods |
| --- | --- | ---: |
| `tiktok.order` | Orders, price detail, external order references | 9 |
| `tiktok.product` | Products, categories, brands, global products, inventory, prices, images, SKPP | 73 |
| `tiktok.fulfillment` | Packages, shipping, handover, documents, invoices, customs | 30 |
| `tiktok.fbt` | Fulfilled by TikTok (FBT): inbound orders, inventory, warehouses | 23 |
| `tiktok.returnRefund` | Returns, cancellations, refunds, after-sale | 25 |
| `tiktok.finance` | Statements, payments, withdrawals, transactions | 9 |
| `tiktok.promotion` | Activities and coupons | 10 |
| `tiktok.affiliateSeller` | Affiliate (seller side): collaborations, samples, creators, messages, Compass exports | 52 |
| `tiktok.affiliatePartner` | Affiliate (partner side): campaigns and orders | 17 |
| `tiktok.affiliateCreator` | Affiliate (creator side): showcases, links, shoppable videos and photos | 26 |
| `tiktok.analytics` | Shop, product, SKU, video and live-room performance | 41 |
| `tiktok.customerService` | Buyer conversations, messages, agent settings | 12 |
| `tiktok.customerEngagement` | Engagement features, permissions | 6 |
| `tiktok.logistic` | Warehouses, delivery options, shipping providers, tracking | 7 |
| `tiktok.seller` | Active shops, seller permissions, shop groups | 3 |
| `tiktok.shop` | Authorized shops, category assets | 2 |
| `tiktok.event` | Webhook subscriptions | 3 |
| `tiktok.auth` | OAuth token exchange | 2 |
| `tiktok.supplyChain` | Supply chain | 1 |
| `tiktok.tools` | Resumable file upload | 1 |

The full method, HTTP verb and path list is in the generated [API reference](./docs/API.md). Methods whose name ends with a version (for example `order.getOrderDetail202507`) call a newer version of an endpoint than the unsuffixed method of the same name.

> The namespaces are separate from the flat methods, so `tiktok.getOrderList()` and `tiktok.order.getOrderList()` are different calls with different parameter shapes. Existing flat methods keep working unchanged.

> Paths, HTTP verbs and request/response fields of the namespaces are checked against the official TikTok Shop API reference (Partner Center). Note that TikTok Shop publishes several versions of some endpoints (for example `order.getOrderDetail` is `202309` and `order.getOrderDetail202507` is the newer `202507` version): the older method keeps calling the older version, the suffixed method calls the newer one. `affiliateSeller.markConversationRead` calls `/conversatons/read`: that misspelling is how TikTok publishes the path.

## Error handling

Domain-namespace methods throw `TiktokApiError` when TikTok Shop returns a non-zero `code` or the request fails (network error, timeout, non-2xx status):

```ts
import { TiktokApiError } from "tiktokshops-api-client";

try {
  await tiktok.order.getOrderDetail({ ids: ["576461413038785752"] });
} catch (error) {
  if (error instanceof TiktokApiError) {
    console.error(error.code, error.message, error.requestId, error.status);
  }
}
```

> The older flat methods (`getOrderList`, `getProductDetail`, ...) return TikTok's error body instead of throwing. Check `code` on their responses.

## Timeouts and retries

Domain-namespace requests time out after 30 seconds (`timeoutMs`). GET requests are retried up to `maxRetries` times (default 2) on network errors, HTTP 408, 429 and 5xx, with exponential backoff that honors `Retry-After`. POST, PUT and DELETE are never retried automatically, because TikTok Shop mutations are not guaranteed to be idempotent.

```ts
const tiktok = new TiktokModule({ ...config, timeoutMs: 10_000, maxRetries: 0 });
```

## Verifying webhooks

TikTok Shop signs each webhook request. Verify it against the **raw** request body before you trust the payload:

```ts
import { verifyTiktokWebhookSignature, parseTiktokWebhookPayload } from "tiktokshops-api-client";
import type { TiktokWebhookOrder } from "tiktokshops-api-client";

app.post("/webhooks/tiktok", express.raw({ type: "application/json" }), (req, res) => {
  const valid = verifyTiktokWebhookSignature({
    appKey: process.env.TIKTOK_APP_KEY!,
    appSecret: process.env.TIKTOK_APP_SECRET!,
    rawBody: req.body, // Buffer, exactly as received
    authorization: req.header("authorization") ?? "",
  });
  if (!valid) return res.sendStatus(401);

  const event = parseTiktokWebhookPayload<TiktokWebhookOrder>(req.body);
  res.sendStatus(200);
});
```

The signature is `hex(HMAC_SHA256(appSecret, appKey + rawBody))`, compared in constant time. Do not re-serialize a parsed body: whitespace and key order change the signature.

> The scheme is the one in TikTok Shop's official [Webhooks overview](https://partner.tiktokshop.com/docv2/page/tts-webhooks-overview): the `Authorization` header carries the lowercase hex HMAC-SHA256 of `app_key + raw request body`, keyed with the app secret.

## Types

```ts
import type {
  TiktokConfig,
  TiktokRequestOrderList,
  TiktokResponseOrderList,
} from "tiktokshops-api-client";
```

## Development

```bash
npm test
npm run docs:api   # run from the repo root; regenerates docs/API.md
npm pack --dry-run
```

## License

ISC

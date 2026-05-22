# tiktokshops-api-client

TypeScript API client for **TikTok Shop Open API**.

This package helps Node.js / TypeScript backends integrate with TikTok Shop seller authorization, access token exchange, token refresh, order APIs, product APIs, and fulfillment APIs.

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
npm pack --dry-run
```

## License

ISC

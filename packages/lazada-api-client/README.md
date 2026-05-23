# lazada-api-client


[![npm](https://img.shields.io/npm/v/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Downloads](https://img.shields.io/npm/dm/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Types](https://img.shields.io/npm/types/lazada-api-client)](https://www.npmjs.com/package/lazada-api-client)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License](https://img.shields.io/npm/l/lazada-api-client)](https://opensource.org/licenses/ISC)

TypeScript API client for **Lazada Open API**.

This package helps Node.js / TypeScript backends integrate with Lazada seller authorization, access token exchange, token refresh, order APIs, and product APIs.

> Unofficial package. This project is not affiliated with Lazada.

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

const products = await lazada.getProducts();

console.log(products);
```

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
| --- | --- | --- |
| `appKey` | Yes | Lazada Open Platform APP Key |
| `appSecret` | Yes | Lazada Open Platform APP Secret used to sign requests |
| `countryCode` | No | Store region such as `sg`, `my`, `th`, `vn`, `id`, `ph`, or `cb` |
| `shopId` | No | Optional store identifier kept by your application |
| `appAccessToken` | Required for private APIs | Lazada access token used to call seller APIs |
| `refreshToken` | Required for token refresh | Lazada refresh token used to get a new access token |
| `expiresIn` | No | Remaining access token lifetime in seconds |
| `refreshExpiresIn` | No | Remaining refresh token lifetime in seconds |

## Authorization Flow

Lazada seller APIs require seller authorization before you can call order and product APIs.

```text
1. Generate a Lazada authorization link
2. Redirect the seller to the authorization URL
3. The seller logs in and approves your app
4. Lazada redirects back to your callback URL with code
5. Call fetchTokenWithAuthCode(code) to get access_token and refresh_token
6. Store the token response on your server
7. Create a Lazada client with appAccessToken and refreshToken
8. Call refreshToken() before the access token expires
```

According to Lazada's current docs:
- `code` is valid for one use and should be exchanged within 30 minutes
- `access_token` is valid for 10 days
- `refresh_token` is valid for 50 days

## 1. Generate Authorization Link

Use `generateAuthLink(redirectURL, appKey?, state?)` to generate the Lazada authorization URL.

```ts
import { LazadaModule } from "lazada-api-client";

const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
});

const { url } = lazada.generateAuthLink(
  "https://your-app.com/lazada/callback",
  undefined,
  "CUSTOM_STATE"
);

console.log(url);
```

### Function

```ts
generateAuthLink(
  redirectURL: string,
  appKey?: string,
  state?: string
): {
  url: string;
  redirect: string;
}
```

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectURL` | `string` | Yes | Callback URL that Lazada redirects to after seller authorization |
| `appKey` | `string` | No | Lazada APP Key. Defaults to `config.appKey` |
| `state` | `string` | No | Optional custom state value returned by Lazada callback |

## 2. Handle Lazada Callback

After the seller approves authorization, Lazada redirects back to your callback URL.

Example callback URL:

```text
https://your-app.com/lazada/callback?code=0_100132_xxxxx&state=CUSTOM_STATE
```

Read these query parameters from the callback:

| Query Param | Description |
| --- | --- |
| `code` | Authorization code returned by Lazada |
| `state` | Optional custom value passed to `generateAuthLink` |

Example with Express:

```ts
app.get("/lazada/callback", async (req, res) => {
  const code = req.query.code as string;
  const state = req.query.state as string | undefined;

  if (!code) {
    return res.status(400).send("Missing code");
  }

  const lazada = new LazadaModule({
    appKey: process.env.LAZADA_APP_KEY!,
    appSecret: process.env.LAZADA_APP_SECRET!,
  });

  const token = await lazada.fetchTokenWithAuthCode(code, state);

  return res.json(token);
});
```

Do not return tokens to the browser in production. Persist them server-side and associate them with the seller account or store in your system.

## 3. Fetch Access Token

Use `fetchTokenWithAuthCode(code)` to exchange the authorization code for `access_token` and `refresh_token`.

```ts
const token = await lazada.fetchTokenWithAuthCode("AUTH_CODE_FROM_CALLBACK");
```

### Function

```ts
fetchTokenWithAuthCode(
  authCode: string,
  legacyStateOrUuid?: string
): Promise<LazadaResponseAccessToken>
```

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `authCode` | `string` | Yes | Authorization code returned by Lazada callback |
| `legacyStateOrUuid` | `string` | No | Backward compatibility parameter kept for older package usage. Lazada's current token API does not require it |

### Required Config

```ts
const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
});
```

### Example Response

```ts
{
  access_token: "ACCESS_TOKEN",
  country: "sg",
  refresh_token: "REFRESH_TOKEN",
  account_platform: "seller_center",
  refresh_expires_in: 4320000,
  country_user_info: [
    {
      country: "sg",
      user_id: "1152180742",
      seller_id: "1152180742",
      short_code: "SGLYT0OS"
    }
  ],
  expires_in: 864000,
  account: "seller@example.com",
  code: "0",
  request_id: "REQUEST_ID"
}
```

## 4. Use Access Token

After getting `access_token`, create a Lazada client with `appAccessToken` and `refreshToken`.

```ts
const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  appAccessToken: "ACCESS_TOKEN",
  refreshToken: "REFRESH_TOKEN",
  countryCode: "sg",
});

const orders = await lazada.getOrdersBeforeSomeDay();

console.log(orders);
```

## 5. Refresh Token

Use `refreshToken()` to get a new `access_token`.

```ts
const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  refreshToken: "REFRESH_TOKEN",
});

const newToken = await lazada.refreshToken();

console.log(newToken);
```

### Function

```ts
refreshToken(): Promise<LazadaResponseAccessToken>
```

### Required Config

```ts
const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  refreshToken: "REFRESH_TOKEN",
});
```

### Token Refresh Notes

- `refreshToken()` requires `config.refreshToken`
- Lazada returns a new `access_token`
- `refresh_token` itself has its own expiry window and cannot be extended forever
- Before `refresh_token` expires, the seller should complete authorization again to issue a new long-lived token set
- Do not expose `appSecret`, `appAccessToken`, or `refreshToken` in frontend code

## Orders

### Get Recent Orders

```ts
const orders = await lazada.getOrdersBeforeSomeDay();
```

### Get Order Detail

```ts
const order = await lazada.getOrderDetail("123456789012345");
```

## Products

### Get Product List

```ts
const products = await lazada.getProducts();
```

### Get Product Detail

```ts
const product = await lazada.getProductItem(123456789);
```

### Update Sellable Quantity

```ts
await lazada.updateSellableQuantity(123456789, {
  seller_sku: "SKU-RED-M",
  quantity: 10,
});
```

### Update Status

```ts
await lazada.updateStatusProduct(123456789, {
  seller_sku: "SKU-RED-M",
  status: "active",
});
```

### Update Price

```ts
await lazada.updatePrice(123456789, {
  seller_sku: "SKU-RED-M",
  price: "120000",
  special_price: "99000",
});
```

## Supported APIs

### Authorization

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate Lazada authorization URL |
| `fetchTokenWithAuthCode` | Exchange authorization code for access token and refresh token |
| `refreshToken` | Refresh access token |

### Orders

| Method | Description |
| --- | --- |
| `getOrdersBeforeSomeDay` | Get recent orders |
| `getOrderDetail` | Get order detail |

### Products

| Method | Description |
| --- | --- |
| `getProducts` | Get product list |
| `getProductItem` | Get product item detail |
| `createProduct` | Create product |
| `updateSellableQuantity` | Update sellable quantity |
| `updateStatusProduct` | Update product status |
| `updatePrice` | Update product price |
| `getCategoryTree` | Get category tree |
| `getBrands` | Get brand list |

## Build

```bash
npm run build
```

## License

ISC

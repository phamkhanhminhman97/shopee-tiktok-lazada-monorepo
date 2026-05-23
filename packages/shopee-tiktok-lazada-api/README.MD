# shopee-tiktokshops-lazada-api

[![npm](https://img.shields.io/npm/v/shopee-tiktokshops-lazada-api)](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api)
[![npm downloads](https://img.shields.io/npm/dm/shopee-tiktokshops-lazada-api)](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api)
[![Build](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Unified TypeScript wrapper for Shopee Open API v2, TikTok Shop Open API, and Lazada Open API. One package, three platforms.

> Need only one platform? Use the individual packages:
> [`shopee-api-client`](https://www.npmjs.com/package/shopee-api-client) ·
> [`tiktokshops-api-client`](https://www.npmjs.com/package/tiktokshops-api-client) ·
> [`lazada-api-client`](https://www.npmjs.com/package/lazada-api-client)

> Unofficial package. Not affiliated with Shopee, TikTok, or Lazada.

## Requirements

- Node.js 16 or later

## Installation

```bash
npm install shopee-tiktokshops-lazada-api
# or
yarn add shopee-tiktokshops-lazada-api
# or
pnpm add shopee-tiktokshops-lazada-api
```

---

## Shopee module

### Initialize

```ts
import { ShopeeModule } from 'shopee-tiktokshops-lazada-api';

const shopee = new ShopeeModule({
  partnerId: Number(process.env.SHOPEE_PARTNER_ID),
  partnerKey: process.env.SHOPEE_PARTNER_KEY!,
  shopId: process.env.SHOPEE_SHOP_ID!,
  accessToken: process.env.SHOPEE_ACCESS_TOKEN!,
  refreshToken: process.env.SHOPEE_REFRESH_TOKEN!,
});
```

| Field | Required | Description |
| --- | --- | --- |
| `partnerId` | Yes | Shopee Open Platform partner ID |
| `partnerKey` | Yes | Shopee Open Platform partner key |
| `shopId` | Required for shop APIs | Shopee shop ID |
| `accessToken` | Required for private APIs | OAuth access token |
| `refreshToken` | Required for token refresh | OAuth refresh token |

### Authorization

```ts
// 1. generate seller authorization URL
const { url } = await shopee.generateAuthLink('https://your-app.com/shopee/callback');
// redirect seller to url

// 2. exchange authorization code for tokens (in your callback handler)
const token = await shopee.fetchToken(req.query.code as string);
// persist token.access_token, token.refresh_token, token.expire_in

// 3. refresh access token before expiry (~4 hours)
const newToken = await shopee.refreshToken();
```

For a complete OAuth walkthrough, see the [`shopee-api-client` documentation](https://www.npmjs.com/package/shopee-api-client).

### Orders

| Method | Pagination | Return type | Use when |
| --- | --- | --- | --- |
| `getOrders()` | Auto-paginates all pages | `Promise<ShopeeOrderListItem[]>` | You only need the final order items |
| `getOrderList()` | One page per call | `Promise<ShopeeResponseOrderList>` | You need `request_id`, `response.more`, or `response.next_cursor` |

```ts
// get orders from last N minutes (shorthand)
const orders = await shopee.getOrders(60);
const orderSnList = orders.map(order => order.order_sn);

// get orders with options
const orders = await shopee.getOrders({
  beforeMinutes: 60,
  timeRangeField: 'create_time',
  orderStatus: 'READY_TO_SHIP',
  responseOptionalFields: ['order_status'],
  requestOrderStatusPending: true,
  pageSize: 100,
});

// get one raw Shopee page when you need cursor metadata
const page = await shopee.getOrderList({
  beforeMinutes: 60,
  pageSize: 50,
  cursor: '',
  responseOptionalFields: ['order_status'],
});
console.log(page.response.more, page.response.next_cursor);
// if more is true, pass next_cursor as cursor in the next getOrderList() call

// get order detail
const detail = await shopee.getOrderDetail('ORDER_SN');

// get orders ready for shipment
const shipmentList = await shopee.getShipmentList();
```

Available `orderStatus` values:

```ts
type ShopeeOrderStatus =
  | 'ALL'
  | 'UNPAID'
  | 'READY_TO_SHIP'
  | 'PROCESSED'
  | 'SHIPPED'
  | 'COMPLETED'
  | 'IN_CANCEL'
  | 'CANCELLED'
  | 'INVOICE_PENDING';
```

### Logistics

```ts
// get shipping parameters before arranging shipment
const params = await shopee.shippingParameter('ORDER_SN');

// arrange shipment for a single order
await shopee.shipOrder('ORDER_SN', 123, 'TIME_SLOT_ID');

// arrange shipment for multiple orders at once
await shopee.massShipOrder({ orderList: [...] });

// get tracking number
const tracking = await shopee.getTrackingNumber('ORDER_SN', 'PKG');

// get real-time tracking info
const trackingInfo = await shopee.getTrackingInfo('ORDER_SN');

// create and download shipping document (airwaybill)
await shopee.createShippingDocument({ orderList: [...] });
const result = await shopee.getShippingDocumentResult({ orderList: [...] });
const buffer = await shopee.downloadShippingDocument({ orderList: [...] }); // arraybuffer
```

### Products

```ts
// list products
const list = await shopee.getProductItemList();

// get product detail
const item = await shopee.getProductItemBaseInfo(['123456789']);

// update stock and price
await shopee.updateStock(123456789, 100);
await shopee.updatePrice('123456789', 99000);

// list/unlist product
await shopee.unListItem('123456789', true);

// categories, attributes, brands
const categories = await shopee.getCategory();
const attributes = await shopee.getAttributes(100001);
const brands = await shopee.getBrandList(100001);
```

### Payment

```ts
// get payment escrow detail
const escrow = await shopee.getEscrowDetail('ORDER_SN');
```

### Push Mechanism / Webhooks

Shopee Push Mechanism is Shopee's webhook system. Verify the `Authorization` header before processing the event.

```ts
import express from 'express';
import {
  SHOPEE_PUSH_CODE,
  type ShopeeKnownPushPayload,
} from 'shopee-tiktokshops-lazada-api';

const app = express();

app.post('/shopee/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const callbackUrl = 'https://your-app.com/shopee/webhook';
  const authorization = req.header('authorization') ?? '';

  const isValid = shopee.verifyPushSignature(callbackUrl, req.body, authorization);

  if (!isValid) {
    return res.status(401).end();
  }

  const payload = shopee.parsePushPayload<ShopeeKnownPushPayload>(req.body);

  if (payload.code === SHOPEE_PUSH_CODE.ORDER_STATUS_UPDATE) {
    console.log(payload.data.ordersn, payload.data.status);
    // Fetch the latest order data from Shopee APIs here.
  }

  return res.status(204).end();
});
```

Use the raw request body for signature verification and return a `2xx` status with an empty body to avoid Shopee retries.

### Supported Shopee methods

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate seller authorization URL |
| `fetchToken` | Exchange authorization code for access and refresh token |
| `refreshToken` | Refresh access token and refresh token |
| `verifyPushSignature` | Verify Shopee webhook Authorization header |
| `parsePushPayload` | Parse verified Shopee webhook raw body |
| `getOrders` | Auto-paginate order list and return order items |
| `getOrderList` | Get one raw order-list page with cursor metadata |
| `getOrderDetail` | Get order detail |
| `cancelOrder` | Cancel order before shipment |
| `getShipmentList` | Get orders ready for shipment |
| `searchPackageList` | Search package list |
| `getPackageDetail` | Get package detail |
| `getEscrowDetail` | Get payment escrow detail |
| `getProductItemList` | Get product item list |
| `getProductItemBaseInfo` | Get product base information |
| `addItem` | Add product item |
| `updateStock` | Update product stock |
| `updatePrice` | Update product price |
| `unListItem` | List or unlist product item |
| `getCategory` | Get Shopee categories |
| `getAttributes` | Get category attributes |
| `getBrandList` | Get brand list |
| `getChannelList` | Get logistics channels |
| `shippingParameter` | Get shipping parameters |
| `shipOrder` | Arrange shipment |
| `massShipOrder` | Arrange bulk shipment |
| `getMassShippingParameter` | Get bulk shipping parameters |
| `getTrackingNumber` | Get tracking number |
| `getTrackingInfo` | Get real-time tracking info |
| `updateShippingOrder` | Reschedule pickup for active shipment |
| `getMassTrackingNumber` | Get bulk tracking numbers |
| `createShippingDocument` | Trigger airwaybill generation |
| `getShippingDocumentResult` | Check airwaybill generation progress |
| `downloadShippingDocument` | Download airwaybill as buffer |
| `getShippingDocumentParameter` | Get selectable document formats |
| `getAddressList` | Get seller address list |

---

## TikTok Shop module

### Initialize

```ts
import { TiktokModule } from 'shopee-tiktokshops-lazada-api';

const tiktok = new TiktokModule({
  appKey: process.env.TIKTOK_APP_KEY!,
  appSecret: process.env.TIKTOK_APP_SECRET!,
  serviceId: process.env.TIKTOK_SERVICE_ID!,
  shopId: process.env.TIKTOK_SHOP_ID!,
  shopCipher: process.env.TIKTOK_SHOP_CIPHER!,
  accessToken: process.env.TIKTOK_ACCESS_TOKEN!,
  refreshToken: process.env.TIKTOK_REFRESH_TOKEN!,
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

### Authorization

```ts
// 1. generate seller authorization URL
const { url } = tiktok.generateAuthLink(
  undefined,
  'RANDOM_STATE',
  false
);
// redirect seller to url

// 2. exchange authorization code for tokens (in your callback handler)
const token = await tiktok.fetchTokenWithAuthCode(req.query.code as string);
// persist token.data.access_token, token.data.refresh_token

// 3. refresh access token before expiry
const newToken = await tiktok.refreshToken();
```

According to the current TikTok Shop docs:
- `code` expires in 30 minutes and can only be used once
- `access_token` is valid for 7 days
- `refresh_token` has its own expiration timestamp returned by the API

For a complete OAuth walkthrough, see the [`tiktokshops-api-client` documentation](https://www.npmjs.com/package/tiktokshops-api-client).

### Orders

```ts
// get order list
const orders = await tiktok.getOrderList({
  beforeHours: 24,
  pageSize: 20,
  sortField: 'create_time',
  sortOrder: 'ASC',
});

// get order detail
const detail = await tiktok.getOrderDetail('ORDER_ID');

// get price detail
const price = await tiktok.getPriceDetail('ORDER_ID');
```

If `orderStatus` is omitted or set to `ALL`, `order_status` is not sent and TikTok Shop returns all matching statuses.

### Fulfillment

```ts
// get available time slots for a package
const slots = await tiktok.getPackageTimeSlots('PACKAGE_ID');

// ship a package
await tiktok.shipPackage('PACKAGE_ID', {
  handover_method: 'PICKUP',
  pickup_slot: {
    start_time: 1736236800,
    end_time: 1736240400,
  },
});

// get shipping document
const doc = await tiktok.getShippingDocument(
  'PACKAGE_ID',
  'SHIPPING_LABEL'
);
```

### Products

```ts
// get product detail
const product = await tiktok.getProductDetail('PRODUCT_ID');

// get authorized shop info
const shop = await tiktok.getAuthorizedShop();

// categories, brands, attributes
const categories = await tiktok.getCategories();
const brands = await tiktok.getBrands('CAT_ID');
const attributes = await tiktok.getAttributes('CAT_ID');

// create product
await tiktok.createProduct({ ... });
```

### Supported TikTok Shop methods

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate seller authorization URL |
| `fetchTokenWithAuthCode` | Exchange authorization code for access and refresh token |
| `refreshToken` | Refresh access token |
| `getOrderList` | Get order list |
| `getOrderDetail` | Get order detail |
| `getPriceDetail` | Get order price detail |
| `getPackageTimeSlots` | Get available time slots for a package |
| `shipPackage` | Arrange package shipment |
| `getShippingDocument` | Get shipping document |
| `getProductDetail` | Get product detail |
| `getAuthorizedShop` | Get authorized shop info |
| `getCategories` | Get product categories |
| `getBrands` | Get brands by category |
| `getAttributes` | Get attributes by category |
| `createProduct` | Create product |

---

## Lazada module

### Initialize

```ts
import { LazadaModule } from 'shopee-tiktokshops-lazada-api';

const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  appAccessToken: process.env.LAZADA_ACCESS_TOKEN!,
  refreshToken: process.env.LAZADA_REFRESH_TOKEN!,
  countryCode: 'sg',
});
```

| Field | Required | Description |
| --- | --- | --- |
| `appKey` | Yes | Lazada Open Platform APP Key |
| `appSecret` | Yes | Lazada Open Platform APP Secret used for request signing |
| `countryCode` | No | Store region such as `sg`, `my`, `th`, `vn`, `id`, `ph`, or `cb` |
| `shopId` | No | Optional store identifier kept by your application |
| `appAccessToken` | Required for private APIs | Lazada seller access token |
| `refreshToken` | Required for token refresh | Lazada refresh token |

### Authorization

```ts
// 1. generate seller authorization URL
const { url } = lazada.generateAuthLink(
  'https://your-app.com/lazada/callback',
  undefined,
  'CUSTOM_STATE'
);
// redirect seller to url

// 2. exchange authorization code for tokens (in your callback handler)
const token = await lazada.fetchTokenWithAuthCode(req.query.code as string);
// persist token.access_token, token.refresh_token, token.expires_in

// 3. refresh access token before expiry
const newToken = await lazada.refreshToken();
```

According to Lazada's current docs:
- `code` should be exchanged within 30 minutes
- `access_token` is valid for 10 days
- `refresh_token` is valid for 50 days

For a complete OAuth walkthrough, see the [`lazada-api-client` documentation](https://www.npmjs.com/package/lazada-api-client).

### Orders

```ts
// get recent orders
const orders = await lazada.getOrdersBeforeSomeDay();

// get order detail
const detail = await lazada.getOrderDetail('123456789012345');
```

### Products

```ts
// list products
const products = await lazada.getProducts();

// get product detail
const item = await lazada.getProductItem(123456789);

// update stock
await lazada.updateSellableQuantity(123456789, {
  seller_sku: 'SKU-RED-M',
  quantity: 10,
});

// update product status
await lazada.updateStatusProduct(123456789, {
  seller_sku: 'SKU-RED-M',
  status: 'active',
});

// update price
await lazada.updatePrice(123456789, {
  seller_sku: 'SKU-RED-M',
  price: '120000',
  special_price: '99000',
});

// categories and brands
const categories = await lazada.getCategoryTree();
const brands = await lazada.getBrands();
```

### Supported Lazada methods

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate Lazada authorization URL |
| `fetchTokenWithAuthCode` | Exchange authorization code for access and refresh token |
| `refreshToken` | Refresh access token |
| `getOrdersBeforeSomeDay` | Get recent orders |
| `getOrderDetail` | Get order detail |
| `getProducts` | Get product list |
| `getProductItem` | Get product item detail |
| `createProduct` | Create product |
| `updateSellableQuantity` | Update sellable quantity |
| `updateStatusProduct` | Update product status |
| `updatePrice` | Update product price |
| `getCategoryTree` | Get category tree |
| `getBrands` | Get brand list |

---

## Error handling

All methods throw if the platform API returns an error. Wrap calls in `try/catch`:

```ts
try {
  const orders = await shopee.getOrders({ beforeMinutes: 60 });
} catch (err) {
  console.error(err.message); // e.g. "Invalid access_token."
  console.error(err.code);    // e.g. "error_auth"
}
```

---

## Changelog

See [CHANGELOG.md](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/blob/main/packages/shopee-tiktok-lazada-api/CHANGELOG.md) for release history.

## License

ISC

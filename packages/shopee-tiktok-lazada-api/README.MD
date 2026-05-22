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

- Node.js 18 or later

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

// get order detail
const detail = await shopee.getOrderDetail(['ORDER_SN_1', 'ORDER_SN_2']);

// get orders ready for shipment
const shipmentList = await shopee.getShipmentList({ pageNo: 1, pageSize: 50 });
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
const params = await shopee.shippingParameter({ orderSn: 'ORDER_SN' });

// arrange shipment for a single order
await shopee.shipOrder({
  orderSn: 'ORDER_SN',
  pickup: { addressId: 123, pickupTimeId: 'TIME_SLOT_ID' },
});

// arrange shipment for multiple orders at once
await shopee.massShipOrder({ orderList: [...] });

// get tracking number
const tracking = await shopee.getTrackingNumber({ orderSn: 'ORDER_SN', packageNumber: 'PKG' });

// get real-time tracking info
const trackingInfo = await shopee.getTrackingInfo({ orderSn: 'ORDER_SN' });

// create and download shipping document (airwaybill)
await shopee.createShippingDocument({ orderList: [...] });
const result = await shopee.getShippingDocumentResult({ orderList: [...] });
const buffer = await shopee.downloadShippingDocument({ orderList: [...] }); // arraybuffer
```

### Products

```ts
// list products
const list = await shopee.getProductItemList({ offset: 0, pageSize: 50, itemStatus: ['NORMAL'] });

// get product detail
const item = await shopee.getProductItemBaseInfo({ itemIdList: [123456789] });

// update stock and price
await shopee.updateStock({ itemId: 123456789, stockList: [{ modelId: 0, normalStock: 100 }] });
await shopee.updatePrice({ itemId: 123456789, priceList: [{ modelId: 0, originalPrice: 99000 }] });

// list/unlist product
await shopee.unListItem({ itemList: [{ itemId: 123456789, unlist: true }] });

// categories, attributes, brands
const categories = await shopee.getCategory({ language: 'vi' });
const attributes = await shopee.getAttributes({ categoryId: 100001 });
const brands = await shopee.getBrandList({ categoryId: 100001, pageSize: 100 });
```

### Payment

```ts
// get payment escrow detail
const escrow = await shopee.getEscrowDetail({ orderSn: 'ORDER_SN' });
```

### Supported Shopee methods

| Method | Description |
| --- | --- |
| `generateAuthLink` | Generate seller authorization URL |
| `fetchToken` | Exchange authorization code for access and refresh token |
| `refreshToken` | Refresh access token and refresh token |
| `getOrders` | Get order list |
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
  shopId: process.env.TIKTOK_SHOP_ID!,
  shopCipher: process.env.TIKTOK_SHOP_CIPHER!,
  accessToken: process.env.TIKTOK_ACCESS_TOKEN!,
});
```

| Field | Required | Description |
| --- | --- | --- |
| `appKey` | Yes | TikTok Shop app key |
| `appSecret` | Yes | TikTok Shop app secret (used for request signing) |
| `shopId` | Yes | TikTok Shop shop ID |
| `shopCipher` | Yes | TikTok Shop shop cipher |
| `accessToken` | Yes | TikTok Shop access token |

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

### Fulfillment

```ts
// get available time slots for a package
const slots = await tiktok.getPackageTimeSlots({ packageId: 'PKG_ID' });

// ship a package
await tiktok.shipPackage({ packageId: 'PKG_ID', pickupSlotId: 'SLOT_ID' });

// get shipping document
const doc = await tiktok.getShippingDocument({ packageId: 'PKG_ID' });
```

### Products

```ts
// get product detail
const product = await tiktok.getProductDetail('PRODUCT_ID');

// get authorized shop info
const shop = await tiktok.getAuthorizedShop();

// categories, brands, attributes
const categories = await tiktok.getCategories();
const brands = await tiktok.getBrands({ categoryId: 'CAT_ID' });
const attributes = await tiktok.getAttributes({ categoryId: 'CAT_ID' });

// create product
await tiktok.createProduct({ ... });
```

### Supported TikTok Shop methods

| Method | Description |
| --- | --- |
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
  shopId: process.env.LAZADA_SHOP_ID!,
  appAccessToken: process.env.LAZADA_ACCESS_TOKEN!,
});
```

| Field | Required | Description |
| --- | --- | --- |
| `appKey` | Yes | Lazada app key |
| `appSecret` | Yes | Lazada app secret (used for request signing) |
| `shopId` | Yes | Lazada shop ID |
| `appAccessToken` | Yes | Lazada access token |

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
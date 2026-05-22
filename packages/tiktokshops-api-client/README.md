# tiktokshops-api-client

Minimal TypeScript client for TikTok Shop Open API.

<p align="center">
  <a href="https://www.npmjs.com/package/tiktokshops-api-client"><img alt="npm" src="https://img.shields.io/npm/v/tiktokshops-api-client?color=111"></a>
  <img alt="node" src="https://img.shields.io/badge/node-%3E%3D16-111">
  <img alt="types" src="https://img.shields.io/badge/types-TypeScript-111">
</p>

## Install

```bash
npm install tiktokshops-api-client
```

## Usage

```typescript
import { TiktokModule } from 'tiktokshops-api-client';

const tiktok = new TiktokModule({
  appKey: 'YOUR_APP_KEY',
  appSecret: 'YOUR_APP_SECRET',
  shopId: 'YOUR_SHOP_ID',
  shopCipher: 'YOUR_SHOP_CIPHER',
  accessToken: 'YOUR_ACCESS_TOKEN',
  refreshToken: 'YOUR_REFRESH_TOKEN',
});

const orders = await tiktok.getOrderList({
  beforeHours: 24,
  pageSize: 20,
  sortField: 'create_time',
  sortOrder: 'ASC',
});
```

`getOrderList` uses object options only. If `orderStatus` is omitted or set to `ALL`, `order_status` is not sent and TikTok Shop returns all matching statuses.

```typescript
const unpaidOrders = await tiktok.getOrderList({
  orderStatus: 'UNPAID',
  createTimeGe: 1623812664,
  createTimeLt: 1623899064,
});
```

## APIs

| Group | Methods |
| --- | --- |
| Auth | `fetchTokenWithAuthCode`, `refreshToken`, `getAuthorizedShop` |
| Orders | `getOrderList`, `getOrderDetail`, `getPriceDetail` |
| Products | `getProductDetail`, `getCategories`, `getBrands`, `getAttributes`, `createProduct` |
| Fulfillment | `getPackageTimeSlots`, `shipPackage`, `getShippingDocument` |

## Types

```typescript
import type {
  TiktokConfig,
  TiktokRequestOrderList,
  TiktokResponseOrderList,
} from 'tiktokshops-api-client';
```

## Development

```bash
npm test
npm pack --dry-run
```

## Publish

```bash
npm version patch
npm publish
```

`npm version patch` requires a clean git working tree. Commit your changes before bumping the version.

## License

ISC

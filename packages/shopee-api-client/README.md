# shopee-api-client

A TypeScript client for Shopee Open API v2.

## Installation

```bash
npm install shopee-api-client
```

## Usage

```typescript
import { ShopeeModule } from 'shopee-api-client';

const shopee = new ShopeeModule({
  partnerId: 1234567890,
  partnerKey: 'YOUR_PARTNER_KEY',
  shopId: 'YOUR_SHOP_ID',
  accessToken: 'YOUR_ACCESS_TOKEN',
});

const orders = await shopee.getOrders(60);
```

`getOrders(60)` keeps the legacy shorthand and returns orders from the last 60 minutes.

For full `v2.order.get_order_list` options:

```typescript
const orders = await shopee.getOrders({
  beforeMinutes: 60,
  timeRangeField: 'create_time',
  orderStatus: 'READY_TO_SHIP',
  responseOptionalFields: ['order_status'],
  requestOrderStatusPending: true,
  pageSize: 100,
});
```

`orderStatus` defaults to `ALL`. When `ALL` is used, the SDK does not send `order_status` to Shopee, so Shopee returns all order statuses in the selected time range.

Available `orderStatus` values:

```typescript
'ALL' | 'UNPAID' | 'READY_TO_SHIP' | 'PROCESSED' | 'SHIPPED' | 'COMPLETED' | 'IN_CANCEL' | 'CANCELLED' | 'INVOICE_PENDING'
```

`getOrders` returns `ShopeeOrderListItem[]`:

```typescript
type ShopeeOrderListItem = {
  order_sn: string;
  order_status?: string;
  booking_sn?: string;
};
```

## Auth

```typescript
const { url } = await shopee.generateAuthLink('https://your-app.com/shopee/callback');
```

After Shopee redirects back with an auth code:

```typescript
const token = await shopee.fetchToken('AUTH_CODE_FROM_SHOPEE');
```

## Supported APIs

| Method                         | Description                         |
| ------------------------------ | ----------------------------------- |
| `generateAuthLink`             | Generate Shopee authorization URL   |
| `getOrders`                    | Get recent Shopee orders            |
| `getOrderDetail`               | Get order detail                    |
| `getEscrowDetail`              | Get payment escrow detail           |
| `cancelOrder`                  | Cancel order before shipment        |
| `getShipmentList`              | Get orders ready for shipment       |
| `searchPackageList`            | Search package list                 |
| `getPackageDetail`             | Get package detail                  |
| `getProductItemList`           | Get product item list               |
| `getProductItemBaseInfo`       | Get product base information        |
| `updateStock`                  | Update product stock                |
| `updatePrice`                  | Update product price                |
| `unListItem`                   | List or unlist item                 |
| `addItem`                      | Add product item                    |
| `getCategory`                  | Get categories                      |
| `getAttributes`                | Get category attributes             |
| `getBrandList`                 | Get brand list                      |
| `getChannelList`               | Get logistics channels              |
| `shippingParameter`            | Get shipping parameters             |
| `shipOrder`                    | Arrange shipment                    |
| `massShipOrder`                | Arrange mass shipment               |
| `getTrackingNumber`            | Get tracking number                 |
| `getTrackingInfo`              | Get tracking info                   |
| `createShippingDocument`       | Create shipping document            |
| `getShippingDocumentResult`    | Get shipping document result        |
| `downloadShippingDocument`     | Download shipping document          |
| `getMassShippingParameter`     | Get mass shipping parameters        |
| `updateShippingOrder`          | Update shipping order               |
| `getMassTrackingNumber`        | Get mass tracking numbers           |
| `getShippingDocumentParameter` | Get shipping document parameters    |
| `getAddressList`               | Get seller address list             |
| `fetchToken`                   | Fetch access token with auth code   |
| `refreshToken`                 | Refresh Shopee access token         |

## Build

```bash
npm run build
```

## Publish

```bash
npm login
npm test
npm pack --dry-run
npm publish
```

The package publishes only `dist`, `README.md`, `LICENSE`, and `package.json`.

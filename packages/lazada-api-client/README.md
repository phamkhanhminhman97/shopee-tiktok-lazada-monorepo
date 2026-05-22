# lazada-api-client

A TypeScript client for Lazada Open API.

## Installation

```bash
npm install lazada-api-client
```

## Usage

```typescript
import { LazadaModule } from 'lazada-api-client';

const lazada = new LazadaModule({
  appKey: 'YOUR_APP_KEY',
  appSecret: 'YOUR_APP_SECRET',
  shopId: 'YOUR_SHOP_ID',
  appAccessToken: 'YOUR_ACCESS_TOKEN',
});

const products = await lazada.getProducts();
```

## Auth

```typescript
const url = lazada.generateAuthLink('https://your-app.com/lazada/callback', 'YOUR_APP_KEY', 'STATE_UUID');
const token = await lazada.fetchTokenWithAuthCode('AUTH_CODE_FROM_LAZADA', 'STATE_UUID');
```

## Supported APIs

| Method                   | Description                         |
| ------------------------ | ----------------------------------- |
| `generateAuthLink`       | Generate Lazada authorization URL   |
| `fetchTokenWithAuthCode` | Fetch access token with auth code   |
| `refreshToken`           | Refresh access token                |
| `getOrdersBeforeSomeDay` | Get recent orders                   |
| `getOrderDetail`         | Get order detail                    |
| `getProducts`            | Get product list                    |
| `getProductItem`         | Get product item detail             |
| `createProduct`          | Create product                      |
| `updateSellableQuantity` | Update sellable quantity            |
| `updateStatusProduct`    | Update product status               |
| `updatePrice`            | Update product price                |
| `getCategoryTree`        | Get category tree                   |
| `getBrands`              | Get brand list                      |

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

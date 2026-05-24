# Shopee, TikTok Shop, and Lazada API Clients for Node.js / TypeScript

Unofficial TypeScript API clients for **Shopee Open API**, **TikTok Shop Open API**, and **Lazada Open Platform API**.

This monorepo provides independently published npm packages for building marketplace integrations, order sync services, product management tools, logistics workflows, and multi-channel e-commerce backend systems.

> This project is not affiliated with Shopee, TikTok Shop, Lazada, Alibaba Group, or ByteDance.

[![CI](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-monorepo/actions/workflows/ci.yml)
[![Shopee npm](https://img.shields.io/npm/v/shopee-api-client.svg)](https://www.npmjs.com/package/shopee-api-client)
[![TikTok npm](https://img.shields.io/npm/v/tiktokshops-api-client.svg)](https://www.npmjs.com/package/tiktokshops-api-client)
[![Lazada npm](https://img.shields.io/npm/v/lazada-api-client.svg)](https://www.npmjs.com/package/lazada-api-client)
[![All-in-one npm](https://img.shields.io/npm/v/shopee-tiktokshops-lazada-api.svg)](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api)
[![Downloads](https://img.shields.io/npm/dm/shopee-tiktokshops-lazada-api.svg)](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api)
[![Types](https://img.shields.io/npm/types/shopee-api-client.svg)](https://www.npmjs.com/package/shopee-api-client)
[![License](https://img.shields.io/npm/l/shopee-api-client.svg)](./LICENSE)

## Why This Project?

Integrating with multiple Southeast Asian marketplaces often requires handling different authentication flows, request signatures, access tokens, refresh tokens, pagination, order APIs, product APIs, logistics APIs, and fulfillment APIs.

This project provides reusable API clients for:

- Shopee Open API integration
- TikTok Shop Open API integration
- Lazada Open Platform integration
- Marketplace order synchronization
- Product and inventory automation
- Logistics and fulfillment workflows
- Multi-channel e-commerce backend services
- Seller operation tools and internal dashboards

## Packages

| Package | Description | npm |
| --- | --- | --- |
| `shopee-api-client` | Shopee Open API client for Node.js / TypeScript | [`npm`](https://www.npmjs.com/package/shopee-api-client) |
| `tiktokshops-api-client` | TikTok Shop Open API client for Node.js / TypeScript | [`npm`](https://www.npmjs.com/package/tiktokshops-api-client) |
| `lazada-api-client` | Lazada Open Platform API client for Node.js / TypeScript | [`npm`](https://www.npmjs.com/package/lazada-api-client) |
| `shopee-tiktokshops-lazada-api` | All-in-one package that re-exports the three clients | [`npm`](https://www.npmjs.com/package/shopee-tiktokshops-lazada-api) |

## Installation

Install only the marketplace client you need:

```bash
npm install shopee-api-client
```

```bash
npm install tiktokshops-api-client
```

```bash
npm install lazada-api-client
```

Or install the all-in-one package:

```bash
npm install shopee-tiktokshops-lazada-api
```

## Quick Start

### Shopee API Client

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

### TikTok Shop API Client

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
  pageSize: 50,
});

console.log(orders);
```

### Lazada API Client

```ts
import { LazadaModule, OrderStatusFilter } from "lazada-api-client";

const lazada = new LazadaModule({
  appKey: process.env.LAZADA_APP_KEY!,
  appSecret: process.env.LAZADA_APP_SECRET!,
  appAccessToken: process.env.LAZADA_ACCESS_TOKEN!,
  refreshToken: process.env.LAZADA_REFRESH_TOKEN!,
  countryCode: "sg",
});

// Get orders with filters
const orders = await lazada.getOrders({
  created_after: "2024-01-01T00:00:00+08:00",
  status: OrderStatusFilter.PENDING,
  limit: 100,
});

// Auto-paginate through all orders
const allOrders = await lazada.getAllOrders(
  { created_after: "2024-01-01T00:00:00+08:00" },
  (page, total, countSoFar) => console.log(`Page ${page}/${Math.ceil(total / 100)}`)
);

console.log(orders, allOrders);
```

### All-in-One Package

```ts
import {
  ShopeeModule,
  TiktokModule,
  LazadaModule,
} from "shopee-tiktokshops-lazada-api";
```

## Supported APIs

### Shopee

- Authorization link generation
- Access token and refresh token APIs
- Order list
- Order detail
- Shipment list
- Package detail
- Order cancellation
- Escrow / payment detail
- Product item list
- Product detail
- Stock update
- Price update
- Logistics APIs

### TikTok Shop

- Authorization APIs
- Access token and refresh token APIs
- Order list
- Order detail
- Price detail
- Product APIs
- Fulfillment APIs

### Lazada

- OAuth2 Authorization (generate link, exchange code, refresh token)
- **14 Order APIs**:
  - `getOrders` — list orders with filters & pagination
  - `getAllOrders` — auto-paginate through all orders
  - `getOrderDetail` — single order detail
  - `getOrderItems` / `getMultipleOrderItems` — order item details
  - `getShipmentProviders` — available logistics providers
  - `packOrder` / `recreatePackage` — pack & repack orders
  - `setReadyToShip` — mark as ready to ship
  - `printAWB` / `getShippingLabel` — print shipping labels
  - `traceOrder` — logistics tracking
  - `confirmDeliveryForDBS` / `failedDeliveryForDBS` — DBS confirmations
- Product APIs (list, detail, create, update price/quantity/status, categories, brands)
- Payment Options helpers (payment methods by country)

## Common Use Cases

You can use these packages to build:

- Marketplace order sync workers
- Shopee / TikTok Shop / Lazada seller tools
- Multi-channel e-commerce backends
- Product and inventory synchronization services
- Logistics and fulfillment dashboards
- Internal ERP integrations
- Marketplace automation scripts
- Backend services that need request signing and token refresh handling

## Monorepo Structure

```text
packages/
├── shopee-api-client/
├── tiktokshops-api-client/
├── lazada-api-client/
└── shopee-tiktok-lazada-api/
```

Each package is built and published independently.

The all-in-one package imports from the workspace packages, so local changes in the single-platform clients are reflected without copying code or using `npm link`.

## Development

Install dependencies:

```bash
npm install
```

Build all packages:

```bash
npm run build
```

Run tests and coverage:

```bash
npm test
npm run coverage
```

Build one package:

```bash
npm run build:shopee
npm run build:tiktok
npm run build:lazada
npm run build:all-in-one
```

Pack all packages locally:

```bash
npm run pack:all
```

## Contributing

Contributions are welcome. Start with:

- [`CONTRIBUTING.md`](./CONTRIBUTING.md) for setup, workflow, and PR expectations.
- [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) for community rules.
- GitHub issue templates for bug reports and feature requests.

## Release

This repository uses [Changesets](https://github.com/changesets/changesets) to manage package versions, changelogs, and independent npm publishing.

Create a changeset after modifying package code:

```bash
npm run changeset
```

Apply version updates:

```bash
npm run version-packages
```

Publish changed packages:

```bash
npm run release
```

For the full release process, see [`docs/RELEASE.md`](./docs/RELEASE.md).

## Keywords

Shopee API client, Shopee Open API Node.js, Shopee Open API TypeScript, TikTok Shop API client, TikTok Shop Open API TypeScript, Lazada API client, Lazada Open Platform API, marketplace API client, e-commerce API integration, Node.js marketplace SDK, TypeScript API client, order sync, product sync, inventory sync, logistics API, fulfillment API, token refresh, request signing.

## License

ISC

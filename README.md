# Shopee TikTok Lazada API Monorepo

Monorepo for four independently published npm packages:

| Package | Purpose |
| --- | --- |
| `shopee-api-client` | Shopee Open API client |
| `tiktokshops-api-client` | TikTok Shop Open API client |
| `lazada-api-client` | Lazada Open API client |
| `shopee-tiktokshops-lazada-api` | All-in-one wrapper that re-exports the three clients |

## Structure

```text
packages/
├── shopee-api-client/
├── tiktokshops-api-client/
├── lazada-api-client/
└── shopee-tiktok-lazada-api/
```

## Development

```bash
npm install
npm run build
```

Build one package:

```bash
npm run build:shopee
npm run build:tiktok
npm run build:lazada
npm run build:all-in-one
```

The all-in-one package imports from workspace packages, so local changes in the single-platform clients are reflected without copying code or using `npm link`.

## Publish

Each package is still published independently to npm:

```bash
npm publish --workspace=shopee-api-client
npm publish --workspace=tiktokshops-api-client
npm publish --workspace=lazada-api-client
npm publish --workspace=shopee-tiktokshops-lazada-api
```

Before publishing the all-in-one package, publish any updated dependency package first and update the dependency version in `packages/shopee-tiktok-lazada-api/package.json`.

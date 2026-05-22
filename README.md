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

Each package is published independently to npm. Always publish changed single-platform packages first, then publish the all-in-one wrapper.

### 1. Preflight

```bash
npm install
npm run build
npm run pack:all
git status --short
```

`git status --short` should be clean before versioning.

### 2. Publish A Single-Platform Package

Example for TikTok Shop:

```bash
npm version patch --workspace=tiktokshops-api-client
npm publish --workspace=tiktokshops-api-client
```

Use the same pattern for Shopee or Lazada:

```bash
npm version patch --workspace=shopee-api-client
npm publish --workspace=shopee-api-client

npm version patch --workspace=lazada-api-client
npm publish --workspace=lazada-api-client
```

### 3. Update And Publish The All-In-One Package

If one of the dependency packages was published with a new version, update the dependency version in:

```text
packages/shopee-tiktok-lazada-api/package.json
```

Then publish the wrapper:

```bash
npm version patch --workspace=shopee-tiktokshops-lazada-api
npm publish --workspace=shopee-tiktokshops-lazada-api
```

### 4. Commit The Release Changes

`npm version` updates package versions and `package-lock.json`. Commit and push those changes:

```bash
git add .
git commit -m "chore: release packages"
git push
```

### Release Order

```text
1. shopee-api-client / tiktokshops-api-client / lazada-api-client
2. update dependencies in shopee-tiktokshops-lazada-api
3. shopee-tiktokshops-lazada-api
4. commit and push version changes
```

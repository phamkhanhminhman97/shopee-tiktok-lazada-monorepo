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

Each package is published independently to npm. Releases are managed with Changesets so package versions, internal dependency versions, and changelogs are updated consistently.

### 1. Preflight

```bash
npm install
npm run build
npm run pack:all
git status --short
```

`git status --short` should only show intentional release changes before versioning.

### 2. Create A Changeset

After changing package code, create a changeset:

```bash
npm run changeset
```

Select the changed package(s), choose `patch`, `minor`, or `major`, and write a short release note.

Example:

```text
changed package: tiktokshops-api-client
bump type: patch
summary: Add TikTok Shop get price detail API.
```

### 3. Version Packages

Apply version bumps, changelog updates, and internal dependency updates:

```bash
npm run version-packages
```

Review the generated changes, then commit:

```bash
git add .
git commit -m "chore: version packages"
```

### 4. Publish

```bash
npm run release
git push
```

Changesets publishes changed packages in dependency-aware order. The all-in-one wrapper should be released after any changed single-platform package it depends on.

### Manual Fallback

Use this only if Changesets fails or you need a one-off emergency release.

Preflight:

```bash
npm ci
npm run build
npm run pack:all
git status --short
```

Publish the changed single-platform package first:

```bash
# Example: TikTok Shop changed
npm version patch --workspace=tiktokshops-api-client
npm publish --workspace=tiktokshops-api-client
```

If Shopee or Lazada changed, use the same pattern:

```bash
npm version patch --workspace=shopee-api-client
npm publish --workspace=shopee-api-client

npm version patch --workspace=lazada-api-client
npm publish --workspace=lazada-api-client
```

Then update the all-in-one package dependency version in:

```text
packages/shopee-tiktok-lazada-api/package.json
```

Example:

```json
{
  "dependencies": {
    "tiktokshops-api-client": "^1.0.4"
  }
}
```

Run install so `package-lock.json` is updated:

```bash
npm install
```

Publish the all-in-one wrapper:

```bash
npm version patch --workspace=shopee-tiktokshops-lazada-api
npm publish --workspace=shopee-tiktokshops-lazada-api
```

Commit and push the release metadata:

```bash
git add .
git commit -m "chore: release packages manually"
git push
```

Manual release order:

```text
1. shopee-api-client / tiktokshops-api-client / lazada-api-client
2. update dependencies in shopee-tiktokshops-lazada-api
3. shopee-tiktokshops-lazada-api
4. commit and push version changes
```

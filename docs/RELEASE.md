# Release Guide

This monorepo publishes four independent npm packages:

- `shopee-api-client`
- `tiktokshops-api-client`
- `lazada-api-client`
- `shopee-tiktokshops-lazada-api`

## Preflight

Run these checks before publishing:

```bash
npm install
npm run build
npm run pack:all
git status --short
```

The working tree should contain only intentional release changes.

## Changesets Flow

Create a changeset after changing package code or public docs:

```bash
npm run changeset
```

Apply version and changelog updates:

```bash
npm run version-packages
```

Review the changed files, then commit:

```bash
git add .
git commit -m "chore: release packages"
```

Publish changed packages:

```bash
npm run release
git push
```

## Manual Fallback

Use manual publishing only if Changesets is blocked.

Publish package clients first:

```bash
npm run version-patch-shopee
npm run publish-shopee

npm run version-patch-tiktok
npm run publish-tiktok

npm run version-patch-lazada
npm run publish-lazada
```

Then update `packages/shopee-tiktok-lazada-api/package.json` so its dependencies point to the newly published package versions.

Publish the all-in-one package last:

```bash
npm install
npm run build
npm run pack:all
npm run version-all-in-one
npm run publish-all-in-one
```

Commit and push release metadata after publishing:

```bash
git add .
git commit -m "chore: publish packages"
git push
```

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

## Automated Release Flow

Release is fully automated by [`.github/workflows/release.yml`](../.github/workflows/release.yml)
using [`changesets/action`](https://github.com/changesets/action) and npm
[Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC). No
`NPM_TOKEN` secret is used or required.

1. Create a changeset after changing package code or public docs:

   ```bash
   npm run changeset
   ```

2. Commit the changeset file and push to `main` (directly or via a merged PR).

3. The `Release` workflow detects the pending changeset and opens/updates a
   `"Version Packages"` pull request. This PR runs `npm run version-packages`,
   which bumps versions, updates each package's `CHANGELOG.md`, and
   automatically syncs `shopee-tiktokshops-lazada-api`'s dependency ranges to
   match the newly bumped client package versions.

4. Review and merge the `"Version Packages"` PR.

5. Merging triggers the `Release` workflow again. With no changesets left
   pending, it runs `npm run release` (build + `changeset publish`) and
   publishes every changed package straight to npm via OIDC — no further
   manual steps.

### One-time setup per package

Each published package must have a npm
[Trusted Publisher](https://docs.npmjs.com/trusted-publishers) configured
once, pointing at this repository and the `release.yml` workflow filename,
with "Allow npm publish" enabled. This is already configured for all four
packages in this repo.

## Manual Fallback

Use manual publishing only if the `Release` workflow or npm Trusted
Publishing is blocked.

Publish package clients first:

```bash
npm run version-patch-shopee
npm run publish-shopee

npm run version-patch-tiktok
npm run publish-tiktok

npm run version-patch-lazada
npm run publish-lazada
```

Then version the all-in-one package. This command automatically syncs its dependencies from the current versions of:

- `packages/shopee-api-client/package.json`
- `packages/tiktokshops-api-client/package.json`
- `packages/lazada-api-client/package.json`

Publish the all-in-one package last:

```bash
npm run version-all-in-one
npm run build
npm run pack:all
npm run publish-all-in-one
```

Commit and push release metadata after publishing:

```bash
git add .
git commit -m "chore: publish packages"
git push
```

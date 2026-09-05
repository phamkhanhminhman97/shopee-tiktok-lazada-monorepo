# Contributing

Thanks for helping improve these marketplace API clients.

## Development Setup

```bash
npm install
npm run build
```

This repository uses npm workspaces. Each package lives under `packages/*` and is published independently.

## Before You Change Code

- Check the official marketplace documentation for the endpoint or behavior.
- Prefer additive changes when possible to avoid breaking existing users.
- Keep request/response DTOs close to official API field names.
- Do not commit real app keys, partner keys, access tokens, refresh tokens, shop IDs, or customer data.

## Common Commands

```bash
npm run build
npm run test
npm run coverage
npm run pack:all
npm run check-all-in-one-deps
```

Build a single package:

```bash
npm run build:shopee
npm run build:tiktok
npm run build:lazada
npm run build:all-in-one
```

## Changesets

Public package changes should include a changeset:

```bash
npm run changeset
```

Use:

- `patch` for bug fixes, docs that affect package users, new types, or small non-breaking API additions.
- `minor` for larger non-breaking features.
- `major` for breaking changes.

## Pull Request Checklist

- Update README/docs for public API changes.
- Update package exports when adding public types or helpers.
- Run `npm run build`.
- Run `npm run pack:all` for publish-facing changes.
- Keep PRs focused on one package or one problem when possible.

## Release

Versioning and publishing are automated by CI once a changeset is merged
into `main`. See [`docs/RELEASE.md`](./docs/RELEASE.md) for the full,
up-to-date release workflow, including the manual fallback.

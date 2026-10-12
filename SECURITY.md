# Security Policy

## Supported versions

Security fixes are released for the latest published version of each package:

| Package | Supported |
| --- | --- |
| `shopee-api-client` | latest |
| `tiktokshops-api-client` | latest |
| `lazada-api-client` | latest |
| `shopee-tiktokshops-lazada-api` | latest |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Report privately through GitHub: open the repository's **Security** tab and choose
**Report a vulnerability** (private vulnerability reporting). Include:

- the affected package and version,
- a description of the issue and its impact,
- steps or a minimal snippet that reproduces it.

You can expect an acknowledgement within a few days. Confirmed issues are fixed in a patch release
and credited in the changelog unless you prefer to stay anonymous.

## Handling credentials

These SDKs sign requests with your marketplace `app_secret` / `partner_key`. Keep them, and the
access/refresh tokens, on the server only: never ship them in browser or mobile bundles, and never
commit them. If a secret may have leaked, rotate it in the marketplace's developer console right away.

## Webhook / push verification

Always verify incoming webhook and push requests before trusting their payload, using the raw
request body exactly as received:

- Shopee: `verifyShopeePushSignature()`
- TikTok Shop: `verifyTiktokWebhookSignature()`
- Lazada: `verifyLazadaPushSignature()`

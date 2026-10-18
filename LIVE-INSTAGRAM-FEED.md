# Live newest Instagram post

The GitHub Pages website can call a separate Cloudflare **Workers Free** endpoint on every opening of Fresh off the roll. No website hosting or DNS migration is needed. The Worker is in `workers/instagram`.

The endpoint queries the existing Windsor Instagram connection for `mcgowen_media`, selects the newest timestamp, fetches its photo or video cover, verifies its raster type and actual dimensions, and returns that one post with an inline image. The frontend merges it into the saved archive. HTTP responses are not cached. Source-side Windsor/Instagram caching may still delay a newly published post; a fresh request cannot force those providers to bypass their caches.

The server-side `WINDSOR_API_KEY` never goes into the browser bundle. Failed live requests retain saved photographs with a refresh-unavailable note. Simultaneous panel requests are independent; approximate per-isolate rate limiting protects the source, but is not a global abuse-prevention system.

## One-time account connection

Use the existing Cloudflare Workers **Free** account. Do not subscribe to Workers Paid or enable paid add-ons. Free Workers stop serving after the free request allowance is exhausted; the saved site feed remains available. No KV, D1, R2, Images, or other billable bindings are used. Official limits: <https://developers.cloudflare.com/workers/platform/limits/>.

For GitHub Actions deployment, configure these on the repository's Settings → Secrets and variables → Actions page. Enter credentials only in the provider's secure fields, never in chat or source files.

| Setting | Type | Value |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Secret | Cloudflare “Edit Cloudflare Workers” token restricted to the existing free account |
| `WINDSOR_API_KEY` | Secret | Existing server-side Windsor credential used by the hourly workflow |
| `CLOUDFLARE_ACCOUNT_ID` | Variable | Existing Cloudflare account ID |
| `INSTAGRAM_FEED_URL` | Variable | `https://mcgowen-instagram-live.<account-subdomain>.workers.dev/api/instagram/feed` (use the actual URL printed by deployment) |

Run **Deploy free live Instagram endpoint** in GitHub Actions. The workflow installs the existing Windsor secret in the Worker and deploys it using Wrangler. It does not change the account plan. Then publish the website with **Publish approved GitHub Pages release** so Vite includes `INSTAGRAM_FEED_URL`. The hourly refresh workflow preserves the same endpoint setting on future builds.

Alternatively, run `npm ci` in `workers/instagram`, authorize `npx wrangler login`, securely enter the existing credential via `npx wrangler secret put WINDSOR_API_KEY`, and run `npm run deploy`. Keep `.dev.vars` and Wrangler credentials untracked. GitHub Actions deployment still requires its scoped Cloudflare secret.

## Verification

From the repository root:

```powershell
npm test -- --run src/instagramLiveFeed.test.ts src/instagramMedia.test.ts src/Darkroom.test.tsx
npm run build
npm test --prefix workers/instagram
npm exec --prefix workers/instagram -- wrangler deploy --dry-run
```

After deployment, open the endpoint with `Origin: https://mcgowen.works` and verify `200`, `Cache-Control: no-store`, the correct Instagram permalink, and a valid inline cover. An unrelated browser origin must receive `403`. Open the website panel twice and confirm two live requests and that frame one is the endpoint's newest post. Deployment and end-to-end live verification are incomplete until authenticated Cloudflare/GitHub configuration is available.

# Live Instagram statistics

On October 17, 2026, project `captured` (`bcbcmjhdlzkaelfwagkv`) was restored in its confirmed Free-plan organization. The `instagram-live` Edge Function version 4 is deployed with gateway JWT verification enabled. No paid resources, upgrades, or overages were enabled.

Base URL: `https://bcbcmjhdlzkaelfwagkv.supabase.co/functions/v1/instagram-live`.

Routes: `/stats`, `/metrics`, and `/health`. Authenticated `/health` returned HTTP 200 with `configured: true` and `source: windsor`: the private Windsor credential is installed. Unauthenticated requests returned 401; an unrelated browser origin returned 403. Real checks returned stale profile data and no fresh engagement rows; publication remains pending a direct Meta connection.

## Private setup

Sign in to the Supabase dashboard and add `WINDSOR_API_KEY` under Edge Functions > Secrets using the existing Windsor credential. Enter it only in the provider's private field. Never put it in chat, source code, public configuration, or a `VITE_` variable. The connected Windsor account was verified as Free.

The frontend's `src/instagramLiveConfig.ts` contains only the public endpoint and public anonymous JWT. It sends that JWT as an Authorization header. Custom endpoint and public-key overrides are available through `VITE_INSTAGRAM_LIVE_URL` and `VITE_INSTAGRAM_LIVE_ANON_KEY`. Windsor credentials and service-role keys never enter the frontend.

## Freshness and limits

Fresh profile totals remain available independently of archive coverage. `archiveCurrent` is true only when every archive source timestamp is fresh and the unique post count matches the profile count. Otherwise partnership totals and archive charts are unavailable. Individual stale engagement rows are omitted. Current source timestamps must be no more than two minutes old. Provider caching can make live measurements unavailable even when the server works.

CORS accepts the two mcgowen.works origins and local Vite origins on port 5173. Responses use no-store. An instance-local aggregate rate limit allows 12 requests per minute, with independent limits across isolates. Historical follower points are not persisted. Supabase Free quotas apply; exhaustion must result in unavailability rather than a paid upgrade.

## Local development

`scripts/instagram-live.mjs` remains a local Node development server. It is not the deployed Edge Function. Set an existing server-side `WINDSOR_API_KEY`, then run `node scripts/instagram-live.mjs`. It binds to `127.0.0.1:8787`; `SITE_ORIGIN` defaults to `http://127.0.0.1:5173`. Its frontend override is `VITE_INSTAGRAM_LIVE_URL=http://127.0.0.1:8787/api/instagram`.

Do not expose that development server publicly. It has no production authentication or rate limiting. GitHub Pages serves static website files and cannot run either server implementation.

Credential-free verification:

```powershell
node --test scripts/instagram-edge.test.mjs
node --test scripts/instagram-live.test.mjs
```

## Direct Facebook Graph adapter

`supabase/functions/instagram-live/graph.mjs` provides `createGraphLoader({token, accountId, version, fetchImpl, now})`, returning an async `load('stats' | 'metrics')`. It uses only the Facebook Login Graph host (`graph.facebook.com`) with an explicit numeric Instagram account ID. It does not treat Facebook `/me` as an Instagram account. The default `v26.0` is verified against Meta's current official Node Business SDK; a server-side version override must be a version string such as `v26.0`.

The adapter reads the profile (`id,username,followers_count,media_count`) and the account's `/media` edge (`id,caption,timestamp,permalink,like_count,comments_count`). The returned username must be `mcgowen_media`, and profile ID must match the configured account. Views remain `null`: media insight eligibility and current insight fields have not been verified. Missing optional like/comment counts remain `null`.

Authentication uses the server-side bearer token header. Pagination checks the provider's next-link host/path, then reconstructs the same official media endpoint using its cursor; it never follows a token-bearing next URL. Requests have a 10-second fetch bound, 20-second full-operation bound, 10 MiB per-response body bound, and caps of 10 pages and 1,000 unique posts. Failed/incomplete media archives cannot produce a current partnership total but do not suppress an independently successful profile. Completed results are not cached.

`checkedAt` records when the direct upstream response was read; Meta does not provide a separate verified data-generation timestamp for these fields. This proves a direct read time, not instantaneous consistency inside Instagram. The owner's properly authorized Facebook Login token, linked professional Instagram account, necessary read permissions, and app access must be verified through Meta's account flow. Token expiry, revocation and permission changes can make data unavailable. This adapter does not grant permissions, refresh tokens, bypass app review, or verify account entitlement or cost. Use private server environment variables; never publish the access token.

Primary sources verified for implementation:

- [Meta SDK API host and version](https://raw.githubusercontent.com/facebook/facebook-nodejs-business-sdk/main/src/api.js)
- [Meta SDK IGUser fields and media edge](https://raw.githubusercontent.com/facebook/facebook-nodejs-business-sdk/main/src/objects/ig-user.js)
- [Meta SDK IGMedia fields](https://raw.githubusercontent.com/facebook/facebook-nodejs-business-sdk/main/src/objects/ig-media.js)
- [Meta SDK cursor pagination](https://raw.githubusercontent.com/facebook/facebook-nodejs-business-sdk/main/src/cursor.js)

Credential-free verification: `node --test scripts/instagram-graph.test.mjs`. Live token, permissions and API behavior remain unverified until the private account setup is complete.

## Direct connection private setup

Windsor documents a six-hour query cache and daily scheduled refresh on Free. This cannot satisfy current-on-view statistics. The Edge Function automatically selects its direct Meta reader when the private `INSTAGRAM_ACCESS_TOKEN` secret exists, and never substitutes Windsor after a direct-reader failure.

Use an authorized Facebook Login token from the existing TrialReelEngine app, with the Instagram read access approved by the owner. Save it only as `INSTAGRAM_ACCESS_TOKEN` in Supabase Edge Function Secrets. `INSTAGRAM_USER_ID` defaults to the verified account ID `17841467441753084`; `INSTAGRAM_API_VERSION` defaults to `v26.0`. No app secret, user token, or server secret belongs in the frontend. The Meta setup page requires a professional Instagram account linked to a Facebook Page for this Facebook Login route. Meta permissions and any account authorization must be completed by the owner.

After saving, authenticated health should report `source: instagram`. Verify actual stats and metrics before website publication. An expired, revoked or insufficiently authorized token must produce unavailable data. Views remain unavailable until direct insights access has been implemented and verified.

Cache documentation: https://windsor.ai/documentation/understanding-cache-data-store-and-query-cache/ and https://windsor.ai/documentation/pricing-information/ .

## Instagram Login without a Facebook Page

The default direct reader now uses Instagram Login (`INSTAGRAM_LOGIN_MODE=instagram`), not Facebook Login. No Facebook Page linkage is required. The existing TrialReelEngine Instagram setup already lists `mcgowen_media`. Use Generate token next to that account under API setup with Instagram login, then privately save that Instagram token as `INSTAGRAM_ACCESS_TOKEN` in Supabase Secrets. The Graph API Explorer Facebook-token instructions above apply only to the optional Facebook Login mode and are not the default setup.

The reader calls `graph.instagram.com/v26.0/me` for `user_id,username,followers_count,media_count`, validates the username, and obtains media using the returned Instagram ID. It does not assume an app-scoped ID or Windsor ID is the correct identifier. It accepts a direct profile object or one-item data wrapper. Instagram media requests use only verified supported fields: id, timestamp, permalink, like_count and comments_count. Captions and cross-surface total fields are marked Facebook-Login-only in Meta's reference, so this mode does not request them. Partnership totals remain unavailable rather than classify missing captions. Views remain unavailable until Insights permission and reads are verified.

Meta's documentation says dashboard-generated Instagram tokens are long-lived and valid for 60 days. Expiry or revocation can make live data unavailable; token lifecycle management remains an operational requirement. Never paste a token into chat or a frontend file.

Primary documentation verified in the signed-in browser:
- https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login
- https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/get-started
- https://developers.facebook.com/documentation/instagram-platform/reference/instagram-media
- https://developers.facebook.com/documentation/instagram-platform/reference/instagram-media/insights

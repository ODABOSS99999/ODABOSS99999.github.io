# Live Instagram statistics

The production API is deployed on the existing Supabase Free project `captured` (`bcbcmjhdlzkaelfwagkv`), with gateway JWT verification enabled. Direct Instagram Login was verified on October 18, 2026. No Facebook Page linkage, paid upgrade, paid overage, or purchased service was enabled.

Base URL: `https://bcbcmjhdlzkaelfwagkv.supabase.co/functions/v1/instagram-live`.

## Behavior

- `/stats` reads the profile directly from Instagram on each request. The Instagram Login route needs one upstream profile request.
- `/metrics` validates the account and retrieves current likes/comments through bounded media pagination. Completed measurements are not cached.
- `/health` exposes configuration status, the public account name and the selected source, never credentials.
- The website refreshes on entry, every minute while viewing and on return to the tab. Values older than two minutes are rejected. Stale displayed counts clear immediately before a return/reopen refresh.
- Failed measurements become unavailable. The website never substitutes published JSON snapshots for current counts.
- Daily follower history, partnership totals and views stay unavailable unless the live source provides verified data. Instagram Login captions are not requested because the currently documented caption field is Facebook-Login-only.

## Credentials and authorization

`INSTAGRAM_ACCESS_TOKEN` is stored only in Supabase Edge Function Secrets. It is generated beside the owner's existing account under TrialReelEngine > API setup with Instagram login. The reader discovers the numeric Instagram account ID through `/me`, validates username `mcgowen_media`, and uses that returned ID for media reads. It does not assume a Facebook user ID, app-scoped ID or Windsor ID is interchangeable.

`INSTAGRAM_LOGIN_MODE` defaults to `instagram`; the optional `facebook` mode supports an explicit Instagram account ID and an appropriately authorized Facebook Login token. `INSTAGRAM_API_VERSION` defaults to the verified `v26.0`. A configured direct reader never falls back to Windsor after a failed Meta request.

The frontend's `src/instagramLiveConfig.ts` contains only the public API URL and public anonymous JWT. No Instagram token, Windsor key or Supabase service-role key belongs in client code. An optional custom URL/key can be supplied through `VITE_INSTAGRAM_LIVE_URL` and `VITE_INSTAGRAM_LIVE_ANON_KEY`.

Dashboard-generated Instagram Login tokens are documented as valid for 60 days. Expiry, revocation, permission changes or exhausted free quotas can make live data unavailable. Renew the private credential when necessary; do not enable a paid plan to work around limits.

## Bounds and limits

CORS accepts mcgowen.works, www.mcgowen.works and local Vite origins on port 5173. Unauthenticated requests return 401; unrelated origins return 403. Responses use no-store. Requests have bounded duration/body size/pagination, and an instance-local aggregate rate limit. This is not a distributed abuse-prevention guarantee.

`checkedAt` is the actual direct API response-read time. Meta does not provide a separate data-generation timestamp for these fields, so it cannot guarantee instantaneous consistency inside Instagram.

Windsor remains an optional server-side fallback only when no direct token is configured. Its documented six-hour query cache and daily Free-plan refresh cannot satisfy current-on-view statistics. Old Windsor results fail freshness validation.

## Verification

```powershell
npm test
npm run build
node --test scripts/instagram-edge.test.mjs scripts/instagram-graph.test.mjs scripts/instagram-live.test.mjs
```

`scripts/instagram-live.mjs` is a separate local Node development server, not the deployed Edge Function. Do not expose that development server publicly. GitHub Pages serves static website files and cannot run either API server implementation.

Primary documentation verified:
- https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login
- https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/get-started
- https://developers.facebook.com/documentation/instagram-platform/reference/instagram-media
- https://developers.facebook.com/documentation/instagram-platform/reference/instagram-media/insights
- https://windsor.ai/documentation/understanding-cache-data-store-and-query-cache/

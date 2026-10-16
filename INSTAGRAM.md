# Instagram snapshot and automatic refresh

The website reads a static, local snapshot of the owner's `@mcgowen_media` Instagram posts. It never exposes a Windsor API key to visitors, calls a paid AI service, embeds tracking Instagram widgets, or asks visitors to log in. The connected Windsor account/profile was verified during setup; a local initial import is separate from activating scheduled refresh.

## What can be synchronized honestly

Windsor provides media IDs, owner captions, permalinks, media types, preview URLs, and timestamps for the selected Instagram account `17841467441753084`. `scripts/instagram-sync.mjs` requests `media_id,media_caption,media_permalink,media_type,media_url,media_thumbnail_url,timestamp` from the documented Instagram endpoint, with `select_accounts` pinned to that account and `date_preset=last_30dT`. This includes today. [Official API parameters](https://windsor.ai/api-documentation/), [Instagram connector fields](https://windsor.ai/data-field/instagram/).

Each successful refresh requests the rolling 30-day window and merges new/updated posts into the cached archive. It does not delete older cached posts or image files, so curated selections can survive that window. This does not backfill account history that was never imported. No pinned-state field or membership in the supplied [portfolio collection](https://www.instagram.com/mcgowen_media/portfolio/BAY0n_qsH5/) was available from the connector; the collection also could not be inspected publicly during setup. Never assume that latest posts are that collection or that popular posts are pinned.

`public/instagram/selection.json` is the explicit owner-curated membership list: `portfolioIds`, `favoriteIds`, and `pinnedIds` accept Instagram media IDs, canonical post permalinks, or post shortcodes. `portfolioMode: 'selected'` means only explicitly selected IDs belong to the portfolio. `portfolioUrl` preserves the supplied external collection link. Parent content/UI code controls its presentation. Populate membership only from actual owner confirmation or verifiable collection/pinned evidence. An unavailable collection remains linked honestly; it is not secretly replaced by a fabricated selection.

## Static feed contract

`public/instagram/feed.json` contains `{ version: 1, account: 'mcgowen_media', fetchedAt, posts }`. Every post has `id`, exact `caption`, canonical Instagram `permalink`, ISO `timestamp`, `mediaType`, and `image: { src, width, height }`. Image paths are `/instagram/media/{id}.webp`. Signed CDN URLs and credentials are omitted from the public snapshot.

Still images and available carousel cover images are copied as local WebP previews, auto-oriented and bounded to 1600 × 1600 pixels at quality 84. The original photograph remains on Instagram; keep your supplied originals separately. Carousel previews represent the available cover, not all slides. Video previews download the thumbnail only; video playback goes through the source permalink, with no local full-video download or autoplay.

The importer validates HTTPS, canonical Instagram post permalinks, and Instagram/Facebook CDN image hostnames; refuses redirects, unexpected content types, unrecognized media, malformed/partial/empty results, and unexpectedly missing recent posts. Each download has a 30-second timeout and 20 MiB cap. It bounds a query to 100 unique posts, the retained archive to 1000 posts and 240 MB, and keeps the previous feed on failures. All downloads/decodes finish in staging before publication, and feed replacement is atomic. It never deletes old media. If a legitimate post is deleted or made private, the completeness guard can require a reviewed manual archive correction; investigate privately rather than weakening it to accept partial responses. The filesystem and GitHub storage must still have room for staging. A hard process interruption can leave harmless temporary image files; they are not referenced until a successful feed replacement.

## One-time owner setup for daily refresh

This is a prepared engine, **not an activated schedule** until the following account settings are configured. Login, consent, MFA, and secret entry belong to the owner. Do not paste the key into chat or commit it.

1. Keep Windsor on **Forever Free**, using only the Instagram data source and this one account. The official free offer steps down after the introductory trial to one data source and one account, without automatic billing. Free queries have a 30-day history limit and no historical backfill. No paid subscription is needed for this design. [Free setup terms](https://windsor.ai/documentation/how-to-start-for-free/), [current pricing](https://windsor.ai/pricing), [account counting](https://windsor.ai/pricing/data-sources-and-accounts).
2. After approval to publish source, use a public GitHub repository with standard Linux Actions runners. The workflow refuses private repositories because their allowance/billing state is unverified. No larger runners, artifacts, cache, or paid add-ons are configured. Leave chargeable Actions usage disabled. [GitHub billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions).
3. Get your Windsor API key privately from the Windsor dashboard and enter it directly as a GitHub Actions repository secret named `WINDSOR_API_KEY`. The script reads only this environment variable. It never logs the request URL or raw fetch exceptions. Do not put the key in `VITE_*`, `public/`, `.env` tracked by Git, shell history, or a public issue.
4. Set repository Actions variable `INSTAGRAM_SYNC_ENABLED` to the exact string `true`. Keep it unset/false to disable scheduled refresh. Permit GitHub Actions to write repository contents; branch protection may require a reviewed alternative instead of direct bot commits.
5. Run **Refresh Instagram snapshot** manually once and inspect the committed snapshot. Afterwards the cron runs once daily at **12:23 UTC** (7:23 a.m. CDT / 6:23 a.m. CST). GitHub schedules may be delayed or disabled after repository inactivity. OAuth permission expiry and Instagram/Windsor outages can also require owner action. Failure leaves the last good site content intact and fails the Actions run visibly. Watch GitHub's own failure notifications.

The refresh workflow tests and builds, then commits only `public/instagram` to the source branch. It never changes Instagram itself. Initial public release still requires separate owner approval. Set `SITE_PUBLIC_RELEASE_APPROVED=true` only after approving the current site and future automatic content refreshes. Until then, refreshed repository snapshots do not change the live site.

The existing test host is GitHub Pages. Leave `INSTAGRAM_DEPLOY_TARGET` unset (or use `github-pages`) to prepare real section directories, preserve the existing `CNAME`, update the existing `gh-pages` branch with an ordinary fast-forward push, and request a Pages build. This uses GitHub's generated job token with `contents:write` and `pages:write`; it needs no extra permanent hosting secret. The build request handles the fact that job-token pushes do not automatically trigger Pages builds. Local staging was tested; the authenticated scheduled publish has not been run. GitHub's Pages permissions or branch protection can still require owner setup.

If choosing Azure instead, set `INSTAGRAM_DEPLOY_TARGET=azure` and add repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`, while confirming the resource is on Free. The two publishing targets are mutually exclusive. The `production` environment secret from the manual Azure workflow is not automatically shared with this refresh workflow. No variables, secrets, or account settings have been changed by this implementation.

## Local import and checks

Install dependencies with `npm ci`, then run:

```powershell
node --test scripts/instagram-sync.test.mjs
node scripts/instagram-sync.mjs --input "C:\private\windsor-response.json"
```

`--input` accepts a previously fetched Windsor JSON response shaped `{ status: 'done', data: [...] }`, so an initial import can use connected-tool data without a separate API key. API JSON without `status` is also accepted if its `data` is complete. Keep raw responses in an ignored private output folder, not `public/`. The command still downloads the permitted cover images. Without `--input`, the importer uses `WINDSOR_API_KEY`. Never print that value or run a key-containing URL in a logged shell command.

The Node tests use mocked network responses and tiny generated image fixtures; they verify host/URL guards, bounded streaming, local image conversion, archive merging, no full-video downloads, and retention after errors. A passing fixture test proves importer behavior, not that account authorization or the GitHub schedule is active.

Instagram content remains owner material; this pipeline does not create a new license or authorize reuse of others' work. Record media provenance in `ASSETS.md` and remove a post from curated public selections if reuse rights are uncertain.

## Engagement freshness (implemented October 15, 2026)

`public/instagram/metrics.json` stores separately timestamped likes, comments, and views from the connected account. Missing counts remain null. The importer uses `media_like_count` and `media_comments_count`, not the all-zero `media_total_*` fields returned by this connection. These organic-media counts can differ from Instagram's combined promoted/cross-posted totals. Each card and viewer shows its last source check; counts older than 24 hours are marked as an older snapshot. Old archive rows are never given a new measurement time merely because a refresh ran.

The existing daily workflow now calls `scripts/instagram-metrics-sync.mjs` using its private `WINDSOR_API_KEY` secret. The local native Windsor connector was used to refresh 48 recent posts. Local `WINDSOR_API_KEY` is absent; repository secret/variable configuration and execution of the updated scheduled job remain unverified. The browser revalidates the static snapshots every five minutes and when returning to the tab; it never receives a connector credential or contacts Windsor directly. A frontend revalidation does not itself refresh the source counts.

A public Instaloader request for an older portfolio post returned HTTP 403. The existing downloaded covers remain available; older counts are omitted rather than fabricated. Instagram may require an authorized session or official account export for additional history.

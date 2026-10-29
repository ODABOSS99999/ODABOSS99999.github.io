# Music shelf

The shelf reads the owner's Spotify activity through a server-side adapter. Airbuds `@mcgowen` remains a separate outbound link. Spotify top tracks/artists describe approximately four weeks of affinity rankings; they are not play counts or Airbuds recap statistics. Recent plays are limited to the latest 50 returned by Spotify. No listening-minute totals are inferred.

## Local development

Run `npm run music:connect` alongside `npm run dev`. The helper binds only to `127.0.0.1:8765`. Open `http://127.0.0.1:8765/` and use the public Client ID from the dedicated **McGowen Library Music** Spotify app. Its redirect URI is `http://127.0.0.1:8765/callback`.

The owner signs in and grants read-only `user-read-recently-played` and `user-top-read` scopes directly with Spotify. The helper uses PKCE and a one-time state value, checks a private form nonce, and stores renewable credentials in ignored `.env.spotify.local`. That file and its temporary replacement must never be committed, printed, or placed under `public/`. Tokens are absent from frontend code and music JSON responses. Spotify's app dashboard currently gives refresh tokens a 180-day lifetime; reconnect when required.

The development client reads `http://127.0.0.1:8765/music`. Each shelf opening, Refresh action, and visible minute requests fresh data. Returning to a visible Music panel also refreshes. Snapshots expire after two minutes. Validated album artwork updates the two room display sleeves, with plain records retained when artwork is unavailable.

## Public endpoint

`workers/music` contains the hosting adapter and its Node tests. A production build needs a public HTTPS `VITE_MUSIC_FEED_URL`; it never falls back to the visitor's localhost. Before deploying, verify that the Cloudflare account is on the free Workers plan with no paid usage. Worker secrets must be transferred privately from the local connection, never through chat or frontend build variables. See [the worker README](../../workers/music/README.md) for token rotation and deployment limitations.

## Checks

- `npm run build`
- `npm test -- --maxWorkers=1`
- `node --test workers/music/src/index.test.mjs`

Browser checks cover real Spotify responses, loaded artwork, room sleeves, reopening/refresh, keyboard controls, and desktop/mobile overflow. Production hosting and publication require separate live verification.

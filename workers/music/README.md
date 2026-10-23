# Spotify music endpoint

This optional Worker exposes `GET /music` for the owner's recent listening, top tracks and artists, and albums derived from those tracks. Spotify's short-term ranking is labeled “Last 4 weeks.” Every request refreshes Spotify data; responses use `Cache-Control: no-store`. Access tokens exist only inside the request and are never cached or returned.

Run checks from the repository root with `node --test workers/music/src/index.test.mjs`.

## Configuration

Use an existing Spotify app with a PKCE refresh token authorized for `user-read-recently-played` and `user-top-read`. Set `SPOTIFY_CLIENT_ID` and `SPOTIFY_REFRESH_TOKEN` as Worker secrets using Wrangler's interactive secret input. Never put tokens in this repository, frontend environment variables, URLs, logs, or browser storage. Only the public Worker `/music` URL belongs in the frontend endpoint setting.

The Worker requests only three fixed, read-only Spotify endpoints. CORS permits the two mcgowen.works hosts and HTTP localhost development. Failures return generic errors; rate limits return HTTP 429 and a bounded `Retry-After` header.

Spotify may return a rotated refresh token. The deployed Worker routes through one named SQLite Durable Object (`MUSIC_STATE`), which serializes requests and privately persists replacement refresh tokens before reading Spotify data. Access tokens are never stored. A SHA-256 fingerprint of the bootstrap secret detects a replacement `SPOTIFY_REFRESH_TOKEN` on reauthorization and resets the saved credential. Revoked or expired authorization still requires repeating authorization and replacing that secret. There is no public token-rotation callback.

The local adapter provides an asynchronous `env.saveRefreshToken` callback; the setup helper saves replacements in its local private credential file. The same handler awaits persistence before reading Spotify data.

No deployment is performed by these files. Wrangler includes the SQLite Durable Object binding and initial migration. Use the confirmed free Workers plan only; the free plan's request limits stop service at the allowance. The CPU limit is a runtime cap, not a billing guarantee.

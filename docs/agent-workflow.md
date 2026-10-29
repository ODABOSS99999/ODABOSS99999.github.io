# Agent quick reference

Read only the row relevant to the task; confirm paths when changing architecture.

See `docs/README.md` for the documentation index. Maintained guides live in `docs/guides/`, deployment records in `docs/deployment/`, and dated audits in `docs/history/`. Store generated QA evidence in ignored `output/`.

| Task | Start here |
| --- | --- |
| Live entry | `index.html` → `src/main-illustrated.tsx` → `src/App2D.tsx` → `src/SeatedRoom.tsx` |
| Room composition/interactions | `src/paperRoom.ts`, `src/roomObjects3D.ts` |
| Minecraft painting/profile | `src/MinecraftPanel.tsx`, `docs/minecraft.md` |
| Routing, preferences, navigation/focus | `src/App2D.tsx` |
| Content/order and sections | `src/content.ts`, `src/Sections.tsx` |
| Contact card / paper-airplane delivery | `src/ContactCard.tsx`, `src/businessCard.css` |
| Appearance | `src/illustrated.css`, `src/contactAbout.css`; feature styles beside components |
| Darkroom live recent posts | `src/instagramMedia.ts`, `src/instagramLiveFeed.ts`, `workers/instagram/src/index.mjs`, `supabase/functions/instagram-feed/index.ts`; checks: `npm test -- src/instagramMedia.test.ts src/instagramLiveFeed.test.ts src/Darkroom.test.tsx` and `node --test workers/instagram/src/index.test.mjs` |
| Instagram | `src/instagramLiveFeed.ts`, `src/InstagramStats.tsx`, `workers/instagram/src/` |
| Live Instagram CORS / deployment | `supabase/functions/instagram-live/handler.mjs`, `workers/instagram/src/index.mjs`; regression checks: `node --test scripts/instagram-edge.test.mjs workers/instagram/src/index.test.mjs` |
| Audio/music | `src/audio.ts`, `src/useRoomSound.ts`, `src/MusicShelf.tsx`, `src/musicData.ts`, `workers/music/src/` |
| Content/assets guidance | `docs/guides/CONTENT.md`, `docs/guides/ASSETS.md`, `docs/guides/INSTAGRAM.md` on demand |

`src/main.tsx` / `src/App.tsx` is an alternate entry. Trace the live HTML before editing older room implementations.

## Checks

- `node scripts/agent-check.mjs diff`: whitespace errors in tracked changes.
- `node scripts/agent-check.mjs types`: TypeScript check.
- `node scripts/agent-check.mjs test`: source Vitest suite.
- `node scripts/agent-check.mjs build`: TypeScript + production Vite build.
- `node scripts/agent-check.mjs all`: diff, source tests, build; nonzero exit if any fails.
- Multiple names are accepted and deduplicated; `types` is redundant with `build` and omitted.
- Full per-run logs: ignored `output/agent-check/`. Only failures print their final 20 lines. A passing diff check does not inspect untracked files.
- Focused source test: `npm test -- src/<name>.test.ts`. Vitest includes only `src/**/*.test.{ts,tsx}`; script/worker tests require separate `node --test <test paths>` commands.
- Media validation when relevant: `npm run check:media`.

The helper does not replace browser QA. `npm run dev` starts Vite; use its actual URL. Existing `scripts/*qa.cjs` files are Playwright page callbacks, not standalone Node programs. Inspect their expected UI and hardcoded port before use; some target older layouts. Candidate callbacks: `seated-final-qa.cjs`, `panels-visual-qa.cjs`, `gallery-browser-qa.cjs`, `audio-browser-qa.cjs`. Keep screenshots in `output/playwright/`.

Preserve unrelated dirty files. Local checks establish local behavior; use deployment guides and verify the live site separately when publication is requested.

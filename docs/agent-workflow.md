# Agent quick reference

Read only the row relevant to the task; confirm paths when changing architecture.

| Task | Start here |
| --- | --- |
| Live entry | `index.html` → `src/main-illustrated.tsx` → `src/App2D.tsx` → `src/SeatedRoom.tsx` |
| Room composition/interactions | `src/paperRoom.ts`, `src/roomObjects3D.ts` |
| Routing, preferences, navigation/focus | `src/App2D.tsx` |
| Content/order and sections | `src/content.ts`, `src/Sections.tsx` |
| Appearance | `src/illustrated.css`, `src/contactAbout.css`; feature styles beside components |
| Instagram | `src/instagramLiveFeed.ts`, `src/InstagramStats.tsx`, `workers/instagram/src/` |
| Audio/music | `src/audio.ts`, `src/useRoomSound.ts`, `src/MusicShelf.tsx`, `src/musicData.ts`, `workers/music/src/` |
| Content/assets guidance | `CONTENT.md`, `ASSETS.md`, `INSTAGRAM.md` on demand |

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

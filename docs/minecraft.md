# Minecraft painting

`src/SeatedRoom.tsx` opens `src/MinecraftPanel.tsx` in a native modal from the painting or Objects list. No external window or iframe is used. Styling lives in `src/minecraft.css`.

`public/minecraft/account.json` and the adjacent original PNGs are a dated snapshot from Mojang. Refresh manually with `node scripts/refresh-minecraft.mjs`. The script verifies the account UUID, downloads only Mojang-hosted textures, and requires no credentials or paid services. Texture URLs include content hashes; originals are retained. The account check date is not a login date.

The Hypixel tab reads `public/minecraft/skyblock.json`, an allowlisted snapshot of ODABOSS's Peach profile from the owner's local SkyHanni, SkyBlock API and Skyblocker caches. Refresh with `node scripts/refresh-skyblock.mjs`. The default source is the Lunar profile's config directory; `SKYBLOCK_CONFIG_DIR` can override it. The exporter verifies the owner/profile mapping, validates numeric stats, preserves zero balances and replaces the snapshot only after successful extraction. It exports no raw inventory, chat, credentials or other players. Cache save dates are shown per source and do not prove when each stat was observed. Skill levels are shown individually, without inventing an average or converting XP with unverified formulas. The dungeon count is the cached F7 boss collection count, not Catacombs level. Cached pet means last recorded pet, not a complete collection or necessarily the currently equipped pet.

Net worth, Catacombs level, slayers and complete gear remain unverified. A normal external SkyCrypt profile link provides another route to stats. There are no runtime third-party requests or new services. No Hypixel or SkyCrypt API key is configured. Do not put a future key in client code, a Vite environment variable, or public JSON. Do not scrape SkyCrypt pages or repeatedly poll them. A future live integration needs an authorized source, a free-service cost check and response-contract tests.

Mojang's current public profile includes the current username, UUID, current skin/model and equipped cape. It does not establish previous names/skins, cape ownership inventory, full play history, or Bedrock activity. Populate additional history only from owner-supplied records or an authorized verified source, with source/check dates.

Checks: `npm test -- src/MinecraftPanel.test.tsx`; `node scripts/agent-check.mjs build`. Browser QA: painting click and Objects activation, three tabs including arrow/Home/End keys, 3D rotation with drag and arrow keys, downloads, modal focus/Escape/EXIT, desktop/mobile, reduced motion. Screenshots go in `output/playwright/`.

## Playtime snapshot

Account & history displays the server response “You have 420 hours and 43 minutes playtime!” from `2026-09-22-4.log.gz`, at 22:48:49, in the owner’s Lunar `hypixel-skyblock-for-lunar-client/logs` directory. The same session identifies `Setting user: ODABOSS` and Peach profile `6b95faa4-087b-4945-b935-1f864bbc2dad`. Only the aggregate is published; raw chat logs stay private. This is a historical SkyBlock snapshot, not live or lifetime Minecraft playtime. Refresh from a newer owner client log containing the server’s own playtime response; never use another player’s chat message. No API key or hosted service is needed for this route.

## Other server history

Run `node scripts/recover-minecraft-history.mjs` locally to regenerate `public/minecraft/history.json`. Uses dated, archived game logs explicitly identifying ODABOSS or McGowen_; ignores undated latest.log. Deduplicates connection days across profiles, combines Hypixel aliases, and groups private/unknown addresses without publishing them. Connection attempts may fail and are not playtime. McGowen_ sessions and world stats are included following the owner confirmation below. No complete lifetime Minecraft total can be inferred from these partial logs.

The owner confirmed McGowen_ on October 29, 2026. Mojang username lookup verified UUID `4f1bb45cd1ce4773a0b75f798faab183`. Recovery now combines both usernames, deduplicating server connection days. World stats for that UUID are listed individually at 20 ticks/second; potential copied saves are not summed.

## Skin viewer

Tabs open on Account & history, followed by Skin and Hypixel. `src/MinecraftSkin.tsx` renders the local Mojang texture and equipped cape with the existing Three.js dependency. Rotation renders only on interaction, with no automatic motion.

`public/minecraft/skins.json` holds Laby's recorded skin history, newest first, excluding the current skin (deduplicated by decoded pixels). Refresh with `node scripts/refresh-minecraft-skins.mjs`. The free public texture endpoint is documented at https://laby.net/docs/render; original PNGs are downloaded from Laby and served locally. No API key or runtime third-party requests are needed.

Two historical skins were recovered October 29, 2026. Dates are Laby observation dates, not exact skin-change dates; this archive may be incomplete. No cape is attached to a historical skin without evidence. Previous/next controls disable at either end, and Download skin follows the selected texture.

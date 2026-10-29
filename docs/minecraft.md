# Minecraft painting

`src/SeatedRoom.tsx` opens `src/MinecraftPanel.tsx` in a native modal from the painting or Objects list. No external window or iframe is used. Styling lives in `src/minecraft.css`.

`public/minecraft/account.json` and the adjacent original PNGs are a dated snapshot from Mojang. Refresh manually with `node scripts/refresh-minecraft.mjs`. The script verifies the account UUID, downloads only Mojang-hosted textures, and requires no credentials or paid services. Texture URLs include content hashes; originals are retained. The account check date is not a login date.

The panel intentionally has no fabricated SkyBlock totals or history. Net worth, purse/bank, progression, server dates and playtime need an authorized source. No Hypixel or SkyCrypt API key was available during implementation. Do not put a future key in client code, a Vite environment variable, or public JSON. SkyCrypt denies framing and its API requires a private key; do not scrape its pages or repeatedly poll it. A future server integration needs a free-service cost check and tests for its response contract before displaying numbers.

Mojang's current public profile includes the current username, UUID, current skin/model and equipped cape. It does not establish previous names/skins, cape ownership inventory, full play history, or Bedrock activity. Populate additional history only from owner-supplied records or an authorized verified source, with source/check dates.

Checks: `npm test -- src/MinecraftPanel.test.tsx`; `node scripts/agent-check.mjs build`. Browser QA: painting click and Objects activation, three tabs including arrow/Home/End keys, 3D rotation with drag and arrow keys, downloads, modal focus/Escape/EXIT, desktop/mobile, reduced motion. Screenshots go in `output/playwright/`.

## Playtime snapshot

Account & history displays the server response “You have 420 hours and 43 minutes playtime!” from `2026-09-22-4.log.gz`, at 22:48:49, in the owner’s Lunar `hypixel-skyblock-for-lunar-client/logs` directory. The same session identifies `Setting user: ODABOSS` and Peach profile `6b95faa4-087b-4945-b935-1f864bbc2dad`. Only the aggregate is published; raw chat logs stay private. This is a historical SkyBlock snapshot, not live or lifetime Minecraft playtime. Refresh from a newer owner client log containing the server’s own playtime response; never use another player’s chat message. No API key or hosted service is needed for this route.

## Other server history

Run `node scripts/recover-minecraft-history.mjs` locally to regenerate `public/minecraft/history.json`. Uses dated, archived game logs explicitly identifying ODABOSS or McGowen_; ignores undated latest.log. Deduplicates connection days across profiles, combines Hypixel aliases, and groups private/unknown addresses without publishing them. Connection attempts may fail and are not playtime. McGowen_ sessions and world stats are included following the owner confirmation below. No complete lifetime Minecraft total can be inferred from these partial logs.

The owner confirmed McGowen_ on October 29, 2026. Mojang username lookup verified UUID `4f1bb45cd1ce4773a0b75f798faab183`. Recovery now combines both usernames, deduplicating server connection days. World stats for that UUID are listed individually at 20 ticks/second; potential copied saves are not summed.

## Skin viewer

Tabs open on Account & history, followed by Skin and Hypixel. `src/MinecraftSkin.tsx` renders the local Mojang texture and equipped cape with the existing Three.js dependency. Rotation renders only on interaction, with no automatic motion.

`public/minecraft/skins.json` holds verified NameMC history entries (`path`, `model`, `label`), newest first, excluding the current skin. Keep downloaded original textures beside it. The switcher uses this list; previous/next controls disable at the ends. NameMC returned HTTP 403 / an access challenge during the October 29, 2026 update, so the historical list is empty. Do not invent entries or interpret this as having no previous skins. No cape is attached to a historical skin without evidence.

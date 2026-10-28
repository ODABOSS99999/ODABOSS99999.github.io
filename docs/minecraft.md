# Minecraft painting

`src/SeatedRoom.tsx` opens `src/MinecraftPanel.tsx` in a native modal from the painting or Objects list. No external window or iframe is used. Styling lives in `src/minecraft.css`.

`public/minecraft/account.json` and the adjacent original PNGs are a dated snapshot from Mojang. Refresh manually with `node scripts/refresh-minecraft.mjs`. The script verifies the account UUID, downloads only Mojang-hosted textures, and requires no credentials or paid services. Texture URLs include content hashes; originals are retained. The account check date is not a login date.

The panel intentionally has no fabricated SkyBlock totals or history. Net worth, purse/bank, progression, server dates and playtime need an authorized source. No Hypixel or SkyCrypt API key was available during implementation. Do not put a future key in client code, a Vite environment variable, or public JSON. SkyCrypt denies framing and its API requires a private key; do not scrape its pages or repeatedly poll it. A future server integration needs a free-service cost check and tests for its response contract before displaying numbers.

Mojang's current public profile includes the current username, UUID, current skin/model and equipped cape. It does not establish previous names/skins, cape ownership inventory, full play history, or Bedrock activity. Populate additional history only from owner-supplied records or an authorized verified source, with source/check dates.

Checks: `npm test -- src/MinecraftPanel.test.tsx`; `node scripts/agent-check.mjs build`. Browser QA: painting click and Objects activation, three tabs including arrow/Home/End keys, front/back preview, downloads, modal focus/Escape/EXIT, desktop/mobile, reduced motion. Screenshots go in `output/playwright/`.

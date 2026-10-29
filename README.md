# The McGowen Library

[mcgowen.works](https://mcgowen.works/) is Owen McGowen’s interactive portfolio: a Three.js library with photography collections, published work, projects, a contact card, Instagram statistics, music, and a Minecraft profile. Built with React, TypeScript, and Vite, with keyboard navigation, touch controls, reduced-motion support, and optional room audio.

## Local development

Use Node.js 22, matching the release workflow.

```powershell
npm ci
npm run dev
```

Open the loopback URL printed by Vite. The static site builds without private credentials; live integrations depend on their existing endpoints and configuration. Keep local credentials in ignored `.env*` files.

## Folder structure

```text
mcgowen.works/
├── .github/workflows/    # Releases, Instagram refresh, optional Worker deployment
├── docs/
│   ├── README.md         # Documentation index
│   ├── agent-workflow.md # Entry map and focused verification commands
│   ├── minecraft.md      # Minecraft assets and profile integration
│   ├── guides/           # Content, assets, room, Instagram, and music
│   ├── deployment/       # Hosting instructions and release records
│   └── history/          # Dated audits, reviews, and progress records
├── public/               # Static owner content and bundled assets
├── scripts/              # Refresh/import tools, release helpers, and browser QA
│   └── fixtures/         # Development-only browser harnesses
├── src/                  # React UI, room models, feature styles, and colocated tests
├── supabase/functions/   # Instagram feed and statistics endpoints
├── workers/              # Instagram and music Worker implementations
├── output/               # Ignored QA screenshots, logs, and temporary artifacts
├── index.html            # Production HTML entry
└── package.json          # Commands and dependencies
```

The live application starts at `index.html` → `src/main-illustrated.tsx` → `src/App2D.tsx` → `src/SeatedRoom.tsx`. Alternate room implementations remain in `src/`; consult the [entry map](docs/agent-workflow.md) before editing them. Generated `dist/` and installed `node_modules/` are ignored.

## Verification

```powershell
node scripts/agent-check.mjs all
node --test scripts/*.test.mjs workers/instagram/src/index.test.mjs workers/music/src/index.test.mjs
npm run check:media
npm run preview
```

The compact check runs whitespace validation, source tests, and the production build; logs go to `output/agent-check/`. Use focused tests during implementation. Check meaningful visual changes in a browser at desktop and mobile sizes, including keyboard and reduced-motion behavior. Save screenshots under `output/playwright/`. Browser QA callbacks in `scripts/` use Playwright and are separate from the shipped application; inspect their expected route and port before running them.

## Publishing

Production uses GitHub Pages with the custom domain `mcgowen.works`. After owner authorization and successful checks, push the intended source revision and run **Publish approved GitHub Pages release** (`.github/workflows/publish-pages.yml`). It validates the release, prepares direct section routes, and publishes the built files to `gh-pages`. Verify the workflow and the live assets before reporting publication complete.

Instagram snapshot refresh is scheduled hourly and gated by repository variables; publication also requires `SITE_PUBLIC_RELEASE_APPROVED`. Live feed requests and saved snapshots are separate sources. The Azure deployment workflow is an alternative to the current production path. Use only existing tools and confirmed free services; do not enable billable resources or overages.

See the [documentation index](docs/README.md) for content maintenance, integrations, deployment records, and historical verification. QA evidence belongs in ignored `output/`.

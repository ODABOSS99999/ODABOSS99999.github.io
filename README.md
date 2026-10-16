# The McGowen Library

Live site: [mcgowen.works](https://mcgowen.works/). See [verified deployment](LIVE-DEPLOYMENT.md) and [completion audit](COMPLETION-AUDIT.md). The older test release is retained in TEST-DEPLOYMENT.md as history.

React, TypeScript, and Vite portfolio with structured owner content, optional procedural audio, lighting preferences, accessible sections, and an image viewer. Visual room work is shared with the parallel design chats; check `PROGRESS.md` for current verification scope.

```powershell
npm ci
npm run dev
```

Open the printed loopback URL. Build and check the release:

```powershell
npm test
npm run build
npm run preview
```

- [Content guide](CONTENT.md): add actual photographs, biography, publication credits, and project case studies.
- [Instagram guide](INSTAGRAM.md): real post snapshot, latest post, explicit portfolio/favorite selections, and disabled daily refresh setup.
- [Deployment guide](DEPLOYMENT.md): Azure Static Web Apps Free, GitHub, Name.com, and HTTPS. Publication requires owner approval.
- [Asset record](ASSETS.md): bundled fonts, licenses, and original procedural artwork/audio.
- [Verification record](VERIFICATION.md): what was actually checked and what remains unverified.

No backend, paid AI, external font service, or database is required. No secrets belong in this repository. Publication remains gated; optional daily Instagram refresh can publish future content only after the owner enables both sync and release-approval variables.

Browser QA scripts use Playwright CLI, not the production runtime. The gallery harness under `scripts/fixtures/` contains clearly synthetic test swatches, is served only by the development server, and is excluded from Vite's single-entry production build. Screenshots and temporary outputs stay in ignored `output/playwright/`.

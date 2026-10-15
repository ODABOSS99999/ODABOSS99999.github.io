# The McGowen Library

Free test site: [odaboss99999.github.io](https://odaboss99999.github.io/). See [test deployment and verification](TEST-DEPLOYMENT.md). The custom domain remains separate from this test release.

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
- [Deployment guide](DEPLOYMENT.md): Azure Static Web Apps Free, GitHub, Name.com, and HTTPS. Publication requires owner approval.
- [Asset record](ASSETS.md): bundled fonts, licenses, and original procedural artwork/audio.
- [Verification record](VERIFICATION.md): what was actually checked and what remains unverified.

No backend, paid AI, external font service, or database is required. No secrets belong in this repository. No production deployment is triggered by a push.

Browser QA scripts use Playwright CLI, not the production runtime. The gallery harness under `scripts/fixtures/` contains clearly synthetic test swatches, is served only by the development server, and is excluded from Vite's single-entry production build. Screenshots and temporary outputs stay in ignored `output/playwright/`.

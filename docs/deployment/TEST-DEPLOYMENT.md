# Free test deployment

The owner requested a free test deployment on October 15, 2026. The selected host is GitHub Pages at https://odaboss99999.github.io/, using the public repository https://github.com/ODABOSS99999/ODABOSS99999.github.io.

Verified live on October 15, 2026. Deployment commit: `96ca855a3548086d09abd7cc50229b9b5390bc11`. Successful Pages run: https://github.com/ODABOSS99999/ODABOSS99999.github.io/actions/runs/38805978866.

Validation: 26 tests passed and the production build passed. Live HTTPS returned 200 for the homepage, all six section directories, and both JavaScript bundles. An unknown route returned the application's recovery document with HTTP 404. Browser verification confirmed the 3D library renders, the Index opens Contact, refreshing `/contact` renders Contact, and the return link opens the library. No browser console errors were captured during that check.

Other chats continued editing the shared workspace during publication. This release is a fixed built snapshot; subsequent local edits are not automatically deployed. The public source snapshot began at `3470f09766f4a41490b2806ae7956485f2172ba6`. Revalidate the complete current tree before the next release.

This is a personal portfolio test. GitHub Pages is free for public repositories. No Azure resources, student credits, paid runners, paid APIs, or domain changes are needed. The existing mcgowen.works DNS stays separate.

Source lives on `main`. The built static site lives on `gh-pages`; Pages publishes that branch's root. Build locally with `npm ci`, `npm test`, `npm run build`, then `node scripts/prepare-pages.mjs`. Publish only the contents of `dist` to `gh-pages`. Include `.nojekyll` and the generated section directories so direct links and refreshes work. Never copy `.env` files, credentials, development fixtures, or QA outputs into the deployment.

The original Azure workflow remains manual and requires a separately configured Azure token. It does not run when code is pushed.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

Limits and permitted use: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

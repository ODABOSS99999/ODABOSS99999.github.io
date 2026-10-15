# Free test deployment

The owner requested a free test deployment on October 15, 2026. The selected host is GitHub Pages at https://odaboss99999.github.io/, using the public repository https://github.com/ODABOSS99999/ODABOSS99999.github.io.

This is a personal portfolio test. GitHub Pages is free for public repositories. No Azure resources, student credits, paid runners, paid APIs, or domain changes are needed. The existing mcgowen.works DNS stays separate.

Source lives on `main`. The built static site lives on `gh-pages`; Pages publishes that branch's root. Build locally with `npm ci`, `npm test`, `npm run build`, then `node scripts/prepare-pages.mjs`. Publish only the contents of `dist` to `gh-pages`. Include `.nojekyll` and the generated section directories so direct links and refreshes work. Never copy `.env` files, credentials, development fixtures, or QA outputs into the deployment.

The original Azure workflow remains manual and requires a separately configured Azure token. It does not run when code is pushed.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

Limits and permitted use: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

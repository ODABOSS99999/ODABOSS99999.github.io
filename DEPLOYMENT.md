# Free-only deployment preparation

**Test release, October 15, 2026:** The owner requested publication of a free test. GitHub Pages now hosts the verified static snapshot at https://odaboss99999.github.io/. See [TEST-DEPLOYMENT.md](TEST-DEPLOYMENT.md). The Azure and custom-domain steps below remain an unexecuted production option.

The site is prepared locally for Azure Static Web Apps **Free**, with GitHub deployment and Name.com DNS. It has not been published. The owner must approve the public revision before any upload, repository publication, or domain change. Login, MFA, benefit redemption, account consent, and secret entry remain with the owner. Never paste credentials into chat or commit them.

## Verified service boundaries (October 15, 2026)

Microsoft describes Free as intended for personal/hobby projects and Standard for general production. My interpretation is that a personal photography/student engineering portfolio fits that stated intended use; treating McGowen Media as a commercial production business requires checking eligibility with Microsoft before relying on this route. These pages do not establish a blanket commercial-use entitlement. **Do not upgrade to Standard to resolve this uncertainty.** [Azure pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/static/), [hosting plans](https://learn.microsoft.com/en-us/azure/static-web-apps/plans).

Free includes 100 GB monthly subscription bandwidth with no bandwidth overage; exceeding the quota can stop service. Published Free limits include 250 MB per environment, 500 MB total storage, 15,000 files, 3 preview environments, 2 custom domains, and 10 apps per subscription. Free HTTPS certificates renew automatically. The workflow enforces a conservative 240 MB build limit and uses no API. [Quotas](https://learn.microsoft.com/en-us/azure/static-web-apps/quotas), [plans](https://learn.microsoft.com/en-us/azure/static-web-apps/plans).

Azure for Students is a subscription/eligibility route, not a promise that every Azure service is free forever. The Student Pack advertises Azure services and temporary credit. This site depends on the Free SKU, not on consuming that credit. Confirm the actual subscription is eligible and active; do not convert it to paid billing, attach Azure DNS, Storage, Functions, Application Insights, Front Door, databases, or other chargeable resources. [Student Pack](https://education.github.com/pack).

The Name.com Student offer is for eligible selected TLDs and the first registration year. It does **not** promise free renewal. `mcgowen.works` ownership, expiration, redemption, renewal price, auto-renew status, and DNS access have not been verified inside the account. Use the existing domain if already registered; do not register, transfer, renew, or buy add-ons. Review auto-renew with the owner before any charge. The site can continue on its free platform hostname if the owner later chooses not to renew the domain. [Name.com Student instructions](https://www.name.com/support/articles/360036364834-signing-up-for-github-student-developer-pack), [current Pack offer](https://education.github.com/pack).

Standard Linux GitHub-hosted runners have free Actions minutes in public repositories. Private repository allowances and payment settings vary. This workflow intentionally runs only in a public repository, uploads no Actions artifacts, uses no cache service, and has no push or PR trigger. Making the repository public also needs owner approval. Leave paid Actions usage disabled; a budget alert alone is not a guarantee against charges. [Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions), [budgets](https://docs.github.com/en/billing/concepts/budgets-and-alerts).

## After explicit publication approval

1. Review the exact built revision and public email/phone/social details. Run `npm ci`, `npm test`, and `npm run build`. Keep originals/private files outside the public repository and `public/`.
2. Use a public GitHub repository only after approval. In Azure create a **Static Web App**, explicitly choose **Free**, and confirm the final cost is zero. Choose a deployment source that does not create an automatic publish-on-push workflow; use the provided manual workflow. Do not enable an API or optional paid integrations. If any screen requires a charge, stop.
3. Configure a GitHub environment named `production`. Where available, add the owner as a required reviewer. The workflow's checkbox is an explicit publication acknowledgement; environment reviewers provide a second account-side gate when configured. The repository file cannot itself configure those reviewer settings.
4. In GitHub Settings → Secrets and variables → Actions, store the Azure Static Web App deployment token as `AZURE_STATIC_WEB_APPS_API_TOKEN` (prefer the protected `production` environment). Obtain it in Azure and enter it directly in GitHub; never send it through chat or put its value in files. It is a deployment token, not an AI API key.
5. From the default branch, manually run **Publish approved static site** and tick the release approval input only for the approved revision. It checks/tests/builds before uploading `dist`, without an API. It refuses private repositories and non-default branches. A deployment token does not prove the Azure SKU, so confirm **Free** in Azure before every first deployment or account change. [Build configuration](https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration).
6. Verify the generated Azure hostname, direct `/photography` and `/contact` URLs, an unknown route, image 404 behavior, and HTTPS. A successful local build does not verify a real deployment.

## Connect mcgowen.works at Name.com

Open the [domain account page](https://www.name.com/account/domain/details/mcgowen.works) and let the owner log in. First inspect the actual nameservers and existing DNS; DNS must be edited at the authoritative provider, which may differ from the registrar. Preserve email MX/TXT and other existing service records. Do not buy Azure DNS or a certificate.

For `www.mcgowen.works`, add it in Azure → Custom domains and follow the generated verification instructions. A CNAME for host `www` points to the **actual** Azure hostname shown by that resource, without `https://` or a path. Do not use an invented hostname or a wildcard. [External custom domain](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-external).

For apex `mcgowen.works`, choose TXT validation in Azure and place the exact generated verification code at the host Azure specifies. Prefer an ALIAS/ANAME/flattened record to the real Azure hostname **only if the current authoritative DNS supports it**. If unsupported, Microsoft's documented free-DNS-compatible fallback is an A record to that app's actual `stableInboundIP`, obtained from Azure; it loses global distribution benefits. Never guess the IP, put a CNAME at an unsupported apex, or change nameservers without owner approval. [Apex domain instructions](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-external).

Wait for DNS propagation, Azure validation, and the managed HTTPS certificate. Check both apex and www via HTTPS, choose the intended default domain in Azure, and check direct section refreshes. Free has two custom-domain slots, sufficient for apex and www. DNS propagation, certificate issuance, ownership, and deployment have not been verified locally.

`public/staticwebapp.config.json` is copied by Vite to `dist/`: HTML navigation falls back to `index.html`, while missing images/assets keep real error responses. Unknown application routes are handled by the app's recovery view. Hashed Vite assets get long caching; HTML is revalidated. [Routing configuration](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration).

## If commercial-production eligibility conflicts

Keep the local site complete and leave Azure publication pending. A free static alternative to evaluate with the owner is **Cloudflare Pages Free**: it advertises unlimited static requests/bandwidth; its Free limits include 500 builds/month, 20,000 files, and 25 MiB per asset. Its product page addresses product teams and production applications without Azure's personal-project positioning; this is a promising alternative, not an independently confirmed legal entitlement for this account. Use static-only Direct Upload of `dist` after approval, without Functions, Workers Paid, R2, or other metered products. The `pages.dev` hostname avoids domain renewal costs. This is an alternative, not an account or deployment already created. [Pages offering](https://www.cloudflare.com/developer-platform/products/pages/), [limits](https://developers.cloudflare.com/pages/platform/limits/).

Cloudflare does not read Azure's configuration; before switching, translate headers/cache settings and verify SPA fallback, custom-domain requirements, current free terms, and HTTPS in that environment. No hosting provider can make a purchased custom domain free to renew indefinitely.

## Existing GitHub Pages test host and Name.com

The parallel deployment chat created a separate, older test snapshot at https://odaboss99999.github.io/ from the public ODABOSS99999/ODABOSS99999.github.io repository. This is not evidence that the latest local illustrated room and Instagram additions are published. See TEST-DEPLOYMENT.md for the fixed release it verified.

The prepared Instagram refresh now supports that existing Pages host without an Azure resource: INSTAGRAM_DEPLOY_TARGET defaults to github-pages; setting it to azure selects the original Azure path. Both need the explicit SITE_PUBLIC_RELEASE_APPROVED flag before publishing future snapshots. Neither was enabled here. See INSTAGRAM.md for private credential setup and the once-daily schedule.

After approving the actual current site and choosing Pages for this personal portfolio, connect mcgowen.works in this order:

1. Sign into Name.com yourself. Verify the domain is owned, active, and its renewal/auto-renew terms are acceptable; the Student offer does not mean free renewal. No purchases are authorized.
2. Verify ownership in GitHub Pages using GitHub's generated TXT value. Add mcgowen.works in the repository's Pages Custom domain setting before changing destination DNS. Preserve the generated CNAME on gh-pages.
3. At Name.com, point apex A records to GitHub's documented addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Point www CNAME directly to odaboss99999.github.io. Inspect existing records before changing anything; preserve unrelated mail/TXT records.
4. Verify propagation with Resolve-DnsName, wait for certificate availability, then enable Enforce HTTPS. Check both apex and www plus direct section URLs. No DNS or custom-domain TLS verification has been performed for this revision.

[Official custom-domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Pages limits and use restrictions](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Pages is suitable for the personal test described here; it is not a blanket authorization to run a commercial transaction service. The existing Azure Free/personal-project boundary above also remains relevant. Neither hosting path requires paid overage or temporary credits for this static site.

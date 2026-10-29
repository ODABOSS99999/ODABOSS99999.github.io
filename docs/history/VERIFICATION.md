# Verification record â€” October 15, 2026

Checks actually run against the shared checkout are recorded below. Other chats may continue editing; recheck changed behavior before release. Current production entry is main-illustrated.tsx/App2D and the seated illustrated room.

| Check | Actual result |
| --- | --- |
| npm run build | TypeScript and Vite production build succeeded. Optional paper-room chunk is about 750 kB before compression; Vite reports a size warning. |
| npm test | 60 tests passed in seven files: preferences, navigation/history, focus, galleries/swipes, explicit favorite/pinned selections, and recovery. |
| node --test scripts/instagram-sync.test.mjs | 11 passed: bounded downloads, canonical URLs, exact captions, local dimensions, carousel/video covers, archive merging, failure retention. |
| node --test scripts/publish-pages.test.mjs | Isolated staging passed: preserve CNAME/.git, replace old build, reject private material before modification. Authenticated remote publishing not executed. |
| npm audit --omit=dev | Zero reported runtime dependency vulnerabilities. |
| Production browser matrix | Chromium, 360/390/768/1440/1920 pixels, three lighting modes. No horizontal overflow in 15 combinations; desktop and phone screenshots inspected. |
| Production routes | All six destinations opened through Index and returned to room. App tests also exercise Back/Forward, scroll, and focus restoration. |
| Real Instagram preview | Latest post DehAOwevgm4 selected by timestamp; local image loaded, source link matched, modal Tab loop and Escape passed. |
| Native viewer fixture | Portrait proportions, arrow keys, missing image, Escape, focus restoration, scroll lock, repeated Tab traversal passed. Synthetic fixtures excluded from production. |
| Real browser audio | No context before Play; context running after Play, suspended after Mute. Three cycles used one context. Volume zero during QA; audible quality not assessed. |
| WebGL unavailable | Forced WebGL absence showed usable object-list fallback. Contact opened; return restored focus. Context loss after rendering not separately simulated. |
| Motion / zoom | Earlier CSS-room browser checks and current unit/scene tests cover reduced motion. 720px reflow equivalent checked; actual browser-menu 200% zoom and physical phones unverified. |

Current browser scripts: scripts/final-browser-qa.cjs, scripts/audio-browser-qa.cjs, scripts/fallback-browser-qa.cjs. Use Playwright CLI run-code --filename with production preview on port 5174. Gallery fixture needs development server on 5173. Screenshots remain in ignored output/playwright; current-preview.png shows Photography with the latest Instagram post. The seated room stays full screen; the latest feed lives inside Photography.

Static build was approximately 8.7 MB before Pages route copies. Public feed contains no API keys or signed CDN URLs. Release workflows enforce a conservative 240 MB ceiling and static-only output.

Not proven: full portfolio/pinned membership; scheduled-refresh activation or authenticated run; newest revision publicly deployed; Name.com account state; mcgowen.works DNS and TLS; production traffic performance; hardware-wide accessibility. Missing biography, publications, and projects have intentional empty states. Earlier CSS bookshelf screenshots describe that earlier design only.

Final integration recheck: the other design chat removed the home feed to preserve the full-screen room. The initial repeat timed out because the selector expected a home feed. Latest Instagram was moved into Photography; build and all 60 application tests passed again.
The adjusted production browser check passed: five widths times three lighting modes, all six routes, real latest photo/source, gallery focus loop and Escape, zero page errors.

Final integration audit: 78 application tests and 17 importer/metrics/staging tests passed. Real renderer context loss after initialization exposed fallback navigation and Contact opened; this is additional evidence beyond the earlier initial-WebGL-absence check. Retargetable 800 ms room/chandelier lighting passed three focused tests and the production build. Source revision and release outcome are recorded in LIVE-DEPLOYMENT.md. Actual browser zoom remains unverified: the browser tool accepted keyboard zoom requests without changing devicePixelRatio or viewport.


## October 16 portfolio, biography, signs and ledger update

Local browser checks at 1440px and 390px verified curated portfolio first (30 selected covers), one independent latest feature with no overlap in portfolio, personal About text without its former photo-led introduction, no horizontal overflow, and stationary illuminated EXIT hover/focus. The room no longer has an EXIT above the phone attendant. Reduced-motion and keyboard focus were checked. The ledger uses line charts and keyboard date scrubbing; archived cumulative posts span September 16–October 16 (50 posts). Partnership classifications have per-post reasons and reviewed evidence; 18 of the 50 archived posts qualify, with two uncertain posts excluded. Only one total-follower snapshot currently exists; future sync preserves history instead of inventing it. These are local checks, not proof of publication.

# Asset and license record

The library scene uses original CSS and SVG artwork in `src/Scene.tsx` and `src/Objects.tsx`, and the illustrated room in `src/paperRoom.ts`. Supplied branding is preserved without a fabricated logo. Wood grain, metal, paper, lighting, shadows, and empty frames are procedural decoration. They are not owner photographs or completed engineering projects. No stock photography, premium assets, third-party models, or generated portfolio images are included.

`src/audio.ts` creates original procedural audio with the browser Web Audio API. There are no downloaded recordings, paid audio services, or runtime AI calls. No third-party sound attribution is required.

| Font | Distribution/source | License | Included license |
| --- | --- | --- | --- |
| Cormorant Garamond | [`@fontsource/cormorant-garamond`](https://fontsource.org/fonts/cormorant-garamond), installed package | SIL Open Font License 1.1 | `public/licenses/cormorant-garamond-OFL.txt`; original in `node_modules/@fontsource/cormorant-garamond/LICENSE` |
| DM Sans | [`@fontsource/dm-sans`](https://fontsource.org/fonts/dm-sans), installed package | SIL Open Font License 1.1 | `public/licenses/dm-sans-OFL.txt`; original in `node_modules/@fontsource/dm-sans/LICENSE` |

Fonts are bundled and served locally by Vite; visitors need no font CDN request. Preserve the bundled font licenses when distributing builds. OFL allows use and redistribution with the license and its conditions; no font files have been renamed or modified here.

The current Instagram snapshot contains 49 owner-account post previews imported through the connected Windsor account on October 15, 2026. Each `public/instagram/media/{id}.webp` is traced to its canonical Instagram permalink and exact caption in `public/instagram/feed.json`. These are resized, auto-oriented WebP previews; video and carousel entries use the available cover only. The source account is `mcgowen_media`; ownership was supplied by the user and account identity was read from the connector. No new license is applied to owner photographs. No portrait, publication thumbnails, or engineering project images have been supplied. Future entries should record: file path, creator, original source URL or owner-supplied provenance, license/permission, required attribution, and modifications. Keep source originals intact and outside deployed `public/`. Do not assume social media availability grants reuse rights.

Application dependencies are recorded with exact installed versions in `package-lock.json`; their licenses remain in their installed packages. This file does not impose a new license on the owner's photographs or personal material.

Owner biography and portfolio selection verified from the signed-in public creator portfolio on October 15, 2026: https://www.instagram.com/mcgowen_media/portfolio/BAY0n_qsH5/. Biography paraphrases the owner-provided portfolio text; no follower counts or performance statistics are published.

The 30 selected covers under public/instagram/curated were downloaded from the authenticated owner portfolio and profile on October 15, 2026. src/instagram-curated.ts records each canonical Instagram source permalink and local image dimensions. The 29 creator-portfolio selections and three explicit profile pins produce 30 distinct covers. Only selected owner image files were imported from the browser asset inventory; unrelated assets and signed source URLs were excluded. Covers were auto-oriented and resized to a maximum of 1600 pixels, WebP quality 84, preserving aspect ratio. Missing original dates/captions are omitted rather than inferred.

The 30 selected covers under public/instagram/curated were downloaded from the authenticated owner portfolio and profile on October 15, 2026. src/instagram-curated.ts records each canonical Instagram source permalink and local image dimensions. The 29 creator-portfolio selections and three explicit profile pins produce 30 distinct covers. Only selected owner image files were imported from the browser asset inventory; unrelated assets and signed source URLs were excluded. Covers were auto-oriented and resized to a maximum of 1600 pixels, WebP quality 84, preserving aspect ratio. Missing original dates/captions are omitted rather than inferred.

`public/instagram/profile.jpg` is the current @mcgowen_media profile picture, verified and downloaded from the signed-in owner profile on October 16, 2026. Instagram supplied a 150 × 150 JPEG; it is preserved without upscaling and used in the About Me picture frame. Source original remains in Downloads.


## Published Work photos (October 22, 2026)

`public/publications/` contains the owner-confirmed Mercury placements from the existing Published Work list, retrieved from their public Instagram posts and the linked Mercury article. Instagram publication graphics retain their original overlays; text-only carousel slides are excluded from the gallery. The Mercury article photos credit Owen McGowan. Exact captions, cutlines, source URLs, and dimensions are recorded in `artifacts/publication-sources.json`. Cutlines take precedence over post captions. No new license is applied.

## Engineering project images (October 22, 2026)

Official Comet Rocketry and ALTF4 Instagram profile logos and the official Texas Torque website logo were added at the owner's request. Sources and retrieval date: `public/projects/logo-sources.json`. Science-fair photo: owner's Amazon Photos, February 11, 2023, `2023-02-11_18-30-30_694.heic`; owner confirmed the photograph in chat. Web copy strips original metadata; original preserved in Downloads.

Game Boy build image: official LearnToBot reel https://www.instagram.com/reel/DLGVLaVoboQ/ (June 19, 2025), linked by the existing project tagged-work entry; poster shows CAD, printing, electronics, and completed handhelds. CPRINTABL3 profile logo: https://www.instagram.com/cprintabl3/ (handle confirmed by owner). Retrieved October 22, 2026.


## Mercury update (October 28, 2026)

Added the October 27 article "Ella Boh rocks in Dallas, talks mental health" from https://utdmercury.com/35930/life-arts/ella-boh-rocks-in-dallas-talks-mental-health/, also listed first in the owner's Mercury staff archive. All three article photographs credit Owen McGowan. `public/publications/mercury-ella-boh-{1,2,3}.webp` are sRGB web copies of the credited CMYK TIFFs, resized proportionally to at most 2000 pixels; downloaded source copies remain in ignored `output/`. The lead cutline is preserved; inline images use descriptive alt text without invented cutlines. No new license is applied.

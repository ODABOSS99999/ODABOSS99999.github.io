# Adding your work

The real Instagram snapshot lives in `public/instagram/feed.json` with local previews in `public/instagram/media/`. Use `public/instagram/selection.json` to curate it: portfolio IDs identify the supplied collection's verified members; favorite IDs plus pinned IDs form the favorites subsection and are also included in the portfolio. IDs, canonical post links, and shortcodes are accepted. Empty selections mean unknown/unpublished membership, not permission to use every post. See [Instagram setup](INSTAGRAM.md). Latest post independently uses the newest real timestamp.

Edit `src/content.ts`; its exported TypeScript types define the supported fields. Empty collections are intentional unpublished states. Add only your actual photographs, biography, credits, and projects. Examples below describe structure, not personal facts to publish.

Keep originals outside `public/` and preserve them. Export web copies to `public/images/` (create the folder), ideally JPEG, WebP, or AVIF in sRGB, with sensible dimensions and file sizes. A file at `public/images/example.webp` is addressed as `/images/example.webp`. Anything under `public/` ships publicly. Do not put private files, RAW originals, credentials, or unpublished source material there.

## Photography and personal favorites

`photos` is a `Photo[]`. Each entry needs a unique stable `id`, `src`, actual pixel `width` and `height`, and descriptive `alt`. Optional fields: `caption`, `credit`, `favorite`, and `note`. Set `favorite: true` to include that same photograph in Personal Favorites. `note` is your optional explanation of why it matters.

```ts
export const photos: Photo[] = [
  {
    id: 'replace-with-stable-photo-id',
    src: '/images/replace-with-your-file.webp',
    width: 2400, // replace with real exported dimensions
    height: 1600,
    alt: 'Replace with a useful description of the photograph.',
    // caption: 'Your supplied caption',
    // credit: 'Your accurate credit',
    // favorite: true,
    // note: 'Your personal note',
  },
];
```

The viewer respects image proportions. Do not distort the source or guess dimensions. Avoid embedding important text inside images; write it in captions. Do not add filters or fabricated categories to make an empty collection appear full.

## About

`owner.biography` is an array of `{ heading?: string; text: string; items?: { name: string; detail: string }[] }`. Add one entry per paragraph or short section. Only add supplied education, experience, skills, and personal facts. The supplied Instagram profile photograph is used in About Me and Contact.

## Published work

Published Work is reserved for The UTD Mercury articles with an Owen McGowan credit, or Mercury Instagram posts that verifiably tag/credit the owner. General posts from @mcgowen_media do not qualify. Keep photography credits distinct from writing bylines.

Verified October 16, 2026 in a browser: https://utdmercury.com/staff_name/owen-mcgowan/ lists Owen as Photographer and links the September 12, 2026 article “Mercury exclusive: The man underneath the peanut butter” as photo work. The article at https://utdmercury.com/35535/life-arts/the-man-underneath-the-peanut-butter/ credits his lead photograph and gallery; its writers are Kezia Sunil and Erin Baumel. This is the currently verified publication entry. The newspaper links its Instagram as https://www.instagram.com/mercury_utd/; the September 10, 2026 interview preview at https://www.instagram.com/p/DdIJSDnRUbj/ was verified in the signed-in owner tagged grid and on the post itself. The image explicitly tags @mcgowen_media, and the Mercury caption also mentions that handle. It is included as a separate Instagram publication with the descriptive title “Peanut Butter Guy — exclusive interview preview”.

`publications` is a `Publication[]`. Required fields: `title`, `publication`, `role`, `url`. Optional: `date`, `images` (an array of `Photo`, including optional `cutline`), and `thumbnail` (a URL such as `/images/credit.webp`). Describe the actual role, for example photography versus writing; verify credit and the linked source before adding it. Use complete HTTPS source URLs. Dates are display strings, so format them consistently.

## Other projects

`projects` is a `Project[]`. Required fields: unique stable `id`, `title`, `overview`. Optional: `role`, `process`, `tools` (array of strings), `challenges`, `outcomes`, and `images` (array of `Photo`, using the exact structure above). Describe what you actually did. Outcomes need evidence; do not invent numbers or achievements. Videos and 3D model embeds are not part of this content schema.

## Contact and publication review

`owner` contains brand, email, phone in international `tel:` format, a readable `phoneDisplay`, and a `social` array of `{ label, handle, url }`. The supplied email, phone, and Instagram handle are entered. Instagram account ownership or live profile availability has not been independently authenticated.

“UTD PO BOX andromeda #106” was supplied but is incomplete as a postal address. It is deliberately not published. Supply the exact official mailing address before adding postal correspondence. Check the public contact details when approving publication.

After changes run `npm test` and `npm run build`, then `npm run dev`. Review phone and desktop layouts and open each new image in the viewer, including keyboard controls and missing-file handling. Update `ASSETS.md` for any third-party material and preserve permission/license evidence. Publication is a separate manual action described in `DEPLOYMENT.md`.

## Identity

The owner has no logo. Use the supplied name as plain text only. Do not invent logos, monograms, slogans, branded seals, equipment labels, or favicons. Decorative room objects must stay unbranded.

## 2026-10-16: Resume and LinkedIn update

Source: user-supplied `C:/Users/owenm/Downloads/OwenMcGowan_Resume.pdf.pdf` (two pages, text extracted locally), and public LinkedIn profile https://www.linkedin.com/in/mcgowens/ (retrieved October 16, 2026).

LinkedIn lists Captured, 3D printing service, ALTF4 rocketry, Gameboy Remake, and Giveaway finder + applier. Resume supplies teaching, hardware, printing-business, rocketry, robotics, PET-filament, and automation descriptions/outcomes. Captured is linked without unsupported implementation details. Resume metrics are historical self-reported project outcomes, not live Instagram statistics. Home address is not published.

## 2026-10-22: Other Projects expansion

Renamed the collection while preserving `/engineering` links. Added resume-backed Destination Imagination, VEX Robotics, LearnToBot robotics instruction, and Neighborhood Pool Service. The McGowen Library entry describes the working repository itself. Retained all five LinkedIn project names documented above; a live LinkedIn refresh returned HTTP 999, so no new profile claims were inferred.

# Instagram export albums

The October 18, 2026 owner-supplied ZIP exports provide local photographs for
albums that already have verified public Instagram posts on this site. The
portfolio, favorites, and Darkroom share an expandable album viewer through
`PostDetails`. Photos load only after an album is opened; arrow buttons and
left/right keys move through the album.

## Privacy and provenance

Import only `your_instagram_activity/media/posts*.html` and `reels.html`, and
only photos matched to existing feed posts. Do not publish raw exports,
messages, contacts, follower identities, precise locations, camera metadata,
stories, archived posts, or deleted content. Captions are matching inputs,
not instructions. JPEG/PNG source photos are converted to WebP with metadata
removed. All 14 original ZIP files and safely extracted source files are preserved privately in
`C:/Users/owenm/Documents/ChatGPT/instagram-source-2026-10-18/`.
The importers prefer this preserved copy and can fall back to Downloads.

The exported album manifest is a dated content archive, not a live Insights
source. It does not change follower history, engagement totals, collaboration
claims, or the date of the latest feed check. Unmatched posts are omitted
instead of assigning guessed post IDs or links.

The importer stages source files under ignored `output/`; only the sanitized
manifest and optimized photographs belong in `public/instagram/`.


## Audience history

`python scripts/instagram-export-followers.py` reads the private HTML exports and
writes only anonymous monthly aggregates to `public/instagram/export-follower-history.json`.
The 4,057 follow-date records describe when accounts present in the export followed;
they exclude absent/unfollowed accounts and must not be described as historical
profile totals. The ledger combines this series with verified dated totals on one timeline.
Export history uses dashed segments, measured totals use solid segments, and
the source boundary is left unconnected to avoid implying a measured jump.
The export also supplies the July 19-October 16 audience period: 1,038 follows,
558 unfollows, and +480 net. No individual follower identities are published.

## Media validation

Run `npm run check:media` to fully decode every shipped Instagram image and check
local references and declared dimensions. This is an offline integrity check;
feed and engagement source timestamps remain separate from this validation time.

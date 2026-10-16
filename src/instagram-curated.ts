import type { Photo } from './content';
import type { InstagramPost, InstagramSelection } from './instagram';
import { instagramSelection, selectInstagramPosts } from './instagram';

// Portfolio membership was verified in the signed-in Instagram portfolio.
// Older covers deliberately carry no inferred media IDs, dates, or captions.
export const curatedInstagramPhotos: Photo[] = [
  {
    "id": "ig-curated-DZnJr_wDie2",
    "src": "/instagram/curated/DZnJr_wDie2.webp",
    "width": 1086,
    "height": 1448,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DZnJr_wDie2/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DZGeb-jNb_s",
    "src": "/instagram/curated/DZGeb-jNb_s.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DZGeb-jNb_s/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DcjrZUghzi2",
    "src": "/instagram/curated/DcjrZUghzi2.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DcjrZUghzi2/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DaX1fHWjro4",
    "src": "/instagram/curated/DaX1fHWjro4.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DaX1fHWjro4/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DalBI6toBeB",
    "src": "/instagram/curated/DalBI6toBeB.webp",
    "width": 1080,
    "height": 720,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DalBI6toBeB/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DbqQ2Xfjqk6",
    "src": "/instagram/curated/DbqQ2Xfjqk6.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DbqQ2Xfjqk6/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DZNQmcrOpbo",
    "src": "/instagram/curated/DZNQmcrOpbo.webp",
    "width": 1200,
    "height": 1600,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DZNQmcrOpbo/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Da2lioyFhny",
    "src": "/instagram/curated/Da2lioyFhny.webp",
    "width": 1122,
    "height": 1402,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Da2lioyFhny/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Da0fd4yIKAN",
    "src": "/instagram/curated/Da0fd4yIKAN.webp",
    "width": 1122,
    "height": 1401,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Da0fd4yIKAN/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Db3O_0sFqva",
    "src": "/instagram/curated/Db3O_0sFqva.webp",
    "width": 1024,
    "height": 1365,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Db3O_0sFqva/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DeejqdEGoqc",
    "src": "/instagram/curated/DeejqdEGoqc.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DeejqdEGoqc/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Dd6fcFGGzNO",
    "src": "/instagram/curated/Dd6fcFGGzNO.webp",
    "width": 1080,
    "height": 720,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Dd6fcFGGzNO/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DdjYy9rG20T",
    "src": "/instagram/curated/DdjYy9rG20T.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DdjYy9rG20T/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Dbs7gDmjn0z",
    "src": "/instagram/curated/Dbs7gDmjn0z.webp",
    "width": 1200,
    "height": 1600,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Dbs7gDmjn0z/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DeaaKFkvdH7",
    "src": "/instagram/curated/DeaaKFkvdH7.webp",
    "width": 1344,
    "height": 896,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DeaaKFkvdH7/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DabQAs3GonM",
    "src": "/instagram/curated/DabQAs3GonM.webp",
    "width": 1440,
    "height": 810,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DabQAs3GonM/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Db0u1DyFhFi",
    "src": "/instagram/curated/Db0u1DyFhFi.webp",
    "width": 1080,
    "height": 720,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Db0u1DyFhFi/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DcdpZCimxx3",
    "src": "/instagram/curated/DcdpZCimxx3.webp",
    "width": 1080,
    "height": 725,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DcdpZCimxx3/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DdMOTFzDSmc",
    "src": "/instagram/curated/DdMOTFzDSmc.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DdMOTFzDSmc/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DcWHW8rluJ-",
    "src": "/instagram/curated/DcWHW8rluJ-.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DcWHW8rluJ-/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Dbve2g1OZzQ",
    "src": "/instagram/curated/Dbve2g1OZzQ.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Dbve2g1OZzQ/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-Dc1yk3otjpF",
    "src": "/instagram/curated/Dc1yk3otjpF.webp",
    "width": 1024,
    "height": 1376,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/Dc1yk3otjpF/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DbyBnTVDrhx",
    "src": "/instagram/curated/DbyBnTVDrhx.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DbyBnTVDrhx/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DdrQGPZm6du",
    "src": "/instagram/curated/DdrQGPZm6du.webp",
    "width": 1080,
    "height": 1080,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DdrQGPZm6du/",
    "sourceLabel": "View post on Instagram"
  },
  {
    "id": "ig-curated-DVvxzPWDThf",
    "src": "/instagram/curated/DVvxzPWDThf.webp",
    "width": 1440,
    "height": 960,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DVvxzPWDThf/",
    "sourceLabel": "View post on Instagram",
    "favorite": true
  },
  {
    "id": "ig-curated-DbvrBR1IA7R",
    "src": "/instagram/curated/DbvrBR1IA7R.webp",
    "width": 1080,
    "height": 1440,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DbvrBR1IA7R/",
    "sourceLabel": "View post on Instagram",
    "favorite": true
  },
  {
    "id": "ig-curated-DbCwPkxjTL0",
    "src": "/instagram/curated/DbCwPkxjTL0.webp",
    "width": 1080,
    "height": 720,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DbCwPkxjTL0/",
    "sourceLabel": "View post on Instagram",
    "favorite": true
  },
  {
    "id": "ig-curated-DY8YYQjjYy0",
    "src": "/instagram/curated/DY8YYQjjYy0.webp",
    "width": 1536,
    "height": 837,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DY8YYQjjYy0/",
    "sourceLabel": "View post on Instagram",
    "favorite": true
  },
  {
    "id": "ig-curated-DX5Ub9wDT0H",
    "src": "/instagram/curated/DX5Ub9wDT0H.webp",
    "width": 1440,
    "height": 960,
    "alt": "Photograph selected for the @mcgowen_media Instagram portfolio",
    "sourceUrl": "https://www.instagram.com/p/DX5Ub9wDT0H/",
    "sourceLabel": "View post on Instagram",
    "favorite": true
  }
];

export const pinnedInstagramPhotos: Photo[] = [
  {
    "id": "ig-curated-DdEZg_gjT1T",
    "src": "/instagram/curated/DdEZg_gjT1T.webp",
    "width": 1080,
    "height": 1350,
    "alt": "Pinned Instagram photograph from @mcgowen_media",
    "sourceUrl": "https://www.instagram.com/p/DdEZg_gjT1T/",
    "sourceLabel": "View post on Instagram"
  }
];

const postCode = (url: string) => url.split('/').filter(Boolean).at(-1)!;

export function instagramPostPhoto(post: InstagramPost): Photo {
  const video = post.mediaType === 'VIDEO' || post.mediaType === 'REEL';
  return {
    metrics:post.metrics, id: `ig-${post.id}`, src: post.image.src, width: post.image.width, height: post.image.height,
    alt: `Instagram ${video ? 'reel cover' : post.mediaType === 'CAROUSEL_ALBUM' ? 'carousel cover' : 'photograph'} from @mcgowen_media, ${new Date(post.timestamp).toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'})}`,
    caption: post.caption, sourceUrl: post.permalink,
    sourceLabel: video ? 'Watch reel on Instagram' : post.mediaType === 'CAROUSEL_ALBUM' ? 'View full carousel on Instagram' : 'View post on Instagram',
  };
}

/** Keep the verified portfolio order; enrich matching covers using actual API metadata. */
export function selectInstagramPhotos(
  posts: InstagramPost[],
  mode: 'latest' | 'portfolio' | 'favorites',
  choices: InstagramSelection = instagramSelection,
  curated: Photo[] = [...curatedInstagramPhotos, ...pinnedInstagramPhotos],
): Photo[] {
  if (mode === 'latest') return selectInstagramPosts(posts, mode, choices).map(instagramPostPhoto);
  const favoriteKeys = new Set([...choices.favoriteIds, ...choices.pinnedIds]);
  const portfolioKeys = new Set([...choices.portfolioIds, ...favoriteKeys]);
  const matches = (photo: Photo, keys: Set<string>) => keys.has(photo.sourceUrl!) || keys.has(postCode(photo.sourceUrl!)) || keys.has(photo.id.replace(/^ig-/, ''));
  const snapshotByCode = new Map(posts.map(post => [postCode(post.permalink), post]));
  const merged = curated
    .filter(photo => choices.portfolioMode === 'all' || matches(photo, portfolioKeys))
    .map(photo => {
      const post = snapshotByCode.get(postCode(photo.sourceUrl!));
      return post ? {...photo, ...instagramPostPhoto(post)} : photo;
    });
  const seen = new Set(merged.map(photo => postCode(photo.sourceUrl!)));
  for (const post of selectInstagramPosts(posts, 'portfolio', choices)) {
    const code = postCode(post.permalink);
    if (!seen.has(code)) { merged.push(instagramPostPhoto(post)); seen.add(code); }
  }
  return mode === 'favorites' ? merged.filter(photo => matches(photo, favoriteKeys)) : merged;
}

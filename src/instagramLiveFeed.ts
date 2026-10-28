import { validateSnapshot, type InstagramSnapshot } from './instagram';
import { LIVE_INSTAGRAM_URL, LIVE_INSTAGRAM_ANON_KEY } from './instagramLiveConfig';

// Inline raster covers come only from our backend, which validates and checks
// the Instagram CDN image. No arbitrary remote image origins are accepted.
export function validateLiveFeed(value: unknown): InstagramSnapshot {
 const data=value as InstagramSnapshot;
 if(!data||!Array.isArray(data.posts)||data.posts.length!==1)throw Error('Invalid latest post');
 const post=data.posts[0],src=post?.image?.src;
 if(typeof src!=='string'||src.length>4_000_000||!/^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/]+={0,2}$/.test(src))throw Error('Invalid latest image');
 validateSnapshot({...data,posts:[{...post,image:{...post.image,src:'/instagram/media/latest.webp'}}]});
 const age=Date.now()-Date.parse(data.fetchedAt);
 if(age>120000||age< -30000)throw Error('Latest post request is stale');
 return data;
}

export function liveFeedUrl():string|null {
 const configured=import.meta.env.VITE_INSTAGRAM_FEED_URL || LIVE_INSTAGRAM_URL.replace(/\/instagram-live$/, '/instagram-feed');
 const url=new URL(configured,window.location.origin);
 if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['127.0.0.1','localhost'].includes(url.hostname)))throw Error('Invalid latest post endpoint');
 url.searchParams.set('refresh',String(Date.now()));
 return url.href;
}

export function liveFeedHeaders():HeadersInit {
 return import.meta.env.VITE_INSTAGRAM_FEED_URL ? {} : {Authorization:`Bearer ${LIVE_INSTAGRAM_ANON_KEY}`};
}

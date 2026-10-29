import { validateSnapshot, type InstagramSnapshot } from './instagram';
import { LIVE_INSTAGRAM_URL, LIVE_INSTAGRAM_ANON_KEY } from './instagramLiveConfig';

// Covers are checked by our backend; only inline rasters and Instagram CDN hosts are accepted.
export function validateLiveFeed(value: unknown): InstagramSnapshot {
 const data=value as InstagramSnapshot;
 if(!data||!Array.isArray(data.posts)||!data.posts.length||data.posts.length>30)throw Error('Invalid latest post');
 for(const post of data.posts){
 const src=post?.image?.src;
 if(typeof src!=='string'||src.length>9_000_000)throw Error('Invalid latest image');
 if(!/^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/]+={0,2}$/.test(src)){
  const url=new URL(src);
  if(url.protocol!=='https:'||url.username||url.password||url.port||!['cdninstagram.com','fbcdn.net'].some(host=>url.hostname===host||url.hostname.endsWith(`.${host}`)))throw Error('Invalid latest image');
 }
 }
 validateSnapshot({...data,posts:data.posts.map(post=>({...post,image:{...post.image,src:'/instagram/media/latest.webp'}}))});
 const age=Date.now()-Date.parse(data.fetchedAt);
 if(age>120000||age< -30000)throw Error('Latest post request is stale');
 return data;
}

export function liveFeedUrl():string|null {
 const configured=import.meta.env.VITE_INSTAGRAM_FEED_URL || LIVE_INSTAGRAM_URL.replace(/\/instagram-live$/, '/instagram-feed');
 const url=new URL(configured,window.location.origin);
 if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['127.0.0.1','localhost'].includes(url.hostname)))throw Error('Invalid latest post endpoint');
 url.searchParams.set('refresh',String(Date.now()));
 url.searchParams.set('limit','30');
 url.searchParams.set('covers','url');
 return url.href;
}

export function liveFeedHeaders():HeadersInit {
 return import.meta.env.VITE_INSTAGRAM_FEED_URL ? {} : {Authorization:`Bearer ${LIVE_INSTAGRAM_ANON_KEY}`};
}

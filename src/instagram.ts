import type { InstagramMetrics } from './instagramMetrics';
import selection from '../public/instagram/selection.json';
export type InstagramPost = {
  metrics?: InstagramMetrics;
  id: string; caption: string; permalink: string; timestamp: string;
  mediaType: 'IMAGE'|'CAROUSEL_ALBUM'|'VIDEO'|'REEL';
  image: { src: string; width: number; height: number };
};
export type InstagramSnapshot = { version: 1; account: 'mcgowen_media'; fetchedAt: string; posts: InstagramPost[] };
export type InstagramSelection = { portfolioMode: string; portfolioIds: string[]; pinnedIds: string[] };
export const RECENT_POST_LIMIT = 30;
export const instagramSelection: InstagramSelection = selection;
export const instagramPortfolioUrl = selection.portfolioUrl;
export function validateSnapshot(value: unknown): InstagramSnapshot {
  const data=value as InstagramSnapshot;
  if(!data||data.version!==1||data.account!=='mcgowen_media'||!Number.isFinite(Date.parse(data.fetchedAt))||!Array.isArray(data.posts))throw new Error('Instagram snapshot is invalid');
  const ids=new Set<string>();
  for(const p of data.posts){
    if(!p||typeof p.id!=='string'||!/^\d+$/.test(p.id)||ids.has(p.id)||typeof p.caption!=='string'||!Number.isFinite(Date.parse(p.timestamp))||!['IMAGE','CAROUSEL_ALBUM','VIDEO','REEL'].includes(p.mediaType)||!p.image||!/^\/instagram\/media\/[\w.-]+\.webp$/.test(p.image.src)||!Number.isFinite(p.image.width)||p.image.width<=0||!Number.isFinite(p.image.height)||p.image.height<=0||!/^https:\/\/www\.instagram\.com\/(p|reel|tv)\/[A-Za-z0-9_-]+\/$/.test(p.permalink))throw new Error('Instagram post is invalid');
    ids.add(p.id);
  }
  return data;
}
export function selectInstagramPosts(posts: InstagramPost[], mode: 'latest'|'portfolio', choices: InstagramSelection=instagramSelection): InstagramPost[] {
  const sorted=[...posts].sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp));
  if(mode==='latest')return sorted.slice(0,1);
  if(mode==='portfolio'&&choices.portfolioMode==='recent')return sorted.slice(0,RECENT_POST_LIMIT);
  const matches=(p:InstagramPost,keys:Set<string>)=>keys.has(p.id)||keys.has(p.permalink)||keys.has(p.permalink.split('/').filter(Boolean).at(-1)!);
  const portfolioKeys=new Set([...choices.portfolioIds,...choices.pinnedIds]);
  const portfolio=choices.portfolioMode==='all'?sorted:sorted.filter(p=>matches(p,portfolioKeys));
  return portfolio;
}

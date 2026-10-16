export type InstagramMetrics={likes:number|null;comments:number|null;views:number|null;checkedAt:string;viewsCheckedAt?:string};
export type MetricsSnapshot={version:1;account:'mcgowen_media';fetchedAt:string;source:string;scope:'instagram-organic-media';posts:(InstagramMetrics&{id:string;permalink:string})[]};
export function validateMetrics(value:unknown):MetricsSnapshot{
 const v=value as MetricsSnapshot;if(!v||v.version!==1||v.account!=='mcgowen_media'||v.scope!=='instagram-organic-media'||!Number.isFinite(Date.parse(v.fetchedAt))||!Array.isArray(v.posts))throw new Error('Invalid Instagram metrics');
 const ids=new Set<string>();for(const p of v.posts){if(!p||!/^\d+$/.test(p.id)||ids.has(p.id)||!/^https:\/\/www\.instagram\.com\/(p|reel|tv)\/[\w-]+\/$/.test(p.permalink)||!Number.isFinite(Date.parse(p.checkedAt))||[p.likes,p.comments,p.views].some(n=>n!==null&&(!Number.isSafeInteger(n)||n<0)))throw new Error('Invalid post metrics');ids.add(p.id);}
 return v;
}

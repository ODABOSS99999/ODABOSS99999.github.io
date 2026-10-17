// Never substitute a published snapshot for a current measurement.
function connection(){
 const custom=import.meta.env.VITE_INSTAGRAM_LIVE_URL?.trim();
 return {base:custom,key:custom?import.meta.env.VITE_INSTAGRAM_LIVE_ANON_KEY?.trim():undefined};
}
export function hasLiveStatistics():boolean {return Boolean(connection().base);}
export function liveHeaders():HeadersInit {
 const {key}=connection();
 return key?{Authorization:`Bearer ${key}`} : {};
}
export function liveUrl(path:string):string {
 const {base}=connection();
 if(!base)throw new Error('Live statistics connection unavailable');
 const url=new URL(base.replace(/\/$/,'')+path);
 if(url.protocol!=='https:'&&!(url.protocol==='http:'&&['localhost','127.0.0.1'].includes(url.hostname)))throw new Error('Invalid live statistics connection');
 url.searchParams.set('refresh',String(Date.now()));
 return url.href;
}
export function assertFresh(checkedAt:string):void {
 const age=Date.now()-Date.parse(checkedAt);
 if(!Number.isFinite(age)||age>120000||age< -30000)throw new Error('Current measurement unavailable');
}

import type {InstagramMetrics} from './instagramMetrics';
export default function PhotoMetrics({metrics}:{metrics?:InstagramMetrics}){
 if(!metrics)return null;
 const date=new Date(metrics.checkedAt),old=Date.now()-date.valueOf()>3*60*60*1000;
 return <span className={`photo-metrics ${old?'metrics-older':''}`} role="group" aria-label="Instagram engagement counts"><span className="metrics-counts">{metrics.likes!==null&&<span>♡ {metrics.likes.toLocaleString()} likes</span>}{metrics.comments!==null&&<span>◌ {metrics.comments.toLocaleString()} comments</span>}{metrics.views!==null&&<span>↗ {metrics.views.toLocaleString()} views</span>}</span><time dateTime={metrics.checkedAt}>Last checked {date.toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'})}{old?' · older snapshot':''}</time></span>;
}

import saved from '../public/instagram/stats.json';
import historical from '../public/instagram/follower-history.json';
import exported from '../public/instagram/export-follower-history.json';
import {classifyPartnership,cumulativePosts} from './instagramLedger';
import {combinedFollowerHistory,mergeFollowerHistory} from './followerHistory';
import type {Stats} from './InstagramStats';

export function roomLedger(stats?:Stats){
 const current=stats?.archiveCurrent===true&&!!stats.trackedPosts.length;
 const posts=current?stats.trackedPosts:saved.trackedPosts;
 const checkedAt=stats?.checkedAt??saved.checkedAt;
 const followerTotals=mergeFollowerHistory(new Date().toISOString(),historical.points,saved.followerHistory,stats?.followerHistory??[],[{date:checkedAt,count:stats?.followers??saved.followers}]);
 return {
  live:!!stats,followers:stats?.followers??saved.followers,posts:stats?.posts??saved.posts,
  rows:[
   {label:'Posts',count:posts.length,archived:!current,points:cumulativePosts(posts)},
   {label:'Followers',count:stats?.followers??saved.followers,archived:!stats,points:combinedFollowerHistory(new Date().toISOString(),exported.points,followerTotals,stats?.checkedAt)},
   {label:'Partnerships',count:posts.filter(post=>classifyPartnership(post).kind==='partnership').length,archived:!current,points:cumulativePosts(posts.filter(post=>classifyPartnership(post).kind==='partnership'))},
  ],
 };
}

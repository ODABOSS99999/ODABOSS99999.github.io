import saved from '../public/instagram/stats.json';
import historical from '../public/instagram/follower-history.json';
import exported from '../public/instagram/export-follower-history.json';
import {classifyPartnership,cumulativePosts,isFollowerRating,readFollowerRatingsPreference} from './instagramLedger';
import {combinedFollowerHistory,mergeFollowerHistory} from './followerHistory';
import type {Stats} from './InstagramStats';

export function roomLedger(stats?:Stats){
 const current=stats?.archiveCurrent===true&&Number.isFinite(Date.parse(stats.archiveCheckedAt??''))&&!!stats.trackedPosts.length;
 const posts=current?stats.trackedPosts:saved.trackedPosts;
 const postPoints=cumulativePosts(posts);
 const includeFollowerRatings=readFollowerRatingsPreference();
 const collaborations=posts.filter(post=>classifyPartnership(post).kind==='partnership'&&(includeFollowerRatings||!isFollowerRating(post)));
 const checkedAt=stats?.checkedAt??saved.checkedAt;
 const followerTotals=mergeFollowerHistory(new Date().toISOString(),historical.points,saved.followerHistory,stats?.followerHistory??[],[{date:checkedAt,count:stats?.followers??saved.followers}]);
 return {
  live:!!stats,followers:stats?.followers??saved.followers,posts:stats?.posts??saved.posts,
  rows:[
   {label:'Posts',count:postPoints.at(-1)?.count??0,archived:!current,points:postPoints},
   {label:'Followers',count:stats?.followers??saved.followers,archived:!stats,points:combinedFollowerHistory(new Date().toISOString(),exported.points,followerTotals,stats?.checkedAt)},
   {label:'Partnerships',count:collaborations.length,archived:!current,points:cumulativePosts(collaborations)},
  ],
 };
}

import {expect,it} from 'vitest';
import {roomLedger} from './roomLedger';
import {cumulativePosts} from './instagramLedger';
import type {Stats} from './InstagramStats';
import saved from '../public/instagram/stats.json';

const post=(id:string,timestamp:string)=>({id,timestamp,caption:'',permalink:`https://www.instagram.com/p/${id}/`});
it('keeps the shelf count and graph in sync with the follower rating preference',()=>{
 const off=roomLedger().rows[2];
 localStorage.setItem('instagram-include-follower-ratings','true');
 const on=roomLedger().rows[2];
 expect(on.count-off.count).toBe(45);
 expect(off.points.at(-1)?.count).toBe(off.count);
 expect(on.points.at(-1)?.count).toBe(on.count);
});
it('keeps all three dated room graphs visible without a live connection',()=>{
 const data=roomLedger();expect(data.live).toBe(false);expect(data.rows.map(row=>row.label)).toEqual(['Posts','Followers','Partnerships']);
 for(const row of data.rows){expect(row.points.length).toBeGreaterThan(1);expect(row.archived).toBe(true);}
});
it('counts saved Posts from unique dated archive entries, not the profile total',()=>{
 const data=roomLedger(),row=data.rows[0];
 expect(row.archived).toBe(true);expect(data.posts).toBe(saved.posts);
 expect(row.points).toEqual(cumulativePosts(saved.trackedPosts));
 expect(row.count).toBe(row.points.at(-1)?.count??0);
});
it('updates live profile totals without dropping saved graphs when the live archive is incomplete',()=>{
 const checkedAt=new Date().toISOString();const live:Stats={version:2,account:'mcgowen_media',checkedAt,followers:5000,posts:700,followerHistory:[],trackedPosts:[],archiveCurrent:false};
 const data=roomLedger(live);expect(data.live).toBe(true);expect(data.posts).toBe(700);expect(data.rows[0].points).toEqual(roomLedger().rows[0].points);expect(data.rows[0].archived).toBe(true);expect(data.rows[0].count).toBe(data.rows[0].points.at(-1)?.count);expect(data.rows[1].count).toBe(5000);expect(data.rows[1].points.at(-1)).toMatchObject({count:5000,source:'live'});
});
it('uses a current dated archive only when its completeness metadata is present',()=>{
 const checkedAt=new Date().toISOString();const live:Stats={version:2,account:'mcgowen_media',checkedAt,followers:5000,posts:700,followerHistory:[],trackedPosts:[post('first','2026-02-02T00:00:00Z'),post('first','2026-02-03T00:00:00Z'),post('invalid','2026-02-31T12:00:00Z'),post('second','2026-03-01T00:00:00Z')],archiveCurrent:true,archiveCheckedAt:checkedAt};
 const data=roomLedger(live),row=data.rows[0];
 expect(data.posts).toBe(700);expect(row.archived).toBe(false);
 expect(row.points).toEqual([{date:'2026-02-02',count:1},{date:'2026-03-01',count:2}]);
 expect(row.count).toBe(2);expect(row.count).toBe(row.points.at(-1)?.count);
});
it('falls back to the saved dated archive when current metadata is incomplete',()=>{
 const checkedAt=new Date().toISOString();const live:Stats={version:2,account:'mcgowen_media',checkedAt,followers:5000,posts:700,followerHistory:[],trackedPosts:[post('partial','2026-02-02T00:00:00Z')],archiveCurrent:true};
 const data=roomLedger(live);
 expect(data.posts).toBe(700);expect(data.rows[0].archived).toBe(true);
 expect(data.rows[0].points).toEqual(roomLedger().rows[0].points);
});

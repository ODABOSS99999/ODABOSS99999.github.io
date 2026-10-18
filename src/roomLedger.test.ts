import {expect,it} from 'vitest';
import {roomLedger} from './roomLedger';
import type {Stats} from './InstagramStats';
it('keeps all three dated room graphs visible without a live connection',()=>{
 const data=roomLedger();expect(data.live).toBe(false);expect(data.rows.map(row=>row.label)).toEqual(['Posts','Followers','Partnerships']);
 for(const row of data.rows){expect(row.points.length).toBeGreaterThan(1);expect(row.archived).toBe(true);}
});
it('updates live profile totals without dropping saved graphs when the live archive is incomplete',()=>{
 const checkedAt=new Date().toISOString();const live:Stats={version:2,account:'mcgowen_media',checkedAt,followers:5000,posts:700,followerHistory:[],trackedPosts:[],archiveCurrent:false};
 const data=roomLedger(live);expect(data.live).toBe(true);expect(data.rows[0].points).toEqual(roomLedger().rows[0].points);expect(data.rows[1].count).toBe(5000);expect(data.rows[1].points.at(-1)).toMatchObject({count:5000,source:'live'});
});

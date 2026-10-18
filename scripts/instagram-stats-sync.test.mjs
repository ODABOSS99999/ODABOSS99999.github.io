import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeStats,normalizeFollowerGains} from './instagram-stats-sync.mjs';
const profile={status:'done',data:[{username:'mcgowen_media',followers_count:4640,media_count:549,data_fetched_at:'2026-10-16T02:08:57'}]};
test('preserves verified total snapshots and posts across rolling feeds',()=>{const first=normalizeStats(profile,{}, {posts:[{id:'1',timestamp:'2026-09-01',caption:'concert',permalink:'x'}]});const next=normalizeStats({...profile,data:[{...profile.data[0],followers_count:4639,data_fetched_at:'2026-10-17T02:08:57'}]},first);assert.deepEqual(next.followerHistory.map(p=>p.count),[4640,4639]);assert.equal(next.trackedPosts.length,1);});
test('migrates only actual follower total, never gross daily growth',()=>{const s=normalizeStats(profile,{checkedAt:'2026-10-15T00:00:00Z',followers:4630,growth:[{date:'2026-10-14',count:50}]});assert.deepEqual(s.followerHistory.map(p=>p.count),[4630,4640]);});
test('rejects partial, older and invalid responses',()=>{assert.throws(()=>normalizeStats({...profile,partial:true}));assert.throws(()=>normalizeStats(profile,{checkedAt:'2027-01-01'}));assert.throws(()=>normalizeStats({...profile,data:[{...profile.data[0],followers_count:-1}]}));});

test('preserves daily new-follow history beyond a rolling response, including real zeros and source revisions',()=>{
 const previous=[{date:'2026-08-01',count:8},{date:'2026-09-20',count:4}];
 const gains=normalizeFollowerGains({data:[{date:'2026-09-20',follower_count_1d:5},{date:'2026-09-21',follower_count_1d:0}]},previous,'2026-10-17');
 assert.deepEqual(gains,[previous[0],{date:'2026-09-20',count:5},{date:'2026-09-21',count:0}]);
 const result=normalizeStats(profile,{followerGains:gains});assert.deepEqual(result.followerGains,gains);assert.deepEqual(result.followerHistory.map(p=>p.count),[4640]);
});
test('rejects partial, duplicate, impossible-date, missing, negative and current-day new-follow records',()=>{
 const row={date:'2026-10-16',follower_count_1d:3};
 for(const payload of [{partial:true,data:[row]},{data:[row,row]},{data:[{...row,date:'2026-02-30'}]},{data:[{date:row.date}]},{data:[{...row,follower_count_1d:-1}]},{data:[{...row,date:'2026-10-17'}]}])assert.throws(()=>normalizeFollowerGains(payload,[],'2026-10-17'));
});

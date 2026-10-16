import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeStats} from './instagram-stats-sync.mjs';
const profile={status:'done',data:[{username:'mcgowen_media',followers_count:4640,media_count:549,data_fetched_at:'2026-10-16T02:08:57'}]};
test('preserves verified total snapshots and posts across rolling feeds',()=>{const first=normalizeStats(profile,{}, {posts:[{id:'1',timestamp:'2026-09-01',caption:'concert',permalink:'x'}]});const next=normalizeStats({...profile,data:[{...profile.data[0],followers_count:4639,data_fetched_at:'2026-10-17T02:08:57'}]},first);assert.deepEqual(next.followerHistory.map(p=>p.count),[4640,4639]);assert.equal(next.trackedPosts.length,1);});
test('migrates only actual follower total, never gross daily growth',()=>{const s=normalizeStats(profile,{checkedAt:'2026-10-15T00:00:00Z',followers:4630,growth:[{date:'2026-10-14',count:50}]});assert.deepEqual(s.followerHistory.map(p=>p.count),[4630,4640]);});
test('rejects partial, older and invalid responses',()=>{assert.throws(()=>normalizeStats({...profile,partial:true}));assert.throws(()=>normalizeStats(profile,{checkedAt:'2027-01-01'}));assert.throws(()=>normalizeStats({...profile,data:[{...profile.data[0],followers_count:-1}]}));});

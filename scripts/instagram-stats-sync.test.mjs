import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeStats} from './instagram-stats-sync.mjs';
const profile={status:'done',data:[{username:'mcgowen_media',followers_count:4640,media_count:549,data_fetched_at:'2026-10-16T02:08:57'}]};
const growth={status:'done',data:[{date:'2026-10-15',follower_count_1d:0,data_fetched_at:'2026-10-16T02:08:57'}]};
test('keeps zero follows and unavailable collaboration totals distinct',()=>{const s=normalizeStats(profile,growth);assert.equal(s.followers,4640);assert.equal(s.collabs,null);assert.equal(s.growth[0].count,0);assert.equal(s.checkedAt,'2026-10-16T02:08:57.000Z');});
test('rejects partial, duplicate, wrong-account and invalid counts',()=>{assert.throws(()=>normalizeStats(profile,{...growth,partial:true}));assert.throws(()=>normalizeStats(profile,{...growth,data:[...growth.data,...growth.data]}));assert.throws(()=>normalizeStats({...profile,data:[{...profile.data[0],username:'other'}]},growth));assert.throws(()=>normalizeStats(profile,{...growth,data:[{...growth.data[0],follower_count_1d:-1}]}));});

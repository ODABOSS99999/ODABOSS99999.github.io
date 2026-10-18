import {expect,it} from 'vitest';
import {mergeFollowerHistory,combinedFollowerHistory} from './followerHistory';
it('retains dated observations, lets current source win, and excludes invalid or future totals',()=>{
 expect(mergeFollowerHistory('2026-10-18',[
  {date:'2026-10-16',count:4640},{date:'2026-10-18',count:4642},
  {date:'2026-10-19',count:4643},{date:'invalid',count:2},{date:'2026-10-17',count:-1},
 ],[{date:'2026-10-18T00:00:00Z',count:4641}])).toEqual([
  {date:'2026-10-16T00:00:00.000Z',count:4640},{date:'2026-10-18T00:00:00.000Z',count:4641},
 ]);
});

it('combines export and live observations without relabeling export records as historical totals',()=>{
 expect(combinedFollowerHistory('2026-10-18',[
  {date:'2025-10-01',count:174},{date:'2026-10-16',count:4057},
 ],[{date:'2026-10-16',count:4642},{date:'2026-10-18',count:4643}],'2026-10-18')).toEqual([
  {date:'2025-10-01',count:174,source:'export'},
  {date:'2026-10-16T00:00:00.000Z',count:4642,source:'total'},
  {date:'2026-10-18T00:00:00.000Z',count:4643,source:'live'},
 ]);
});

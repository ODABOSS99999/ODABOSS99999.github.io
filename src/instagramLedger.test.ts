import {describe,it,expect} from 'vitest';
import {classifyPartnership,cumulativePosts,monthlyPosts,isFollowerRating} from './instagramLedger';
import {partnershipReviews} from './instagramPartnershipReviews';
import archive from '../public/instagram/stats.json';

describe('partnership ledger',()=>{
 it('recognizes follower rating series without excluding requests to rate the owner photos',()=>{
  expect(archive.trackedPosts.filter(isFollowerRating)).toHaveLength(45);
  for(const caption of ['Rating my followers’ photography pt. 2','Rating @pixels_by_yushi’s photography — Part 33.','Rating pra_ik03’s photography — Part 32.'])expect(isFollowerRating({caption})).toBe(true);
  for(const caption of ['Rate my photography in the comments!','Am i overrated?','Concert photography'])expect(isFollowerRating({caption})).toBe(false);
 });
 it('shows quiet months and deduplicates across the entire monthly archive',()=>{expect(monthlyPosts([{id:'1',timestamp:'2024-12-05'},{id:'1',timestamp:'2024-12-05'},{id:'2',timestamp:'2025-02-12'}],'2025-03-16')).toEqual([{date:'2024-12-01',count:1},{date:'2025-01-01',count:0},{date:'2025-02-01',count:1},{date:'2025-03-01',count:0}]);});
 it('preserves the reviewed archive and lets future posts fall back to caption inference',()=>{expect(Object.keys(partnershipReviews)).toHaveLength(archive.trackedPosts.length);for(const post of archive.trackedPosts){expect(partnershipReviews[post.id]).toBeDefined();expect(['partnership','personal']).toContain(classifyPartnership(post).kind);expect(partnershipReviews[post.id].reason.length).toBeGreaterThan(20);};expect(classifyPartnership({id:'18117687656072162',caption:'Sneak peek'}).kind).toBe('partnership');expect(classifyPartnership({id:'18167362216421122',caption:'soon. #glaive #dallas'}).kind).toBe('partnership');expect(classifyPartnership({id:'18071722394788964',caption:'Ella Boh'}).kind).toBe('partnership');expect(classifyPartnership({id:'18140485618621399',caption:'Ella Boh'}).kind).toBe('partnership');expect(classifyPartnership({id:'18027964538698670',caption:'🐿️ still editing glaive'}).kind).toBe('partnership');expect(classifyPartnership({id:'future',caption:'Product photography'}).kind).toBe('partnership');});
 it('applies owner exclusions before product/organization rules',()=>{for(const caption of ['Waterway car photography','Market Street car photography','Noob vs Pro with friends'])expect(classifyPartnership({caption}).kind).toBe('personal');for(const caption of ['Airforce photos','US Air Force','Concert photography','Product photography'])expect(classifyPartnership({caption}).kind).toBe('partnership');});
 it('includes uncertain posts by owner preference without claiming confirmed partnership',()=>{const result=classifyPartnership({caption:'new post'});expect(result.kind).toBe('partnership');expect(result.reason).toContain('owner preference');});
 it('sorts dated posts, merges days, and ignores duplicates',()=>{expect(cumulativePosts([{id:'2',timestamp:'2026-02-02T00:00:00Z'},{id:'1',timestamp:'2026-02-01T00:00:00Z'},{id:'2',timestamp:'2026-02-02T00:00:00Z'},{id:'3',timestamp:'2026-02-02T12:00:00Z'}])).toEqual([{date:'2026-02-01',count:1},{date:'2026-02-02',count:3}]);});
});


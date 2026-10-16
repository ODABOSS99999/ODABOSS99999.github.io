import {describe,it,expect} from 'vitest';
import {classifyPartnership,cumulativePosts} from './instagramLedger';
import {partnershipReviews} from './instagramPartnershipReviews';

describe('partnership ledger',()=>{
 it('preserves the reviewed archive and lets future posts fall back to caption inference',()=>{expect(Object.keys(partnershipReviews)).toHaveLength(50);expect(classifyPartnership({id:'18117687656072162',caption:'Sneak peek'}).kind).toBe('partnership');expect(classifyPartnership({id:'future',caption:'Product photography'}).kind).toBe('partnership');});
 it('applies owner exclusions before product/organization rules',()=>{for(const caption of ['Waterway car photography','Market Street car photography','Noob vs Pro with friends'])expect(classifyPartnership({caption}).kind).toBe('personal');for(const caption of ['Airforce photos','US Air Force','Concert photography','Product photography'])expect(classifyPartnership({caption}).kind).toBe('partnership');});
 it('leaves unsupported subjects unreviewed',()=>expect(classifyPartnership({caption:'new post'}).kind).toBe('unreviewed'));
 it('sorts dated posts, merges days, and ignores duplicates',()=>{expect(cumulativePosts([{id:'2',timestamp:'2026-02-02T00:00:00Z'},{id:'1',timestamp:'2026-02-01T00:00:00Z'},{id:'2',timestamp:'2026-02-02T00:00:00Z'},{id:'3',timestamp:'2026-02-02T12:00:00Z'}])).toEqual([{date:'2026-02-01',count:1},{date:'2026-02-02',count:3}]);});
});


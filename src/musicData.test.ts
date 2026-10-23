import {describe,expect,it} from 'vitest';
import {musicFeedEndpoint,parseMusicFeed,publishMusicAlbums,musicAlbums,subscribeMusicAlbums} from './musicData';
const now=Date.now();
const row={id:'abc',title:'Song',artist:'Artist',album:'Album',cover:'https://i.scdn.co/image/abc',url:'https://open.spotify.com/track/abc',playedAt:new Date(now-1000).toISOString()};
const feed=()=>({source:'spotify',fetchedAt:new Date(now).toISOString(),albums:[{...row,title:'Album',url:'https://open.spotify.com/album/abc'}],recentTracks:[row],topTracks:[row],topArtists:[{name:'Artist',url:'https://open.spotify.com/artist/abc',image:row.cover}]});
describe('Spotify feed',()=>{
  it('maps verified data and retains listening timestamps',()=>{const result=parseMusicFeed(feed(),now);expect(result.albums[0].title).toBe('Album');expect(result.recentTracks[0].playedAt).toBe(row.playedAt);expect(result.topArtists[0].name).toBe('Artist');expect(result.period).toBe('Last 4 weeks');});
  it('rejects stale, future, malformed and incorrect-source snapshots',()=>{for(const patch of [{source:'airbuds'},{fetchedAt:new Date(now-120001).toISOString()},{fetchedAt:new Date(now+30001).toISOString()},{topTracks:null}])expect(()=>parseMusicFeed({...feed(),...patch},now)).toThrow();});
  it('drops unsafe links and artwork without inventing data',()=>{const result=parseMusicFeed({...feed(),topTracks:[{...row,url:'https://open.spotify.com.evil.test/track/abc'}],albums:[{...row,url:'https://open.spotify.com/album/abc',cover:'https://evil.test/cover.jpg'}],recentTracks:[{...row,playedAt:'invalid'}]},now);expect(result.topTracks).toEqual([]);expect(result.albums[0].cover).toBeUndefined();expect(result.recentTracks).toEqual([]);});
  it('never defaults a production client to a local endpoint',()=>{expect(musicFeedEndpoint(undefined,false)).toBeNull();expect(musicFeedEndpoint(undefined,true)).toBe('http://127.0.0.1:8765/music');expect(musicFeedEndpoint('http://127.0.0.1:8765/music',false)).toBeNull();expect(musicFeedEndpoint('https://feed.example/music?token=secret',false)).toBeNull();});
  it('notifies the room when albums change and supports disposal',()=>{let calls=0;const dispose=subscribeMusicAlbums(()=>calls++);publishMusicAlbums(parseMusicFeed(feed(),now).albums);expect(musicAlbums).toHaveLength(1);expect(calls).toBe(1);dispose();publishMusicAlbums([]);expect(calls).toBe(1);});
});


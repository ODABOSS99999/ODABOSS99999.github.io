async(page)=>{
 const assert=(v,m)=>{if(!v)throw new Error(m);};
 await page.addInitScript(()=>{
   const NativeAudioContext=window.AudioContext;
   window.__qaAudio=[];
   window.AudioContext=class extends NativeAudioContext{constructor(...args){super(...args);window.__qaAudio.push(this);}};
 });
 await page.goto('http://127.0.0.1:5173/');
 assert(await page.evaluate(()=>window.__qaAudio.length)===0,'Audio initialized without consent');
 await page.getByRole('button',{name:'Room settings',exact:true}).click();
 await page.getByRole('slider',{name:'Ambient volume'}).fill('0');
 await page.getByRole('button',{name:'Play ambience',exact:true}).click();
 await page.waitForFunction(()=>window.__qaAudio[0]?.state==='running');
 await page.getByRole('button',{name:'Mute ambience',exact:true}).click();
 await page.waitForFunction(()=>window.__qaAudio[0]?.state==='suspended');
 for(let i=0;i<3;i++){
   await page.getByRole('button',{name:'Play ambience',exact:true}).click();
   await page.getByRole('button',{name:'Mute ambience',exact:true}).click();
 }
 await page.waitForFunction(()=>window.__qaAudio[0]?.state==='suspended');
 assert(await page.evaluate(()=>window.__qaAudio.length)===1,'Duplicate audio contexts');
 return {initialAudioContexts:0,explicitPlay:'real AudioContext running',mute:'real AudioContext suspended',rapidToggle:'3 cycles passed',audioContexts:1,volume:'0 during browser QA; no audible test playback'};
}

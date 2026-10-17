async(page)=>{
 const assert=(v,m)=>{if(!v)throw new Error(m);};
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5174/');
 await page.getByRole('region',{name:'Hand illustrated room from a reading chair'}).waitFor();
 await page.waitForSelector('.seated-canvas canvas');
 await page.getByRole('button',{name:'Index',exact:true}).click();
 await page.getByRole('navigation',{name:'Library index'}).getByRole('link',{name:/Photography/}).click();
 const latest=page.getByRole('region',{name:'Latest Instagram post'});
 await latest.getByRole('img').waitFor();
 assert(await latest.getByRole('link',{name:'View post on Instagram'}).getAttribute('href')==='https://www.instagram.com/p/DehAOwevgm4/','Latest post mismatch');
 assert(await latest.getByRole('img').evaluate(el=>el.complete&&el.naturalWidth>0),'Actual Instagram image failed');
 await page.getByRole('link',{name:'Return to library',exact:true}).click();
 const matrix=[];
 for(const width of [360,390,768,1440,1920]){
   await page.setViewportSize({width,height:width<600?844:1080});
   for(const mode of ['Daylight','Lamplight','Darkroom']){
     await page.getByRole('button',{name:'Room settings',exact:true}).click();
     await page.getByRole('button',{name:mode,exact:true}).click();
     await page.getByRole('button',{name:'Room settings',exact:true}).click();
     await page.waitForTimeout(850);
     assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width}/${mode}`);
     if([390,1440].includes(width))await page.screenshot({path:`output/playwright/current-${width}-${mode.toLowerCase()}.png`,fullPage:true});
     matrix.push({width,mode,overflow:false});
   }
 }
 await page.setViewportSize({width:1440,height:1080});
 for(const name of ['Photography','About Me','Published Work','Engineering Projects','Contact']){
   await page.getByRole('button',{name:'Index',exact:true}).click();
   await page.getByRole('navigation',{name:'Library index'}).getByRole('link',{name:new RegExp(name)}).click();
   await page.getByRole('heading',{level:1,name:new RegExp('^'+name)}).waitFor();
   await page.getByRole('link',{name:'Return to library',exact:true}).click();
   await page.getByRole('region',{name:'Hand illustrated room from a reading chair'}).waitFor();
 }
 await page.getByRole('button',{name:'Index',exact:true}).click();
 await page.getByRole('navigation',{name:'Library index'}).getByRole('link',{name:/Photography/}).click();
 await latest.getByRole('button',{name:/View Instagram photograph/}).click();
 const dialog=page.getByRole('dialog');await dialog.waitFor();
 for(let i=0;i<8;i++){await page.keyboard.press('Tab');assert(await dialog.evaluate(el=>el.contains(document.activeElement)),'Real gallery focus escaped');}
 await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'Room settings',exact:true}).click();
 await page.getByRole('button',{name:'Lamplight',exact:true}).click();
 await page.getByRole('button',{name:'Room settings',exact:true}).click();
 await page.waitForTimeout(900);await page.screenshot({path:'output/playwright/current-preview.png',fullPage:true});
 assert(errors.length===0,`Page errors: ${errors.join('; ')}`);
 return {matrix,routes:6,latestPost:'DehAOwevgm4',realImage:'loaded',gallery:'focus loop and Escape passed',pageErrors:errors};
}

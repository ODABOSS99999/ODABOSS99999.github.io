async(page)=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));const assert=(v,m)=>{if(!v)throw new Error(m)};
 await page.setViewportSize({width:1280,height:720});await page.goto('http://127.0.0.1:5175/');await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(800);
 assert(await page.getByRole('button',{name:'Engineering Projects',exact:true}).count()===1,'Duplicate engineering button');assert(await page.getByRole('button',{name:'Handmade electronic device / Game Boy',exact:true}).count()===0,'Separate device button');
 for(const [x,y] of [[443,340],[509,338]]){await page.mouse.move(x,y);await page.waitForTimeout(100);const first=await page.locator('.seated-tooltip').textContent();assert(first.includes('rocket & Game Boy'),'Different engineering hover');for(let i=0;i<6;i++){await page.waitForTimeout(100);assert(await page.locator('.seated-tooltip').textContent()===first,'Flickering hover');}}
 await page.mouse.move(650,340);await page.waitForTimeout(150);assert(await page.locator('.seated-tooltip').count()===0,'Hover leaking into empty shelf');await page.mouse.move(700,550);await page.screenshot({path:'output/playwright/instagram-room-frames.png'});
 const results=[];
 for(const [id,title] of [['photography','Photography'],['about','About Me'],['published','Published Work'],['engineering','Engineering Projects'],['contact','Contact']]){
  await page.goto(`http://127.0.0.1:5175/${id}`);await page.getByRole('heading',{level:1,name:new RegExp(title)}).waitFor();await page.locator('.gallery img').first().waitFor();await page.locator('.gallery img').first().evaluate(img=>img.decode());
  const images=await page.locator('.gallery img').count();assert(images>0,`No Instagram images in ${id}`);
  const exit=page.getByRole('button',{name:`Exit ${title} and return to library`,exact:true});assert(await exit.isVisible(),`No EXIT in ${id}`);
  if(id==='photography'){
   assert(await page.locator('.photo-metrics').count()>0,'No engagement counts');assert((await page.locator('.photo-metrics').allTextContents()).some(t=>t.includes('700 likes')),'Current known likes missing');
   await page.locator('.gallery button').first().click();const close=page.getByRole('button',{name:'Close photograph viewer',exact:true});assert((await close.textContent()).includes('EXIT'),'Viewer no EXIT');await close.click();
   await page.evaluate(()=>scrollTo(0,innerHeight));const box=await exit.boundingBox();assert(box&&box.y>=0&&box.y<100,'EXIT not sticky');await page.evaluate(()=>scrollTo(0,0));
  }
  await page.screenshot({path:`output/playwright/instagram-section-${id}.png`});results.push({id,images});await exit.click();await page.locator('.seated-canvas canvas').waitFor();
 }
 await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('button',{name:'Exit room settings',exact:true}).click();assert(await page.locator('#room-settings').count()===0,'Settings EXIT');
 await page.getByRole('button',{name:'Index',exact:true}).click();await page.getByRole('button',{name:'Exit library index',exact:true}).click();assert(await page.locator('#library-menu').count()===0,'Index EXIT');
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5175/photography');await page.locator('.gallery img').first().waitFor();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile overflow');await page.screenshot({path:'output/playwright/instagram-portfolio-mobile.png'});
 assert(errors.length===0,errors.join('\n'));return {errors,results,hover:'stable, unified engineering, blank shelf clear',exit:'6 sections + viewer + settings + index',metrics:'700 likes verified in UI'};
}

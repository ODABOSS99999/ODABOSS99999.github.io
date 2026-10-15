async (page)=>{
 const assert=(v,m)=>{if(!v)throw new Error(m);};
 await page.goto('http://127.0.0.1:5173/scripts/fixtures/gallery-harness.html');
 await page.setViewportSize({width:1440,height:1000});
 const origin=page.getByRole('button',{name:'View Landscape test swatch',exact:true});
 await origin.click();
 const dialog=page.getByRole('dialog',{name:'Photograph viewer'});
 await dialog.waitFor();
 assert(await page.evaluate(()=>document.body.style.overflow)==='hidden','Background scroll not locked');
 for(let i=0;i<9;i++){await page.keyboard.press('Tab');assert(await dialog.evaluate(el=>el.contains(document.activeElement)),'Focus escaped native modal');}
 await page.keyboard.press('ArrowRight');
 assert((await dialog.textContent()).includes('2 / 3'),'Arrow next failed');
 const portrait=await dialog.getByRole('img',{name:'Portrait test swatch'}).boundingBox();
 assert(portrait.height/portrait.width===2,'Portrait aspect ratio distorted');
 await page.screenshot({path:'output/playwright/viewer-desktop.png'});
 await page.keyboard.press('ArrowRight');
 await dialog.getByRole('img',{name:'Missing image test — image unavailable'}).waitFor();
 await page.keyboard.press('Escape');
 assert(await page.evaluate(()=>document.body.style.overflow)==='','Scroll lock not released');
 assert(await origin.evaluate(el=>el===document.activeElement),'Thumbnail focus not restored');
 await page.setViewportSize({width:390,height:844});
 await origin.click();
 await dialog.waitFor();
 await page.screenshot({path:'output/playwright/viewer-phone.png'});
 await page.keyboard.press('Escape');
 return {nativeModalFocusTrap:'9 Tab steps passed',keyboard:'arrows/Escape passed',portraitAspectRatio:'2:1 height:width preserved',backgroundScroll:'locked and released',focusRestoration:'passed',missingImage:'passed',viewports:[1440,390],fixture:'synthetic; excluded from production'};
}


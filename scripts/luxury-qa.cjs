async(page)=>{
 const assert=(v,m)=>{if(!v)throw new Error(m)},errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewportSize({width:1280,height:720});await page.goto('http://127.0.0.1:5175/');await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(600);await page.mouse.move(700,500);
 assert(await page.locator('.chair-edge').count()===0,'Corner chair shapes remain');
 assert(await page.locator('.site-header').evaluate(el=>+getComputedStyle(el).opacity)===0,'Header not hidden');assert(await page.locator('.seated-controls').evaluate(el=>+getComputedStyle(el).opacity)===0,'Bottom controls not hidden');
 await page.screenshot({path:'output/playwright/luxury-default.png'});
 await page.locator('.site-header').hover();await page.waitForTimeout(300);assert(await page.locator('.site-header').evaluate(el=>+getComputedStyle(el).opacity)===1,'Header hover');
 await page.mouse.move(700,500);await page.waitForTimeout(300);assert(await page.locator('.site-header').evaluate(el=>+getComputedStyle(el).opacity)===0,'Header did not hide');
 await page.locator('.seated-controls').hover();await page.waitForTimeout(300);assert(await page.locator('.seated-controls').evaluate(el=>+getComputedStyle(el).opacity)===1,'Bottom hover');
 await page.mouse.click(700,550);await page.waitForTimeout(700);assert(await page.locator('.audio-meter').evaluate(el=>el.classList.contains('is-playing')),'Sound failed on first gesture');
 await page.screenshot({path:'output/playwright/luxury-playing.png'});
 // Click the actual camera card and watch the ladder before routing.
 await page.mouse.click(336,250);await page.waitForTimeout(120);assert(new URL(page.url()).pathname==='/','Shelf opened before ladder');assert(await page.locator('.seated-canvas').getAttribute('data-ladder-state')==='moving','Camera did not trigger ladder');await page.screenshot({path:'output/playwright/luxury-ladder-fetch.png'});await page.waitForURL('**/photography');
 await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.locator('.seated-canvas canvas').waitFor();
 for(const [name,route] of [['About Me','about'],['Published Work','published'],['Engineering Projects','engineering'],['Handmade electronic device / Game Boy','engineering']]){
  await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name,exact:true}).click();await page.waitForTimeout(100);assert(new URL(page.url()).pathname==='/','Early shelf route');assert(await page.locator('.seated-canvas').getAttribute('data-ladder-state')==='moving',`No ladder for ${name}`);await page.waitForURL(`**/${route}`);await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.locator('.seated-canvas canvas').waitFor();
 }
 await page.getByRole('button',{name:'Reset room view',exact:true}).click();await page.mouse.move(700,550);await page.waitForTimeout(500);await page.screenshot({path:'output/playwright/luxury-final-desktop.png'});
 for(const width of [390,768]){await page.setViewportSize({width,height:844});await page.waitForTimeout(500);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Overflow');await page.screenshot({path:`output/playwright/luxury-${width}.png`});}
 assert(errors.length===0,errors.join('\n'));console.log(JSON.stringify({errors,hoverControls:'pass',soundDefault:'pass',shelfTravel:'all six items passed',chairShapes:'removed',layouts:'1280,768,390'}));
}

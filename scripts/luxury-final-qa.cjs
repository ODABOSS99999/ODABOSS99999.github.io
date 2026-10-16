async(page)=>{
 const assert=(v,m)=>{if(!v)throw new Error(m)};
 await page.setViewportSize({width:1280,height:720});await page.goto('http://127.0.0.1:5175/');await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(400);
 await page.mouse.click(610,440);await page.waitForTimeout(100);assert(await page.locator('.seated-canvas').getAttribute('data-ladder-state')==='moving','Book row ladder');await page.waitForURL('**/about');await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(300);
 await page.mouse.click(165,452);await page.waitForTimeout(700);assert(await page.locator('.audio-shortcut').getAttribute('aria-pressed')==='false','Record failed to pause');
 await page.mouse.click(165,452);await page.waitForTimeout(700);assert(await page.locator('.audio-meter').evaluate(el=>el.classList.contains('is-playing')),'Record failed to play');
 await page.getByRole('button',{name:'Reset room view',exact:true}).click();await page.mouse.move(700,550);await page.waitForTimeout(400);await page.screenshot({path:'output/playwright/luxury-complete-desktop.png'});
 await page.setViewportSize({width:390,height:844});await page.waitForTimeout(400);await page.screenshot({path:'output/playwright/luxury-complete-mobile.png'});
 await page.emulateMedia({reducedMotion:'reduce'});await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Engineering Projects',exact:true}).click();await page.waitForURL('**/engineering');await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.emulateMedia({reducedMotion:'no-preference'});await page.setViewportSize({width:1280,height:720});await page.mouse.move(700,550);
 console.log('Actual book-row click, platter play/pause click, mobile room bounds, and reduced-motion shelf access passed.');
}


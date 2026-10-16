async (page) => {
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const assert=(v,m)=>{if(!v)throw new Error(m);};
 await page.setViewportSize({width:1280,height:720});await page.goto('http://127.0.0.1:5175/');
 await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(800);
 assert(await page.locator('.library-intro').count()===0,'Title remains');
 assert(await page.locator('.site-name').count()===0,'Brand remains');
 assert(await page.locator('.instagram-feed').count()===0,'Feed remains');
 await page.screenshot({path:'output/playwright/seated-final-desktop.png'});
 // Test the illustrated objects directly in the canvas, not just fallback links.
 await page.mouse.click(336,250);await page.waitForURL('**/photography');
 await page.getByRole('heading',{level:1,name:/Photography/}).waitFor();
 await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(400);
 await page.getByRole('button',{name:'Reset room view',exact:true}).click();
 await page.mouse.click(872,402);await page.waitForTimeout(180);await page.screenshot({path:'output/playwright/seated-phone-pickup.png'});await page.waitForURL('**/contact');
 await page.getByRole('heading',{level:1,name:/Contact/}).waitFor();
 await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(400);
 await page.getByRole('button',{name:'Reset room view',exact:true}).click();
 await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Roll the library ladder',exact:true}).click();
 await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Reset room view',exact:true}).click();await page.waitForTimeout(1800);await page.screenshot({path:'output/playwright/seated-ladder-moved.png'});
 await page.getByRole('button',{name:'Play room ambience',exact:true}).first().click();assert(await page.getByRole('button',{name:'Mute room ambience',exact:true}).first().getAttribute('aria-pressed')==='true','Sound status');await page.waitForTimeout(500);await page.screenshot({path:'output/playwright/seated-sound.png'});await page.getByRole('button',{name:'Mute room ambience',exact:true}).first().click();
 await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Exit the room: open the site index',exact:true}).click();assert(await page.getByRole('navigation',{name:'Library index'}).isVisible(),'EXIT');await page.keyboard.press('Escape');await page.getByRole('button',{name:'Objects',exact:true}).click();
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:width===390?844:900});
  for(const mode of ['Daylight','Lamplight','Darkroom']){
   await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('button',{name:mode,exact:true}).click();await page.keyboard.press('Escape');await page.waitForTimeout(250);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width} ${mode}`);
   assert(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight+1),`Room scroll ${width} ${mode}`);
   await page.screenshot({path:`output/playwright/seated-${width}-${mode.toLowerCase()}.png`});
  }
 }
 await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('button',{name:'Lamplight',exact:true}).click();await page.getByRole('checkbox',{name:'Subtle room movement'}).uncheck();await page.keyboard.press('Escape');
 await page.screenshot({path:'output/playwright/seated-motion-off.png'});await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('checkbox',{name:'Subtle room movement'}).check();await page.keyboard.press('Escape');
 await page.emulateMedia({reducedMotion:'reduce'});await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Contact',exact:true}).click();await page.waitForURL('**/contact');await page.getByRole('link',{name:'Return to library',exact:true}).click();await page.emulateMedia({reducedMotion:'no-preference'});
 assert(errors.length===0,errors.join('\n'));console.log(JSON.stringify({errors,canvasCamera:'passed',canvasPhone:'passed',ladder:'passed',exit:'passed',audio:'passed',layouts:'3 widths x 3 lighting modes',fullScreen:'passed',reducedMotionContact:'passed'}));
}

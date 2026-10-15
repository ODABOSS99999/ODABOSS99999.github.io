async (page) => {
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const assert=(v,m)=>{if(!v)throw new Error(m)};
 await page.goto('http://127.0.0.1:5175/');
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('button',{name:'Roll the library ladder',exact:true}).click();
 await page.waitForTimeout(1700);
 assert(await page.getByRole('button',{name:'Roll the library ladder',exact:true}).getAttribute('aria-pressed')==='true','Ladder did not move');
 await page.getByRole('button',{name:'Roll the library ladder',exact:true}).click();
 await page.getByRole('button',{name:'Look right',exact:true}).click();
 const view=await page.locator('.scene-stage').getAttribute('style');assert(view.includes('5deg'),'View control');
 await page.getByRole('button',{name:'Reset room view',exact:true}).click();
 await page.getByRole('button',{name:'Contact',exact:true}).click();
 await page.waitForURL('**/contact');
 await page.getByRole('heading',{level:1,name:/Contact/}).waitFor();
 await page.getByRole('link',{name:'Return to library',exact:true}).click();
 await page.getByRole('button',{name:'Exit the room: open the site index',exact:true}).click();
 assert(await page.getByRole('navigation',{name:'Library index'}).isVisible(),'Exit index');
 await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'Play room ambience',exact:true}).first().click();
 await page.waitForTimeout(200);
 assert(await page.locator('.audio-meter').evaluate(el=>el.classList.contains('is-playing')),'Sound indicator');
 await page.getByRole('button',{name:'Mute room ambience',exact:true}).first().click();
 for(const width of [390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const mode of ['Daylight','Lamplight','Darkroom']){
   await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('button',{name:mode,exact:true}).click();await page.keyboard.press('Escape');await page.waitForTimeout(850);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width} ${mode}`);
   await page.screenshot({path:`output/playwright/illustrated-${width}-${mode}.png`,fullPage:true});
  }
 }
 await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('checkbox',{name:'Subtle room movement'}).uncheck();await page.keyboard.press('Escape');
 assert(await page.locator('.scene-stage').evaluate(el=>getComputedStyle(el).transform)==='none','Motion switch');
 assert(await page.locator('.phone-receiver').evaluate(el=>getComputedStyle(el).animationName)==='none','Phone movement');
 await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('checkbox',{name:'Subtle room movement'}).check();await page.getByRole('button',{name:'Lamplight',exact:true}).click();await page.keyboard.press('Escape');
 await page.emulateMedia({reducedMotion:'reduce'});
 assert(await page.locator('.scene-stage').evaluate(el=>getComputedStyle(el).transform)==='none','Reduced motion');
 await page.emulateMedia({reducedMotion:'no-preference'});
 console.log(JSON.stringify({errors,layouts:'390,768,1440 x three lighting modes',ladder:'pass',phone:'pass',exit:'pass',audio:'pass',view:'pass',motion:'pass'}));assert(errors.length===0,'Runtime errors');
}

async (page) => {
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  await page.goto('http://127.0.0.1:5174/');
  const results=[];
  for(const width of [360,390,768,1440,1920]){
    await page.setViewportSize({width,height:width<600?844:1080});
    for(const mode of ['Daylight','Lamplight','Darkroom']){
      await page.getByRole('button',{name:'Room settings',exact:true}).click();
      await page.getByRole('button',{name:mode,exact:true}).click();
      await page.getByRole('button',{name:'Room settings',exact:true}).click();
      await page.waitForTimeout(900);
      const dimensions=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,mode:document.querySelector('.app').dataset.lighting,objects:[...document.querySelectorAll('.scene-object')].map(el=>({label:el.getAttribute('aria-label'),width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}))}));
      assert(dimensions.scroll<=width,`Horizontal overflow ${width}/${mode}`);
      assert(dimensions.mode===mode.toLowerCase(),`Wrong lighting ${mode}`);
      assert(dimensions.objects.every(o=>o.width>=44&&o.height>=44),`Small object target ${width}`);
      if([390,768,1440,1920].includes(width))await page.screenshot({path:`output/playwright/${width}-${mode.toLowerCase()}.png`,fullPage:true});
      results.push({width,mode,overflow:false,targets:'>=44px'});
    }
  }
  await page.setViewportSize({width:1440,height:1080});
  for(const [label,id] of [['Photography','photography'],['About Me','about'],['Personal Favorites','favorites'],['Published Work','published'],['Engineering Projects','engineering'],['Contact','contact']]){
    await page.getByRole('button',{name:label,exact:true}).click();
    await page.getByRole('heading',{level:1}).waitFor();
    assert(new URL(page.url()).pathname===`/${id}`,`Wrong route ${id}`);
    await page.getByRole('link',{name:'Return to library',exact:true}).click();
    await page.waitForTimeout(50);
    assert(await page.evaluate(id=>document.activeElement.id===`object-${id}`,id),`Focus not restored ${id}`);
  }
  await page.getByRole('button',{name:'Contact',exact:true}).click();
  await page.screenshot({path:'output/playwright/contact-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'output/playwright/contact-phone.png',fullPage:true});
  assert(await page.getByRole('link',{name:'owenmmcgowan@gmail.com'}).getAttribute('href')==='mailto:owenmmcgowan@gmail.com','Wrong email');
  await page.getByRole('button',{name:'Copy email',exact:false}).click();
  assert((await page.getByRole('status').textContent()).length>0,'Copy status missing');
  await page.goBack();await page.goForward();
  await page.getByRole('heading',{level:1,name:'Contact.'}).waitFor();
  await page.goto('http://127.0.0.1:5174/engineering');
  await page.getByRole('heading',{level:1,name:'Engineering Projects.'}).waitFor();
  await page.goto('http://127.0.0.1:5174/not-a-shelf');
  await page.getByRole('heading',{name:'A little lost?'}).waitFor();
  await page.getByRole('button',{name:'Return to the library'}).click();
  await page.emulateMedia({reducedMotion:'reduce'});
  assert(await page.locator('.room').evaluate(el=>getComputedStyle(el).transform)==='none','Reduced motion room still transformed');
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.setViewportSize({width:720,height:540});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Reflow overflow at 200% equivalent');
  await page.setViewportSize({width:1440,height:1080});
  await page.getByRole('button',{name:'Room settings',exact:true}).click();await page.getByRole('button',{name:'Lamplight',exact:true}).click();await page.getByRole('button',{name:'Room settings',exact:true}).click();
  await page.waitForTimeout(900);await page.screenshot({path:'output/playwright/final-desktop.png',fullPage:true});
  console.log(JSON.stringify({matrix:results,errors,navigation:'6 destinations and EXIT focus passed',history:'back-forward passed',directRoutes:'passed',recovery:'passed',reducedMotion:'passed',reflow:'720px equivalent passed',contact:'passed'},null,2));
  assert(errors.length===0,'Browser errors detected');
}



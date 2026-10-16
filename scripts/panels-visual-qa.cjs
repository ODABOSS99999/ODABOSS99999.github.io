async(page)=>{
 for(const [id,width,height] of [['photography',1280,900],['engineering',1280,900],['photography',390,844]]){
  await page.setViewportSize({width,height});await page.goto(`http://127.0.0.1:5175/${id}`);await page.locator('.gallery img').first().waitFor();await page.waitForFunction(()=>getComputedStyle(document.querySelector('.section-page')).opacity==='1');await page.locator('.gallery img').first().evaluate(img=>img.decode());await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`output/playwright/completed-${id}-${width}.png`});
 }
 await page.setViewportSize({width:1280,height:900});await page.goto('http://127.0.0.1:5175/photography');await page.locator('.gallery img').first().waitFor();await page.waitForTimeout(600);await page.locator('.gallery button').first().click();await page.screenshot({path:'output/playwright/completed-viewer-exit.png'});await page.getByRole('button',{name:'Close photograph viewer',exact:true}).click();
 return {articleOpacity:await page.locator('.section-page').evaluate(el=>getComputedStyle(el).opacity),exit:await page.getByRole('button',{name:'Exit Photography and return to library',exact:true}).isVisible()};
}

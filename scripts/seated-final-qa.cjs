async (page)=>{
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5175/');await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(600);await page.screenshot({path:'output/playwright/seated-mobile-final.png'});
 await page.getByRole('button',{name:'Objects',exact:true}).click();await page.getByRole('button',{name:'Contact',exact:true}).focus();await page.keyboard.press('Escape');if(!(await page.getByRole('button',{name:'Objects',exact:true}).evaluate(el=>el===document.activeElement)))throw new Error('Escape focus');
 await page.setViewportSize({width:1280,height:720});await page.reload();await page.locator('.seated-canvas canvas').waitFor();await page.waitForTimeout(600);await page.mouse.move(640,600);await page.mouse.down();await page.mouse.move(770,625,{steps:8});await page.mouse.up();await page.screenshot({path:'output/playwright/seated-look-right.png'});await page.getByRole('button',{name:'Reset room view',exact:true}).click();await page.screenshot({path:'output/playwright/seated-final.png'});
 console.log('Mobile framing, camera drag/reset, and Escape focus passed.');
}

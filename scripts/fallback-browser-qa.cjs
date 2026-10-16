async(page)=>{
 await page.addInitScript(()=>{Object.defineProperty(window,'WebGLRenderingContext',{value:undefined,configurable:true});});
 await page.goto('http://127.0.0.1:5174/');
 await page.getByText('The illustrated room is unavailable. Use the object list to explore.').waitFor();
 const contact=page.getByRole('button',{name:'Contact',exact:true});
 await contact.click();await page.getByRole('link',{name:'owenmmcgowan@gmail.com'}).waitFor();
 await page.getByRole('link',{name:'Return to library',exact:true}).click();
 await page.waitForFunction(()=>document.activeElement.id==='object-contact');
 await page.screenshot({path:'output/playwright/webgl-fallback.png',fullPage:true});
 return {webglUnavailable:'visible fallback object list',contact:'functional',returnFocus:'restored'};
}

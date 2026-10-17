// Run with Playwright CLI against an already open local or deployed site.
async page => {
 const origin=new URL(page.url()).origin;
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.setViewportSize({width:390,height:844});
 await page.goto(origin+'/');await page.locator('canvas').waitFor();
 for(let visit=0;visit<3;visit++){
  await page.getByRole('button',{name:'Objects',exact:true}).click();
  await page.getByRole('button',{name:'Contact',exact:true}).click();
  await page.waitForURL('**/contact');
  await page.getByRole('button',{name:'Exit Contact and return to library'}).click();
  await page.waitForURL(origin+'/');
 }
 return {phoneVisits:3,returnedToRoom:true};
}

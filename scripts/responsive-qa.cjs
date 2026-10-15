async (page) => {
 const failures=[];
 const sizes=[[280,653],[320,568],[390,844],[540,720],[541,720],[768,1024],[800,600],[801,600],[1024,768],[1440,900],[2560,1440],[3840,2160],[844,390]];
 for(const [width,height] of sizes){
  await page.setViewportSize({width,height});
  for(const route of ['/','/photography','/about','/favorites','/published','/engineering','/contact']){
   await page.goto('http://127.0.0.1:5173'+route);await page.getByRole('heading',{level:1}).waitFor();
   const issues=await page.evaluate(()=>{const w=innerWidth;return [...document.querySelectorAll('h1,.email-link,.object-label,.wordmark,.header-controls')].filter(el=>{const r=el.getBoundingClientRect();return r.width&& (r.left< -1||r.right>w+1||el.scrollWidth>el.clientWidth+2)}).map(el=>el.className||el.tagName)});
   if(issues.length)failures.push({width,height,route,issues});
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))failures.push({width,route,overflow:true});
  }
  await page.getByRole('button',{name:'Index',exact:true}).click();
  const fits=await page.locator('.menu-panel').evaluate(el=>{const r=el.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.bottom<=innerHeight&&el.scrollHeight>=el.clientHeight});
  if(!fits)failures.push({width,height,menu:'out of bounds'});
 }
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5173/');await page.screenshot({path:'output/playwright/responsive-phone.png',fullPage:true});
 return {viewports:sizes.length,routes:7,failures};
}



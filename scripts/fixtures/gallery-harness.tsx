// Local QA fixture only. This output directory is ignored and excluded from dist.
import ReactDOM from 'react-dom/client';
import Gallery from '/src/Gallery';
import '/src/style.css';
const swatch=(width:number,height:number,color:string)=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/></svg>`)}`;
ReactDOM.createRoot(document.getElementById('fixture')!).render(<main style={{padding:'30px'}}><h1>Local gallery verification fixture</h1><button id="outside">Outside dialog</button><Gallery items={[
 {id:'landscape',src:swatch(800,400,'#6b6b6b'),width:800,height:400,alt:'Landscape test swatch',caption:'Synthetic local test fixture'},
 {id:'portrait',src:swatch(400,800,'#b0b0b0'),width:400,height:800,alt:'Portrait test swatch',caption:'Synthetic local test fixture'},
 {id:'missing',src:'/output/playwright/absent-test-image.jpg',width:400,height:400,alt:'Missing image test'},
]}/></main>);

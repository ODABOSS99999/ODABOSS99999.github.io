import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function MinecraftSkin({ skin, slim, cape }: { skin: string; slim: boolean; cape?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const rotation = useRef(-0.4);
  const [angle, setAngle] = useState(337);
  const [failed, setFailed] = useState(false);
  const renderScene = useRef<() => void>(() => {});
  const drag = useRef<{ x: number; angle: number } | null>(null);
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
    catch { setFailed(true); return; }
    setFailed(false);
    let disposed = false;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
    camera.position.set(0, 17, 65); camera.lookAt(0, 16, 0);
    const player = new THREE.Group(); scene.add(player);
    const resources: (THREE.Texture | THREE.Material | THREE.BufferGeometry)[] = [];
    const draw = () => { player.rotation.y = rotation.current; renderer.render(scene, camera); };
    renderScene.current = draw;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.append(renderer.domElement);
    const resize = () => { const w = container.clientWidth, h = container.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); draw(); };
    const observer = new ResizeObserver(resize); observer.observe(container); resize();
    // Minecraft's unfolded cuboids: right, left, top, bottom, front, back.
    function box(image: HTMLImageElement, u: number, v: number, w: number, h: number, d: number, x: number, y: number, z = 0, expand = 0) {
      const faces = [[u+d+w,v+d,d,h],[u,v+d,d,h],[u+d,v,w,d],[u+d+w,v,w,d],[u+d,v+d,w,h],[u+2*d+w,v+d,w,h]];
      const materials = faces.map(([sx,sy,sw,sh], i) => {
        const canvas = document.createElement('canvas'); canvas.width = sw; canvas.height = sh;
        const ctx = canvas.getContext('2d')!;
        if (i === 3) { ctx.translate(sw, sh); ctx.scale(-1, -1); }
        ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
        const texture = new THREE.CanvasTexture(canvas); texture.magFilter = THREE.NearestFilter; texture.minFilter = THREE.NearestFilter; texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, alphaTest: 0.1 }); resources.push(texture, material); return material;
      });
      const geometry = new THREE.BoxGeometry(w+expand, h+expand, d+expand); resources.push(geometry);
      const mesh = new THREE.Mesh(geometry, materials); mesh.position.set(x,y,z); player.add(mesh);
    }
    const image = new Image();
    image.onload = () => {
      if (disposed) return;
      const arm = slim ? 3 : 4;
      box(image,0,0,8,8,8,0,28); box(image,32,0,8,8,8,0,28,0,0.5);
      box(image,16,16,8,12,4,0,18); box(image,16,32,8,12,4,0,18,0,0.5);
      box(image,40,16,arm,12,4,-4-arm/2,18); box(image,40,32,arm,12,4,-4-arm/2,18,0,0.5);
      box(image,0,16,4,12,4,-2,6); box(image,0,32,4,12,4,-2,6,0,0.5);
      if (image.height === 64) {
        box(image,32,48,arm,12,4,4+arm/2,18); box(image,48,48,arm,12,4,4+arm/2,18,0,0.5);
        box(image,16,48,4,12,4,2,6); box(image,0,48,4,12,4,2,6,0,0.5);
      } else { box(image,40,16,arm,12,4,4+arm/2,18); box(image,0,16,4,12,4,2,6); }
      draw();
    };
    image.onerror = () => { if (!disposed) setFailed(true); }; image.src = skin;
    if (cape) {
      const capeImage = new Image(); capeImage.onload = () => { if (!disposed) { box(capeImage,0,0,10,16,1,0,15,-3); draw(); } }; capeImage.src = cape;
    }
    return () => { disposed = true; observer.disconnect(); renderScene.current = () => {}; resources.forEach(r => r.dispose()); renderer.dispose(); renderer.domElement.remove(); };
  }, [skin, slim, cape]);
  function turn(amount: number) { rotation.current += amount; setAngle(Math.round((rotation.current * 180 / Math.PI % 360 + 360) % 360)); renderScene.current(); }
  return <div className="mc-model-wrap">
    <div ref={host} className="mc-model" role="img" aria-label="ODABOSS’s 3D skin" />
    {failed && <p role="status">3D preview unavailable</p>}
    <div className="mc-rotation" role="group" aria-label="Rotate skin">
      <button className="mc-action" aria-label="Rotate skin left" onClick={() => turn(-Math.PI / 4)}>↶</button>
      <div className="mc-drag" role="slider" aria-label="Skin rotation" aria-valuemin={0} aria-valuemax={360} aria-valuenow={angle} tabIndex={0}
        onKeyDown={e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); turn(e.key === 'ArrowLeft' ? -Math.PI/8 : Math.PI/8); } }}
        onPointerDown={e => { drag.current = { x: e.clientX, angle: rotation.current }; e.currentTarget.setPointerCapture(e.pointerId); }}
        onPointerMove={e => { if (drag.current) { rotation.current = drag.current.angle + (e.clientX - drag.current.x) / 70; setAngle(Math.round((rotation.current * 180 / Math.PI % 360 + 360) % 360)); renderScene.current(); } }}
        onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}><span className="sr-only">Drag to rotate</span></div>
      <button className="mc-action" aria-label="Rotate skin right" onClick={() => turn(Math.PI / 4)}>↷</button>
    </div>
  </div>;
}

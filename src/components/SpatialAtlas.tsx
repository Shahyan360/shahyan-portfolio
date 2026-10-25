'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
const positions = [[-2, .5, 0], [0, 1.8, -.5], [2, .3, 0], [0, -1.6, .5]];
export default function SpatialAtlas({ selected }: { selected: number }) {
  const host = useRef<HTMLDivElement>(null);
  const selection = useRef(selected);
  const requestDraw = useRef<() => void>(() => {});
  useEffect(() => { selection.current = selected; requestDraw.current(); }, [selected]);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { setFailed(true); return; }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, .1, 50); camera.position.set(0, 1, 9);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); el.appendChild(renderer.domElement);
    const group = new THREE.Group(); scene.add(group);
    const coreGeometry = new THREE.IcosahedronGeometry(.9, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({ color: 0xc6cbb7, metalness: .55, roughness: .3, flatShading: true });
    const core = new THREE.Mesh(coreGeometry, coreMaterial); group.add(core);
    const nodes = positions.map(p => {
      const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(.24), new THREE.MeshStandardMaterial({ color: 0xaaa99e, metalness: .4, roughness: .35 }));
      mesh.position.set(...p as [number, number, number]); group.add(mesh);
      const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), mesh.position]);
      group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x666d5e, transparent: true, opacity: .7 })));
      return mesh;
    });
    for (let i = 0; i < 3; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(2.5, .008, 4, 100), new THREE.MeshBasicMaterial({ color: 0x69735f, transparent: true, opacity: .45 })); ring.rotation.set(i * Math.PI / 3, .4, i * .3); group.add(ring); }
    scene.add(new THREE.AmbientLight(0xffffff, 2));
    const light = new THREE.DirectionalLight(0xf3ead3, 4); light.position.set(3, 4, 5); scene.add(light);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)'); let frame = 0; let visible = true; let pointerX = 0; let pointerY = 0;
    const draw = () => {
      frame = 0; if (!visible || document.hidden) return;
      group.rotation.y += (pointerX * .3 - group.rotation.y) * .04; group.rotation.x += (pointerY * .16 - group.rotation.x) * .04;
      if (!reduced.matches && !document.body.classList.contains('quick-view')) core.rotation.y += .003;
      nodes.forEach((node, i) => (node.material as THREE.MeshStandardMaterial).color.setHex(i === selection.current ? 0xf07855 : 0xaaa99e));
      renderer.render(scene, camera); if (!reduced.matches && !document.body.classList.contains('quick-view')) frame = requestAnimationFrame(draw);
    };
    requestDraw.current = () => { if (!frame) draw(); };
    const resize = new ResizeObserver(() => { camera.aspect = el.clientWidth / Math.max(el.clientHeight, 1); camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth, el.clientHeight); }); resize.observe(el);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible && !frame) draw(); else if (!visible) { cancelAnimationFrame(frame); frame = 0; } }); observer.observe(el);
    const move = (e: PointerEvent) => { if (reduced.matches) return; const r = el.getBoundingClientRect(); pointerX = (e.clientX-r.left)/r.width-.5; pointerY = (e.clientY-r.top)/r.height-.5; };
    const visibility = () => { if (!document.hidden && !frame) draw(); };
    el.addEventListener('pointermove', move, { passive: true }); document.addEventListener('visibilitychange', visibility); draw();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); el.removeEventListener('pointermove', move); document.removeEventListener('visibilitychange', visibility); scene.traverse(obj => { if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) { obj.geometry.dispose(); const materials = Array.isArray(obj.material) ? obj.material : [obj.material]; materials.forEach(m => m.dispose()); } }); renderer.dispose(); renderer.domElement.remove(); };
  }, []);
  return <div className="spatial-atlas" ref={host} aria-hidden="true">{failed && <div className="spatial-fallback">◇<span>Spatial view unavailable. Explore every domain with the controls below.</span></div>}</div>;
}

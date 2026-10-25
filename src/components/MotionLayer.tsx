'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function MotionLayer() {
  const path = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.07 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0; let x = 0; let y = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (!frame) frame = requestAnimationFrame(() => { if (cursor.current) cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`; frame = 0; });
      const target = (e.target as Element).closest('a, button');
      cursor.current?.classList.toggle('is-link', !!target);
    };
    const magnetic = (e: PointerEvent) => {
      const el = (e.target as Element).closest<HTMLElement>('.magnetic');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.translate = `${(e.clientX - rect.x - rect.width / 2) * .12}px ${(e.clientY - rect.y - rect.height / 2) * .12}px`;
    };
    const reset = (e: PointerEvent) => { const el = (e.target as Element).closest<HTMLElement>('.magnetic'); if (el) el.style.translate = '0px 0px'; };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointermove', magnetic, { passive: true });
    document.addEventListener('pointerout', reset, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', move); document.removeEventListener('pointermove', magnetic); document.removeEventListener('pointerout', reset); };
  }, []);
  return <div className="cursor-ring" ref={cursor} aria-hidden="true" />;
}

'use client';
import Link from '@/components/SiteLink';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from './Arrow';
import { profile } from '@/content/profile';

const links = [['Work', '/work/'], ['Experience', '/experience/'], ['About', '/about/'], ['Playground', '/playground/']];
export function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [quick, setQuick] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let mode = false;
    try { mode = localStorage.getItem('shahyan-mode-v1') === 'quick'; } catch { /* Storage is optional. */ }
    if (new URLSearchParams(window.location.search).get('view') === 'quick') mode = true;
    setQuick(mode); document.body.classList.toggle('quick-view', mode);
  }, []);
  useEffect(() => { setMenu(false); }, [path]);
  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);
  function toggleQuick() {
    const next = !quick; setQuick(next); document.body.classList.toggle('quick-view', next);
    try { localStorage.setItem('shahyan-mode-v1', next ? 'quick' : 'explore'); } catch { /* Optional preference. */ }
  }
  return <header className="site-header">
    <Link href="/" className="wordmark">shahyan<span className="brand-dot">.</span><span className="wordmark-caption">SENIOR ODOO DEVELOPER</span><span className="sr-only"> — Home</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([name, href]) => <Link key={href} href={href} aria-current={path.startsWith(href) ? 'page' : undefined}>{name}</Link>)}</nav>
    <div className="header-actions"><button className="mode-toggle" aria-pressed={quick} onClick={toggleQuick}><span className="mode-icon" aria-hidden="true">{quick ? '◉' : '◫'}</span> {quick ? 'Explore mode' : 'Quick view'}</button><Link className="header-contact" href="/contact/">Let’s talk <Arrow diagonal /></Link><button ref={menuButton} className="menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? 'Close −' : 'Menu +'}</button></div>
    {menu && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{[...links, ['Contact', '/contact/']].map(([name, href], i) => <Link href={href} key={href}><span>0{i + 1}</span>{name}<Arrow diagonal /></Link>)}</nav>}
  </header>;
}

export function ContactFinale() {
  return <section className="contact-finale section-wrap" aria-labelledby="finale-title"><div className="eyebrow"><span className="tiny-star">✳</span> THE NEXT CONNECTION</div><div className="finale-row"><h2 id="finale-title">Good things start<br />with a <em>conversation.</em></h2><Link className="round-cta magnetic" href="/contact/" aria-label="Start a conversation"><Arrow diagonal /></Link></div><div className="finale-bottom"><a href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><span>Based in Lahore. Connected globally.</span></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><Link className="wordmark" href="/">shahyan<span className="brand-dot">.</span></Link><span>Thoughtfully engineered. © {new Date().getFullYear()}</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="#top">Back to top ↑</a></div></footer>;
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from './Arrow';
export default function LiveProject({ name, url, website = false }: { name: string; url: string; website?: boolean }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const expandButton = useRef<HTMLButtonElement>(null);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!expanded) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setExpanded(false); expandButton.current?.focus(); } };
    const trap = (e: FocusEvent) => { if (section.current && !section.current.contains(e.target as Node)) expandButton.current?.focus(); };
    const prior = document.body.style.overflow; document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    document.addEventListener('focusin', trap);
    expandButton.current?.focus();
    return () => { window.removeEventListener('keydown', key); document.removeEventListener('focusin', trap); document.body.style.overflow = prior; };
  }, [expanded]);
  return <section ref={section} className={`live-project ${expanded ? 'expanded' : ''}`} role={expanded ? 'dialog' : 'region'} aria-modal={expanded ? true : undefined} aria-label={`${name} interactive website`}>
    <div className="live-project-toolbar"><div><span className="status-dot" /><strong>{name}</strong><span className="live-address">{new URL(url).hostname}</span></div><div><button className="text-link" onClick={() => { setActive(true); setLoaded(false); const frame = document.getElementById(`live-${name}`) as HTMLIFrameElement | null; if (frame) frame.src = url; }}>Reload ↻</button><button ref={expandButton} className="text-link" onClick={() => setExpanded(!expanded)} aria-pressed={expanded}>{expanded ? 'Collapse ↙' : 'Expand ↗'}</button><a className="live-external" href={url} target="_blank" rel="noreferrer">Open externally <Arrow diagonal /></a></div></div>
    <div className="live-viewport">{active ? <><iframe id={`live-${name}`} src={url} title={`${name} — interactive ${website ? 'website' : 'demo'}`} loading="lazy" allow="clipboard-write" onLoad={() => setLoaded(true)} referrerPolicy="strict-origin-when-cross-origin" />{!loaded && <div className="embed-loading" role="status">Connecting to {name}…</div>}</> : <div className="live-placeholder"><span className="preview-orbit" aria-hidden="true">↗</span><span className="eyebrow">A REAL BUILD. RIGHT HERE.</span><h3>Step inside {name}<span className="accent">.</span></h3><p>Scroll, click, and explore the {website ? 'public website' : 'live demo'} without leaving the portfolio.</p><button className="button button-primary" onClick={() => setActive(true)}>Launch interactive {website ? 'website' : 'demo'} <Arrow /></button></div>}</div>
    <div className="live-project-note"><span>{website ? 'The public website is accessible. Workspace access requires an owner account.' : 'Hosted by the project · Demonstration records are fictional.'}</span><span>Scroll inside to explore. {active ? 'If the host blocks the preview, open externally.' : 'Loads only when you launch.'}</span></div>
  </section>;
}

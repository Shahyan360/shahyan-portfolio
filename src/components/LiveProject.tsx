'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Arrow } from './Arrow';

type ViewerPhase = 'idle' | 'loading' | 'ready' | 'restricted' | 'unconfirmed' | 'offline';
const CONFIRM_TIMEOUT_MS = 15000;
const phaseLabels: Record<ViewerPhase, string> = {
  idle: 'On-demand preview', loading: 'Confirming application…', ready: 'Public interface connected',
  restricted: 'Account required for this page', unconfirmed: 'View not confirmed', offline: 'Browser is offline',
};

export default function LiveProject({ name, url, website = false, visible = true }: {
  name: string; url: string; website?: boolean; visible?: boolean;
}) {
  const [session, setSession] = useState<string | null>(null);
  const [documentVersion, setDocumentVersion] = useState(0);
  const [phase, setPhase] = useState<ViewerPhase>('idle');
  const [expanded, setExpanded] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const section = useRef<HTMLElement>(null);
  const expandButton = useRef<HTMLButtonElement>(null);
  const launchButton = useRef<HTMLButtonElement>(null);
  const applicationOrigin = new URL(url).origin;
  const active = session !== null;
  const failure = phase === 'unconfirmed' || phase === 'offline';

  const ping = useCallback(() => {
    if (!session || !visible || document.hidden || !navigator.onLine) return;
    frame.current?.contentWindow?.postMessage({ type: 'shahyan:embed:ping', version: 1, session }, applicationOrigin);
  }, [applicationOrigin, session, visible]);

  useEffect(() => {
    if (!session || !visible) return;
    let confirmed = false;
    const timeout = window.setTimeout(() => {
      if (!confirmed) setPhase(navigator.onLine ? 'unconfirmed' : 'offline');
    }, CONFIRM_TIMEOUT_MS);
    const receive = (event: MessageEvent<unknown>) => {
      if (event.origin !== applicationOrigin || event.source !== frame.current?.contentWindow ||
          !event.data || typeof event.data !== 'object') return;
      const data = event.data as Record<string, unknown>;
      if (data.version !== 1 || data.session !== session) return;
      if (data.type === 'shahyan:embed:ready' && (data.access === 'public' || data.access === 'restricted')) {
        confirmed = true; window.clearTimeout(timeout);
        setPhase(!navigator.onLine ? 'offline' : data.access === 'restricted' ? 'restricted' : 'ready');
      } else if (data.type === 'shahyan:embed:escape') {
        setExpanded(false); expandButton.current?.focus();
      }
    };
    const offline = () => setPhase('offline');
    window.addEventListener('message', receive);
    window.addEventListener('offline', offline);
    // Load events do not establish that a cross-origin application rendered.
    ping();
    const interval = window.setInterval(ping, 1200);
    return () => {
      window.clearTimeout(timeout); window.clearInterval(interval);
      window.removeEventListener('message', receive); window.removeEventListener('offline', offline);
    };
  }, [applicationOrigin, documentVersion, ping, session, visible]);

  useEffect(() => {
    if (!expanded) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setExpanded(false); expandButton.current?.focus(); }
    };
    const trap = (event: FocusEvent) => {
      if (section.current && !section.current.contains(event.target as Node)) expandButton.current?.focus();
    };
    const prior = document.body.style.overflow; document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key); document.addEventListener('focusin', trap);
    expandButton.current?.focus();
    return () => {
      window.removeEventListener('keydown', key); document.removeEventListener('focusin', trap);
      document.body.style.overflow = prior;
    };
  }, [expanded]);

  function launch() {
    setPhase(navigator.onLine ? 'loading' : 'offline');
    setSession(crypto.randomUUID());
  }
  function close() {
    setExpanded(false); setSession(null); setPhase('idle');
    requestAnimationFrame(() => launchButton.current?.focus());
  }

  return <section ref={section} className={`live-project ${expanded ? 'expanded' : ''}`}
    role={expanded ? 'dialog' : 'region'} aria-modal={expanded ? true : undefined}
    aria-label={`${name} interactive website`} data-state={phase}>
    <div className="live-project-toolbar">
      <div className="live-project-identity"><span className="status-dot" /><strong>{name}</strong><span className="live-address">{new URL(url).hostname}</span></div>
      <div className="live-project-controls">
        <button className="text-link" onClick={launch} disabled={!active} aria-label={`Reload ${name}`}>Reload ↻</button>
        <button ref={expandButton} className="text-link" onClick={() => setExpanded(value => !value)} aria-pressed={expanded}>{expanded ? 'Collapse ↙' : 'Expand ↗'}</button>
        {active && <button className="text-link" onClick={close} aria-label={`Close ${name} viewer`}>Close ×</button>}
        <a className="live-external" href={url} target="_blank" rel="noopener noreferrer">Open externally <Arrow diagonal /></a>
      </div>
    </div>
    {active && <div className="live-connection-status" role="status"><span className="connection-indicator" />{phaseLabels[phase]}</div>}
    {phase === 'restricted' && <div className="live-auth-notice">This page requires its own account. No private session is shared by the portfolio. <button className="text-link" onClick={launch}>Return to the public {website ? 'website' : 'demo'} <Arrow /></button></div>}
    <div className="live-viewport">
      {active ? <>
        <iframe key={session} ref={frame} src={url} title={`${name} — interactive ${website ? 'website' : 'demo'}`}
          allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={phase === 'ready' || phase === 'restricted' ? 0 : -1} inert={phase === 'loading' || failure}
          onLoad={() => { setPhase(navigator.onLine ? 'loading' : 'offline'); setDocumentVersion(value => value + 1); }}
          onError={() => setPhase(navigator.onLine ? 'unconfirmed' : 'offline')} />
        {phase === 'loading' && <div className="embed-loading"><span className="loading-orbit" aria-hidden="true" /><h3>Connecting to {name}<span className="accent">.</span></h3><p>Waiting for the application to confirm its public interface.</p><a className="text-link" href={url} target="_blank" rel="noopener noreferrer">Prefer a separate tab? <Arrow diagonal /></a></div>}
        {failure && <div className="live-fallback"><span className="eyebrow">THE CONNECTION NEEDS ANOTHER ROUTE</span><h3>{phase === 'offline' ? 'You appear to be offline.' : 'We couldn’t confirm this view.'}</h3><p>{phase === 'offline' ? 'Reconnect to the internet, then try the embedded application again.' : 'The application may be unavailable, or the host or browser may be limiting the embedded view. Opening it directly can help.'}</p><div><button className="button button-primary" onClick={launch}>Retry embedded view <Arrow /></button><a className="text-link" href={url} target="_blank" rel="noopener noreferrer">Open {name} externally <Arrow diagonal /></a></div></div>}
      </> : <div className="live-placeholder"><span className="preview-orbit" aria-hidden="true">↗</span><span className="eyebrow">A REAL BUILD. RIGHT HERE.</span><h3>Step inside {name}<span className="accent">.</span></h3><p>Scroll, click, and explore the {website ? 'public website' : 'live demo'} without leaving the portfolio.</p><button ref={launchButton} className="button button-primary" onClick={launch}>Launch interactive {website ? 'website' : 'demo'} <Arrow /></button></div>}
    </div>
    <div className="live-project-note"><span>{website ? 'Explore the public website. The workspace requires its own owner account.' : 'Public demo · Fictional records · No customer account required.'}</span><span>{active ? 'Scroll inside to explore. Close unloads the application.' : 'Loads only when you launch. External opening is always available.'}</span></div>
  </section>;
}

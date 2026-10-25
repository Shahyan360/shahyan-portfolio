'use client';
import { useState } from 'react';
import { profile } from '@/content/profile';
export default function ContactActions() {
  const [status, setStatus] = useState('');
  async function copy() { try { await navigator.clipboard.writeText(profile.email); setStatus('Email copied.'); } catch { setStatus('Copy unavailable. Select the email address above.'); } }
  return <div className="copy-email"><button onClick={copy} className="text-link">Copy email address <span aria-hidden="true">⧉</span></button><span role="status">{status}</span></div>;
}

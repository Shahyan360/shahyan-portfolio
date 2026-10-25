import Link from '@/components/SiteLink';
import Portrait from './Portrait';
import { Arrow } from './Arrow';

export default function Hero() {
  return <section className="hero section-wrap" aria-labelledby="hero-title">
    <div className="hero-meta"><span><span className="status-dot" /> SOFTWARE ENGINEER · LAHORE, PK</span><span>INDEPENDENT MIND. CONNECTED SYSTEMS.</span></div>
    <div className="hero-grid"><div className="hero-copy"><p className="hero-intro">Muhammad Shahyan Khalid</p><h1 id="hero-title"><span>I build systems</span><span>that <em>think,</em></span><span>connect<span className="accent">,</span> & scale<span className="accent">.</span></span></h1><p className="hero-description">Engineering intelligence into real-world operations.<br className="desktop-only" /> From enterprise ERP to AI-powered products.</p><div className="hero-ctas"><Link href="/work/" className="button button-primary magnetic">Explore my work <Arrow diagonal /></Link><Link href="/experience/" className="text-link">View experience <Arrow /></Link></div><div className="hero-disciplines"><span>AI SYSTEMS</span><i /> <span>ENTERPRISE ERP</span><i /><span>FULL-STACK</span></div></div>
    <figure className="hero-portrait"><div className="portrait-frame"><Portrait hero /><div className="portrait-grid" aria-hidden="true" /><span className="portrait-cross top-left" aria-hidden="true">+</span><span className="portrait-cross bottom-right" aria-hidden="true">+</span><div className="portrait-tag"><span className="mini-orbit" aria-hidden="true">✳</span><span>THE HUMAN<br />BEHIND THE SYSTEMS</span></div></div><figcaption><span>01 / A DIFFERENT KIND OF BUILDER</span><span>31.5204° N · 74.3587° E</span></figcaption></figure></div>
    <div className="hero-bottom"><a href="#selected-work">SCROLL TO DISCOVER <span>↓</span></a><p>Complexity, made <em>considered.</em></p><span>PORTFOLIO — 2026</span></div>
  </section>;
}

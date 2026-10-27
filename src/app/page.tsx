import Link from '@/components/SiteLink';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import LiveGallery from '@/components/LiveGallery';
import ProjectCard from '@/components/ProjectCard';
import SystemsAtlas from '@/components/SystemsAtlas';
import ExperienceList from '@/components/ExperienceList';
import { ContactFinale } from '@/components/Shell';
import { Arrow } from '@/components/Arrow';
import { projects } from '@/content/projects';
import { achievements } from '@/content/achievements';
import { capabilities } from '@/content/skills';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() {
  const products = ['lizz', 'aster', 'meridian'].map(slug => projects.find(p => p.slug === slug)!);
  const enterprise = projects.filter(p => p.odoo && p.repo);
  const moreOdoo = projects.filter(p => p.odoo && !p.repo);
  const automations = projects.filter(p => p.automation);
  return <><Hero /><div className="discipline-strip" aria-hidden="true"><span>INTELLIGENCE</span><span>✳</span><span>ARCHITECTURE</span><span>✳</span><span>CONNECTION</span><span>✳</span><span>INTENTION</span><span>✳</span><span>INTELLIGENCE</span></div>
    <section className="intro-section section-wrap" data-reveal><span className="eyebrow">A LITTLE CONTEXT</span><div><h2>Behind every great interface<br />is a system that <em>makes sense.</em></h2><p>I’m Shahyan, a software engineer connecting business operations with intelligent software. My work moves between the details of an ERP workflow and the possibilities of AI—with the same focus on making complexity useful.</p><Link className="text-link" href="/about/">More about my approach <Arrow diagonal /></Link></div><span className="intro-star" aria-hidden="true">✳</span></section>
    <section id="selected-work" className="selected-work section-wrap" aria-labelledby="work-title"><div className="section-heading"><div className="eyebrow">01 / SELECTED WORK</div><h2 id="work-title">Built to work.<br /><em>Made to be explored.</em></h2><div><p>Three live products. Real interfaces.<br />Explore the builds, then go beneath the surface.</p><Link className="text-link" href="/work/">View the full collection <Arrow diagonal /></Link></div></div><div className="featured-grid">{products.map((p, i) => <ProjectCard project={p} index={i} key={p.slug} />)}</div><div className="enterprise-intro"><span className="eyebrow">THE OPERATIONAL BACKBONE</span><h3>Enterprise work,<br /><em>with real depth.</em></h3><p>Custom Odoo systems that connect the decisions, records, and people behind business operations.</p></div><div className="enterprise-grid">{enterprise.map((p, i) => <ProjectCard project={p} index={i + 3} key={p.slug} />)}</div><div className="more-odoo"><span className="eyebrow">MORE ODOO IMPLEMENTATIONS & EXPLORATIONS</span><div className="odoo-project-links">{moreOdoo.map(p => <Link key={p.slug} href={`/work/${p.slug}/`}><span>{p.name}<small>{p.category}</small></span><Arrow diagonal /></Link>)}</div></div></section>
    <section className="section-wrap homepage-live"><LiveGallery /></section>
    <section className="section-wrap automation-section" id="automation" aria-labelledby="automation-title"><div className="section-heading"><span className="eyebrow">AUTOMATION / FOUR CONNECTED WORKFLOWS</span><h2 id="automation-title">From incoming event<br /><em>to useful action.</em></h2><p>Independent n8n implementations for commerce, sales, communication, and research. Explore the architecture and recovery decisions behind each workflow.</p></div><div className="odoo-project-links">{automations.map(p => <Link key={p.slug} href={`/work/${p.slug}/`}><span>{p.name}<small>{p.description}</small></span><Arrow diagonal /></Link>)}</div></section>
    <SystemsAtlas /><section className="impact-section section-wrap"><div className="eyebrow">SOURCE-VERIFIABLE SCOPE</div><div className="impact-grid">{achievements.map(a => <div key={a.label} data-reveal><strong>{a.value}<span>↗</span></strong><h3>{a.label}</h3><p>{a.detail}</p></div>)}</div><p className="impact-note">A snapshot of the published portfolio—not a claim about client revenue or adoption.</p></section>
    <section className="experience-section section-wrap"><div className="section-heading"><div className="eyebrow">03 / THE THROUGHLINE</div><h2>Grounded in operations.<br /><em>Driven by engineering.</em></h2><Link className="text-link" href="/experience/">The full experience <Arrow diagonal /></Link></div><ExperienceList /></section>
    <section className="capabilities-section section-wrap"><div className="eyebrow">04 / WHAT I BRING</div><div className="capabilities-grid">{capabilities.map(c => <article key={c.id} data-reveal><span className="cap-number">{c.number} /</span><h3>{c.title}</h3><p>{c.description}</p><div className="tag-list">{c.tech.map(t => <span key={t}>{t}</span>)}</div></article>)}</div></section><ContactFinale /></>;
}

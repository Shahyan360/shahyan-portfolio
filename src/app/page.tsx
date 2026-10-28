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
  return <>
    <Hero />
    <div className="discipline-strip" aria-hidden="true"><span>ODOO IMPLEMENTATION</span><span>✳</span><span>PYTHON / ORM</span><span>✳</span><span>BUSINESS OPERATIONS</span><span>✳</span><span>ERP INTEGRATIONS</span><span>✳</span></div>
    <section className="intro-section section-wrap" data-reveal><span className="eyebrow">IMPLEMENTATION / WITH BUSINESS CONTEXT</span><div><h2>Understand the operation.<br />Then build the <em>right Odoo system.</em></h2><p>I implement Odoo around the way a business works: its orders, warehouses, production, finances, and people. My work combines solution consulting with hands-on Python development, custom modules, migration, integration, and operational support.</p><Link className="text-link" href="/about/">More about my approach <Arrow diagonal /></Link></div><span className="intro-star" aria-hidden="true">✳</span></section>
    <section id="selected-work" className="selected-work section-wrap" aria-labelledby="work-title">
      <div className="section-heading"><span className="eyebrow">01 / ODOO IMPLEMENTATIONS</span><h2 id="work-title">Implemented by me.<br /><em>Built for the business.</em></h2><div><p>Odoo delivery across distribution, manufacturing, multi-company operations, education, and financial integrations.</p><Link className="text-link" href="/work/">Explore my implementations <Arrow diagonal /></Link></div></div>
      <div className="enterprise-grid">{enterprise.map((p, i) => <ProjectCard project={p} index={i} key={p.slug} />)}</div>
      <div className="more-odoo"><span className="eyebrow">MORE OF MY ODOO IMPLEMENTATIONS</span><div className="odoo-project-links">{moreOdoo.map(p => <Link key={p.slug} href={`/work/${p.slug}/`}><span>{p.name}<small>{p.category}</small></span><Arrow diagonal /></Link>)}</div></div>
    </section>
    <section className="selected-work section-wrap" id="product-work" aria-labelledby="products-title"><div className="section-heading"><span className="eyebrow">CONNECTED PRODUCTS / AI & WEB</span><h2 id="products-title">Beyond the ERP.<br /><em>The same systems thinking.</em></h2><p>Explore the AI and full-stack products that complement my implementation work.</p></div><div className="featured-grid">{products.map((p, i) => <ProjectCard project={p} index={i + 2} key={p.slug} />)}</div></section>
    <section className="section-wrap homepage-live"><LiveGallery /></section>
    <section className="section-wrap automation-section" id="automation" aria-labelledby="automation-title"><div className="section-heading"><span className="eyebrow">AUTOMATION / FOUR CONNECTED WORKFLOWS</span><h2 id="automation-title">From incoming event<br /><em>to useful action.</em></h2><p>Independent n8n implementations for commerce, sales, communication, and research. Explore the architecture and recovery decisions behind each workflow.</p></div><div className="odoo-project-links">{automations.map(p => <Link key={p.slug} href={`/work/${p.slug}/`}><span>{p.name}<small>{p.description}</small></span><Arrow diagonal /></Link>)}</div></section>
    <SystemsAtlas />
    <section className="impact-section section-wrap"><div className="eyebrow">ODOO / TECHNICAL SCOPE</div><div className="impact-grid">{achievements.map(a => <div key={a.label} data-reveal><strong>{a.value}<span>↗</span></strong><h3>{a.label}</h3><p>{a.detail}</p></div>)}</div><p className="impact-note">Implementation depth and published module scope.</p></section>
    <section className="experience-section section-wrap"><div className="section-heading"><span className="eyebrow">03 / IMPLEMENTATION EXPERIENCE</span><h2>Grounded in operations.<br /><em>Deep in Odoo.</em></h2><Link className="text-link" href="/experience/">The full experience <Arrow diagonal /></Link></div><ExperienceList /></section>
    <section className="capabilities-section section-wrap"><div className="eyebrow">04 / WHAT I BRING</div><div className="capabilities-grid">{capabilities.map(c => <article key={c.id} data-reveal><span className="cap-number">{c.number} /</span><h3>{c.title}</h3><p>{c.description}</p><div className="tag-list">{c.tech.map(t => <span key={t}>{t}</span>)}</div></article>)}</div></section><ContactFinale />
  </>;
}

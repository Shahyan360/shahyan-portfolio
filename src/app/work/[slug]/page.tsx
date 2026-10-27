import type { Metadata } from 'next';
import Link from '@/components/SiteLink';
import { notFound } from 'next/navigation';
import { githubUrl, projects } from '@/content/projects';
import ProjectVisual from '@/components/ProjectVisual';
import LiveProject from '@/components/LiveProject';
import WorkflowExplorer from '@/components/WorkflowExplorer';
import { Arrow } from '@/components/Arrow';

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);
  return { title: p?.name || 'Project', description: p?.description, alternates: { canonical: `/work/${slug}/` } };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const source = githubUrl(project);
  const related = projects.filter(p => p.odoo && p.slug !== slug);
  return <>
    <section className={`case-heading section-wrap${project.odoo ? ' odoo-case-heading' : ''}`}>
      <Link className="text-link" href="/work/">← All work</Link>
      <div className="case-title-row"><div><span className="eyebrow">{project.category} / CASE STUDY</span><h1>{project.name}<span className="accent">.</span></h1></div><span className="project-status">{project.status}</span></div>
      <div className="case-heading-bottom"><h2>{project.subtitle}</h2><div>
        {project.demo && <a className="button button-primary" href="#live-build">Try it here <Arrow /></a>}
        {source ? <a className="text-link" href={source} target="_blank" rel="noreferrer">View repository <Arrow diagonal /></a> : <a className="text-link" href="#context">Explore the implementation <Arrow /></a>}
      </div></div>
      {project.odoo && <nav className="case-section-nav" aria-label="Case study sections">
        <a href="#context">Context</a>{project.coverage && <a href="#coverage">Functional scope</a>}<a href="#architecture">Architecture</a><a href="#engineering">{slug === 'unico' ? 'Recent QuickBooks work' : 'Engineering'}</a>{project.validation && <a href="#validation">Validation & delivery</a>}<a href="#outcome">Outcome & scope</a>
      </nav>}
    </section>
    <div className="case-cover section-wrap"><ProjectVisual project={project} priority /></div>
    {project.demo && <div className="section-wrap live-section" id="live-build"><div className="section-heading"><span className="eyebrow">THE LIVE BUILD</span><h2>Don’t just read it.<br /><em>Experience it.</em></h2><p>Use the project right here,<br />or give it a tab of its own.</p></div><LiveProject name={project.name} url={project.demo} website={slug === 'meridian'} /></div>}
    <section className="case-overview section-wrap" id="context"><div><span className="eyebrow">01 / THE CONTEXT</span><h2>{slug === 'lizz' ? 'From conversation\nto clarity.' : 'The system\nbehind the surface.'}</h2></div><div><p className="large-copy">{project.overview}</p><div className="case-role"><span className="eyebrow">MY ROLE</span><p>{project.role}</p></div><div className="tag-list">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></div></section>
    {project.coverage && <section className="case-coverage section-wrap" id="coverage" aria-labelledby="coverage-title"><div className="section-heading"><span className="eyebrow">FUNCTIONAL SCOPE</span><h2 id="coverage-title">Across the<br /><em>whole operation.</em></h2><p>Connected business processes,<br />with the delivery scope made explicit.</p></div><div className="case-coverage-grid">{project.coverage.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>}
    <section className="case-challenge section-wrap" data-reveal><span className="eyebrow">02 / THE CHALLENGE</span><p>{project.challenge}</p></section>
    <section className="case-architecture section-wrap" id="architecture"><div className="section-heading"><span className="eyebrow">03 / HOW IT CONNECTS</span><h2>Architecture<br /><em>with intention.</em></h2></div><div className="architecture-flow" aria-label={`${project.name} architecture`}>{project.architecture.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < project.architecture.length - 1 && <Arrow />}</div>)}</div><p className="diagram-note">{slug === 'procurement-auditor' ? 'Intended prototype workflow · No live runtime' : 'Simplified architecture · Not a live client system'}</p>{['lizz', 'unico', 'meridian'].includes(slug) && <WorkflowExplorer kind={slug === 'lizz' ? 'ai' : 'enterprise'} />}</section>
    <section className="implementation-section section-wrap" id="engineering"><div className="implementation-heading"><span className="eyebrow">04 / ENGINEERING DECISIONS</span><h2>{slug === 'unico' ? <>Recent work.<br /><em>QuickBooks reliability.</em></> : <>The details<br /><em>do the work.</em></>}</h2>{slug === 'unico' && <p className="engineering-intro">Configuration, troubleshooting, and a shared sync-status implementation for an existing Odoo 19–QuickBooks Online connector.</p>}</div><div className="implementation-list">{project.implementation.map((item, i) => <article key={item.title} data-reveal><span className="eyebrow">{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    {project.validation && <section className="case-validation section-wrap" id="validation" aria-labelledby="validation-title"><div className="section-heading"><span className="eyebrow">VALIDATION & DELIVERY</span><h2 id="validation-title">Tested locally.<br /><em>Ready for staging review.</em></h2><p>Results reported in the supplied engineering update. These connector tests were not rerun as part of building this portfolio.</p></div><div className="case-coverage-grid">{project.validation.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>{project.deliveryNote && <aside className="case-delivery-note"><span className="eyebrow">REMAINING ACCEPTANCE</span><p>{project.deliveryNote}</p></aside>}</section>}
    <section className="case-outcome section-wrap" id="outcome"><div className="eyebrow">05 / WHAT THIS DEMONSTRATES</div><h2>{project.outcome}</h2><div className="scope-note"><span className="eyebrow">{project.odoo ? 'IMPLEMENTATION & PUBLIC SCOPE' : 'RELEASE SCOPE'}</span><p>{project.scope}</p>{source && <a href={source} target="_blank" rel="noreferrer">Inspect the source & documentation <Arrow diagonal /></a>}{project.odoo && <p className="case-evidence">Content basis: {project.evidence}</p>}</div></section>
    {project.odoo && <section className="section-wrap related-odoo" aria-label="More Odoo case studies"><span className="eyebrow">MORE ODOO IMPLEMENTATIONS</span><div className="odoo-project-links">{related.map(p => <Link key={p.slug} href={`/work/${p.slug}/`}><span>{p.name}<small>{p.category}</small></span><Arrow diagonal /></Link>)}</div></section>}
    <Link className="next-project section-wrap" href={`/work/${next.slug}/`}><span className="eyebrow">KEEP EXPLORING / NEXT PROJECT</span><div><h2>{next.name}<span className="accent">.</span></h2><Arrow diagonal /></div><p>{next.subtitle}</p></Link>
  </>;
}

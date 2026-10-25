import type { Metadata } from 'next';
import Link from '@/components/SiteLink';
import { notFound } from 'next/navigation';
import { githubUrl, projects } from '@/content/projects';
import ProjectVisual from '@/components/ProjectVisual';
import LiveProject from '@/components/LiveProject';
import WorkflowExplorer from '@/components/WorkflowExplorer';
import { Arrow } from '@/components/Arrow';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = projects.find(p => p.slug === slug); return { title: p?.name || 'Project', description: p?.description, alternates: { canonical: `/work/${slug}/` } }; }
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug); if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><section className="case-heading section-wrap"><Link className="text-link" href="/work/">← All work</Link><div className="case-title-row"><div><span className="eyebrow">{project.category} / CASE STUDY</span><h1>{project.name}<span className="accent">.</span></h1></div><span className="project-status">{project.status}</span></div><div className="case-heading-bottom"><h2>{project.subtitle}</h2><div>{project.demo && <a className="button button-primary" href="#live-build">Try it here <Arrow /></a>}<a className="text-link" href={githubUrl(project)} target="_blank" rel="noreferrer">View repository <Arrow diagonal /></a></div></div></section>
    <div className="case-cover section-wrap"><ProjectVisual project={project} priority /></div>
    {project.demo && <div className="section-wrap live-section" id="live-build"><div className="section-heading"><span className="eyebrow">THE LIVE BUILD</span><h2>Don’t just read it.<br /><em>Experience it.</em></h2><p>Use the project right here,<br />or give it a tab of its own.</p></div><LiveProject name={project.name} url={project.demo} website={project.slug === 'meridian'} /></div>}
    <section className="case-overview section-wrap"><div><span className="eyebrow">01 / THE CONTEXT</span><h2>{project.slug === 'lizz' ? 'From conversation\nto clarity.' : 'The system\nbehind the surface.'}</h2></div><div><p className="large-copy">{project.overview}</p><div className="case-role"><span className="eyebrow">MY ROLE</span><p>{project.role}</p></div><div className="tag-list">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></div></section>
    <section className="case-challenge section-wrap" data-reveal><span className="eyebrow">02 / THE CHALLENGE</span><p>{project.challenge}</p></section>
    <section className="case-architecture section-wrap"><div className="section-heading"><span className="eyebrow">03 / HOW IT CONNECTS</span><h2>Architecture<br /><em>with intention.</em></h2></div><div className="architecture-flow" aria-label={`${project.name} architecture`}>{project.architecture.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong>{i < project.architecture.length - 1 && <Arrow />}</div>)}</div><p className="diagram-note">Simplified architecture · Not a live client system</p>{['lizz', 'unico', 'meridian'].includes(project.slug) && <WorkflowExplorer kind={project.slug === 'lizz' ? 'ai' : 'enterprise'} />}</section>
    <section className="implementation-section section-wrap"><div className="implementation-heading"><span className="eyebrow">04 / ENGINEERING DECISIONS</span><h2>The details<br /><em>do the work.</em></h2></div><div className="implementation-list">{project.implementation.map((item, i) => <article key={item.title} data-reveal><span className="eyebrow">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section className="case-outcome section-wrap"><div className="eyebrow">05 / WHAT THIS DEMONSTRATES</div><h2>{project.outcome}</h2><div className="scope-note"><span className="eyebrow">RELEASE SCOPE</span><p>{project.scope}</p><a href={githubUrl(project)} target="_blank" rel="noreferrer">Inspect the source & documentation <Arrow diagonal /></a></div></section>
    <Link className="next-project section-wrap" href={`/work/${next.slug}/`}><span className="eyebrow">KEEP EXPLORING / NEXT PROJECT</span><div><h2>{next.name}<span className="accent">.</span></h2><Arrow diagonal /></div><p>{next.subtitle}</p></Link></>;
}

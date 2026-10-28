import type { Metadata } from 'next';
import Link from '@/components/SiteLink';
import ExperienceList from '@/components/ExperienceList';
import WorkflowExplorer from '@/components/WorkflowExplorer';
import { ContactFinale } from '@/components/Shell';
import { Arrow } from '@/components/Arrow';
import { odooProjects } from '@/content/odooProjects';
import RepositoryLinks from '@/components/RepositoryLinks';

export const metadata: Metadata = { title: 'Experience', alternates: { canonical: '/experience/' }, description: 'Odoo implementation, manufacturing ERP, Shopify integrations, and software engineering experience from 2022 onward.' };

export default function ExperiencePage() {
  return <>
    <section className="page-heading section-wrap"><span className="eyebrow">EXPERIENCE / 2022 ONWARD</span><h1>Close to the business.<br /><em>Deep in the build.</em></h1><div className="page-heading-bottom"><p>From school operations to enterprise systems. A career shaped by the work software needs to do.</p><a className="text-link" href="#implementations">Explore implementations ↓</a></div></section>
    <section className="section-wrap detailed-experience" aria-label="Professional timeline"><ExperienceList detailed /></section>
    <section id="implementations" className="section-wrap major-implementations"><div className="section-heading"><span className="eyebrow">ODOO / IMPLEMENTATIONS & EXPLORATIONS</span><h2>Major implementations.<br /><em>Practical depth.</em></h2><p>Odoo implementations I have delivered across business operations, integrations, manufacturing, and education, including an implemented procurement-auditing prototype. The public reconstructions use fictional data.</p></div><div className="implementation-stories">{odooProjects.filter(project => !project.independent).map((project, i) => <article key={project.slug} data-reveal><span className="story-index">{String(i + 1).padStart(2, '0')}</span><div><span className="eyebrow">{project.category} · {project.status}</span><h3>{project.name}</h3><p>{project.description}</p><span className="story-tech">{project.technologies.slice(0, 5).join(' · ')}</span><Link className="text-link story-case-link" href={`/work/${project.slug}/`}>Explore my implementation <Arrow diagonal /></Link><RepositoryLinks project={project} /></div></article>)}</div></section>
    <section className="section-wrap workflow-section"><div className="section-heading"><span className="eyebrow">EXPLORE THE THINKING</span><h2>One order.<br /><em>Many connected decisions.</em></h2></div><WorkflowExplorer /></section><ContactFinale />
  </>;
}

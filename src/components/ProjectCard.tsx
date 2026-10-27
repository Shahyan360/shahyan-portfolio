import Link from '@/components/SiteLink';
import { githubUrl, type Project } from '@/content/projects';
import ProjectVisual from './ProjectVisual';
import { Arrow } from './Arrow';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const source = githubUrl(project);
  return <article className={`project-card project-${project.slug}`} data-reveal>
    <Link href={`/work/${project.slug}/`} className="project-image-link"><span aria-hidden="true"><ProjectVisual project={project} /></span><span className="sr-only">Explore project: {project.name} case study</span><span className="project-hover" aria-hidden="true">Explore project <Arrow diagonal /></span></Link>
    <div className="project-card-heading"><div><p className="project-category"><span>{String(index + 1).padStart(2, '0')}</span> {project.category}</p><h3><Link href={`/work/${project.slug}/`}>{project.name} <Arrow diagonal /></Link></h3></div><span className="project-status">{project.status}</span></div><p className="project-description">{project.description}</p>
    <div className="project-actions"><Link href={`/work/${project.slug}/`}>Case study <Arrow /></Link>{project.demo && <Link href={`/work/${project.slug}/#live-build`}>Try it here <Arrow /></Link>}{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Open externally <Arrow diagonal /></a> : source ? <a href={source} target="_blank" rel="noreferrer">Explore source <Arrow diagonal /></a> : <span className="project-private-note">{project.status.startsWith('Prototype') ? 'Prototype study' : 'Client implementation'}</span>}</div>
  </article>;
}

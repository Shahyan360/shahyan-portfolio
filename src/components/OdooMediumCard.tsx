import Link from '@/components/SiteLink';
import { githubUrl, projectRepositories, type Project } from '@/content/projects';
import ProjectVisual from './ProjectVisual';
import { Arrow } from './Arrow';

export default function OdooMediumCard({ project }: { project: Project }) {
  const source = githubUrl(project);
  const repositoryCount = projectRepositories(project).length;

  return <article className={`odoo-medium-card medium-${project.slug}`}>
    <Link className="medium-project-visual" href={`/work/${project.slug}/`} aria-label={`Explore ${project.name} implementation`}>
      <span aria-hidden="true"><ProjectVisual project={project} /></span>
      <span className="medium-visual-arrow" aria-hidden="true"><Arrow diagonal /></span>
    </Link>
    <div className="medium-project-body">
      <p className="eyebrow">{project.category}</p>
      <h3><Link href={`/work/${project.slug}/`}>{project.name}</Link></h3>
      <span className="project-status">{project.status}</span>
      <p className="medium-project-description">{project.description}</p>
      <div className="medium-project-actions">
        <Link href={`/work/${project.slug}/`}>View implementation <Arrow /></Link>
        {source && <a href={source} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <Arrow diagonal /></a>}
      </div>
      {repositoryCount > 1 && <Link className="medium-more-repositories" href={`/work/${project.slug}/#repositories`}>Explore all {repositoryCount} repositories <Arrow diagonal /></Link>}
    </div>
  </article>;
}

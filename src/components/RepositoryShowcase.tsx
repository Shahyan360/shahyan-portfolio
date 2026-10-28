import type { Project } from '@/content/projects';
import { Arrow } from './Arrow';

export default function RepositoryShowcase({ project }: { project: Project }) {
  if (!project.repositories?.length) return null;
  return <section className="section-wrap repository-showcase" id="repositories" aria-labelledby="repositories-title">
    <div className="section-heading"><span className="eyebrow">PUBLIC IMPLEMENTATIONS / GITHUB</span><h2 id="repositories-title">Explore the<br /><em>implementation.</em></h2><p>Implemented by Muhammad Shahyan Khalid. I independently reconstructed these public implementations using fictional data and public Odoo Community APIs. They do not contain original confidential client source or records.</p></div>
    <div className="repository-grid">{project.repositories.map(repository => <article key={repository.repo}>
      <h3>{repository.label}</h3><p>{repository.description}</p><div className="tag-list">{repository.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
      <p className="repository-validation"><strong>Testing & deployment:</strong> {repository.validation}</p>
      <a className="text-link" href={`https://github.com/Shahyan360/${repository.repo}`} target="_blank" rel="noreferrer">GitHub · {repository.label} <Arrow diagonal /></a>
    </article>)}</div>
  </section>;
}

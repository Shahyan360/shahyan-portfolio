import { projectRepositories, type Project } from '@/content/projects';
import { Arrow } from './Arrow';

export default function RepositoryLinks({ project }: { project: Project }) {
  const repositories = projectRepositories(project);
  if (!repositories.length) return null;
  return <div className="repository-links" aria-label={`${project.name} GitHub repositories`}>
    {repositories.map(repository => <a key={repository.repo} href={`https://github.com/Shahyan360/${repository.repo}`} target="_blank" rel="noreferrer">GitHub · {repository.label} <Arrow diagonal /></a>)}
    {project.repositories?.length ? <span className="repository-origin">Public reconstructions use fictional data.</span> : null}
  </div>;
}

import type { Project } from '@/content/projects';

export default function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <div className={`project-visual ${project.color}`}>
    <div className="visual-meta"><span>{project.name.toUpperCase()}</span><span>{project.image ? 'PRODUCT PREVIEW' : 'SYSTEM STUDY'}</span></div>
    {project.image ? <div className="browser-frame"><div className="browser-bar"><i /><i /><i /><span>{project.demo?.replace('https://', '').split('/')[0]}</span></div><img src={project.image} alt={project.slug === 'meridian' ? 'Meridian ERP public website with its connected business modules illustration' : `${project.name} application showing fictional demonstration data`} width="1400" height="900" loading={priority ? 'eager' : 'lazy'} /></div> : <div className="enterprise-art" aria-label={`Conceptual architecture illustration for ${project.name}`}><div className="system-planes"><span /><span /><span /><span /></div><div className="system-word">{project.visualLabel || project.name}<span>{project.subtitle.toUpperCase()}</span></div><span className="system-coordinate">{project.architecture.slice(0, 3).join(' → ').toUpperCase()}</span></div>}
    <span className="visual-caption">{project.image ? project.slug === 'meridian' ? 'Authentic public website capture' : 'Fictional demo records · Repository screenshot' : 'Original conceptual illustration'}</span>
  </div>;
}

import Link from '@/components/SiteLink';
import { experience } from '@/content/experience';
import { projects } from '@/content/projects';
import { Arrow } from './Arrow';
export default function ExperienceList({ detailed = false }: { detailed?: boolean }) {
  return <div className="experience-list">{experience.map((job, i) => <article className="experience-row" key={job.company} data-reveal><div className="experience-period"><span>0{i + 1}</span><p>{job.period}</p></div><div className="experience-company"><h3>{job.company}</h3><p>{job.role}</p>{detailed && <span>{job.location}</span>}</div><div className="experience-details"><p>{job.summary}</p>{detailed && <><ul>{job.details.map(d => <li key={d}>{d}</li>)}</ul><div className="experience-links">{job.projects.map(slug => <Link key={slug} href={`/work/${slug}/`}>{projects.find(project => project.slug === slug)?.name} case study <Arrow diagonal /></Link>)}</div></>}</div></article>)}</div>;
}

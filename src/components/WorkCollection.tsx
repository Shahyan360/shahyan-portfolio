'use client';
import { useState } from 'react';
import { projects } from '@/content/projects';
import ProjectCard from './ProjectCard';
const filters = ['All work', 'Live products', 'Enterprise', 'AI'];
export default function WorkCollection() {
  const [filter, setFilter] = useState('All work');
  const selected = projects.filter(p => filter === 'All work' || (filter === 'Live products' && p.demo) || (filter === 'Enterprise' && ['enterprise', 'integrations'].includes(p.domain)) || (filter === 'AI' && p.domain === 'ai'));
  return <><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}<span>{f === 'All work' ? '05' : f === 'Live products' ? '03' : f === 'Enterprise' ? '02' : '01'}</span></button>)}</div><p className="sr-only" aria-live="polite">{selected.length} projects shown</p><div className="work-grid">{selected.map(p => <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />)}</div></>;
}

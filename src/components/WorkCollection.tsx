'use client';
import { useState } from 'react';
import { projects } from '@/content/projects';
import ProjectCard from './ProjectCard';
const filters = ['Odoo', 'All work', 'Live products', 'Automation', 'AI'];
const matchesFilter = (p: (typeof projects)[number], filter: string) => filter === 'All work' || (filter === 'Live products' && !!p.demo) || (filter === 'Odoo' && !!p.odoo) || (filter === 'AI' && p.domain === 'ai') || (filter === 'Automation' && !!p.automation);
export default function WorkCollection() {
  const [filter, setFilter] = useState('Odoo');
  const selected = projects.filter(p => matchesFilter(p, filter));
  return <><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}<span>{String(projects.filter(p => matchesFilter(p, f)).length).padStart(2, '0')}</span></button>)}</div><p className="sr-only" aria-live="polite">{selected.length} projects shown</p><div className="work-grid">{selected.map(p => <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />)}</div></>;
}

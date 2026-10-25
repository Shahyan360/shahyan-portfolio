'use client';
import { useState } from 'react';
import LiveProject from './LiveProject';
import { projects } from '@/content/projects';
const builds = ['lizz', 'aster', 'meridian'].map(slug => projects.find(p => p.slug === slug)!);
export default function LiveGallery() {
  const [selected, setSelected] = useState(0);
  const build = builds[selected];
  return <section className="live-gallery" id="live-products" aria-labelledby="live-gallery-title"><div className="live-gallery-heading"><div><span className="eyebrow">THE INTERACTIVE COLLECTION</span><h3 id="live-gallery-title">Less looking. <em>More exploring.</em></h3></div><div className="live-gallery-tabs" role="group" aria-label="Choose a live build">{builds.map((p, i)=><button key={p.slug} aria-pressed={selected === i} onClick={()=>setSelected(i)}>{p.name}<span>↗</span></button>)}</div></div><LiveProject key={build.slug} name={build.name} url={build.demo!} website={build.slug === 'meridian'} /></section>;
}

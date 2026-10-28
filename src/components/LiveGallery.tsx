'use client';
import { useState } from 'react';
import LiveProject from './LiveProject';
import { projects } from '@/content/projects';
const builds = ['lizz', 'aster', 'meridian', 'ecommerce-order-inventory-sync'].map(slug => projects.find(p => p.slug === slug)!);
export default function LiveGallery() {
  const [selected, setSelected] = useState(0);
  return <section className="live-gallery" id="live-products" aria-labelledby="live-gallery-title"><div className="live-gallery-heading"><div><span className="eyebrow">THE INTERACTIVE COLLECTION</span><h3 id="live-gallery-title">Less looking. <em>More exploring.</em></h3></div><div className="live-gallery-tabs" role="group" aria-label="Choose a live build">{builds.map((p, i)=><button key={p.slug} aria-pressed={selected === i} aria-controls={`build-${p.slug}`} onClick={()=>setSelected(i)}>{p.name}<span aria-hidden="true">↗</span></button>)}</div></div>{builds.map((build, index) => <div key={build.slug} id={`build-${build.slug}`} hidden={selected !== index}><LiveProject name={build.name} url={build.demo!} website={build.slug === 'meridian'} visible={selected === index} /></div>)}</section>;
}

import type { Metadata } from 'next';
import WorkCollection from '@/components/WorkCollection';
import { ContactFinale } from '@/components/Shell';
export const metadata: Metadata = { title: 'Selected work', alternates: { canonical: '/work/' }, description: 'Explore interactive Lizz, Aster, and Meridian builds, plus detailed Odoo enterprise case studies.' };
export default function WorkPage() { return <><section className="page-heading section-wrap"><span className="eyebrow">THE WORK / 05 SELECTED SYSTEMS</span><h1>Ideas, made<br /><em>operational.</em><span className="accent">↗</span></h1><div className="page-heading-bottom"><p>Intelligent products, connected operations, and the engineering beneath them.</p><span>LIVE PRODUCTS · ENTERPRISE SYSTEMS</span></div></section><section className="section-wrap work-collection" aria-label="Project collection"><WorkCollection /></section><ContactFinale /></>; }

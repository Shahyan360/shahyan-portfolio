import type { Metadata } from 'next';
import WorkCollection from '@/components/WorkCollection';
import { ContactFinale } from '@/components/Shell';
import { projects } from '@/content/projects';
export const metadata: Metadata = { title: 'Odoo implementations & work', alternates: { canonical: '/work/' }, description: 'Odoo 17–19 implementations by Muhammad Shahyan Khalid, Senior Odoo Developer: distribution, manufacturing, multi-company ERP, education, integrations, and automation.' };
export default function WorkPage() { return <><section className="page-heading section-wrap"><span className="eyebrow">THE WORK / {String(projects.length).padStart(2, '0')} SELECTED SYSTEMS</span><h1>Odoo, delivered.<br /><em>Built for operations.</em><span className="accent">↗</span></h1><div className="page-heading-bottom"><p>Odoo implementations I have delivered, followed by the products and automations I build around connected business operations.</p><span>ODOO IMPLEMENTATION · CUSTOM DEVELOPMENT</span></div></section><section className="section-wrap work-collection" aria-label="Project collection"><WorkCollection /></section><ContactFinale /></>; }

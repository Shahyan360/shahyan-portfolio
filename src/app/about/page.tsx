import type { Metadata } from 'next';
import Link from '@/components/SiteLink';
import Portrait from '@/components/Portrait';
import { profile } from '@/content/profile';
import { odooSpecialisms } from '@/content/delivery';
import { ContactFinale } from '@/components/Shell';
import { Arrow } from '@/components/Arrow';

export const metadata: Metadata = { title: 'About', alternates: { canonical: '/about/' }, description: 'Muhammad Shahyan Khalid, Senior Odoo Developer and Solution Consultant: ERP implementation, operational remediation, manufacturing, and integrations since 2022.' };

export default function AboutPage() {
  return <>
    <section className="page-heading section-wrap"><span className="eyebrow">THE HUMAN / BEHIND THE SYSTEMS</span><h1>A builder,<br /><em>by understanding.</em></h1></section>
    <section className="about-intro section-wrap"><figure><Portrait /><figcaption>MUHAMMAD SHAHYAN KHALID / LAHORE, PAKISTAN</figcaption></figure><div>
      <span className="eyebrow">HELLO, I’M SHAHYAN</span><h2>Software should make<br />the complicated<br /><em>feel considered.</em></h2>
      <p className="large-copy">{profile.intro}</p>
      <p>My route into engineering began with real operations: school administration, accounting, records, and the people trying to keep everything moving. Introducing ERP systems made the connection clear. Better software starts with understanding the work.</p>
      <p>I have implemented Odoo for distribution, manufacturing, multi-company businesses, and school operations, working with US and UAE business contexts. My work connects custom Python/ORM development with functional configuration, financial controls, migration, Shopify, Stripe, and QuickBooks integrations. AI and web automation extend that ERP foundation.</p>
      <Link className="text-link" href="/experience/#delivery">How I deliver an Odoo implementation <Arrow diagonal /></Link>
    </div></section>
    <section className="philosophy-section section-wrap odoo-specialisms" aria-labelledby="specialisms-title"><span className="eyebrow">ODOO / IMPLEMENTATION DEPTH</span><h2 id="specialisms-title">Close to the records.<br /><em>Connected to the operation.</em></h2><div className="philosophy-grid">{odooSpecialisms.map((specialism, index) => <article key={specialism.title}><span className="eyebrow">0{index + 1}</span><h3>{specialism.title}</h3><p>{specialism.text}</p></article>)}</div></section>
    <section className="philosophy-section section-wrap"><span className="eyebrow">MY ENGINEERING PHILOSOPHY</span><div className="philosophy-grid">{[
      { title: 'Understand before abstracting.', text: 'A workflow is more than its happy path. Listen to the person using it, map the exceptions, and name the actual problem.' },
      { title: 'Connect with intention.', text: 'APIs, databases, and interfaces are boundaries between decisions. Make ownership explicit and failures observable.' },
      { title: 'Keep people in the loop.', text: 'Intelligence should support judgment. Make the source, uncertainty, and next action clear—especially when AI is involved.' },
    ].map((principle, index) => <article key={principle.title}><span className="eyebrow">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></section>
    <section className="education-section section-wrap"><span className="eyebrow">EDUCATION / CONTINUING PRACTICE</span><div><h2>{profile.education}</h2><p>{profile.university}</p><span>Graduated <time dateTime="2026-06">{profile.graduation}</time></span><div className="profile-languages"><span className="eyebrow">LANGUAGES</span>{profile.languages.map(language => <p key={language}>{language}</p>)}</div></div><Link className="text-link" href="/playground/">Inside the lab <Arrow diagonal /></Link></section>
    <ContactFinale />
  </>;
}

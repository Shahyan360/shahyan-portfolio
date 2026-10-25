import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './globals.css';
import { Header, Footer } from '@/components/Shell';
import MotionLayer from '@/components/MotionLayer';
import { profile } from '@/content/profile';
import { siteOrigin as origin } from '@/lib/site';

export const metadata: Metadata = { metadataBase: new URL(origin), title: { default: 'Shahyan — Software Engineer & Systems Builder', template: '%s — Shahyan' }, description: 'Muhammad Shahyan Khalid builds intelligent systems, enterprise ERP platforms, and thoughtful full-stack products. Explore Lizz, Aster ERP, Meridian, and Odoo implementations.', openGraph: { title: 'Shahyan — Systems that think, connect, and scale.', description: 'Software engineering at the intersection of AI, enterprise ERP, and the web.', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', images: ['/og.png'] }, icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><MotionLayer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.title, url: origin, sameAs: [profile.github, profile.linkedin], email: `mailto:${profile.email}`, address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' } }).replace(/</g, '\\u003c') }} /></body></html>;
}

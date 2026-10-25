import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { siteOrigin as origin } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return ['', 'work', 'experience', 'about', 'playground', 'contact', ...projects.map(p => `work/${p.slug}`)].map(route => ({ url: `${origin}/${route ? route + '/' : ''}`, changeFrequency: 'monthly', priority: route === '' ? 1 : .7 })); }

import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://shahyan-systems-portfolio.copperfrost647061.chatgpt.site'; return ['', 'work', 'experience', 'about', 'playground', 'contact', ...projects.map(p => `work/${p.slug}`)].map(route => ({ url: `${origin}/${route ? route + '/' : ''}`, changeFrequency: 'monthly', priority: route === '' ? 1 : .7 })); }

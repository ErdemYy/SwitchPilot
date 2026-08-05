import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://switchpilot.io';
  const routes = [
    '',
    '/marketing',
    '/download',
    '/pricing',
    '/features',
    '/blog',
    '/about',
    '/contact',
    '/status-page',
    '/privacy',
    '/terms',
    '/docs',
    '/docs/api-explorer',
    '/docs/developer',
    '/docs/architecture',
    '/docs/learning',
    '/docs/troubleshooting',
    '/docs/changelog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

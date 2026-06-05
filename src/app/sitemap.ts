import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://compta-soft-site.vercel.app'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/fonctionnalites`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}

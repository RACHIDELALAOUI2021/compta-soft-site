import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://compta-soft-site.vercel.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://compta-soft-site.vercel.app/#features', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://compta-soft-site.vercel.app/#tarifs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://compta-soft-site.vercel.app/#contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}

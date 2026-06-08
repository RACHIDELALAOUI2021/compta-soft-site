import { MetadataRoute } from 'next'

const BASE = 'https://comptasoftmaroc.com'

const BLOG_SLUGS = [
  'simpl-tva-maroc-2026',
  'attestation-regularite-fiscale-art-117',
  'ras-is-dividendes-maroc-2026',
  'fec-maroc-obligations-export',
  'delais-paiement-loi-69-21',
  'liasse-fiscale-simpl-is-maroc',
  'cgnc-plan-comptable-maroc',
  'cotisation-minimale-maroc-2026',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogArticles: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date('2026-06-08'),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/fonctionnalites`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/tarifs`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog`, lastModified: new Date('2026-06-08'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/documentation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/guide-cgnc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/changelog`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/partenaires`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...blogArticles,
  ]
}

import { MetadataRoute } from 'next'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://statica.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${appUrl}/acerca-de`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${appUrl}/caracteristicas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${appUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${appUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

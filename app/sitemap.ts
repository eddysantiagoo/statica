import { MetadataRoute } from 'next'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://gestordepartes.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Páginas de Caterpillar por ciudad
    {
      url: `${appUrl}/repuestos-caterpillar-medellin`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${appUrl}/repuestos-caterpillar-bogota`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${appUrl}/repuestos-caterpillar-cali`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${appUrl}/repuestos-caterpillar-barranquilla`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${appUrl}/repuestos-caterpillar-bucaramanga`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${appUrl}/repuestos-caterpillar-pereira`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Agregar más marcas y ciudades según necesites
    // Ejemplo:
    // {
    //   url: `${appUrl}/repuestos-komatsu-medellin`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
  ]
}

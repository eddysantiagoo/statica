import { Metadata } from "next";
import { BrandData } from "@/data/types";

/**
 * Genera metadata SEO optimizada para páginas de marca + ciudad
 * Ejemplo: /repuestos-caterpillar-medellin
 */
export function generateBrandCityMetadata(
  brandData: BrandData,
  cityName: string,
  baseUrl: string = "https://gestordepartes.com"
): Metadata {
  const location = brandData.locations.find(
    loc => loc.city.toLowerCase() === cityName.toLowerCase()
  );
  
  if (!location) {
    throw new Error(`Ciudad ${cityName} no encontrada en brandData.locations`);
  }

  const brandLower = brandData.brandName.toLowerCase();
  const cityLower = location.city.toLowerCase();
  const urlSlug = `repuestos-${brandData.brandSlug}-${cityLower}`;

  return {
    title: `Repuestos ${brandData.brandName} ${location.city} | Gestor de Partes ${location.region}`,
    description: `Gestor de Partes, distribuidor autorizado de repuestos ${brandData.brandName} en ${location.city} y ${location.region}. Stock permanente CAT, entrega inmediata en ${location.coverage.slice(0, 4).join(", ")}. Garantía de autenticidad.`,
    
    // Keywords específicas de ciudad
    keywords: [
      `repuestos ${brandLower} ${cityLower}`,
      `gestor de partes ${cityLower}`,
      `repuestos cat ${cityLower}`,
      `repuestos ${brandLower} ${location.region.toLowerCase()}`,
      `distribuidor ${brandLower} ${cityLower}`,
      ...location.coverage.map(area => 
        `repuestos ${brandLower} ${area.toLowerCase()}`
      ),
      ...brandData.productCategories.slice(0, 3).map(cat => 
        `${cat.category.toLowerCase()} ${brandLower} ${cityLower}`
      ),
      `gestor de partes ${location.region.toLowerCase()}`,
    ],
    
    // Open Graph
    openGraph: {
      title: `Repuestos ${brandData.brandName} ${location.city} | Gestor de Partes`,
      description: `Distribuidor autorizado de repuestos CAT en ${location.city} y toda ${location.region}. Stock permanente y entrega inmediata.`,
      url: `${baseUrl}/${urlSlug}`,
      siteName: "Gestor de Partes",
      images: [
        {
          url: `${baseUrl}/${brandData.brandSlug}/og-${cityLower}.jpg`,
          width: 1200,
          height: 630,
          alt: `Gestor de Partes - Repuestos ${brandData.brandName} ${location.city}`,
          type: "image/jpeg",
        },
      ],
      locale: "es_CO",
      type: "website",
    },
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: `Repuestos ${brandData.brandName} ${location.city} | Gestor de Partes`,
      description: `Distribuidor autorizado en ${location.city} y ${location.region}. Stock permanente CAT.`,
      images: [`${baseUrl}/${brandData.brandSlug}/og-${cityLower}.jpg`],
      creator: "@gestordepartes",
    },
    
    // Canonical URL
    alternates: {
      canonical: `${baseUrl}/${urlSlug}`,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Genera metadata SEO optimizada para cada página de marca (sin ciudad específica)
 * Ejemplo: /repuestos-caterpillar-colombia
 */
export function generateBrandMetadata(
  brandData: BrandData,
  baseUrl: string = "https://gestordepartes.com"
): Metadata {
  const brandSlug = brandData.brandSlug;
  
  return {
    title: brandData.metaTitle,
    description: brandData.metaDescription,
    
    // Keywords específicas de la marca + ubicaciones
    keywords: [
      `repuestos ${brandData.brandName.toLowerCase()}`,
      "gestor de partes",
      `repuestos ${brandData.brandName.toLowerCase()} colombia`,
      ...brandData.locations.map(loc => 
        `repuestos ${brandData.brandName.toLowerCase()} ${loc.city.toLowerCase()}`
      ),
      `distribuidor ${brandData.brandName.toLowerCase()} colombia`,
      `gestor de partes ${brandData.brandName.toLowerCase()}`,
      ...brandData.equipmentTypes.map(eq => 
        `${eq.toLowerCase()} ${brandData.brandName.toLowerCase()}`
      ),
    ],
    
    // Open Graph para redes sociales
    openGraph: {
      title: brandData.metaTitle,
      description: brandData.metaDescription,
      url: `${baseUrl}/${brandSlug}`,
      siteName: "Gestor de Partes",
      images: [
        {
          url: `${baseUrl}/${brandSlug}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Gestor de Partes - Repuestos ${brandData.brandName} Colombia`,
          type: "image/jpeg",
        },
      ],
      locale: "es_CO",
      type: "website",
    },
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: brandData.metaTitle,
      description: brandData.metaDescription,
      images: [`${baseUrl}/${brandSlug}/og-image.jpg`],
      creator: "@gestordepartes",
    },
    
    // Canonical URL
    alternates: {
      canonical: `${baseUrl}/${brandSlug}`,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Genera metadata para ubicaciones específicas
 * Ejemplo: /caterpillar/medellin
 */
export function generateLocationMetadata(
  brandData: BrandData,
  city: string,
  baseUrl: string = "https://gestordepartes.com"
): Metadata {
  const location = brandData.locations.find(loc => 
    loc.city.toLowerCase() === city.toLowerCase()
  );
  
  if (!location) {
    throw new Error(`Location ${city} not found`);
  }
  
  return {
    title: `Repuestos ${brandData.brandName} en ${location.city} | Gestor de Partes`,
    description: `Gestor de Partes distribuidor de repuestos ${brandData.brandName} en ${location.city}, ${location.region}. Stock permanente y entrega inmediata. Cobertura en ${location.coverage.join(", ")}.`,
    
    keywords: [
      `repuestos ${brandData.brandName.toLowerCase()} ${location.city.toLowerCase()}`,
      `gestor de partes ${location.city.toLowerCase()}`,
      `distribuidor ${brandData.brandName.toLowerCase()} ${location.city.toLowerCase()}`,
      ...location.coverage.map(area => 
        `repuestos ${brandData.brandName.toLowerCase()} ${area.toLowerCase()}`
      ),
    ],
    
    openGraph: {
      title: `Repuestos ${brandData.brandName} en ${location.city} | Gestor de Partes`,
      description: `Distribuidor autorizado en ${location.city}, ${location.region}. Stock permanente y entrega inmediata.`,
      url: `${baseUrl}/${brandData.brandSlug}/${city.toLowerCase()}`,
      siteName: "Gestor de Partes",
      locale: "es_CO",
      type: "website",
    },
    
    alternates: {
      canonical: `${baseUrl}/${brandData.brandSlug}/${city.toLowerCase()}`,
    },
  };
}

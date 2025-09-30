import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Wrench, Package, Truck, Clock, Shield } from "lucide-react";
import Script from "next/script";
import { BrandData } from "@/data/types";

interface BrandSeoSectionProps {
  data: BrandData;
}

export default function BrandSeoSection({ data }: BrandSeoSectionProps) {
  // Schema optimizado para LocalBusiness + Service
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": `Repuestos ${data.brandName} Colombia - Distribuidor Autorizado`,
    "description": data.metaDescription,
    "brand": {
      "@type": "Brand",
      "name": data.brandName
    },
    "areaServed": data.locations.map(loc => ({
      "@type": "City",
      "name": loc.city,
      "containedInPlace": {
        "@type": "State",
        "name": loc.region
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Catálogo Repuestos ${data.brandName}`,
      "itemListElement": data.productCategories.map((part) => ({
        "@type": "OfferCatalog",
        "name": part.category,
        "itemListElement": part.items.map(item => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": `${item} ${data.brandName}`,
            "brand": {
              "@type": "Brand",
              "name": data.brandName
            }
          }
        }))
      }))
    },
    "priceRange": "$$",
    "paymentAccepted": "Efectivo, Tarjeta, Transferencia",
    "currenciesAccepted": "COP"
  };

  return (
    <>
      <Script
        id={`${data.brandSlug}-business-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      
      <section 
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30"
        style={{
          '--brand-color': data.brandColor,
        } as React.CSSProperties}
      >
        <div className="container px-4 md:px-6">
          
          {/* Header SEO optimizado */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {data.heroTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
              {data.heroDescription}
            </p>
          </div>

          {/* Categorías de Repuestos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Catálogo Completo de Repuestos {data.brandName}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.productCategories.map((category, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ 
                          backgroundColor: `${data.brandColor}20`,
                        }}
                      >
                        <Package 
                          className="h-5 w-5" 
                          style={{ color: data.brandColor }}
                        />
                      </div>
                      <h4 className="font-bold text-sm">{category.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span style={{ color: data.brandColor }} className="mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cobertura Nacional */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Repuestos {data.brandName} en tu Ciudad
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.locations.map((location) => (
                <Card key={location.city} className="hover:shadow-md transition-shadow py-0">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <h4 className="font-bold text-lg">{location.city}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">{location.region}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {location.coverage.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ventajas Competitivas */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-green-500/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Entrega Inmediata</h4>
                <p className="text-sm text-muted-foreground">
                  Stock permanente de los repuestos más demandados. Envío el mismo día para las principales ciudades.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-blue-500/10 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">100% Originales</h4>
                <p className="text-sm text-muted-foreground">
                  Todos nuestros repuestos {data.brandName} son originales con garantía de fábrica y trazabilidad completa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full mb-4"
                  style={{ backgroundColor: `${data.brandColor}20` }}
                >
                  <Truck className="h-6 w-6" style={{ color: data.brandColor }} />
                </div>
                <h4 className="font-bold mb-2">Cobertura Nacional</h4>
                <p className="text-sm text-muted-foreground">
                  Servimos todas las regiones de Colombia con logística especializada para maquinaria pesada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contenido SEO Rico - Keywords Long-tail */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Expertos en Repuestos {data.brandName} para Todo Tipo de Maquinaria
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {data.seoContent.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Wrench className="h-5 w-5" style={{ color: data.brandColor }} />
                        {section.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold mb-3">Equipos {data.brandName} que Atendemos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.equipmentTypes.map((equipment, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-background rounded-full text-xs font-medium border"
                      >
                        {equipment}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  {data.seoContent.features.map((feature, idx) => (
                    <div key={idx}>
                      <h5 className="font-semibold mb-2">
                        {feature.emoji} {feature.title}
                      </h5>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </>
  );
}

import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schema.org para el sitio web
export function WebsiteJsonLd() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://gestordepartes.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gestor de Partes",
    description:
      "Gestor de Partes - Distribuidor autorizado de repuestos para maquinaria pesada en Colombia. Caterpillar, Komatsu, Volvo y más marcas. Stock permanente en Medellín, Bogotá, Cali y toda Colombia.",
    url: appUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${appUrl}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-CO",
  };

  return <JsonLd data={schema} />;
}

// Schema.org para organización
export function OrganizationJsonLd() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://gestordepartes.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gestor de Partes",
    url: appUrl,
    logo: `${appUrl}/logo.png`,
    description:
      "Gestor de Partes - Distribuidor autorizado de repuestos para maquinaria pesada en Colombia. Caterpillar, Komatsu, Volvo y más marcas. Stock permanente en Medellín, Bogotá, Cali y toda Colombia.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Atención al Cliente",
      availableLanguage: ["Español"],
      telephone: "+57-300-1234567",
      areaServed: "CO",
    },
    sameAs: [
      "https://twitter.com/gestordepartes",
      "https://linkedin.com/company/gestordepartes",
      "https://facebook.com/gestordepartes",
    ],
  };

  return <JsonLd data={schema} />;
}

import Script from "next/script";

interface JsonLdProps {
  data: Record<string, any>;
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
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://statica.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Statica",
    description:
      "Plataforma web moderna para soluciones innovadoras. Transforma tu flujo de trabajo con nuestras características de vanguardia y experiencia de usuario perfecta.",
    url: appUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${appUrl}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-ES",
  };

  return <JsonLd data={schema} />;
}

// Schema.org para organización
export function OrganizationJsonLd() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://statica.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Statica",
    url: appUrl,
    logo: `${appUrl}/logo.png`,
    description:
      "Plataforma web moderna para soluciones innovadoras. Transforma tu flujo de trabajo con nuestras características de vanguardia y experiencia de usuario perfecta.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Atención al Cliente",
      availableLanguage: ["Español"],
    },
    sameAs: [
      "https://twitter.com/statica",
      "https://linkedin.com/company/statica",
      "https://github.com/statica",
    ],
  };

  return <JsonLd data={schema} />;
}

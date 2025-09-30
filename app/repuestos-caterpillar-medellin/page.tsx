import { Metadata } from "next";
import ParametrizedPage from "@/components/parametrized-page";
import { caterpillarPageData } from "@/data/pages/caterpillar-page";
import { caterpillarData } from "@/data/brands/caterpillar";

// ✅ Metadata SEO específica para Caterpillar Medellín
export const metadata: Metadata = {
  title: "Repuestos Caterpillar Medellín | Gestor de Partes Antioquia",
  description: "Gestor de Partes, distribuidor autorizado de repuestos Caterpillar en Medellín y Antioquia. Stock permanente CAT, entrega inmediata en Medellín, Envigado, Itagüí, Bello, Rionegro. Garantía de autenticidad.",
  keywords: [
    "repuestos caterpillar medellin",
    "gestor de partes medellin",
    "repuestos cat medellin",
    "repuestos caterpillar antioquia",
    "distribuidor caterpillar medellin",
    "excavadoras caterpillar medellin",
    "tren de rodaje caterpillar medellin",
    "cilindros hidraulicos cat medellin",
    "repuestos cat envigado",
    "repuestos cat itagui",
    "repuestos cat rionegro",
    "filtros caterpillar medellin",
  ],
  openGraph: {
    title: "Repuestos Caterpillar Medellín | Gestor de Partes",
    description: "Distribuidor autorizado de repuestos CAT en Medellín y toda Antioquia. Stock permanente y entrega inmediata.",
    url: "https://gestordepartes.com/repuestos-caterpillar-medellin",
    siteName: "Gestor de Partes",
    images: [
      {
        url: "https://gestordepartes.com/caterpillar/og-medellin.jpg",
        width: 1200,
        height: 630,
        alt: "Gestor de Partes - Repuestos Caterpillar Medellín",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repuestos Caterpillar Medellín | Gestor de Partes",
    description: "Distribuidor autorizado en Medellín y Antioquia. Stock permanente CAT.",
    images: ["https://gestordepartes.com/caterpillar/og-medellin.jpg"],
  },
  alternates: {
    canonical: "https://gestordepartes.com/repuestos-caterpillar-medellin",
  },
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

export default async function CaterpillarMedellinPage() {
  return (
    <ParametrizedPage 
      pageData={caterpillarPageData} 
      brandData={caterpillarData} 
    />
  );
}

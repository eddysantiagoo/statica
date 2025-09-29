import { BrandData } from "@/data/types";

export const caterpillarData: BrandData = {
  // Información básica de la marca
  brandName: "Caterpillar",
  brandSlug: "caterpillar",
  brandColor: "#FFCD11", // Amarillo Caterpillar
  brandLogo: "/brands/caterpillar-logo.webp",
  
  // SEO
  metaTitle: "Repuestos Caterpillar Originales en Colombia | Distribuidor Autorizado",
  metaDescription: "Distribuidor autorizado de repuestos CAT con stock permanente. Servicio a Medellín, Bogotá, Cali y toda Colombia. Garantía de autenticidad.",
  
  // Contenido del Hero/Header
  heroTitle: "Repuestos Caterpillar Originales en Colombia",
  heroDescription: "Distribuidor autorizado de repuestos CAT con stock permanente. Servicio a Medellín, Bogotá, Cali, Barranquilla y todas las ciudades de Colombia. Garantía de autenticidad y compatibilidad perfecta con tu maquinaria Caterpillar.",
  
  // Categorías de productos
  productCategories: [
    {
      category: "Tren de Rodaje",
      icon: "package",
      items: [
        "Rodillos inferiores",
        "Rodillos superiores",
        "Ruedas guía",
        "Zapatas",
        "Pines y bujes",
        "Eslabones"
      ]
    },
    {
      category: "Sistemas Hidráulicos",
      icon: "wrench",
      items: [
        "Cilindros hidráulicos",
        "Bombas hidráulicas",
        "Válvulas de control",
        "Mangueras de alta presión",
        "Sellos y empaques"
      ]
    },
    {
      category: "Motor y Transmisión",
      icon: "cog",
      items: [
        "Filtros de aceite",
        "Filtros de combustible",
        "Filtros de aire",
        "Turbocargadores",
        "Inyectores",
        "Bombas de agua"
      ]
    },
    {
      category: "Implementos y Accesorios",
      icon: "tool",
      items: [
        "Cucharones",
        "Dientes de excavadora",
        "Cuchillas",
        "Adaptadores",
        "Puntas",
        "Protectores"
      ]
    }
  ],
  
  // Tipos de equipos que maneja esta marca
  equipmentTypes: [
    "Excavadoras",
    "Retroexcavadoras",
    "Cargadores frontales",
    "Motoniveladoras",
    "Compactadores",
    "Bulldozers",
    "Minicargadores",
    "Tractores de cadenas"
  ],
  
  // Ciudades con keywords específicas
  locations: [
    {
      city: "Medellín",
      region: "Antioquia",
      keywords: "repuestos caterpillar medellin, cat medellin, repuestos cat antioquia",
      coverage: ["Medellín", "Envigado", "Itagüí", "Bello", "Sabaneta", "La Estrella", "Copacabana", "Rionegro"]
    },
    {
      city: "Bogotá",
      region: "Cundinamarca",
      keywords: "repuestos caterpillar bogota, cat bogota, repuestos cat cundinamarca",
      coverage: ["Bogotá", "Soacha", "Chía", "Cajicá", "Zipaquirá", "Facatativá", "Madrid", "Funza"]
    },
    {
      city: "Cali",
      region: "Valle del Cauca",
      keywords: "repuestos caterpillar cali, cat cali, repuestos cat valle",
      coverage: ["Cali", "Yumbo", "Palmira", "Jamundí", "Candelaria", "Tuluá"]
    },
    {
      city: "Barranquilla",
      region: "Atlántico",
      keywords: "repuestos caterpillar barranquilla, cat barranquilla, repuestos cat costa",
      coverage: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Cartagena", "Santa Marta"]
    },
    {
      city: "Bucaramanga",
      region: "Santander",
      keywords: "repuestos caterpillar bucaramanga, cat bucaramanga, repuestos cat santander",
      coverage: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja"]
    },
    {
      city: "Pereira",
      region: "Risaralda",
      keywords: "repuestos caterpillar pereira, cat pereira, repuestos cat eje cafetero",
      coverage: ["Pereira", "Dosquebradas", "Armenia", "Manizales", "La Virginia"]
    }
  ],
  
  // Contenido SEO rico (Long-tail keywords)
  seoContent: {
    sections: [
      {
        title: "Repuestos CAT en Medellín y Antioquia",
        icon: "wrench",
        content: "Como distribuidores autorizados de repuestos Caterpillar en Medellín, ofrecemos el más amplio inventario de piezas CAT en Antioquia. Atendemos proyectos de construcción, minería y obras civiles con entrega inmediata en Medellín, Rionegro, Apartadó y todo el departamento. Nuestros repuestos Cat originales incluyen cilindros hidráulicos, filtros, tren de rodaje y componentes de motor."
      },
      {
        title: "Proveedor Caterpillar en Bogotá",
        icon: "package",
        content: "Distribuimos repuestos Caterpillar en Bogotá y toda Cundinamarca con stock permanente. Especializados en repuestos CAT para excavadoras, cargadores frontales, retroexcavadoras y maquinaria pesada. Servicio técnico especializado y asesoría para identificar el repuesto Caterpillar correcto según número de parte y modelo de equipo."
      }
    ],
    features: [
      {
        title: "Tren de Rodaje CAT",
        emoji: "🔧",
        description: "Rodillos, zapatas, pines y bujes Caterpillar originales. Mayor durabilidad para excavadoras 320, 330, 336 y bulldozers D6, D8."
      },
      {
        title: "Sistemas Hidráulicos",
        emoji: "⚙️",
        description: "Cilindros hidráulicos, bombas y válvulas CAT. Especialistas en reparación y reemplazo para maquinaria pesada Caterpillar."
      },
      {
        title: "Filtros y Mantenimiento",
        emoji: "🛢️",
        description: "Kits completos de filtros Caterpillar. Aceites, lubricantes y consumibles para mantenimiento preventivo de equipos CAT."
      }
    ]
  }
};

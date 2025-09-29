import { BrandData } from "@/data/types";

export const isuzuData: BrandData = {
  // Información básica de la marca
  brandName: "Isuzu",
  brandSlug: "isuzu",
  brandColor: "#E60012", // Rojo Isuzu
  brandLogo: "/brands/isuzu-logo.webp",
  
  // SEO
  metaTitle: "Repuestos Isuzu Originales en Colombia | Camiones y Motores Diesel",
  metaDescription: "Distribuidor de repuestos Isuzu para camiones, motores diesel y vehículos comerciales. Stock permanente en Medellín, Bogotá y toda Colombia.",
  
  // Contenido del Hero/Header
  heroTitle: "Repuestos Isuzu Originales para Camiones en Colombia",
  heroDescription: "Especialistas en repuestos Isuzu para camiones y motores diesel. Stock permanente de piezas originales con cobertura nacional. Servicio técnico especializado en Medellín, Bogotá, Cali y principales ciudades.",
  
  // Categorías de productos
  productCategories: [
    {
      category: "Motores Diesel",
      icon: "package",
      items: [
        "Bombas de inyección",
        "Inyectores",
        "Turbocargadores",
        "Culatas",
        "Pistones y anillos",
        "Cigüeñales"
      ]
    },
    {
      category: "Transmisión",
      icon: "wrench",
      items: [
        "Cajas de cambios",
        "Embragues",
        "Discos de embrague",
        "Volantes",
        "Sincronizadores",
        "Chicotes"
      ]
    },
    {
      category: "Sistema de Frenos",
      icon: "cog",
      items: [
        "Pastillas de freno",
        "Discos de freno",
        "Bombas de freno",
        "Cilindros maestros",
        "Mangueras",
        "Válvulas ABS"
      ]
    },
    {
      category: "Suspensión y Dirección",
      icon: "tool",
      items: [
        "Amortiguadores",
        "Muelles",
        "Brazos de dirección",
        "Rótulas",
        "Bujes",
        "Barras estabilizadoras"
      ]
    }
  ],
  
  // Tipos de equipos que maneja esta marca
  equipmentTypes: [
    "Camiones NQR",
    "Camiones NMR",
    "Camiones NPR",
    "Camiones FVR",
    "Camiones FSR",
    "Buses",
    "Pickups D-Max",
    "Motores 4HK1"
  ],
  
  // Ciudades con keywords específicas
  locations: [
    {
      city: "Medellín",
      region: "Antioquia",
      keywords: "repuestos isuzu medellin, camiones isuzu medellin, repuestos isuzu antioquia",
      coverage: ["Medellín", "Envigado", "Itagüí", "Bello", "Sabaneta", "La Estrella", "Copacabana", "Rionegro"]
    },
    {
      city: "Bogotá",
      region: "Cundinamarca",
      keywords: "repuestos isuzu bogota, camiones isuzu bogota, repuestos isuzu cundinamarca",
      coverage: ["Bogotá", "Soacha", "Chía", "Cajicá", "Zipaquirá", "Facatativá", "Madrid", "Funza"]
    },
    {
      city: "Cali",
      region: "Valle del Cauca",
      keywords: "repuestos isuzu cali, camiones isuzu cali, repuestos isuzu valle",
      coverage: ["Cali", "Yumbo", "Palmira", "Jamundí", "Candelaria", "Tuluá"]
    },
    {
      city: "Barranquilla",
      region: "Atlántico",
      keywords: "repuestos isuzu barranquilla, camiones isuzu barranquilla, repuestos isuzu costa",
      coverage: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Cartagena", "Santa Marta"]
    },
    {
      city: "Bucaramanga",
      region: "Santander",
      keywords: "repuestos isuzu bucaramanga, camiones isuzu bucaramanga, repuestos isuzu santander",
      coverage: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja"]
    },
    {
      city: "Pereira",
      region: "Risaralda",
      keywords: "repuestos isuzu pereira, camiones isuzu pereira, repuestos isuzu eje cafetero",
      coverage: ["Pereira", "Dosquebradas", "Armenia", "Manizales", "La Virginia"]
    }
  ],
  
  // Contenido SEO rico (Long-tail keywords)
  seoContent: {
    sections: [
      {
        title: "Repuestos Isuzu en Medellín y Antioquia",
        icon: "wrench",
        content: "Somos proveedores especializados de repuestos Isuzu en Medellín con amplio stock de piezas para camiones NQR, NMR, NPR y toda la línea de vehículos comerciales Isuzu. Atendemos empresas de transporte, flotas comerciales y talleres con entrega inmediata en Medellín y todo Antioquia. Nuestros repuestos Isuzu originales incluyen motores diesel, transmisiones, sistemas de frenos y suspensión."
      },
      {
        title: "Distribuidor Isuzu en Bogotá",
        icon: "package",
        content: "Distribuimos repuestos Isuzu en Bogotá y Cundinamarca con garantía de autenticidad. Especializados en repuestos para camiones Isuzu, motores diesel 4HK1, 4HG1 y toda la línea de transporte pesado. Asesoría técnica especializada para identificar el repuesto Isuzu correcto según modelo y año del vehículo."
      }
    ],
    features: [
      {
        title: "Motores Diesel Isuzu",
        emoji: "🔧",
        description: "Bombas de inyección, turbocargadores e inyectores Isuzu originales. Repuestos certificados para motores 4HK1, 4HG1, 4JJ1 y toda la línea diesel."
      },
      {
        title: "Transmisión y Embrague",
        emoji: "⚙️",
        description: "Cajas de cambios, embragues y discos Isuzu. Especialistas en reparación y reemplazo para camiones y vehículos comerciales."
      },
      {
        title: "Frenos y Suspensión",
        emoji: "🛞",
        description: "Sistema completo de frenos Isuzu. Pastillas, discos, bombas y componentes ABS. Suspensión y dirección con garantía de fábrica."
      }
    ]
  }
};

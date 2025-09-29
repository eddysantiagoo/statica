# Sistema de Páginas Completamente Parametrizable

Este sistema permite crear páginas completas (no solo secciones) parametrizables para cada marca que vendas.

## 📁 Estructura Completa

```
data/
  ├── types.ts                      # Tipos TypeScript
  ├── brands/                       # Datos de marcas (SEO)
  │   ├── caterpillar.ts
  │   └── isuzu.ts
  └── pages/                        # Datos de páginas completas
      ├── caterpillar-page.ts
      └── isuzu-page.ts

components/
  ├── brand-seo-section.tsx         # Sección SEO por marca
  └── parametrized-page.tsx         # Página completa parametrizable

app/
  └── page.tsx                      # Página principal (Caterpillar)
```

## 🎯 Diferencias entre BrandData y PageData

### **BrandData** (SEO/Marca)
- Información de la marca
- Productos y categorías
- Ubicaciones y keywords
- Contenido SEO rico
- **Se usa en**: `<BrandSeoSection data={brandData} />`

### **PageData** (Página completa)
- Hero section
- Todas las secciones de la página
- CTAs y promociones
- Contenido general
- **Se usa en**: `<ParametrizedPage pageData={pageData} brandData={brandData} />`

## 🚀 Cómo crear una nueva página completa

### 1. Crear datos de página

```typescript
// data/pages/nueva-marca-page.ts
import { PageData } from "../types";

export const nuevaMarcaPageData: PageData = {
  hero: {
    title: "Título principal",
    description: "Descripción del hero",
    primaryButton: "Botón principal",
    secondaryButton: "Botón secundario"
  },
  
  whyOriginal: {
    title: "¿Por qué comprar repuestos [Marca]?",
    image: "/images/marca.jpg",
    imageAlt: "Repuestos Marca",
    benefits: [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3"
    ]
  },
  
  benefits: {
    title: "Beneficios de usar repuestos originales",
    items: [
      {
        title: "Beneficio 1",
        description: "Descripción del beneficio..."
      }
    ]
  },
  
  categories: {
    title: "Líneas de repuestos",
    items: [
      {
        title: "Categoría 1",
        description: "Descripción...",
        image: "/images/cat1.jpg",
        buttonText: "Ver más"
      }
    ]
  },
  
  coverage: {
    title: "Cobertura nacional",
    description: "Descripción de cobertura...",
    image: "/images/coverage.jpg",
    imageAlt: "Cobertura"
  },
  
  cta1: {
    title: "CTA principal",
    description: "Descripción CTA...",
    buttonText: "Acción",
    image: "/images/cta1.jpg",
    imageAlt: "CTA 1",
    backgroundColor: "black", // black | yellow | white
    textColor: "white",       // white | black
    buttonColor: "yellow"     // yellow | black | white
  },
  
  cta2: {
    title: "Promociones",
    description: "Descripción promociones...",
    buttonText: "Obtener",
    image: "/images/promo.jpg",
    imageAlt: "Promociones",
    backgroundColor: "yellow",
    textColor: "black"
  },
  
  ctaFinal: {
    title: "CTA final",
    description: "Descripción final...",
    buttonText: "Acción final",
    icon: "Chrome" // Icono de Lucide
  }
};
```

### 2. Crear datos de marca (SEO)

```typescript
// data/brands/nueva-marca.ts
import { BrandData } from "../types";

export const nuevaMarcaData: BrandData = {
  brandName: "Nueva Marca",
  brandSlug: "nueva-marca",
  brandColor: "#HEXCOLOR",
  // ... resto de datos SEO
};
```

### 3. Crear página

```tsx
// app/nueva-marca/page.tsx
import ParametrizedPage from "@/components/parametrized-page";
import { nuevaMarcaPageData } from "@/data/pages/nueva-marca-page";
import { nuevaMarcaData } from "@/data/brands/nueva-marca";

export default function NuevaMarcaPage() {
  return (
    <ParametrizedPage 
      pageData={nuevaMarcaPageData} 
      brandData={nuevaMarcaData} 
    />
  );
}
```

## 🎨 Personalización Visual

### Colores de CTA

```typescript
cta1: {
  backgroundColor: "black",  // Fondo negro
  textColor: "white",       // Texto blanco
  buttonColor: "yellow"     // Botón amarillo
}

cta2: {
  backgroundColor: "yellow", // Fondo amarillo
  textColor: "black"         // Texto negro
}
```

### Iconos disponibles

```typescript
ctaFinal: {
  icon: "Chrome"  // Cualquier icono de Lucide React
}
```

## 📊 Secciones Incluidas

1. **Hero** - Título, descripción, botones
2. **Why Original** - ¿Por qué comprar originales?
3. **Benefits** - Beneficios de usar originales
4. **Categories** - Líneas de repuestos
5. **Coverage** - Cobertura nacional
6. **Brand SEO** - Sección SEO por marca (automática)
7. **FAQ** - Preguntas frecuentes (automática)
8. **CTA 1** - Call to action principal
9. **CTA 2** - Promociones
10. **CTA Final** - CTA final con icono

## 🔧 Ventajas del Sistema

### ✅ **Página completa parametrizable**
- Hero, secciones, CTAs, todo configurable
- Un solo componente para todas las páginas
- Fácil mantenimiento

### ✅ **Separación de responsabilidades**
- `PageData` → Contenido general de la página
- `BrandData` → SEO y datos específicos de marca
- Componentes reutilizables

### ✅ **Flexibilidad total**
- Colores personalizables por CTA
- Imágenes configurables
- Textos completamente editables
- Iconos dinámicos

### ✅ **Escalabilidad**
- 20+ páginas en minutos
- Solo cambiar datos, no código
- Consistencia visual automática

## 📝 Ejemplo de Uso Completo

```tsx
// app/caterpillar/page.tsx
import ParametrizedPage from "@/components/parametrized-page";
import { caterpillarPageData } from "@/data/pages/caterpillar-page";
import { caterpillarData } from "@/data/brands/caterpillar";

export default function CaterpillarPage() {
  return (
    <ParametrizedPage 
      pageData={caterpillarPageData} 
      brandData={caterpillarData} 
    />
  );
}
```

## 🎯 Flujo de Trabajo

1. **Crear datos de página** (5 min)
2. **Crear datos de marca** (5 min)  
3. **Crear archivo de página** (2 min)
4. **¡Listo!** Página completa funcional

## 📞 Próximas Mejoras (Fase 2)

- 🔄 Layouts diferentes por marca
- 🔄 Secciones opcionales
- 🔄 Galería de imágenes
- 🔄 Videos embebidos
- 🔄 Testimonios dinámicos
- 🔄 Formularios de contacto

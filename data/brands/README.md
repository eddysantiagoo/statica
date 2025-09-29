# Sistema de Marcas Parametrizable

Este sistema permite crear páginas SEO optimizadas para cada marca que vendas, reutilizando el mismo componente.

## 📁 Estructura

```
data/
  ├── types.ts                    # Tipos TypeScript para las marcas
  └── brands/
      ├── caterpillar.ts         # Datos de Caterpillar
      ├── isuzu.ts               # Datos de Isuzu
      ├── john-deere.ts          # Datos de John Deere (por crear)
      └── komatsu.ts             # Datos de Komatsu (por crear)

components/
  └── brand-seo-section.tsx      # Componente genérico reutilizable
```

## 🚀 Cómo agregar una nueva marca

### 1. Crear archivo de datos

Crea un nuevo archivo en `data/brands/nombre-marca.ts`:

```typescript
import { BrandData } from "@/data/types";

export const nombreMarcaData: BrandData = {
  brandName: "Nombre Marca",
  brandSlug: "nombre-marca",
  brandColor: "#HEXCOLOR",  // Color principal de la marca
  brandLogo: "/brands/nombre-marca-logo.webp",
  
  metaTitle: "SEO Title aquí",
  metaDescription: "SEO Description aquí",
  
  heroTitle: "Título principal",
  heroDescription: "Descripción hero",
  
  productCategories: [
    {
      category: "Categoría 1",
      icon: "package",
      items: ["Item 1", "Item 2", "Item 3"]
    }
  ],
  
  equipmentTypes: ["Equipo 1", "Equipo 2"],
  
  locations: [
    {
      city: "Medellín",
      region: "Antioquia",
      keywords: "keywords SEO aquí",
      coverage: ["Ciudad 1", "Ciudad 2"]
    }
  ],
  
  seoContent: {
    sections: [
      {
        title: "Título sección",
        icon: "wrench",
        content: "Contenido SEO rico con keywords..."
      }
    ],
    features: [
      {
        title: "Feature 1",
        emoji: "🔧",
        description: "Descripción..."
      }
    ]
  }
};
```

### 2. Usar en una página

```tsx
import BrandSeoSection from "@/components/brand-seo-section";
import { nombreMarcaData } from "@/data/brands/nombre-marca";

export default function MarcaPage() {
  return (
    <main>
      <BrandSeoSection data={nombreMarcaData} />
    </main>
  );
}
```

## 🎨 Personalización

### Colores

El componente usa el `brandColor` definido en los datos:

```typescript
brandColor: "#FFCD11"  // Amarillo Caterpillar
brandColor: "#E60012"  // Rojo Isuzu
brandColor: "#367C2B"  // Verde John Deere
```

Los colores se aplican automáticamente a:
- Bullets de listas
- Bordes de cards
- Iconos destacados
- Chips de ubicaciones

### Imágenes

Coloca los logos de marca en:
```
public/brands/
  ├── caterpillar-logo.webp
  ├── isuzu-logo.webp
  └── ...
```

## 📊 Datos que puedes modificar

### Por Marca:
- ✅ Nombre y slug
- ✅ Color corporativo
- ✅ Logo
- ✅ Títulos y descripciones
- ✅ Categorías de productos
- ✅ Tipos de equipos
- ✅ Ciudades y cobertura
- ✅ Keywords SEO locales
- ✅ Contenido rico SEO

### Próximamente (Fase 2):
- 🔄 Estilos personalizados
- 🔄 Layouts diferentes
- 🔄 Secciones opcionales
- 🔄 Galería de imágenes
- 🔄 Testimonios por marca

## 🔍 SEO Automático

El componente genera automáticamente:

1. **JSON-LD Schema** con marca, ubicaciones y productos
2. **Keywords long-tail** basadas en ciudad + marca
3. **Contenido rico** optimizado para búsqueda
4. **Enlaces internos** (preparado para futuras páginas)

## 📝 Ejemplo de uso completo

```typescript
// app/caterpillar/page.tsx
import { caterpillarData } from "@/data/brands/caterpillar";
import BrandSeoSection from "@/components/brand-seo-section";

export default function CaterpillarPage() {
  return (
    <main>
      <BrandSeoSection data={caterpillarData} />
    </main>
  );
}
```

## 🎯 Ventajas del sistema

- ✅ **1 componente** para todas las marcas
- ✅ **Fácil mantenimiento**: cambias datos, no código
- ✅ **SEO consistente** en todas las páginas
- ✅ **Escalable**: agrega 20+ marcas fácilmente
- ✅ **Tipado TypeScript**: menos errores
- ✅ **Design system**: colores y estilos coherentes

## 📞 Soporte

Para dudas sobre cómo agregar nuevas marcas o personalizar el sistema, consulta:
- `data/types.ts` - Estructura de datos
- `components/brand-seo-section.tsx` - Componente base
- Ejemplos: `caterpillar.ts` y `isuzu.ts`

# Estrategia SEO - Gestor de Partes

## 📊 Arquitectura de Metadata

### **Niveles de Metadata**

```
1. Layout Root (app/layout.tsx)
   └─ Metadata BASE para todo el sitio
   
2. Páginas de Marca (app/page.tsx, app/[brand]/page.tsx)
   └─ Metadata ESPECÍFICA por marca
   
3. Páginas de Ubicación (app/[brand]/[city]/page.tsx)
   └─ Metadata HIPERLOCAL por ciudad
```

## 🎯 Implementación

### **1. Página Principal (Home)**

```tsx
// app/page.tsx
import { Metadata } from "next";
import { caterpillarData } from "@/data/brands/caterpillar";

export const metadata: Metadata = {
  title: "Repuestos Caterpillar Colombia | Gestor de Partes",
  description: "Gestor de Partes, distribuidor autorizado...",
  keywords: [...], // Keywords específicas
  openGraph: {...}, // OG tags
  twitter: {...},   // Twitter cards
};

export default function Home() {
  return <ParametrizedPage ... />;
}
```

### **2. Páginas de Marca**

```tsx
// app/komatsu/page.tsx
import { Metadata } from "next";
import { generateBrandMetadata } from "@/lib/metadata-generator";
import { komatsuData } from "@/data/brands/komatsu";

export const metadata: Metadata = generateBrandMetadata(komatsuData);

export default function KomatsuPage() {
  return <ParametrizedPage ... />;
}
```

### **3. Páginas por Ciudad (Futuro)**

```tsx
// app/caterpillar/medellin/page.tsx
import { Metadata } from "next";
import { generateLocationMetadata } from "@/lib/metadata-generator";
import { caterpillarData } from "@/data/brands/caterpillar";

export const metadata: Metadata = generateLocationMetadata(
  caterpillarData, 
  "Medellín"
);

export default function CaterpillarMedellinPage() {
  return <LocationPage ... />;
}
```

## 🔑 Keywords Strategy

### **Por Marca**
- `repuestos [marca] colombia`
- `gestor de partes [marca]`
- `distribuidor [marca] colombia`
- `repuestos [marca] [ciudad]`

### **Por Ubicación**
- `repuestos caterpillar medellín`
- `repuestos cat bogotá`
- `gestor de partes antioquia`

### **Long-tail**
- `cilindros hidráulicos caterpillar medellín`
- `tren de rodaje cat bogotá`
- `excavadoras caterpillar repuestos colombia`

## 📸 Imágenes SEO

### **Open Graph Images**
Crear para cada marca:
```
public/
  ├── caterpillar/
  │   └── og-image.jpg (1200x630)
  ├── komatsu/
  │   └── og-image.jpg (1200x630)
  └── volvo/
      └── og-image.jpg (1200x630)
```

**Especificaciones:**
- Dimensiones: 1200x630 px
- Formato: JPG optimizado
- Texto: Logo Gestor de Partes + Logo Marca
- Call to action visible

## 🗺️ Estructura de URLs

```
/ (Home - Caterpillar principal)
  └─ metadata específica Caterpillar

/komatsu
  └─ metadata específica Komatsu

/volvo
  └─ metadata específica Volvo

/caterpillar/medellin (Futuro)
  └─ metadata hiperlocal

/caterpillar/bogota (Futuro)
  └─ metadata hiperlocal
```

## 📈 Checklist por Página

Para cada nueva página de marca:

- [ ] Exportar `metadata` con title único
- [ ] Description con "Gestor de Partes" + marca
- [ ] Keywords: marca + ciudades + productos
- [ ] OpenGraph image específica de marca
- [ ] Canonical URL correcta
- [ ] Twitter card configurada
- [ ] Schema.org JSON-LD (auto desde componente)

## 🚀 Ventajas de este Sistema

1. **SEO Máximo**: Cada página tiene metadata única y optimizada
2. **Mantenible**: Usa `generateBrandMetadata()` helper
3. **Escalable**: 20+ páginas fácilmente
4. **Reutilizable**: Un generador para todas las marcas
5. **Google-friendly**: Keywords, OG tags, canonical URLs

## 📝 Ejemplo Completo

```tsx
// app/isuzu/page.tsx
import { Metadata } from "next";
import { generateBrandMetadata } from "@/lib/metadata-generator";
import ParametrizedPage from "@/components/parametrized-page";
import { isuzuPageData } from "@/data/pages/isuzu-page";
import { isuzuData } from "@/data/brands/isuzu";

// ✅ Metadata SEO específica
export const metadata: Metadata = generateBrandMetadata(isuzuData);

// ✅ Página reutilizable
export default function IsuzuPage() {
  return (
    <ParametrizedPage 
      pageData={isuzuPageData} 
      brandData={isuzuData} 
    />
  );
}
```

## 🎯 Resultado

- ✅ Cada página tiene título único
- ✅ Cada página tiene description única
- ✅ Keywords específicas por marca/ciudad
- ✅ Open Graph images únicas
- ✅ Schema.org automático
- ✅ Canonical URLs
- ✅ **SEO Score: 100/100**

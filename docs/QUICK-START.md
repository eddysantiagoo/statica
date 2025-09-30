# Guía Rápida: Crear Nueva Página en 2 Minutos ⚡

## 📋 Checklist Pre-requisitos

Antes de crear la página, verifica que tengas:

- [ ] Datos de marca creados en `data/brands/[marca].ts`
- [ ] Datos de página creados en `data/pages/[marca]-page.ts`
- [ ] Ciudad incluida en `brandData.locations[]`
- [ ] Imagen OG lista: `public/[marca]/og-[ciudad].jpg` (1200x630 px)

## 🚀 Paso 1: Crear Carpeta y Archivo

```bash
# Ejemplo: Komatsu Bogotá
mkdir app/repuestos-komatsu-bogota
```

## 📝 Paso 2: Crear page.tsx

Copiar y pegar este código:

```tsx
import { Metadata } from "next";
import { generateBrandCityMetadata } from "@/lib/metadata-generator";
import ParametrizedPage from "@/components/parametrized-page";
import { komatsuPageData } from "@/data/pages/komatsu-page";
import { komatsuData } from "@/data/brands/komatsu";

export const metadata: Metadata = generateBrandCityMetadata(
  komatsuData, 
  "Bogotá"
);

export default function KomatsuBogotaPage() {
  return (
    <ParametrizedPage 
      pageData={komatsuPageData} 
      brandData={komatsuData} 
    />
  );
}
```

**Cambios necesarios:**
1. Importar datos de tu marca
2. Cambiar ciudad en `generateBrandCityMetadata()`
3. Renombrar función del componente

## 🗺️ Paso 3: Agregar al Sitemap

Editar `app/sitemap.ts`:

```typescript
{
  url: `${appUrl}/repuestos-komatsu-bogota`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 1.0,
},
```

## ✅ Paso 4: Verificar

```bash
# Iniciar servidor
npm run dev

# Abrir en navegador
http://localhost:3000/repuestos-komatsu-bogota

# Verificar metadata
view-source:http://localhost:3000/repuestos-komatsu-bogota
```

Buscar en el HTML:
- `<title>` único
- `<meta name="description">` única
- `<meta property="og:image">` correcta
- `<link rel="canonical">` correcta

## 🎯 Páginas que Necesitas Crear

### Caterpillar (6)
- ✅ `/repuestos-caterpillar-medellin` (ya existe)
- `/repuestos-caterpillar-bogota`
- `/repuestos-caterpillar-cali`
- `/repuestos-caterpillar-barranquilla`
- `/repuestos-caterpillar-bucaramanga`
- `/repuestos-caterpillar-pereira`

### Komatsu (6)
- `/repuestos-komatsu-medellin`
- `/repuestos-komatsu-bogota`
- `/repuestos-komatsu-cali`
- `/repuestos-komatsu-barranquilla`
- `/repuestos-komatsu-bucaramanga`
- `/repuestos-komatsu-pereira`

### Volvo (6)
- `/repuestos-volvo-medellin`
- `/repuestos-volvo-bogota`
- ...

## ⚠️ Errores Comunes

### Error: "Ciudad no encontrada"
```
Error: Ciudad Bogotá no encontrada en brandData.locations
```

**Solución**: Agregar ciudad a `data/brands/[marca].ts`:

```typescript
locations: [
  {
    city: "Bogotá", // ⚠️ Debe coincidir exactamente
    region: "Cundinamarca",
    keywords: "...",
    coverage: ["Bogotá", "Soacha", ...]
  }
]
```

### Error: Imagen OG no se muestra

**Solución**: Crear imagen en `public/[marca]/og-[ciudad].jpg`

Especificaciones:
- Dimensiones: 1200x630 px
- Formato: JPG optimizado (< 200 KB)
- Contenido: Logo marca + "Repuestos [Marca] en [Ciudad]"

## 🎨 Crear Imágenes OG en Batch

Usar Figma/Canva con template:

```
Template base (1200x630):
┌────────────────────────────┐
│  [Logo Gestor de Partes]   │
│                            │
│   Repuestos [MARCA]        │
│   en [CIUDAD]              │
│                            │
│  [Logo Marca]              │
│                            │
│  Stock Permanente          │
│  Entrega Inmediata         │
└────────────────────────────┘
```

Exportar variaciones para cada ciudad.

## 📊 Script de Validación

Crear este script para verificar todas las páginas:

```bash
# scripts/validate-pages.sh
#!/bin/bash

echo "Validando páginas..."

for page in repuestos-caterpillar-medellin repuestos-caterpillar-bogota; do
  echo "Checking: $page"
  curl -s "http://localhost:3000/$page" | grep -o "<title>.*</title>"
done
```

## 🎉 ¡Listo!

Ahora tienes una página con:
- ✅ Metadata SEO 100% optimizada
- ✅ Keywords específicas de ciudad
- ✅ Open Graph configurado
- ✅ Canonical URL correcta
- ✅ Schema.org automático
- ✅ Sitemap actualizado

**Tiempo total: ~2 minutos por página** 🚀

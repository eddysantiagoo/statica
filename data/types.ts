export interface ProductCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Location {
  city: string;
  region: string;
  keywords: string;
  coverage: string[];
}

export interface SeoContentSection {
  title: string;
  icon: string;
  content: string;
}

export interface SeoFeature {
  title: string;
  emoji: string;
  description: string;
}

export interface SeoContent {
  sections: SeoContentSection[];
  features: SeoFeature[];
}

export interface BrandData {
  // Básico
  brandName: string;
  brandSlug: string;
  brandColor: string;
  brandLogo: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  heroTitle: string;
  heroDescription: string;
  
  // Productos
  productCategories: ProductCategory[];
  equipmentTypes: string[];
  
  // Ubicaciones
  locations: Location[];
  
  // Contenido SEO
  seoContent: SeoContent;
}

// Nuevos tipos para páginas completas
export interface HeroData {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface WhyOriginalData {
  title: string;
  image: string;
  imageAlt: string;
  benefits: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsData {
  title: string;
  items: BenefitItem[];
}

export interface CategoryItem {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface CategoriesData {
  title: string;
  items: CategoryItem[];
}

export interface CoverageData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CtaData {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  backgroundColor: "black" | "yellow" | "white";
  textColor: "white" | "black";
  buttonColor?: "yellow" | "black" | "white";
}

export interface CtaFinalData {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
}

export interface PageData {
  hero: HeroData;
  whyOriginal: WhyOriginalData;
  benefits: BenefitsData;
  categories: CategoriesData;
  coverage: CoverageData;
  cta1: CtaData;
  cta2: CtaData;
  ctaFinal: CtaFinalData;
}

import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PageData } from "@/data/types";
import BrandSeoSection from "@/components/brand-seo-section";
import { BrandData } from "@/data/types";
import FAQ from "@/components/faq";

interface ParametrizedPageProps {
  pageData: PageData;
  brandData: BrandData;
}

export default function ParametrizedPage({ pageData, brandData }: ParametrizedPageProps) {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {pageData.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {pageData.hero.description}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">{pageData.hero.primaryButton}</Button>
              <Button size="lg" variant="outline">{pageData.hero.secondaryButton}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué comprar repuestos originales? */}
      <section className="w-full py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 grid gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            {pageData.whyOriginal.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3 text-sm md:text-base text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                {pageData.whyOriginal.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
             <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
               <Image
                 src={pageData.whyOriginal.image}
                 alt={pageData.whyOriginal.imageAlt}
                 fill
                 className="object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Beneficios de usar originales */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">
            {pageData.benefits.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pageData.benefits.items.map((item, i) => (
              <Card key={i} className="p-6">
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="w-full py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h3 className="text-2xl font-semibold text-center mb-10">
            {pageData.categories.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pageData.categories.items.map((c, i) => (
              <Card key={i} className="overflow-hidden p-0">
                <div className="relative h-40 bg-muted">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-medium">{c.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                  <Button className="mt-3" size="sm" variant="secondary">
                    {c.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura nacional */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
           <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
             <Image
               src={pageData.coverage.image}
               alt={pageData.coverage.imageAlt}
               fill
               className="object-cover"
             />
           </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">{pageData.coverage.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {pageData.coverage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sección SEO - Repuestos por marca y ciudad */}
      <BrandSeoSection data={brandData} />

      {/* CTA 1 - estilo fondo negro con imagen + texto + botón */}
      <section 
        className={`w-full py-14 md:py-20 ${
          pageData.cta1.backgroundColor === 'black' ? 'bg-black text-white' : 
          pageData.cta1.backgroundColor === 'yellow' ? 'bg-yellow-400 text-black' : 
          'bg-white text-black'
        }`}
      >
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
           <div className="relative mx-auto w-full max-w-md aspect-[4/3]">
             <Image
               src={pageData.cta1.image}
               alt={pageData.cta1.imageAlt}
               fill
               className="object-cover"
             />
           </div>
          <div>
            <h3 className={`text-2xl md:text-3xl font-extrabold ${
              pageData.cta1.buttonColor === 'yellow' ? 'text-yellow-400' : 
              pageData.cta1.textColor === 'white' ? 'text-white' : 'text-black'
            }`}>
              {pageData.cta1.title}
            </h3>
            <p className={`mt-3 text-base md:text-lg max-w-prose ${
              pageData.cta1.textColor === 'white' ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {pageData.cta1.description}
            </p>
            <Button 
              className={`mt-6 ${
                pageData.cta1.buttonColor === 'yellow' ? 'bg-yellow-400 text-black hover:bg-yellow-300' :
                pageData.cta1.buttonColor === 'black' ? 'bg-black text-white hover:bg-black/80' :
                'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {pageData.cta1.buttonText}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 2 - franja amarilla con botón */}
      <section 
        className={`w-full py-10 ${
          pageData.cta2.backgroundColor === 'yellow' ? 'bg-yellow-400' : 
          pageData.cta2.backgroundColor === 'black' ? 'bg-black' : 
          'bg-white'
        }`}
      >
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-5">
             <div className="relative h-24 w-24 md:h-28 md:w-28 flex-shrink-0">
               <Image
                 src={pageData.cta2.image}
                 alt={pageData.cta2.imageAlt}
                 fill
                 className="object-cover"
               />
             </div>
            <div>
              <p className={`text-xs uppercase tracking-widest font-semibold ${
                pageData.cta2.textColor === 'black' ? 'text-black/80' : 'text-white/80'
              }`}>
                Promociones
              </p>
              <h4 className={`text-2xl md:text-3xl font-extrabold ${
                pageData.cta2.textColor === 'black' ? 'text-black' : 'text-white'
              }`}>
                {pageData.cta2.title}
              </h4>
              <p className={`text-sm ${
                pageData.cta2.textColor === 'black' ? 'text-black/80' : 'text-white/80'
              }`}>
                {pageData.cta2.description}
              </p>
            </div>
          </div>
          <div className="flex md:justify-end">
            <Button 
              className={`${
                pageData.cta2.buttonColor === 'black' ? 'bg-black text-white hover:bg-black/80' :
                pageData.cta2.buttonColor === 'white' ? 'bg-white text-black hover:bg-gray-100' :
                'bg-yellow-400 text-black hover:bg-yellow-300'
              }`}
            >
              {pageData.cta2.buttonText}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {pageData.ctaFinal.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {pageData.ctaFinal.description}
            </p>
            <Button size="lg" className="mt-4">
              {pageData.ctaFinal.icon === 'Chrome' && <Chrome className="mr-2 h-5 w-5" />}
              {pageData.ctaFinal.buttonText}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

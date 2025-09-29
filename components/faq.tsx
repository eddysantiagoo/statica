import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"

const faqData = {
  general: [
    {
      question: "¿Qué es esta plataforma?",
      answer: "Esta es una plataforma moderna diseñada para ayudarte a alcanzar tus objetivos de manera eficiente."
    },
    {
      question: "¿Cómo empiezo?",
      answer: "Simplemente crea una cuenta y sigue nuestro proceso de incorporación guiado."
    }
  ],
  features: [
    {
      question: "¿Qué características están disponibles?",
      answer: "Ofrecemos un conjunto completo de características que incluyen análisis, automatización y herramientas de colaboración."
    },
    {
      question: "¿Puedo personalizar la plataforma?",
      answer: "Sí, la plataforma es totalmente personalizable para satisfacer tus necesidades específicas."
    }
  ],
  technical: [
    {
      question: "¿Qué tecnologías utilizan?",
      answer: "Utilizamos tecnologías web modernas como React, Next.js y TypeScript."
    },
    {
      question: "¿Hay una API disponible?",
      answer: "Sí, proporcionamos una API REST completa para integraciones."
    }
  ]
}

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Encuentra respuestas a preguntas comunes sobre nuestra plataforma
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="technical">Técnico</TabsTrigger>
            </TabsList>
            {Object.entries(faqData).map(([category, questions]) => (
              <TabsContent key={category} value={category}>
                <Accordion type="single" collapsible className="w-full">
                  {questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-500">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

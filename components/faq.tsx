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
      question: "What is this platform?",
      answer: "This is a modern platform designed to help you achieve your goals efficiently."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for an account and follow our guided onboarding process."
    }
  ],
  features: [
    {
      question: "What features are available?",
      answer: "We offer a comprehensive suite of features including analytics, automation, and collaboration tools."
    },
    {
      question: "Can I customize the platform?",
      answer: "Yes, the platform is fully customizable to meet your specific needs."
    }
  ],
  technical: [
    {
      question: "What technologies do you use?",
      answer: "We use modern web technologies including React, Next.js, and TypeScript."
    },
    {
      question: "Is there an API available?",
      answer: "Yes, we provide a comprehensive REST API for integrations."
    }
  ]
}

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
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

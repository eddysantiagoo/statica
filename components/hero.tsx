import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Our Platform
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover amazing features and transform your workflow with our innovative solution.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">Learn More</Button>
            <Button size="lg" variant="outline">Watch Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

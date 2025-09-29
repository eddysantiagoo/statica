import Link from "next/link"
import { ThumbsUp } from "lucide-react"

const footerLinks = {
  "Producto": [
    { name: "Características", href: "#features", external: false },
    { name: "Precios", href: "#pricing", external: false },
    { name: "Documentación", href: "#docs", external: false },
    { name: "API", href: "#api", external: false }
  ],
  "Empresa": [
    { name: "Acerca de", href: "#about", external: false },
    { name: "Blog", href: "#blog", external: false },
    { name: "Empleos", href: "#careers", external: false },
    { name: "Contacto", href: "#contact", external: false }
  ],
  "Recursos": [
    { name: "Comunidad", href: "#community", external: false },
    { name: "Centro de Ayuda", href: "#help", external: false },
    { name: "Tutoriales", href: "#tutorials", external: false },
    { name: "Estado", href: "#status", external: false }
  ],
  "Social": [
    { name: "Twitter", href: "https://twitter.com", external: true },
    { name: "GitHub", href: "https://github.com", external: true },
    { name: "LinkedIn", href: "https://linkedin.com", external: true },
    { name: "Discord", href: "https://discord.com", external: true }
  ]
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-background/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background/5 to-transparent pointer-events-none" />
      <div className="container relative px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3 text-center">
              <h4 className="text-base font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center mt-12 pt-8 border-t space-y-4">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-6 w-6" />
            <span className="font-semibold">Statica</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Statica. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

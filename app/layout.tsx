import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SimpleHeader } from "@/components/simple-header";
import Footer from "@/components/footer";
import { WebsiteJsonLd, OrganizationJsonLd } from "@/components/json-ld";

const inter = Inter({ subsets: ["latin"] });

const appName = "Statica";
const appDescription =
  "Plataforma web moderna para soluciones innovadoras. Transforma tu flujo de trabajo con nuestras características de vanguardia y experiencia de usuario perfecta.";
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://statica.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appDescription,
  keywords: [
    "plataforma web",
    "soluciones modernas",
    "tecnología innovadora",
    "transformación digital",
    "automatización de flujo de trabajo",
    "next.js",
    "react",
    "typescript",
  ],
  authors: [{ name: appName, url: appUrl }],
  creator: appName,
  publisher: appName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: appUrl,
    title: appName,
    description: appDescription,
    siteName: appName,
    images: [
      {
        url: `${appUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: appName,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
    images: [`${appUrl}/og-image.png`],
    creator: "@statica",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: appUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>

      <body className={inter.className}>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SimpleHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

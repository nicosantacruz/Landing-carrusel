import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vetramoncruz.cl'),
  title: {
    default: "Veterinaria Ramón Cruz Macul - Clínica Veterinaria Santiago | +35 Años",
    template: "%s | Veterinaria Ramón Cruz Macul",
  },
  description:
    "Veterinaria Ramón Cruz en Macul, Santiago. Clínica veterinaria con +35 años de experiencia. Consultas, cirugías, radiografías digitales, laboratorio, emergencias 24/7. Atención veterinaria integral para perros y gatos. ¡Agenda tu cita!",
  keywords: [
    "veterinaria macul",
    "clínica veterinaria santiago",
    "veterinario macul",
    "veterinaria ramón cruz",
    "consulta veterinaria macul",
    "cirugía veterinaria santiago",
    "radiografía digital mascotas",
    "radiografía macul",
    "radiografía digital macul",
    "ecografía macul",
    "ecografía veterinaria macul",
    "domicilios macul",
    "veterinarias en macul",
    "veterinarias en santiago",
    "laboratorio veterinario macul",
    "emergencia veterinaria santiago",
    "vacunación mascotas macul",
    "atención veterinaria santiago",
    "veterinaria perros gatos",
    "veterinaria domicilio macul",
    "veterinaria 24 horas santiago",
    "veterinaria ramón cruz montt",
    "veterinaria jaime eyzaguirre",
    "veterinaria macul santiago",
    "clínica veterinaria macul",
    "veterinaria especializada santiago",
    "veterinaria confiable macul",
    "veterinaria ramón cruz macul",
    "veterinaria macul domicilio",
    "veterinaria macul emergencia",
    "veterinaria macul radiografía",
    "veterinaria macul ecografía",
    "veterinaria macul laboratorio",
    "veterinaria macul cirugía",
    "veterinaria macul consulta",
    "veterinaria macul vacunación",
    "veterinaria macul perros",
    "veterinaria macul gatos"
  ],
  authors: [{ name: "VRC Veterinaria Ramón Cruz" }],
  creator: "VRC Veterinaria Ramón Cruz",
  publisher: "VRC Veterinaria Ramón Cruz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/android-chrome-192x192.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: "https://vetramoncruz.cl",
  },
  category: "healthcare",
  generator: 'v0.dev',
  openGraph: {
    title: "Veterinaria Ramón Cruz Macul - Clínica Veterinaria Santiago",
    description: "Veterinaria Ramón Cruz en Macul, Santiago. Clínica veterinaria con +35 años de experiencia. Consultas, cirugías, radiografías digitales, laboratorio, emergencias 24/7.",
    url: "https://vetramoncruz.cl",
    siteName: "Veterinaria Ramón Cruz",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1920,
        height: 1080,
        alt: "Veterinaria Ramón Cruz Macul - Clínica Veterinaria Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterinaria Ramón Cruz Macul - Clínica Veterinaria Santiago",
    description: "Veterinaria Ramón Cruz en Macul, Santiago. Clínica veterinaria con +35 años de experiencia. Consultas, cirugías, radiografías digitales, laboratorio, emergencias 24/7.",
    images: ["/hero.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <head>
        {/* Favicons y metadatos generados */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/mobile/hero-mobile.webp" as="image" type="image/webp" media="(max-width: 768px)" />
        <link rel="preload" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20correcto-NqQ4jg7FdykLqDWon6sKXJkh2Mzg8a.png" as="image" type="image/png" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        {/* Schema.org para Google - Mejorado para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "@id": "https://vetramoncruz.cl",
              name: "Veterinaria Ramón Cruz",
              alternateName: "VRC Veterinaria Ramón Cruz",
              description: "Clínica veterinaria en Macul, Santiago con más de 35 años de experiencia ofreciendo atención integral para mascotas. Consultas, cirugías, radiografías digitales, laboratorio y emergencias.",
              url: "https://vetramoncruz.cl",
              telephone: "+56227126577",
              email: "contacto@vetramoncruz.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ramón Cruz Montt 1902",
                addressLocality: "Macul",
                addressRegion: "Región Metropolitana",
                addressCountry: "CL",
                postalCode: "7810000"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.4730574,
                longitude: -70.58126
              },
              openingHours: ["Mo-Sa 10:00-19:00", "Su 10:00-14:00"],
              priceRange: "$$",
              image: "https://vetramoncruz.cl/hero.webp",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20correcto-NqQ4jg7FdykLqDWon6sKXJkh2Mzg8a.png",
              sameAs: [
                "https://www.facebook.com/vetramoncruz",
                "https://www.instagram.com/vet.ramoncruz",
                "https://x.com/vetramoncruz"
              ],
              areaServed: {
                "@type": "City",
                name: "Macul",
                addressRegion: "Región Metropolitana",
                addressCountry: "CL"
              },
              serviceArea: {
                "@type": "City",
                name: "Santiago",
                addressRegion: "Región Metropolitana",
                addressCountry: "CL"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Veterinarios",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consulta Veterinaria",
                      description: "Consultas generales y de especialidad para mascotas en Macul, Santiago",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Radiografía Digital",
                      description: "Diagnóstico por imágenes con tecnología digital de alta resolución",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cirugías Veterinarias",
                      description: "Procedimientos quirúrgicos especializados para perros y gatos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Laboratorio Clínico",
                      description: "Análisis completos de sangre, orina y otros estudios para diagnósticos precisos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ecografía Veterinaria",
                      description: "Estudios ecográficos especializados para diagnóstico interno no invasivo en Macul",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergencias Veterinarias",
                      description: "Atención de emergencias veterinarias 24/7 en Macul, Santiago",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vacunación de Mascotas",
                      description: "Vacunación completa para perros y gatos en Macul",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Atención a Domicilio",
                      description: "Servicio veterinario a domicilio en Macul y alrededores",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Salud Dental",
                      description: "Destartraje y profilaxis dental para mascotas en Macul",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Petshop y Farmacia",
                      description: "Fármacos, antiparasitarios, alimentos y accesorios para mascotas en Macul",
                    },
                  }
                ],
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                author: {
                  "@type": "Person",
                  name: "Cliente Satisfecho"
                },
                reviewBody: "Excelente atención veterinaria en Macul. Más de 35 años de experiencia cuidando a nuestras mascotas."
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics - Descomenta cuando tengas tu ID real */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
      </body>
    </html>
  )
}

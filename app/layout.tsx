import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/carousel.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

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

        {/* Schema.org JSON-LD temporalmente deshabilitado para depuración de build */}
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({...}) }} /> */}
      </head>
      <body className={inter.className}>
        {children}

        {/* YouCanBookMe - Sistema de reservas */}
        <script 
          src="https://embed.ycb.me"
          async={true}
          data-domain="vetramoncruz"
          data-content="all"
          data-type="button-floating"
          data-innertext="Reserva tu hora"
          data-buttonicon="calendar"
          data-buttoncolor="#2563EB"
          data-displaymode="light"
          data-buttonposition="topRight"
        />

        {/* Script para cambiar texto del botón dinámicamente según tamaño de pantalla */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateButtonText() {
                  // Verificar que estamos en el cliente
                  if (typeof window === 'undefined') return;
                  
                  const button = document.querySelector('[data-ycb-button] a');
                  if (!button) return;
                  
                  // Usar requestAnimationFrame para evitar problemas de hidratación
                  requestAnimationFrame(() => {
                    if (window.innerWidth <= 1024) {
                      button.textContent = 'Agendar';
                    } else {
                      button.textContent = 'Reserva tu hora';
                    }
                  });
                }
                
                // Solo ejecutar en el cliente
                if (typeof window !== 'undefined') {
                  // Ejecutar cuando el DOM esté listo
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                      setTimeout(updateButtonText, 1500);
                    });
                  } else {
                    setTimeout(updateButtonText, 1500);
                  }
                  
                  // Ejecutar cuando cambia el tamaño de la ventana
                  window.addEventListener('resize', function() {
                    setTimeout(updateButtonText, 100);
                  });
                }
              })();
            `
          }}
        />

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

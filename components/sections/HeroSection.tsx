"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <section className="relative min-h-dvh flex items-center">
      <div className="absolute inset-0 z-0">
        {/* Imagen para Desktop */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Perro y gato mirando hacia arriba - Veterinaria Ramón Cruz"
            fill
            priority
            placeholder="blur"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            blurDataURL="/hero.webp"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        {/* Imagen para Móvil */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/mobile/hero-mobile.webp"
            alt="Perro y gato mirando hacia arriba - Veterinaria Ramón Cruz"
            fill
            priority
            placeholder="blur"
            quality={75}
            sizes="100vw"
            className="object-cover"
            blurDataURL="/images/mobile/hero-mobile.webp"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      {/* Contenido Desktop */}
      <div className="container relative z-10 hidden md:block pt-24">
        <div className="space-y-6 max-w-xl mx-0">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            +35 años al servicio de tus mascotas
          </div>

          <h1 className="font-bold tracking-tight text-blue-900 text-4xl sm:text-5xl md:text-6xl">
            Cuidamos a los que <br />
            <span className="text-blue-700">más amas</span>
          </h1>

          <p className="max-w-lg text-lg text-blue-700">
            Atención veterinaria integral con el cariño que tu mascota merece.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              className="rounded-full px-7 py-5 text-base font-medium bg-white hover:bg-white text-blue-900 hover:text-blue-700 border-2 border-blue-200 hover:border-blue-700 h-auto transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              <Phone className="mr-2.5 w-5 h-5" />
              CONTÁCTENOS
            </Button>
          </div>
        </div>
      </div>

      {/* Contenido Móvil */}
      <div className="container relative z-10 block md:hidden flex flex-col justify-center" style={{ minHeight: '25vh', marginTop: '-20vh', marginBottom: '0' }}>
        <div className="space-y-4 max-w-full mx-auto" style={{ marginTop: 0, marginBottom: 0 }}>
          <div className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-normal text-blue-800 mb-1 mx-auto w-fit" style={{ letterSpacing: '0.01em' }}>
            +35 años al servicio de tus mascotas
          </div>

          <h1 className="font-bold tracking-tight text-blue-900 text-3xl sm:text-4xl md:text-5xl leading-tight text-center px-4 w-full mb-2 sm:max-w-md md:max-w-lg" style={{ lineHeight: '1.08', marginLeft: 0, marginRight: 0, letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
            <span className="block">Cuidamos a los que</span>
            <span className="text-blue-700 block">más amas</span>
          </h1>

          <p className="max-w-sm sm:max-w-md md:max-w-lg text-sm text-center px-4 text-blue-500 font-normal mt-6" style={{ marginBottom: '-0.2rem' }}>
            Atención veterinaria integral con el cariño que tu mascota merece.
          </p>

          <div className="flex flex-col gap-3 items-center mt-8">
            <Button
              className="rounded-full px-5 py-2 text-sm font-semibold bg-white hover:bg-white text-blue-900 hover:text-blue-700 border-2 border-blue-200 hover:border-blue-700 w-auto min-w-[140px] h-auto transition-all duration-300 hover:scale-105"
              style={{ letterSpacing: '0.01em' }}
              onClick={scrollToContact}
            >
              <Phone className="mr-2.5 w-4 h-4" />
              CONTÁCTENOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
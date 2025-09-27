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
              asChild
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 h-auto text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-0"
            >
              <a href={`https://wa.me/56990641753?text=${encodeURIComponent("Hola, me gustaría agendar una cita para mi mascota.")}`} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 512 512" className="mr-2.5">
                  <path d="m493.651 263.543c-4.791 16.913-14.372 31.571-26.958 41.26-10.051 7.749-21.464 11.802-32.689 11.802-4.227 0-8.36-.564-12.446-1.719-14.841-4.246-26.865-16.034-32.97-32.351-5.589-14.874-5.965-32.374-1.174-49.292 4.837-16.913 14.418-31.571 26.958-41.26 13.809-10.642 30.247-14.32 45.135-10.083 14.842 4.246 26.912 16.034 33.018 32.351 5.541 14.875 5.963 32.374 1.126 49.292zm-314.019-42.749c17.66 0 34.521-9.83 46.262-26.982 10.661-15.551 16.532-35.92 16.532-57.365 0-21.464-5.871-41.833-16.532-57.384-11.742-17.147-28.603-26.978-46.262-26.978-17.707 0-34.567 9.83-46.309 26.978-10.614 15.551-16.485 35.92-16.485 57.384 0 21.445 5.871 41.814 16.485 57.365 11.742 17.152 28.603 26.982 46.309 26.982zm152.736 0c17.707 0 34.567-9.83 46.309-26.982 10.614-15.551 16.485-35.92 16.485-57.365 0-21.464-5.871-41.833-16.485-57.384-11.742-17.147-28.603-26.978-46.309-26.978-17.66 0-34.521 9.83-46.262 26.978-10.661 15.551-16.532 35.92-16.532 57.384 0 21.445 5.871 41.814 16.532 57.365 11.741 17.152 28.602 26.982 46.262 26.982zm-207.781 12.46c-4.837-16.922-14.418-31.58-26.959-41.27-13.808-10.642-30.246-14.32-45.135-10.083-14.888 4.246-26.912 16.034-33.018 32.351-5.542 14.874-5.964 32.374-1.127 49.292 4.791 16.913 14.372 31.571 26.958 41.26 10.051 7.749 21.464 11.802 32.689 11.802 4.18 0 8.36-.564 12.399-1.719 14.888-4.246 26.912-16.034 33.017-32.351 5.591-14.874 5.967-32.374 1.176-49.282zm223.561 41.242c-25.738-27.053-58.427-41.941-92.148-41.941-33.722 0-66.458 14.888-92.102 41.941-24.517 25.799-41.612 61.597-48.188 100.818-4.18 25.019 3.428 49.099 20.947 66.059 18.223 17.65 42.035 23.009 65.331 14.724 17.237-6.153 35.413-9.271 54.012-9.271s36.775 3.119 54.012 9.271c7.186 2.555 14.419 3.818 21.511 3.818 15.921 0 31.186-6.331 43.772-18.542 17.566-16.959 25.174-41.039 20.994-66.059-6.575-39.222-23.671-75.02-48.141-100.818z" fill="currentColor"/>
                </svg>
                AGENDA TU VISITA
              </a>
            </Button>
            <Button
              className="rounded-full px-7 py-5 text-base font-medium bg-white hover:bg-white text-blue-900 hover:text-blue-700 border-2 border-blue-900 hover:border-blue-700 h-auto transition-all duration-300 hover:scale-105"
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
              asChild
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 h-auto text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 w-auto min-w-[160px]"
            >
              <a href={`https://wa.me/56990641753?text=${encodeURIComponent("Hola, me gustaría agendar una cita para mi mascota.")}`} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 512 512" className="mr-2">
                  <path d="m493.651 263.543c-4.791 16.913-14.372 31.571-26.958 41.26-10.051 7.749-21.464 11.802-32.689 11.802-4.227 0-8.36-.564-12.446-1.719-14.841-4.246-26.865-16.034-32.97-32.351-5.589-14.874-5.965-32.374-1.174-49.292 4.837-16.913 14.418-31.571 26.958-41.26 13.809-10.642 30.247-14.32 45.135-10.083 14.842 4.246 26.912 16.034 33.018 32.351 5.541 14.875 5.963 32.374 1.126 49.292zm-314.019-42.749c17.66 0 34.521-9.83 46.262-26.982 10.661-15.551 16.532-35.92 16.532-57.365 0-21.464-5.871-41.833-16.532-57.384-11.742-17.147-28.603-26.978-46.262-26.978-17.707 0-34.567 9.83-46.309 26.978-10.614 15.551-16.485 35.92-16.485 57.384 0 21.445 5.871 41.814 16.485 57.365 11.742 17.152 28.603 26.982 46.309 26.982zm152.736 0c17.707 0 34.567-9.83 46.309-26.982 10.614-15.551 16.485-35.92 16.485-57.365 0-21.464-5.871-41.833-16.485-57.384-11.742-17.147-28.603-26.978-46.309-26.978-17.66 0-34.521 9.83-46.262 26.978-10.661 15.551-16.532 35.92-16.532 57.384 0 21.445 5.871 41.814 16.532 57.365 11.741 17.152 28.602 26.982 46.262 26.982zm-207.781 12.46c-4.837-16.922-14.418-31.58-26.959-41.27-13.808-10.642-30.246-14.32-45.135-10.083-14.888 4.246-26.912 16.034-33.018 32.351-5.542 14.874-5.964 32.374-1.127 49.292 4.791 16.913 14.372 31.571 26.958 41.26 10.051 7.749 21.464 11.802 32.689 11.802 4.18 0 8.36-.564 12.399-1.719 14.888-4.246 26.912-16.034 33.017-32.351 5.591-14.874 5.967-32.374 1.176-49.282zm223.561 41.242c-25.738-27.053-58.427-41.941-92.148-41.941-33.722 0-66.458 14.888-92.102 41.941-24.517 25.799-41.612 61.597-48.188 100.818-4.18 25.019 3.428 49.099 20.947 66.059 18.223 17.65 42.035 23.009 65.331 14.724 17.237-6.153 35.413-9.271 54.012-9.271s36.775 3.119 54.012 9.271c7.186 2.555 14.419 3.818 21.511 3.818 15.921 0 31.186-6.331 43.772-18.542 17.566-16.959 25.174-41.039 20.994-66.059-6.575-39.222-23.671-75.20-48.141-100.818z" fill="currentColor"/>
                </svg>
                AGENDA TU VISITA
              </a>
            </Button>
            <Button
              className="rounded-full px-5 py-2 text-sm font-semibold bg-white hover:bg-white text-blue-900 hover:text-blue-700 border-2 border-blue-900 hover:border-blue-700 w-auto min-w-[140px] h-auto transition-all duration-300 hover:scale-105"
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
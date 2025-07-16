"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton"
import { CONTACT_INFO, BUSINESS_HOURS } from "@/lib/types"
import { MapPin, Phone, Mail, Heart, Clock, Shield, User, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { MenuIcon, WhatsAppIcon } from "@/components/ui/icons"

// Lazy loading para componentes no críticos
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="py-20 md:py-24 lg:py-32 bg-gray-50"><div className="container"><div className="animate-pulse">Cargando...</div></div></div>,
  ssr: true
})

const QuickContactSection = dynamic(() => import("@/components/sections/QuickContactSection").then(mod => ({ default: mod.QuickContactSection })), {
  loading: () => <div className="bg-white py-16 md:py-20"><div className="container"><div className="animate-pulse">Cargando...</div></div></div>,
  ssr: true
})

// Componente Header con TypeScript
const Header = ({ handleNavClick }: { handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void }) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Debounce function para optimizar el scroll
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce((): void => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }, 10); // 10ms debounce

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [debounce])

  // Función para scroll con offset
  const scrollToContactWithOffset = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -120; // Ajusta este valor según la altura del header y el espacio que quieras arriba
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between relative md:px-0 px-0">
        {/* Logo centrado visualmente en mobile */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20correcto-NqQ4jg7FdykLqDWon6sKXJkh2Mzg8a.png"
            alt="VRC Veterinaria Ramón Cruz - Logo"
            width={240}
            height={48}
            className="h-12 w-auto md:h-12 md:w-auto object-contain"
            priority
          />
        </Link>
        {/* Menú hamburguesa a la derecha */}
        <button className="block md:hidden absolute right-4" aria-label="Abrir menú" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </button>
        {/* Navegación y redes sociales solo en desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-10">
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-blue-900 transition-colors transform transition-transform duration-200 hover:text-blue-700 hover:scale-110"
            onClick={e => handleNavClick(e, "inicio")}
          >
            Inicio
          </a>
          <a
            href="#services"
            className="text-lg md:text-xl font-bold tracking-tight text-blue-900 transition-colors transform transition-transform duration-200 hover:text-blue-700 hover:scale-110"
            onClick={e => handleNavClick(e, "services")}
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            className="text-lg md:text-xl font-bold tracking-tight text-blue-900 transition-colors transform transition-transform duration-200 hover:text-blue-700 hover:scale-110"
            onClick={e => handleNavClick(e, "nosotros")}
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="text-lg md:text-xl font-bold tracking-tight text-blue-900 transition-colors transform transition-transform duration-200 hover:text-blue-700 hover:scale-110"
            onClick={e => handleNavClick(e, "contact")}
          >
            Contacto
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3 ml-6">
          <a href="https://www.instagram.com/vet.ramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="transition-transform duration-200 hover:scale-125">
            <Image src="/instagram.svg" alt="Instagram" width={34} height={34} className="block" priority={false} />
          </a>
          <a href="https://x.com/vetramoncruz" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
            className="transition-transform duration-200 hover:scale-125">
            <Image src="/x.svg" alt="X (Twitter)" width={34} height={34} className="block" priority={false} />
          </a>
          <a href="https://www.facebook.com/vetramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="transition-transform duration-200 hover:scale-125">
            <Image src="/facebook.svg" alt="Facebook" width={34} height={34} className="block" priority={false} />
          </a>
        </div>
      </div>
      {/* Menú lateral hamburguesa */}
      {menuOpen && (
        <>
          {/* Fondo oscurecido */}
          <div
            className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
          {/* Panel lateral */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg flex flex-col p-6 animate-slide-in">
            <button
              className="mx-auto mb-8 text-blue-900 hover:text-white hover:bg-blue-700 text-5xl rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 md:mx-0 md:self-end md:mb-6 md:text-3xl md:w-10 md:h-10"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
            >
              ×
            </button>
            <nav className="flex flex-col gap-8 mt-4 mb-8 items-center text-center">
              <Link href="#services" className="text-lg font-bold text-blue-900 hover:text-blue-700 hover:underline transition-colors duration-150 w-full text-center" onClick={() => setMenuOpen(false)}>
                Servicios
              </Link>
              <Link href="#nosotros" className="text-lg font-bold text-blue-900 hover:text-blue-700 hover:underline transition-colors duration-150 w-full text-center" onClick={() => setMenuOpen(false)}>
                Nosotros
              </Link>
              <Link href="#contact" className="text-lg font-bold text-blue-900 hover:text-blue-700 hover:underline transition-colors duration-150 w-full text-center" onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
            </nav>
            {/* Divider visual */}
            <div className="border-t border-blue-100 my-4"></div>
            {/* Redes sociales en menú hamburguesa */}
            <div className="flex flex-col items-center mt-2">
              <span className="text-xs font-medium text-blue-800 mb-4 px-3 w-full text-center block">
                ¡Síguenos en nuestras redes sociales!
              </span>
              <div className="flex gap-6 justify-center">
                <a href="https://www.instagram.com/vet.ramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full">
                  <Image src="/instagram.svg" alt="Instagram" width={32} height={32} className="block" priority={false} />
                </a>
                <a href="https://x.com/vetramoncruz" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="transition-transform duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-black rounded-full">
                  <Image src="/x.svg" alt="X (Twitter)" width={32} height={32} className="block" priority={false} />
                </a>
                <a href="https://www.facebook.com/vetramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full">
                  <Image src="/facebook.svg" alt="Facebook" width={32} height={32} className="block" priority={false} />
                </a>
              </div>
            </div>
          </div>

        </>
      )}
    </header>
  )
}

// Componente Footer
const Footer = ({ handleNavClick }: { handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="px-2.5 pb-2.5">
      <footer className="rounded-[32px] border-t bg-blue-900 text-white">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
              <Link href="/" className="inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20correcto-NqQ4jg7FdykLqDWon6sKXJkh2Mzg8a.png"
                  alt="VRC Veterinaria Ramón Cruz"
                  width={200}
                  height={40}
                  className="h-8 w-auto brightness-0 invert mx-auto"
                />
              </Link>
              <p className="mt-2 text-blue-200 max-w-xs text-xs md:text-base md:mt-4 md:max-w-sm">
                Desde 1989 al cuidado de los que más amas. Experiencia, dedicación y cariño para tu familia peluda.
              </p>
            </div>
            {/* Enlaces Rápidos solo visible en desktop */}
            <div className="hidden md:block">
              <h3 className="text-lg font-medium mb-3">Enlaces Rápidos</h3>
              <ul className="mt-0 space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors" onClick={e => handleNavClick(e, "inicio")}>Inicio</a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors" onClick={e => handleNavClick(e, "services")}>Servicios</a>
                </li>
                <li>
                  <a href="#nosotros" className="text-blue-200 hover:text-white transition-colors" onClick={e => handleNavClick(e, "nosotros")}>Nosotros</a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors" onClick={e => handleNavClick(e, "contact")}>Contacto</a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors" onClick={e => handleNavClick(e, "contact")}>Horarios</a>
                </li>
              </ul>
            </div>
            {/* Contáctanos solo visible en desktop */}
            <div className="hidden md:flex text-left flex-col justify-start lg:-ml-24 lg:mr-8">
              <h3 className="text-lg font-medium mb-3">Contáctanos</h3>
              <ul className="mt-0 space-y-2 text-blue-200">
                <li className="whitespace-nowrap">
                  <a href="https://www.google.com/maps/place/VETERINARIA+RAMON+CRUZ+Macul/@-33.4730574,-70.5838349,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cfd6c9e17417:0x8cdebbdf7035d49a!8m2!3d-33.4730574!4d-70.58126!16s%2Fg%2F11bwfl216n?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline">Ramón Cruz Montt 1902, Macul, Santiago</a>
                </li>
                <li><a href="tel:+56222712657" className="hover:underline text-blue-200">+56 2 22712657</a></li>
                <li><a href="tel:+56990641753" className="hover:underline text-blue-200">+56 9 90641753</a></li>
                <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline text-blue-200">{CONTACT_INFO.email}</a></li>
              </ul>
            </div>
            {/* Redes sociales siempre visibles */}
            <div className="flex flex-col items-center w-full">
              <h3 className="text-base md:text-lg font-medium mb-3 whitespace-nowrap text-center">¡Síguenos en nuestras redes sociales!</h3>
              <div className="flex gap-4 mt-0 justify-center">
                <a href="https://www.instagram.com/vet.ramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform duration-200 hover:scale-125">
                  <Image src="/instagram.svg" alt="Instagram" width={28} height={28} className="block" priority={false} />
                </a>
                <a href="https://x.com/vetramoncruz" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="transition-transform duration-200 hover:scale-125">
                  <Image src="/x.svg" alt="X (Twitter)" width={28} height={28} className="block" priority={false} />
                </a>
                <a href="https://www.facebook.com/vetramoncruz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform duration-200 hover:scale-125">
                  <Image src="/facebook.svg" alt="Facebook" width={28} height={28} className="block" priority={false} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 border-t border-blue-800 pt-4 md:pt-6">
            <div className="flex justify-center">
              <p className="text-[9px] md:text-sm text-blue-200 md:text-blue-200 text-center opacity-100 md:opacity-100 leading-tight">
                © {currentYear} Veterinaria Ramón Cruz.<br className="block md:hidden" />
                <span className="block md:inline">Todos los derechos reservados.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función para scroll suave con offset para todas las secciones
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      let yOffset = -120;
      if (sectionId === "services") yOffset = -20; // Offset especial para servicios, más arriba
      if (sectionId === "nosotros") yOffset = 80; // Offset especial para nosotros, solo mostrar el título
      if (sectionId === "contact") yOffset = -120; // Offset especial para contacto, como antes
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Nueva función para enviar el formulario a la API interna
  const sendLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      message: formData.get('message'),
    };
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        alert('Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      setLoading(false);
      alert('Error al enviar el mensaje. Intenta nuevamente.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header handleNavClick={handleNavClick} />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <QuickContactSection />

        {/* Sección de Contacto */}
        <section id="contact" className="py-20 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-10 gap-y-12 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col justify-between">
                <div className="space-y-6 mb-0 pb-0">
                  <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium text-blue-800">
                    Contáctanos
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 leading-tight">
                      Ponte En Contacto <br />
                      <span className="text-blue-700">Con Nosotros</span>
                    </h2>
                    <p className="mt-4 text-blue-700 text-sm md:text-lg leading-relaxed">
                      ¿Tienes preguntas o necesitas programar una cita? Comunícate con nosotros.
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-2 mt-2 md:mt-2">
                    {/* Dirección */}
                    <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
                      <div className="rounded-full bg-blue-50 p-2 md:p-3 flex items-center justify-center">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-800" />
                      </div>
                      <a href="https://www.google.com/maps/place/VETERINARIA+RAMON+CRUZ+Macul/@-33.4730574,-70.5838349,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cfd6c9e17417:0x8cdebbdf7035d49a!8m2!3d-33.4730574!4d-70.58126!16s%2Fg%2F11bwfl216n?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-800 font-semibold hover:underline whitespace-nowrap overflow-x-auto block">
                        Ramón Cruz Montt 1902, Macul, Santiago
                      </a>
                    </div>
                    {/* Teléfono fijo */}
                    <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
                      <div className="rounded-full bg-blue-50 p-2 md:p-3 flex items-center justify-center">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-800" />
                      </div>
                      <a href="tel:+56222712657" className="text-blue-800 font-semibold hover:underline focus:underline whitespace-nowrap overflow-x-auto block">+56 2 22712657</a>
                    </div>
                    {/* Teléfono móvil + Domicilios + Urgencias */}
                    <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
                      <div className="rounded-full bg-blue-50 p-2 md:p-3 flex items-center justify-center">
                        <WhatsAppIcon />
                      </div>
                      <a href="tel:+56990641753" className="text-blue-800 font-semibold hover:underline focus:underline whitespace-nowrap overflow-x-auto block">+56 9 90641753</a>
                      <span className="text-blue-300 font-semibold">|</span>
                      <span className="text-blue-800 font-semibold whitespace-nowrap">Domicilios</span>
                      <span className="text-blue-300 font-semibold">|</span>
                      <span className="text-blue-800 font-semibold whitespace-nowrap">Urgencias</span>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
                      <div className="rounded-full bg-blue-50 p-2 md:p-3 flex items-center justify-center">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-800" />
                      </div>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-800 font-semibold hover:underline focus:underline whitespace-nowrap overflow-x-auto block">{CONTACT_INFO.email}</a>
                    </div>
                  </div>
                </div>

                {/* Espaciado extra solo en mobile antes de Horario de Atención */}
                <div className="mt-12 md:mt-0">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-900 mb-4 md:mb-6 mt-0 px-0 text-left">
                    Horario de Atención
                  </h3>
                  <div className="space-y-6 md:space-y-4 text-blue-700">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800 text-sm md:text-lg">Lunes a Sábados</span>
                      <span className="text-blue-800 text-sm md:text-lg">10:00 AM - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800 text-sm md:text-lg">Domingos y festivos</span>
                      <span className="text-blue-800 text-sm md:text-lg">10:00 AM - 14:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORMULARIO DE CONTACTO */}
              <div className="w-full max-w-md mx-auto md:max-w-full md:h-full">
                <div className="bg-white rounded-3xl border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300 relative mt-32 md:mt-0 mb-0 md:mb-0 pb-4 md:pb-0 md:h-full">
                  {/* Imagen de gato apoyado sobre el formulario */}
                  <Image 
                    src="/gato.webp" 
                    alt="Gato apoyado" 
                    width={256}
                    height={256}
                    className="absolute left-1/2 -translate-x-1/2 w-64 h-auto z-20 select-none pointer-events-none" 
                    style={{objectFit: 'contain', top: '-85.5px'}}
                    priority={false}
                    quality={75}
                  />
                  <div className="p-2 md:p-8 flex flex-col pt-20 md:pt-24 pb-0 md:pb-8 max-w-md mx-auto md:max-w-full md:mx-0 h-auto md:h-full">
                    <div className="mb-4 md:mb-6 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-0 md:mb-3 md:text-left">Envíanos un Mensaje</h3>
                      <p className="hidden md:block text-blue-700 text-sm md:text-base leading-relaxed md:text-left">
                        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={sendLead} className="space-y-5 flex flex-col">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-blue-800 hidden md:block">
                            Nombre
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            className="border border-blue-200 bg-white rounded-xl px-4 py-3 focus:border-blue-600 transition-all duration-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-blue-800 hidden md:block">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="border border-blue-200 bg-white rounded-xl px-4 py-3 focus:border-blue-600 transition-all duration-200"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-sm font-semibold text-blue-800 flex items-center gap-2 hidden md:flex">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#25D366"/>
                          </svg>
                          WhatsApp
                        </label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          placeholder="WhatsApp"
                          className="border border-blue-200 bg-white rounded-xl px-4 py-3 focus:border-blue-600 transition-all duration-200"
                        />
                      </div>

                      <div className="space-y-2 flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-blue-800 hidden md:block">
                          Mensaje
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Mensaje"
                          className="border border-blue-200 bg-white rounded-xl px-4 py-2 md:px-4 md:py-3 focus:border-blue-600 transition-all duration-200 min-h-[160px] md:min-h-[160px] mb-4 md:mb-0 placeholder:text-base md:resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md mt-4 md:mt-6 mb-0 md:mb-0"
                        disabled={loading}
                      >
                        {loading ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                      {success && <p className="text-green-600 font-semibold text-center mt-2">¡Mensaje enviado correctamente!</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Google Maps */}
        <section className="grid place-items-center min-h-[40vh] md:py-4 md:mt-0 md:mb-16">
          <div className="container">
            <div className="h-64 md:h-[400px] w-full bg-blue-100 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.088085475842!2d-70.58383492343089!3d-33.47305737338066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfd6c9e17417%3A0x8cdebbdf7035d49a!2sVETERINARIA%20RAMON%20CRUZ%20Macul!5e0!3m2!1ses-419!2sus!4v1751754970151!5m2!1ses-419!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de VRC Veterinaria Ramón Cruz en Macul"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer handleNavClick={handleNavClick} />
      <WhatsAppFloatingButton phoneNumber={CONTACT_INFO.whatsapp} delay={1000} />
    </div>
  )
}

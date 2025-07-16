"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CONTACT_INFO } from "@/lib/types"

export const QuickContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div className="flex-shrink-0 w-auto h-auto">
            <Image
              src="/perrito.webp"
              alt="Perrito - Mascota feliz"
              width={280}
              height={280}
              className="max-w-[280px] w-full rounded-full object-cover"
              priority={false}
            />
          </div>

          <div className="flex-1">
            <div className="w-full">
              <h3 className="text-2xl font-normal text-gray-800 mb-6 flex items-start leading-tight">
                <ArrowRight className="mr-3 h-6 w-6 mt-1 flex-shrink-0" />
                <span
                  className="block text-left max-w-sm mx-auto text-base leading-relaxed px-4 sm:max-w-xl sm:text-lg md:text-xl sm:text-left sm:px-0"
                >
                  Contáctanos a través de nuestro <a href="#contact" className="underline decoration-2 hover:text-blue-700 font-medium" onClick={e => {
                    e.preventDefault();
                    const element = document.getElementById("contact");
                    if (element) {
                      const yOffset = -120;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}>formulario web</a>, o escríbenos directamente por <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría agendar una cita para mi mascota.")}`} target="_blank" rel="noopener noreferrer" className="underline decoration-2 hover:text-green-600 font-medium">WhatsApp</a> para lo que necesites.
                </span>
              </h3>
              <div className="flex justify-center sm:justify-start sm:ml-9">
                <Button
                  asChild
                  className="rounded-full px-8 py-3 h-auto text-base font-medium text-white transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700 sm:px-12 sm:py-6"
                >
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría agendar una cita para mi mascota.")}`} target="_blank" rel="noopener noreferrer">
                    Enviar mensaje
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
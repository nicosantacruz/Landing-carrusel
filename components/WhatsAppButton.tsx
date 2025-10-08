"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import type { WhatsAppButtonProps } from "@/lib/types"

export const WhatsAppFloatingButton = ({
  phoneNumber,
  message = "Hola, me gustaría agendar una cita para mi mascota.",
  delay = 1500,
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Memoizar la URL de WhatsApp para evitar recálculos
  const whatsappUrl = useMemo(() => {
    const formattedPhone = phoneNumber.replace(/\D/g, "")
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`
  }, [phoneNumber, message])

  return (
    <div
      className={`fixed bottom-6 right-10 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] border-2 border-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contáctanos por WhatsApp"
        prefetch={false}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
          aria-hidden="true"
        >
          <path
            d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
            fill="#EDEDED"
          />
          <path
            d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
            fill="#55CD6C"
          />
          <path
            d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
            fill="#FEFEFE"
          />
        </svg>
      </Link>
    </div>
  )
}

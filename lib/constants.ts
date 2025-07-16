import type { Service } from "./types"
import { Stethoscope, FlaskConical, Building2, ShoppingBag, ScissorsIcon as Scissors2 } from 'lucide-react'

export const SERVICES: Service[] = [
  {
    title: "Consulta Veterinaria",
    description:
      "Consultas generales y de especialidad, consultas a domicilio, microchip, certificados de salud y vacunación completa.",
    icon: "consulta1",
    delay: "0ms",
  },
  {
    title: "Radiografía Digital",
    description: "Diagnóstico por imágenes con tecnología digital de alta resolución para resultados precisos.",
    icon: "radiografia",
    delay: "100ms",
  },
  {
    title: "Ecografía",
    description: "Estudios ecográficos especializados para diagnóstico interno no invasivo de tu mascota.",
    icon: "ecografia",
    delay: "200ms",
  },
  {
    title: "Laboratorio Clínico",
    description: "Análisis completos de sangre, orina y otros estudios para diagnósticos precisos.",
    icon: "laboratorio",
    delay: "300ms",
  },
  {
    title: "Cirugías",
    description:
      "Procedimientos quirúrgicos desde rutinarios hasta complejos realizados por veterinarios especializados.",
    icon: "cirugia",
    delay: "400ms",
  },
  {
    title: "Hospitalización",
    description: "Cuidado intensivo y monitoreo continuo para la recuperación de tu mascota.",
    icon: "hospital",
    delay: "500ms",
  },
  {
    title: "Salud Dental",
    description:
      "Destartraje y profilaxis dental. Eliminamos sarro y placa dental previniendo enfermedades bucales y mejorando la salud general de tu mascota.",
    icon: "diente",
    delay: "600ms",
  },
  {
    title: "Petshop & Farmacia",
    description: "Fármacos con prescripción médica, antiparasitarios, alimentos, accesorios y más para tu mascota.",
    icon: "petshop",
    delay: "700ms",
  },
  {
    title: "Peluquería",
    description: "Servicios de estética y cuidado personal para mantener a tu mascota bella y saludable.",
    icon: "peluqueria",
    delay: "800ms",
  },
]
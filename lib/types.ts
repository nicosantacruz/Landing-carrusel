import type React from "react"

export interface Service {
  title: string
  description: string
  icon: React.ComponentType<any> | string
  delay: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  whatsapp: string
}

export interface BusinessHours {
  weekdays: string
  weekends: string
}

export interface FormData {
  name: string
  email: string
  whatsapp?: string
  message: string
}

export interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  delay?: number
}

export interface SocialLinks {
  facebook?: string
  instagram?: string
  twitter?: string
}

export const CONTACT_INFO: ContactInfo = {
  address: "Ramón Cruz Montt 1902, Macul, Región Metropolitana",
  phone: "(2) 22712657",
  email: "contacto@vetramoncruz.cl",
  whatsapp: "+56975862335",
}

export const BUSINESS_HOURS: BusinessHours = {
  weekdays: "10:00 AM - 19:00",
  weekends: "10:00 AM - 14:00",
}

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/vetramoncruz",
  instagram: "https://www.instagram.com/vetramoncruz",
}
import { useIsMobile } from "./use-mobile"

export interface ResponsiveConfig {
  // Hero Section
  heroImage: string
  titleSize: string
  descriptionSize: string
  containerPadding: string
  maxWidth: string
  
  // Botones
  buttonSize: string
  buttonPadding: string
  
  // Espaciado general
  sectionSpacing: string
  elementSpacing: string
}

export function useResponsiveConfig(): ResponsiveConfig {
  const isMobile = useIsMobile()
  
  if (isMobile) {
    return {
      // Hero Section - Móvil
      heroImage: "/images/mobile/hero-mobile.webp",
      titleSize: "text-3xl sm:text-4xl",
      descriptionSize: "text-base",
      containerPadding: "pt-16",
      maxWidth: "max-w-full",
      
      // Botones - Móvil (más grandes para toque)
      buttonSize: "text-base",
      buttonPadding: "px-6 py-4",
      
      // Espaciado - Móvil (más espacio)
      sectionSpacing: "py-12",
      elementSpacing: "space-y-6"
    }
  }
  
  return {
    // Hero Section - Desktop
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_265621006-iIwwzX168JuQc1rGrduQBjs0IUymWb.jpeg",
    titleSize: "text-4xl sm:text-5xl md:text-6xl",
    descriptionSize: "text-lg",
    containerPadding: "pt-24",
    maxWidth: "max-w-xl",
    
    // Botones - Desktop
    buttonSize: "text-base",
    buttonPadding: "px-7 py-5",
    
    // Espaciado - Desktop
    sectionSpacing: "py-16",
    elementSpacing: "space-y-6"
  }
} 
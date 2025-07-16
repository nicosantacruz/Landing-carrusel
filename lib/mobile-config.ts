// Configuración específica para dispositivos móviles
export const MOBILE_CONFIG = {
  // Imágenes
  images: {
    hero: "/images/mobile/hero-mobile.jpg",
    // Puedes agregar más imágenes específicas para móvil aquí
    // services: "/images/mobile/services-mobile.jpg",
    // about: "/images/mobile/about-mobile.jpg",
  },
  
  // Tipografía
  typography: {
    heroTitle: "text-3xl sm:text-4xl",
    sectionTitle: "text-2xl sm:text-3xl",
    bodyText: "text-base",
    smallText: "text-sm",
  },
  
  // Espaciado
  spacing: {
    section: "py-12",
    element: "space-y-6",
    container: "px-4",
  },
  
  // Botones
  buttons: {
    primary: "px-6 py-4 text-base",
    secondary: "px-5 py-3 text-sm",
    icon: "w-6 h-6", // Tamaño de iconos en botones
  },
  
  // Layout
  layout: {
    container: "max-w-full",
    grid: "grid-cols-1 gap-6",
    flex: "flex-col",
  },
  
  // Animaciones (más suaves para móvil)
  animations: {
    duration: "duration-200",
    scale: "hover:scale-105",
  }
}

// Configuración específica para desktop
export const DESKTOP_CONFIG = {
  images: {
    hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_265621006-iIwwzX168JuQc1rGrduQBjs0IUymWb.jpeg",
  },
  
  typography: {
    heroTitle: "text-4xl sm:text-5xl md:text-6xl",
    sectionTitle: "text-3xl sm:text-4xl",
    bodyText: "text-lg",
    smallText: "text-base",
  },
  
  spacing: {
    section: "py-16",
    element: "space-y-6",
    container: "px-6",
  },
  
  buttons: {
    primary: "px-7 py-5 text-base",
    secondary: "px-6 py-4 text-base",
    icon: "w-5 h-5",
  },
  
  layout: {
    container: "max-w-xl",
    grid: "grid-cols-2 lg:grid-cols-3 gap-8",
    flex: "flex-row",
  },
  
  animations: {
    duration: "duration-300",
    scale: "hover:scale-110",
  }
} 
# Configuración de Versión Móvil - Veterinaria Ramón Cruz

## 🎯 ¿Qué hemos implementado?

Hemos creado un sistema completo que detecta automáticamente si el usuario está en un dispositivo móvil y muestra una versión optimizada de tu sitio web.

### ✅ Cambios realizados:

1. **Detección automática de dispositivos móviles**
2. **Imágenes diferentes para web y móvil**
3. **Tipografía optimizada para cada dispositivo**
4. **Espaciado y layout adaptados**
5. **Botones más grandes para móvil (mejor UX)**

## 📱 Para agregar tu imagen especial para móvil:

### Paso 1: Prepara tu imagen
- **Ubicación**: `public/images/mobile/hero-mobile.jpg`
- **Tamaño recomendado**: 750x1334px o 390x844px
- **Formato**: JPG, WebP o PNG
- **Tamaño máximo**: 500KB

### Paso 2: Características de la imagen ideal para móvil:
- ✅ **Vertical** (aspecto 9:16 o similar)
- ✅ **Enfoque en la parte superior** (donde va el texto)
- ✅ **Contraste alto** para que el texto blanco sea legible
- ✅ **Mascotas en primer plano**
- ✅ **Fondo simple o desenfocado**

### Paso 3: Coloca la imagen
```bash
# Copia tu imagen a esta carpeta:
public/images/mobile/hero-mobile.jpg
```

## 🔧 Personalizaciones adicionales que puedes hacer:

### 1. Cambiar el mensaje del botón de WhatsApp
Edita en `lib/types.ts`:
```typescript
export const CONTACT_INFO: ContactInfo = {
  // ... otros datos
  whatsapp: "+56975862335", // Tu número ya está configurado
}
```

### 2. Personalizar colores o estilos
Edita en `lib/mobile-config.ts`:
```typescript
export const MOBILE_CONFIG = {
  typography: {
    heroTitle: "text-3xl sm:text-4xl", // Cambia el tamaño del título
  },
  // ... más configuraciones
}
```

### 3. Agregar más imágenes específicas para móvil
En `lib/mobile-config.ts`:
```typescript
images: {
  hero: "/images/mobile/hero-mobile.jpg",
  services: "/images/mobile/services-mobile.jpg", // Nueva imagen
  about: "/images/mobile/about-mobile.jpg", // Nueva imagen
}
```

## 🎨 Diferencias entre Web y Móvil:

| Elemento | Web | Móvil |
|----------|-----|-------|
| **Imagen Hero** | Horizontal, ancha | Vertical, alta |
| **Título** | text-6xl | text-4xl |
| **Botones** | px-7 py-5 | px-6 py-4 |
| **Espaciado** | py-16 | py-12 |
| **Layout** | max-w-xl | max-w-full |

## 🚀 Cómo probar:

1. **En tu navegador**: Redimensiona la ventana a menos de 768px de ancho
2. **En móvil real**: Abre tu sitio en tu teléfono
3. **Herramientas de desarrollador**: Usa el modo responsive en Chrome DevTools

## 📋 Checklist para completar:

- [ ] Agregar tu imagen `hero-mobile.jpg` en `public/images/mobile/`
- [ ] Probar en diferentes dispositivos móviles
- [ ] Verificar que el texto sea legible sobre tu imagen
- [ ] Optimizar el tamaño de la imagen (máximo 500KB)
- [ ] Probar la velocidad de carga en conexiones lentas

## 🆘 Si necesitas ayuda:

1. **La imagen no se carga**: Verifica que esté en la carpeta correcta
2. **El texto no se ve bien**: Ajusta el contraste de tu imagen
3. **La página es lenta**: Optimiza el tamaño de la imagen
4. **No detecta móvil**: Refresca la página y verifica el ancho de pantalla

## 💡 Consejos adicionales:

- **Usa WebP** para mejor compresión
- **Prueba en diferentes dispositivos** (iPhone, Android, tablets)
- **Considera el modo oscuro** si tu sitio lo soporta
- **Mantén la consistencia visual** entre web y móvil

¡Tu sitio web ahora está completamente optimizado para móviles! 🎉 
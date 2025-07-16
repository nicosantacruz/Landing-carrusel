const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageName = process.argv[2];
if (!imageName) {
  console.error('❌ Debes indicar el nombre de la imagen a optimizar. Ejemplo: node optimize-image.js perrito.webp');
  process.exit(1);
}

async function optimizeImage() {
  try {
    const inputPath = path.join(__dirname, 'public', imageName);
    const outputPath = path.join(__dirname, 'public', imageName.replace('.webp', '-optimized.webp'));
    
    // Verificar que la imagen existe
    if (!fs.existsSync(inputPath)) {
      console.error(`❌ No se encontró la imagen ${imageName} en public/`);
      return;
    }

    console.log(`🔄 Optimizando imagen ${imageName} con compresión agresiva...`);
    
    // Obtener información de la imagen original
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    
    console.log(`📊 Tamaño original: ${originalSize} MB`);

    // Optimizar la imagen con compresión más agresiva
    await sharp(inputPath)
      .webp({ 
        quality: 70,        // Calidad reducida pero aún buena
        effort: 6,          // Máximo esfuerzo de compresión
        nearLossless: false, // Desactivar near-lossless para más compresión
        smartSubsample: true, // Submuestreo inteligente
        method: 6           // Método de compresión más agresivo
      })
      .toFile(outputPath);

    // Obtener información de la imagen optimizada
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);

    console.log(`✅ Optimización completada!`);
    console.log(`📊 Tamaño optimizado: ${optimizedSize} MB`);
    console.log(`📉 Reducción: ${reduction}%`);
    
    if (optimizedStats.size < originalStats.size) {
      // Crear backup de la original y reemplazar
      fs.copyFileSync(inputPath, path.join(__dirname, 'public', imageName.replace('.webp', '-backup.webp')));
      fs.copyFileSync(outputPath, inputPath);
      fs.unlinkSync(outputPath);
      
      console.log(`💾 Backup guardado como ${imageName.replace('.webp', '-backup.webp')}`);
      console.log(`🔄 Imagen original reemplazada con la versión optimizada`);
    } else {
      console.log(`⚠️  La optimización no redujo el tamaño. Manteniendo original.`);
      fs.unlinkSync(outputPath);
    }
    
  } catch (error) {
    console.error('❌ Error optimizando la imagen:', error.message);
  }
}

optimizeImage(); 
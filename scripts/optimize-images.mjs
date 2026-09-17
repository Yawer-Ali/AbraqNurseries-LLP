import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const srcDir = path.resolve('src', 'assets', 'images');
const publicDir = path.resolve('public', 'images');

// Ensure output directories exist
const categories = ['hero', 'varieties', 'gallery', 'nursery', 'trellis', 'harvest'];
for (const cat of categories) {
  fs.mkdirSync(path.join(publicDir, cat), { recursive: true });
}

// Map files to target categories and clean names
const varietyMapping = {
  'Gala Schica shingo red.jpg': 'gala-schniga.webp',
  'King roat.jpg': 'king-roat.webp',
  'Jeromine.jpg': 'jeromine.webp',
  'Fuji.jpg': 'fuji.webp',
  'Golden.jpg': 'golden-delicious.webp',
  'Jona Prince.jpg': 'red-jonaprince.webp',
  'Mema mestar.jpg': 'memma-master.webp',
  'Schica red.jpg': 'schnico-red.webp',
  'Ziola .jpg': 'ziola.webp'
};

const droneHeroMapping = {
  'DJI_0217.jpg': 'kashmir-orchard-aerial-1.webp',
  'DJI_0219.jpg': 'kashmir-orchard-aerial-2.webp',
  'DJI_0221.jpg': 'kashmir-orchard-aerial-3.webp',
  'DJI_0252.jpg': 'kashmir-orchard-aerial-4.webp'
};

async function processImages() {
  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} images in src/assets/images`);

  let processedCount = 0;

  for (const file of files) {
    // Skip duplicate files like (1).jpg if base exists
    if (file.includes('(1)')) {
      continue;
    }

    const inputPath = path.join(srcDir, file);
    if (!fs.statSync(inputPath).isFile()) continue;

    // Check if it's a variety image
    if (varietyMapping[file]) {
      const outName = varietyMapping[file];
      const outPath = path.join(publicDir, 'varieties', outName);
      console.log(`Processing Variety: ${file} -> ${outName}`);
      await sharp(inputPath)
        .rotate()
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outPath);
      processedCount++;
      continue;
    }

    // Check if it's a drone aerial
    if (droneHeroMapping[file]) {
      const outName = droneHeroMapping[file];
      const outPath = path.join(publicDir, 'hero', outName);
      console.log(`Processing Drone Hero: ${file} -> ${outName}`);
      await sharp(inputPath)
        .rotate()
        .resize({ width: 2200, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outPath);
      
      // Also copy to gallery
      await sharp(inputPath)
        .rotate()
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(publicDir, 'gallery', outName));

      processedCount++;
      continue;
    }

    // Categorize DSC series
    let category = 'gallery';
    let baseCleanName = file.replace(/\.jpe?g$/i, '').replace(/\s+/g, '-').toLowerCase() + '.webp';

    if (file.startsWith('DSC035') || file.startsWith('DSC036')) {
      category = 'nursery';
    } else if (file.startsWith('DSC078') || file.startsWith('DSC079')) {
      category = 'harvest';
    } else if (file.startsWith('DSC088') || file.startsWith('DSC089') || file.startsWith('DSC096')) {
      category = 'trellis';
    }

    const outPath = path.join(publicDir, category, baseCleanName);
    const galleryOutPath = path.join(publicDir, 'gallery', baseCleanName);

    console.log(`Processing [${category}]: ${file} -> ${baseCleanName}`);
    await sharp(inputPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(outPath);

    // Also add to gallery if not in gallery
    if (category !== 'gallery') {
      await sharp(inputPath)
        .rotate()
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(galleryOutPath);
    }

    processedCount++;
  }

  console.log(`\n🎉 Successfully optimized ${processedCount} images into public/images/!`);
}

processImages().catch(err => {
  console.error("Error processing images:", err);
});

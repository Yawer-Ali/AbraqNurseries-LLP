import fs from 'node:fs';
import path from 'node:path';

const srcDir = path.resolve('src', 'assets', 'videos');
const destDir = path.resolve('public', 'videos');

fs.mkdirSync(destDir, { recursive: true });

const videoMappings = [
  { src: 'DJI_0238.MP4', dest: 'kashmir-orchard-drone-hero.mp4' },
  { src: 'C7687.MP4', dest: 'harvest-packout-live.mp4' },
  { src: 'C9152.MP4', dest: 'nursery-propagation-live.mp4' },
  { src: 'C9168.MP4', dest: 'trellis-setup-live.mp4' }
];

for (const v of videoMappings) {
  const srcPath = path.join(srcDir, v.src);
  const destPath = path.join(destDir, v.dest);

  if (fs.existsSync(srcPath)) {
    console.log(`Copying ${v.src} -> ${v.dest}...`);
    fs.copyFileSync(srcPath, destPath);
    const sizeMb = (fs.statSync(destPath).size / (1024 * 1024)).toFixed(2);
    console.log(`Successfully placed ${v.dest} (${sizeMb} MB) in public/videos/`);
  } else {
    console.warn(`File not found: ${srcPath}`);
  }
}

console.log('Video deployment complete!');

import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const dir = 'public/images';
await mkdir(dir, { recursive: true });
const portrait = 'C:/Users/HP/Downloads/b25d06d6-cf74-4ba2-8780-0ca444bdca33.png';
await Promise.all([
  sharp(portrait).resize(900, 1125, { fit: 'cover', position: 'attention' }).webp({ quality: 84 }).toFile(`${dir}/portrait.webp`),
  sharp(portrait).resize(600, 750, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }).toFile(`${dir}/portrait-tablet.webp`),
  sharp(portrait).resize(540, 600, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }).toFile(`${dir}/portrait-mobile.webp`),
  sharp(`${dir}/lizz-original.png`).resize({ width: 1500, withoutEnlargement: true }).webp({ quality: 88 }).toFile(`${dir}/lizz.webp`),
  sharp(`${dir}/aster-original.jpg`).resize({ width: 1500, withoutEnlargement: true }).webp({ quality: 88 }).toFile(`${dir}/aster.webp`),
  sharp(`${dir}/meridian-original.png`).resize({ width: 1500, withoutEnlargement: true }).webp({ quality: 88 }).toFile(`${dir}/meridian.webp`),
]);
await import('./social-image.mjs');
await writeFile('public/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#181917"/><text x="15" y="47" fill="#efeee7" font-family="sans-serif" font-size="49" font-weight="600">s</text><circle cx="49" cy="46" r="5" fill="#ed6546"/></svg>');
console.log('Portrait crops, product previews, social image, and favicon created.');

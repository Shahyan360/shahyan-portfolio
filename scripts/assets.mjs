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
const og = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#181917"/><path d="M900 100v430M750 315h300" stroke="#41433d"/><circle cx="900" cy="315" r="150" fill="none" stroke="#41433d"/><text x="72" y="100" font-family="sans-serif" font-size="32" fill="#efeee7">shahyan<tspan fill="#ed6546">.</tspan></text><text x="72" y="260" font-family="sans-serif" font-size="72" letter-spacing="-3" fill="#efeee7">I build systems</text><text x="72" y="350" font-family="serif" font-style="italic" font-size="78" fill="#efeee7">that think,</text><text x="72" y="440" font-family="sans-serif" font-size="72" letter-spacing="-3" fill="#efeee7">connect, &amp; scale.</text><text x="72" y="555" font-family="sans-serif" font-size="22" fill="#b7b9af">MUHAMMAD SHAHYAN KHALID · SOFTWARE ENGINEER</text></svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
await writeFile('public/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#181917"/><text x="15" y="47" fill="#efeee7" font-family="sans-serif" font-size="49" font-weight="600">s</text><circle cx="49" cy="46" r="5" fill="#ed6546"/></svg>');
console.log('Portrait crops, product previews, social image, and favicon created.');

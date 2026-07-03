// One-off utility to (re)generate PWA/app icons from an inline SVG source.
// Not part of the build pipeline — run manually with `node scripts/generate-icons.mjs`.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const iconSvg = (size, padding = 0) => `
<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#16a34a" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#g)" />
  <g transform="translate(${padding}, ${padding}) scale(${1 - (padding * 2) / 100})">
    <path d="M50 20c-9.4 0-17 7.6-17 17 0 12.7 17 33 17 33s17-20.3 17-33c0-9.4-7.6-17-17-17z" fill="white"/>
    <circle cx="50" cy="37" r="7" fill="#16a34a"/>
  </g>
</svg>`;

const outDir = path.join(process.cwd(), "public", "icons");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  { file: path.join(outDir, "icon-192.png"), size: 192, padding: 0 },
  { file: path.join(outDir, "icon-512.png"), size: 512, padding: 0 },
  { file: path.join(outDir, "maskable-512.png"), size: 512, padding: 12 },
  { file: path.join(process.cwd(), "src", "app", "icon.png"), size: 512, padding: 0 },
  { file: path.join(process.cwd(), "src", "app", "apple-icon.png"), size: 180, padding: 0 },
];

for (const job of jobs) {
  await sharp(Buffer.from(iconSvg(job.size, job.padding)))
    .resize(job.size, job.size)
    .png()
    .toFile(job.file);
  console.log(`Wrote ${path.relative(process.cwd(), job.file)}`);
}

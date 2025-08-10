import fs from 'fs';
import path from 'path';

const baseUrl = 'https://seven-ways.com';
const lastmod = new Date().toISOString().split('T')[0];

const assetsDir = path.resolve('./dist/assets');

const pages = [
  { url: '/', lastmod },
  { url: '/about-us', lastmod },
  { url: '/services', lastmod },
  { url: '/contact-us', lastmod },
  { url: '/register', lastmod },
];

// ملفات الفيديو
const videos = [
  {
    file: 'car-polishing-CcwijhzS.mp4',
    title: 'Car Polishing Service',
    description: 'Premium polishing for luxury vehicles using global brands.',
    thumbnail: 'car-polishing-thumbnail.jpg',
    page: '/services#car-polishing',
  },
  {
    file: 'thermal-insulation.mp4',
    title: 'Thermal Insulation Service',
    description: 'Advanced thermal protection using high-performance films.',
    thumbnail: 'thermal-insulation-thumbnail.jpg',
    page: '/services#thermal-insulation',
  },
  // أضف المزيد بنفس التنسيق...
];

const allFiles = fs.readdirSync(assetsDir);
const imageFiles = allFiles
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
  .map((file) => `/assets/${file}`);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  )
  .join('')}

${videos
  .map(
    (video) => `
  <url>
    <loc>${baseUrl}${video.page}</loc>
    <video:video>
      <video:content_loc>${baseUrl}/assets/${video.file}</video:content_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:thumbnail_loc>${baseUrl}/assets/${video.thumbnail}</video:thumbnail_loc>
    </video:video>
  </url>`
  )
  .join('')}

${imageFiles
  .map(
    (imgUrl) => `
  <url>
    <loc>${baseUrl}${imgUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}${imgUrl}</image:loc>
    </image:image>
  </url>`
  )
  .join('')}

</urlset>
`;

const outputPath = path.resolve('./dist/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml);

console.log('✅ sitemap.xml generated successfully :', outputPath);

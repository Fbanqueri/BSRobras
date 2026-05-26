import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leemos tu archivo de datos de productos
const productsFilePath = path.join(__dirname, '../src/data/products.ts');
const productsFileContent = fs.readFileSync(productsFilePath, 'utf-8');

const baseUrl = 'https://bsrobras.com.ar';
const currentDate = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/catalogo</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

const addedUrls = new Set();

// 1. Mapeo de Subcategorías (Nivel 2)
const subcategoryRegex = /id:\s*['"]([^'"]+)['"],\s*name:\s*['"][^'"]+['"],\s*categoryId:\s*['"]([^'"]+)['"]/g;
const subcategoryMatches = [...productsFileContent.matchAll(subcategoryRegex)];

subcategoryMatches.forEach(match => {
    const [_, subId, catId] = match;
    const targetUrl = `${baseUrl}/catalogo/${catId}/${subId}`;
    if (!addedUrls.has(targetUrl)) {
        addedUrls.add(targetUrl);
        xml += `
  <url>
    <loc>${targetUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
});

// 2. Mapeo de Productos (Nivel 3) - Buscamos las propiedades directo en todo el archivo de forma flexible
const productRegex = /slug:\s*['"]([^'"]+)['"][\s\S]*?category:\s*['"]([^'"]+)['"][\s\S]*?subcategory:\s*['"]([^'"]+)['"]/g;
const productMatches = [...productsFileContent.matchAll(productRegex)];

productMatches.forEach(match => {
    const [_, slug, cat, sub] = match;
    const targetUrl = `${baseUrl}/catalogo/${cat}/${sub}/${slug}`;
    if (!addedUrls.has(targetUrl)) {
        addedUrls.add(targetUrl);
        xml += `
  <url>
    <loc>${targetUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }
});

xml += `\n</urlset>`;

// Guardamos el sitemap final
const publicPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf-8');

console.log('¡Sitemap.xml dinámico y jerárquico generado con éxito para BSR Obras!');
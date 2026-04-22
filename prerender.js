import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

async function runPrerender() {
    console.log('Starting SSR prerender (no browser needed)...');

    // 1. Read routes from sitemap
    const sitemapContent = fs.readFileSync(path.join(distPath, 'sitemap.xml'), 'utf-8');
    const matches = [...sitemapContent.matchAll(/<loc>(https?:\/\/[^\/]+)?(\/.*?)<\/loc>/g)];
    const routes = matches.map(match => match[2] || '/');
    const uniqueRoutes = [...new Set(['/', ...routes])];
    console.log(`Found ${uniqueRoutes.length} routes to prerender.`);

    // 2. Read the base HTML template from the Vite build output
    const templateHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

    // 3. Import the SSR render function (built by Vite)
    const { render } = await import('./dist/server/entry-server.js');

    // 4. Render each route
    for (const route of uniqueRoutes) {
        console.log(`Prerendering ${route}...`);

        const { html: appHtml, helmet } = render(route);

        // Inject the rendered app HTML into the template
        let finalHtml = templateHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

        // Inject Helmet meta tags into <head>
        if (helmet) {
            const headTags = [
                helmet.title?.toString() || '',
                helmet.meta?.toString() || '',
                helmet.link?.toString() || '',
                helmet.script?.toString() || '',
            ].filter(Boolean).join('\n');

            if (headTags) {
                finalHtml = finalHtml.replace('</head>', `${headTags}\n</head>`);
            }
        }

        // Write the prerendered HTML file
        const routeDir = path.join(distPath, route === '/' ? '' : route);
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), finalHtml);
    }

    console.log('Prerendering complete! All routes have been prerendered.');
}

runPrerender().catch(err => {
    console.error('Prerender failed:', err);
    process.exit(1);
});

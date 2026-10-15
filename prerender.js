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
    let templateHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

    // Inline CSS to eliminate render-blocking stylesheet requests on mobile
    const assetsDir = path.join(distPath, 'assets');
    const cssFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir).filter(f => f.endsWith('.css')) : [];
    if (cssFiles.length > 0) {
        console.log(`Inlining CSS from ${cssFiles.join(', ')} directly into HTML templates...`);
        const fullCss = cssFiles.map(f => fs.readFileSync(path.join(assetsDir, f), 'utf-8')).join('\n');
        const styleTag = `<style id="bsr-app-css">${fullCss}</style>`;
        templateHtml = templateHtml.replace(/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/i, () => styleTag);
    }

    // 3. Import the SSR render function (built by Vite)
    const { render } = await import('./dist/server/entry-server.js');

    // 4. Render each route
    for (const route of uniqueRoutes) {
        console.log(`Prerendering ${route}...`);

        const { html: appHtml, helmet } = render(route);

        // Extract and deduplicate head tags (supporting both Helmet and React 19 native metadata rendering)
        let headElements = [];

        if (helmet) {
            const helmetTags = [
                helmet.title?.toString() || '',
                helmet.meta?.toString() || '',
                helmet.link?.toString() || '',
                helmet.script?.toString() || '',
            ].filter(Boolean);
            headElements.push(...helmetTags);
        }

        // In React 19, metadata tags are rendered directly in appHtml by renderToString
        const titleMatches = [...appHtml.matchAll(/<title>.*?<\/title>/g)].map(m => m[0]);
        const canonicalMatches = [...appHtml.matchAll(/<link rel="canonical"[^>]*\/?>/g)].map(m => m[0]);
        const metaDescMatches = [...appHtml.matchAll(/<meta name="description"[^>]*\/?>/g)].map(m => m[0]);
        const ogMatches = [...appHtml.matchAll(/<meta property="og:[^"]+"[^>]*\/?>/g)].map(m => m[0]);
        const jsonLdMatches = [...appHtml.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g)].map(m => m[0]);

        // Take the most specific (last) title, canonical, and description to avoid duplicates
        const finalTitle = titleMatches.length > 0 ? titleMatches[titleMatches.length - 1] : '';
        const finalCanonical = canonicalMatches.length > 0 ? canonicalMatches[canonicalMatches.length - 1] : '';
        const finalMetaDesc = metaDescMatches.length > 0 ? metaDescMatches[metaDescMatches.length - 1] : '';

        if (finalTitle && !headElements.some(t => t.includes('<title>'))) headElements.push(finalTitle);
        if (finalMetaDesc && !headElements.some(t => t.includes('name="description"'))) headElements.push(finalMetaDesc);
        if (finalCanonical && !headElements.some(t => t.includes('rel="canonical"'))) headElements.push(finalCanonical);
        headElements.push(...ogMatches);
        headElements.push(...jsonLdMatches);

        // Remove extracted head tags from appHtml so <div id="root"> remains clean body content
        const cleanAppHtml = appHtml
            .replace(/<title>.*?<\/title>/g, '')
            .replace(/<link rel="canonical"[^>]*\/?>/g, '')
            .replace(/<meta name="description"[^>]*\/?>/g, '')
            .replace(/<meta property="og:[^"]+"[^>]*\/?>/g, '')
            .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

        // Inject the rendered app HTML into the template (using function replacer to avoid special $ patterns)
        let finalHtml = templateHtml.replace('<div id="root"></div>', () => `<div id="root">${cleanAppHtml}</div>`);

        const headTagsStr = headElements.filter(Boolean).join('\n    ');

        if (finalHtml.includes('<!-- HEAD_OUTLET -->')) {
            finalHtml = finalHtml.replace('<!-- HEAD_OUTLET -->', () => headTagsStr);
        } else if (headTagsStr) {
            finalHtml = finalHtml.replace('</head>', () => `${headTagsStr}\n</head>`);
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

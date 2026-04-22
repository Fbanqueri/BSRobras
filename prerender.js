import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

async function runPrerender() {
    console.log('Starting custom prerender script...');
    
    // Read routes from sitemap
    const sitemapContent = fs.readFileSync(path.join(distPath, 'sitemap.xml'), 'utf-8');
    const matches = [...sitemapContent.matchAll(/<loc>(https?:\/\/[^\/]+)?(\/.*?)<\/loc>/g)];
    const routes = matches.map(match => match[2] || '/');
    
    // Ensure unique routes and always include /
    const uniqueRoutes = [...new Set(['/', ...routes])];
    console.log(`Found ${uniqueRoutes.length} routes to prerender.`);

    const app = express();
    app.use(express.static(distPath));
    app.use((req, res) => res.sendFile(path.join(distPath, 'index.html')));

    const port = 3000;
    const server = app.listen(port, async () => {
        console.log(`Server running on port ${port}`);
        try {
            const browser = await puppeteer.launch({ headless: 'new' });
            const page = await browser.newPage();
            
            for (const route of uniqueRoutes) {
                console.log(`Prerendering ${route}...`);
                await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle2' });
                
                const html = await page.content();
                
                const routeDir = path.join(distPath, route === '/' ? '' : route);
                if (!fs.existsSync(routeDir)) {
                    fs.mkdirSync(routeDir, { recursive: true });
                }
                
                fs.writeFileSync(path.join(routeDir, 'index.html'), html);
            }
            console.log('Prerendering complete!');
            await browser.close();
        } catch (error) {
            console.error('Error during prerendering:', error);
            process.exit(1);
        } finally {
            server.close();
        }
    });
}

runPrerender();

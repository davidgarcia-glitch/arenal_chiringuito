// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arenalelchiringuito.es',
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        return path.startsWith('/es/') || path.startsWith('/en/') || path.startsWith('/fr/');
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});
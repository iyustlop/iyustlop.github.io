import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://iyustlop.github.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/components'),
    }),
  ],
  compressHTML: true,
  server: {
    port: 4321,
    host: true,
  },
});

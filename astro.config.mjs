import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://iyustlop.github.io',
  compressHTML: true,
  server: {
    port: 4321,
    host:true
  }
});
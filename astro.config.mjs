import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://iyustlop.github.io',
  server: {
    port: 4321,
    host:true
  },
  integrations: [tailwind()]
});
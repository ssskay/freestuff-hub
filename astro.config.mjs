import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

// Static output; apex origin drives canonical + sitemap.
export default defineConfig({
  integrations: [sitemap()],
  site: SITE.url,
  devToolbar: {
    enabled: false,
  },
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight'; 
import expressiveCode from 'astro-expressive-code'; // Import the astro-expressive-code integration

const SITE_TITLE = 'Chris Blogs'; // Hardcoded for now, as discussed

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    expressiveCode(), // Assuming this is the correct function call for astro-expressive-code
    starlight({
      title: SITE_TITLE
    }),
    mdx(),
    sitemap()
  ]
});

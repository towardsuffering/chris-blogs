import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import expressiveCode from 'astro-expressive-code'; // Import the astro-expressive-code integration
import solidJs from "@astrojs/solid-js";
const SITE_TITLE = 'Chris Blogs'; // Hardcoded for now, as discussed


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [expressiveCode(),
  // Assuming this is the correct function call for astro-expressive-code
  starlight({
    title: SITE_TITLE
  }), mdx(), sitemap(), solidJs()]
});
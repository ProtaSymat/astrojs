import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    react()
  ],

  site: 'https://astrojs-fwdrieszp-protasymats-projects.vercel.app/',
  output: 'static',

  build: {
    assets: 'assets'
  },

  content: {
    collections: {
      blog: {
        type: 'content',
        schema: {
          title: 'string',
          description: 'string',
          author: 'string',
          date: 'date',
          image: 'string',
          tags: 'array',
          featured: 'boolean',
          slug: 'string'
        }
      }
    }
  },
  
  // Configuration Markdown
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  image: {
    domains: ["images.unsplash.com", "via.placeholder.com"]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
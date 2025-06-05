import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://pixelperfect-agency.netlify.app', // Remplacez par votre URL de déploiement
  output: 'static',
  build: {
    assets: 'assets'
  },
  image: {
    domains: ["images.unsplash.com", "via.placeholder.com"]
  }
});
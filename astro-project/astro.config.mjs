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

  image: {
    domains: ["images.unsplash.com", "via.placeholder.com"]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
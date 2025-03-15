// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import astroI18next from 'astro-i18next';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroI18next()],
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://alyanoyigor.github.io',
  base: import.meta.env.DEV ? '/' : 'astro-project',
});

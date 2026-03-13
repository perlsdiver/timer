import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/timer/astro/',
  outDir: '../astro' // Build directly into the root 'astro' folder for deployment
});

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    vue({
      appEntrypoint: "/src/main.js"
    }),
    tailwind()
  ],
});
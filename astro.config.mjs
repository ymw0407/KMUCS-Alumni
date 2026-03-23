import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const isDev = process.argv.includes('dev');

export default defineConfig({
  site: 'https://kmucs-alumni.github.io',
  // base: '/kmucs-alumni/', // GitHub Pages 서브디렉토리 배포 시 활성화
  output: 'static',
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [
      vanillaExtractPlugin(isDev ? { unstable_mode: 'transform' } : {}),
    ],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
});

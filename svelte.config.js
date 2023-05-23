import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    appDir: 'app',
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/easy-volume-selector' : '/',
    }
  },
};

export default config;

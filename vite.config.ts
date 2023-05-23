import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unoCSS from 'unocss/vite';

console.log(process.env.NODE_ENV);

export default defineConfig({
  plugins: [sveltekit(), unoCSS()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});

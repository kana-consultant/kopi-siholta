// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      viteCompression({
        algorithm: 'brotliCompress',
        threshold: 10240,
        ext: '.br'
      }),
      viteCompression({
        algorithm: 'gzip',
        threshold: 10240,
        ext: '.gz'
      })
    ],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'astro-chunks': ['astro']
          }
        }
      }
    }
  },
  image: {
    formats: ['avif', 'webp'],
    quality: 80
  }
});
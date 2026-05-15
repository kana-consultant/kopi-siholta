// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      tailwindcss(),
      viteCompression({
        algorithm: 'brotliCompress',
        threshold: 1024,
        ext: '.br'
      }),
      viteCompression({
        algorithm: 'gzip',
        threshold: 1024,
        ext: '.gz'
      })
    ],
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('astro')) return 'astro-vendor';
              if (id.includes('lucide')) return 'icons-vendor';
              return 'vendor';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 300,
    target: 'es2020'
  },
  image: {
    formats: ['avif', 'webp'],
    quality: 80,
    densities: [1, 2],
    maximumLocalLength: 1024
  },
  compressHTML: true,
  inlineStylesheets: 'auto'
});
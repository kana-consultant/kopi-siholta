// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import iconify from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    iconify(),
  ],
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
      chunkSizeWarningLimit: 300,
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
      },
      target: 'es2020' 
    }
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      }
    },
    domains: []
  },
  compressHTML: true,
});
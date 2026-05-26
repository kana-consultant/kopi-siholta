/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary colors - Rich coffee browns
        cream: '#F5F0E8',
        darkBrown: '#2C1810',
        coffee: '#5D4037',
        lightBrown: '#8D6E63',
        gold: '#C4A35A',
        accent: '#B8860B',
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
}
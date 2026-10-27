/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#70452E',
          'brown-dark': '#4A2A1A',
          'brown-light': '#8E5A3F',
          cream: '#F7F0E3',
          'cream-light': '#FAF5EC',
          'cream-dark': '#EFE4D0',
          green: '#65734B',
          'green-dark': '#4D5A34',
          'green-light': '#7E8E60',
          gold: '#D99A55',
          'gold-dark': '#B87E3A',
          'gold-light': '#E5B174',
          white: '#FFFDF8',
          dark: '#2B1A12',
          muted: '#76675E'
        }
      },
      fontFamily: {
        serif: ['Lora', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Nunito Sans', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(112, 69, 46, 0.08)',
        card: '0 10px 30px -4px rgba(112, 69, 46, 0.06), 0 4px 10px -2px rgba(112, 69, 46, 0.04)',
        hover: '0 20px 35px -5px rgba(112, 69, 46, 0.12), 0 10px 15px -3px rgba(112, 69, 46, 0.06)'
      }
    },
  },
  plugins: [],
};

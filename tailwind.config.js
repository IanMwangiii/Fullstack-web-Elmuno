/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce4ac',
          300: '#fad177',
          400: '#f8b43d',
          500: '#f79009',
          600: '#db6d04',
          700: '#b64d07',
          800: '#933c0c',
          900: '#79330d',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e3e3e6',
          200: '#c7c7cd',
          300: '#a4a4af',
          400: '#81818f',
          500: '#676776',
          600: '#515160',
          700: '#43434d',
          800: '#27272e',
          900: '#1a1a1f',
          950: '#121215',
        }
      },
    },
  },
  plugins: [],
};
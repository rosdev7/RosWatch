/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  darkMode: ['class', '[data-theme="dark"]'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'main-red': '#1f2937',
        'main-black': '#374151',
        accent: '#c6a15b',
      },
      width: {
        container: '1300px',
        '380px': '380px',
      },
      height: {
        header: '80px',
      },
      margin: {
        '380px': '380px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};

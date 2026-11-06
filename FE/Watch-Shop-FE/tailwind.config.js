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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        'main-red': '#1f2937',
        'main-black': '#374151',
        accent: '#c6a15b',
        'accent-dark': '#a9854a',
        ink: '#14181f',
        'ink-dark': '#0b0e13',
        cream: '#f7f4ed',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease both',
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

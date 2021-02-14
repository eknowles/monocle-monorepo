module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnight: {
          100: '#2966a3',
          200: '#235485',
          300: '#1e4267',
          400: '#17304a',
          500: '#112132',
          600: '#0e1f2f',
          700: '#0d1c2b',
          800: '#0c1c2c',
          900: '#0a1a29',
        },
        dawn: {
          100: '#fcfcfd',
          200: '#e9edf2',
          300: '#d2dbe4',
          400: '#bfccd9',
          500: '#a9bacb',
          600: '#a6b8c9',
          700: '#a6b8c9',
          800: '#a3b5c8',
          900: '#9fb3c6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

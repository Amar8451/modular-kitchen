/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d5ac63',
          50: '#fbf7ee',
          100: '#f6eed6',
          200: '#ecd9aa',
          300: '#e1be79',
          400: '#d5ac63',
          500: '#bf9247',
          600: '#9b7135',
          700: '#755128',
          800: '#553920',
          900: '#3a2517',
        },
        dark: {
          DEFAULT: '#1b1b1b',
          950: '#0d0d0d',
          900: '#141414',
          850: '#1b1b1b',
          800: '#252525',
          700: '#333333',
          600: '#4a4a4a',
        },
        light: {
          DEFAULT: '#f7f7f7',
          50: '#ffffff',
          100: '#f7f7f7',
          200: '#ededed',
          300: '#dedede',
        }
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        heading: ['"Montserrat"', '"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

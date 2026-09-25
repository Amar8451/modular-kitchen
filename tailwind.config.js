/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E85025',
          'orange-hover': '#D43F15',
          'orange-light': '#FFF3EE',
          navy: '#151B3D',
          'navy-light': '#1E2554',
          'navy-dark': '#0B0E22',
          cream: '#FFFBF7',
          warm: '#FBF8F4',
        },
        navy: {
          50: '#f4f6fa',
          100: '#e5e9f3',
          200: '#cbd4e6',
          300: '#a3b5d2',
          400: '#7590bb',
          500: '#5372a4',
          600: '#3f588a',
          700: '#334670',
          800: '#1b224e',
          900: '#151b3d',
          950: '#0b0e22',
        },
        // gold is mapped to the signature warm terracotta orange for 100% theme synergy
        gold: {
          DEFAULT: '#E85025',
          50: '#FFF7F3',
          100: '#FFEAE1',
          200: '#FFD2C0',
          300: '#FFAC8D',
          400: '#FA7447',
          500: '#E85025',
          600: '#D03E14',
          700: '#AC300E',
          800: '#87260D',
          900: '#6E220D',
        },
        // dark is mapped to luxury midnight navy instead of dull gray
        dark: {
          DEFAULT: '#151B3D',
          950: '#090C1A',
          900: '#0F142E',
          850: '#151B3D',
          800: '#1C244F',
          700: '#283369',
          600: '#3B4A8D',
        },
        light: {
          DEFAULT: '#FBF8F4',
          50: '#ffffff',
          100: '#FBF8F4',
          200: '#F3EFE9',
          300: '#E6E0D6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        heading: ['"Outfit"', '"Montserrat"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}


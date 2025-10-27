/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F6BE00', // FHSU Tiger Gold
          600: '#d5a400',
          700: '#b08900',
          800: '#8b6f00',
          900: '#705800',
        },
        'fhsu-gold': '#F6BE00',
        'fhsu-black': '#000000',
        'fhsu-gold-dark': '#d5a400',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Arial', 'sans-serif'],
        'heading': ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

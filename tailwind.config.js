/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#FECC02',
        text: '#131313',
        secondary: '#4E4E4E',
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}


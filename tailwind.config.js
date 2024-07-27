/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor:{
        yogaBlue:'rgb(27 50 82)',
        cardColor: 'rgb(224, 217, 207)',
      }
    },
  },
  plugins: [],
}
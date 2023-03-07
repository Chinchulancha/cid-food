/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'blue': '#04BFBF',
        'yellow': '#F2CF63',
        'red': '#FA5754',
        'green' : '#25D366',
      },

      fontFamily: {
        mont: "'Montserrat', sans-serif"
      }

    },
  },
  plugins: [],
}

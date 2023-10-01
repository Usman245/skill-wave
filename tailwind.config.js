/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: '768px'
        }
      }
    },
    fontFamily: {
      primary: "Montserrat",
      secondary: 'Dancing Script'
    }
  },
  plugins: [],
}
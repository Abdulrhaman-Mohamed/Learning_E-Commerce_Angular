/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#ed5055"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
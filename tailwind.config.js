/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'myfont': ['Manrope', 'sans-serif'],
      'fontformainhome': ['abril-flatface'],
      'recursive': ['Recursive'],
      'cursive': ['Lugrasimo'],
      'pixel': ['Pixelify Sans']
    }
  },
  plugins: [],
}
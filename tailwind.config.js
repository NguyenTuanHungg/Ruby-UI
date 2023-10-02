/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.w-minus': {
          width: 'calc(100% - 263px)',
        },
        '.font-roboto':{
          fontFamily:'Roboto'
        },
        '.logo-color':{
          backgroundColor:'rgba(243, 217, 217, 1)'
        },
        '.thead-background':{
          backgroundColor:'rgba(181, 1, 62, 1)'
        },
        '.td1-color':{
          backgroundColor:'rgba(205, 92, 92, 1)'
        },
        '.td2-color':{
          backgroundColor:'rgba(229, 229, 229, 1)'
        }
      });
    },
  ],
}


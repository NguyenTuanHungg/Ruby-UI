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
      });
    },
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      'main-color' : '#1ABC9C',
      'secondary-color' : '#00a88e',
      'third-color' : '#34d399',
      'four-color' : '#088178',
      'header-color' : '#C4C4C4',
    
    },
    screens: {
      'respon1' : '767px',
       // => @media (min-width: 767px) { ... }
    }
    },
  },
  plugins: [],
};

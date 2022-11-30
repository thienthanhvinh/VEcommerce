/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      'main-color' : '#1ABC9C',
      'secondary-color' : '#6ee7b7',
      'third-color' : '#34d399',
      'bg-header' : 'C4C4C4',
    },
    },
  },
  plugins: [],
};

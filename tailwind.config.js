/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    flowbite.content(),
    "./src/**/*.{html,js,jsx,ts,tsx}", 
     "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", 
        background: "#000000", 
         gray900: "#0f172a",
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans], 
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out", 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

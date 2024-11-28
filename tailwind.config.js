/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    flowbite.content(),
    "./src/**/*.{html,js,jsx,ts,tsx}", // Se till att alla dina filer är inkluderade här
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
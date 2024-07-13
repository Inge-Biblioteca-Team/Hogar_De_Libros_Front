const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {

      colors: {
        Bottoms: {
          light: '#', //Hover del boton
          DEFAULT: '#557EE9', //Cuerpo del boton
          dark: '#3457B1', 
        },
        Text: {
          light: '#',
          DEFAULT: '#FFFFFF', //Blanco
          dark: '#', 
        }
      }
    },
    container:{
      center:true
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
};

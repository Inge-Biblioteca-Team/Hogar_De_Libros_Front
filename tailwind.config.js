import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  _content(),
];

export const theme = {
  extend: {
    colors: {
      Bottoms: {
        light: '#',
        DEFAULT: '#1a53d9', //Cuerpo del boton
        dark: '#142c6c', //Hover del boton
      },
      Text: {
        light: '#',
        DEFAULT: '#FFFFFF', //Blanco
        dark: '#00000', //Negro
      },
      Body: {
        light: '#557EE9', //Color viejo
        DEFAULT: '#1a53d9', //Color Nuevo
        dark: '#111827', //Color del footer el mas obscuro
      }
    }
  },
  container: {
    center: true
  }
};
export const plugins = [
  plugin(),
];

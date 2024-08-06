/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     borderWidth : {
      'cusmo-tl-br': '4px',
      },
      colors:{
      bluePrincipal : '#00334f',
      blueButton: '#0c4a6b',
      blueIn: '#07537c',  
    }},
  },
  plugins: [],
};

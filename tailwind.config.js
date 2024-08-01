import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        textreveal: ' textreveal 1s ',
        textreveal2: ' textreveal 2s',
        textreveal3: ' textreveal 3s'
      },
      keyframes:{
        textreveal:{
          from: {
            height:'0px',
          },
          to:{
            height:'65px',
          }
      }
    },
  },
  },
  plugins: [],
  darkMode: 'selector',
}


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
        textreveal: ' textreveal 1s ease-out forwards',
      },
      keyframes:{
        textreveal:{
          from: {
             
             transform: 'translateY(100%)'
          },
          to:{
            
             transform: 'translateY(0)'
          }
      }
    },
  },
  },
  plugins: [],
  darkMode: 'selector',
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
       fontFamily: {
         primary: ['Satoshi', 'sans-serif'],
         secondary: ['Clash Display', 'sans-serif'],
         tertiary: ['STIX Two Text', 'serif'],
         sub: ['Poppins', 'sans-serif'],
         news: ['Baskervville', 'serif'],
         bellefair: ['Bellefair', 'serif'],
         rubik: ['Rubik', 'sans-serif'],
         inter: ['Inter', 'sans-serif'],
       },
     },
   },
   variants: {},
   plugins: [],
 }

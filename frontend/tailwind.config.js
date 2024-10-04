/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: '#E39A3A', 
          lightGray: '#F5F5F5', // Used for bg of inputs, etc
          gray: '#B3B3B3', // Used for placeholders in inputs, etc
        },
      }
    },
  },
  plugins: [],
};

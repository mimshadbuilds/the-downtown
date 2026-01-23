/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000', 
        secondary: '#fff', 
        accent: '#f59e0b',
        blink: '#111111',
        yellowish: '#e6e6e0',
        sliderBg: '#f0f9ff',
        blueish: '#3b82f6',
        pinkish: '#ec4899',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}


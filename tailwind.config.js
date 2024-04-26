/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        'orange': '#A91F24',
        'orange-light': '#F36F21'
      },
      backgroundImage: {
        'hero-grad': "url('/src/assets/Hero-bg.png')",
      }
    },
  },
  plugins: [],
}
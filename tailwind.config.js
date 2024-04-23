/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'orange': '#A91F24',
        'orange-light': '#F36F21'
      },
    },
  },
  plugins: [],
}
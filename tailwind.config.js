/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111618",
        light: "#F4F4F4",
        accent: "#00B79F",
      },
    },
  },
 
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
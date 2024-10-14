/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Montserrat", "sans-serif"],
        bodyFont: ["Josefin Sans", "sans-serif"],
        accentFont: ["Satisfy", "sans-serif"],
      },

      colors: {
        primaryColor: "#222831",
        secondaryColor: "#393E46",
        accentColor: "#00ADB5",
        titleColor: "#F9F7F7",
        bodyColor: "#dac2cf",
      }
    },
  },
  plugins: [],
}
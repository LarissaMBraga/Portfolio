/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#FFFCF9",
        dark: "#0A0A0A",
        accent: "#FF4D00",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
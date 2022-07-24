/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkred: {
          100: "#562B6C",
          200: "#401954",
          300: "#2B0C3B",
          400: "#180323",
          500: "#060009",
          600: "#050008",
          700: "#040006",
          800: "#030005",
          900: "#010002",
        }
      }
    },
  },
  plugins: [],
};

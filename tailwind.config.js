/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkred: {
          500: "#060009",
        }
      }
    },
  },
  plugins: [],
};

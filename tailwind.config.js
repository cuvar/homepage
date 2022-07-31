/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cblue: {
          500: "#01020a",
        },
        cwhite: {
          500: "#E3F4F3",
        },
        cgreen: {
          500: "#198a86",
        }
      }
    },
  },
  plugins: [],
};

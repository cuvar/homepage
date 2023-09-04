import { type Config } from "tailwindcss";

export default {
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
          300: "#5eadaa", // https://maketintsandshades.com/#198a86
          400: "#47a19e",
          500: "#198a86",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

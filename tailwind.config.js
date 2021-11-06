module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oxford: {
          100: '#081121',
          200: '#081121',
          300: '#081121',
          400: '#081121',
          500: '#081121',
          600: '#081121',
          700: '#081121',
          800: '#081121',
          900: '#081121',
        },
        beigewhite: {
          100: '#F4F4F6',
          200: '#F4F4F6',
          300: '#F4F4F6',
          400: '#F4F4F6',
          500: '#F4F4F6',
          600: '#F4F4F6',
          700: '#F4F4F6',
          800: '#F4F4F6',
          900: '#F4F4F6',
        },
        crayola: {
          100: '#d0f4f7',
          200: '#b1edf2',
          300: '#92e6ec',
          400: '#73dfe7',
          500: '#57D8E2',
          600: '#4ed6e0',
          700: '#35d0dc',
          800: '#23beca',
          900: '#1da1ab',
        },

        byzantium: {
          100: '#D13AB3',
          200: '#D13AB3',
          300: '#D13AB3',
          400: '#D13AB3',
          500: '#D13AB3',
          600: '#D13AB3',
          700: '#D13AB3',
          800: '#D13AB3',
          900: '#D13AB3',
        },
      },
      keyframes: {
        gradientroll: {
          '0%': { color: 'gradientred' },
          '100%': { color: 'gradientblue' },
        }

      },
      animation: {
        gradientroll: 'gradientroll 3s infinite ',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oxford: {
          100: '#6B707A',
          200: '#525864',
          300: '#39414D',
          400: '#212937',
          500: '#081121',
          600: '#070F1E',
          700: '#060E1A',
          800: '#060C17',
          900: '#050A14',
        },
        beigewhite: {
          100: '#FAFAFB',
          200: '#F8F8FA',
          300: '#F7F7F9',
          400: '#F5F5F7',
          500: '#F4F4F6',
          600: '#DCDCDD',
          700: '#C3C3C5',
          800: '#ABABAC',
          900: '#929294',
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
          100: '#A97FA1',
          200: '#9B6992',
          300: '#8D5482',
          400: '#7E3E73',
          500: '#D13AB3',
          600: '#652559',
          700: '#5A214F',
          800: '#4E1D45',
          900: '#43193B',
        },
      },
      keyframes: {
        gradientroll: {
          '0%': { color: 'byzantium' },
          '100%': { color: 'crayola' },
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
      borderColor: ['active'],
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [],
}

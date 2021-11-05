module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oxford: '#081121',
        beigewhite: '#F4F4F6',
        glaucous: '#ACC8E5',
        byzantium: '#BA4FA5',
        customlavender: '#B17DDE',
        customgreen: '#059E75',
        gradientblue: '#57D8E2',
        gradientred: '#D13AB3',
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

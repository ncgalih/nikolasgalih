const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      
    screens: {
      'xs': { 'min': '480px', 'max': '640px'},
      ...defaultTheme.screens,
    }
  },
    
  },
  plugins: [],
}

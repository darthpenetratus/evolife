/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'jade-green': '#00A86B',
        'jade-green-light': '#00C07F',
        'jade-green-dark': '#008B5A',
        'dark-green': '#00100A',
      }
    },
  },
  plugins: [],
}


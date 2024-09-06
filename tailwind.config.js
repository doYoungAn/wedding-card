/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: '#F3C7D9',
      red: '#ce4257',
    },
    extend: {
      fontFamily: {
        'pre': ['pretendard'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary: '#F3C7D9',
      contentPrimary: '#544f4f',
      red: '#ce4257',

      mainBg: '#fbfbfb',
      whiteBg: '#ffffff',
      secondBg: '#f6f5f5',
      darkBg: '#f2eeee',

      mainBorder: '#e8dfdf',

      title: '#89757a',
      subTitle: '#c2b2b2',
    },
    extend: {
      fontFamily: {
        'pre': ['pretendard'],
        'IropkeBatangM': ['Iropke Batang']
      }
    },
  },
  plugins: [],
}


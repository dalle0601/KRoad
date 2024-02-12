/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['var(--logo-font)'],
        defaultFont: ['var(---default-font)'],
      },
      colors: {
        primary: '#4A99D3',
        green: {
          400: '#C1BA00',
          700: '#119317',
        },
        black: '#292929',
      },
    },
  },
  plugins: [],
};

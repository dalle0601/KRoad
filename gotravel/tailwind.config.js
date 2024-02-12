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
        primary: {
          50: '#f3f8fc',
          100: '#e2eff8',
          200: '#c6e2f1',
          300: '#93cae6',
          400: '#59afd7',
          500: '#3496c3',
          600: '#2478a5',
          700: '#1f6085',
          800: '#1d516f',
          900: '#1d445d',
          950: '#132d3e',
        },
      },
    },
  },
  plugins: [],
};

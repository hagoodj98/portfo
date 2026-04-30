
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        'bluegreen': '#24a3bf',
        'moreblue': '#158fbf',
        'orange': '#f29544',
        'yellow': '#f2c53d',
        'sortwhite': '#F4F8F8'
      },
      fontFamily: {
        boldonse: ['boldonse', 'sans-serif'],
      },
      animation: {
        'rightleft': 'righttoleft 10s linear infinite',
        'leftright':'lefttoright 10s linear infinite'
      },
      keyframes: {
        righttoleft: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%)'},
        },
        lefttoright: {
          '0%': {transform: 'translateX(-50%)'},
          '100%': {transform: 'translateX(0%)'},
        }
      },
      backgroundImage: {
        "footer-background": "url('../public/Group 36.svg')",
      },

    },
  },
  plugins: [],
};

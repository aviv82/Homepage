/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "rgba(34, 23, 0, 1)",
        white: "rgba(255, 254, 251, 1)",
        brown: "rgba(118, 80, 0, 1)",
        ochre: "rgba(226, 153, 1, 1)",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        baskerville: ["Libre Baskerville", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

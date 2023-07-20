const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        big: "8.2rem",
        medium: "2rem",
        bigger: "17rem",
        small: "1.8rem",
      },

      colors: {
        "light-gray": "#B4BCD0",
        purple: "#7132EF",
        yellow: "#FFDA00",
        "darkest-blue": "#0A0F17",
        "light-purple": "#D1BAFF",
        "dark-blue": "#2C3671",
        "dark-purple": "#6931F0",
        "light-black": "#1C1C1C",
      },

      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {},
      backdropBlur: {
        medium: "17px",
      },

      backgroundOpacity: {
        small: ".06",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "400px" },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};

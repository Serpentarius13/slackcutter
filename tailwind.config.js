const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        small: "1rem",
        "small-medium": "1.2rem",
        medium: "2rem",
        "semi-medium": "1.8rem",

        "semi-big": "2.4rem",
        big: "3.2rem",
        biggest: "10rem",
      },

      colors: {
        spotlight: "#FFE2A3",
        pink: "#ff79f2",
        black: "#212121",
        "dark-black": "#151515",
        "darkest-black": "#101010",
        darkNeutral: "#1e1d21",
        "light-green": "#B4E681",
        yellow: "#FFDF37",
        red: "#FA4D08",
        orange: "#FFD362",
        blue: "#0500FF",
        white: "#fff",
        "orange-bright": "#ea580c",
        green: "#16a34a",
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

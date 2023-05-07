const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["e-Ukraine", ...defaultTheme.fontFamily.sans],
        misto: ["Misto"],
        agra: ["PP Agrandir"],
      },
    },
    colors: {
      white: "#f2fbeb ",
      black: "#171719 ",
    },
  },
  plugins: [],
};

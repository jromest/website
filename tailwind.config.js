const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-karla)", ...fontFamily.sans],
      },
      colors: {
        "light-purple": "#853a8d",
        "dark-purple": "#38273a",
        "lighten-dark-purple": "rgba(133, 58, 141, 0.25)",
        "transparent-dark-purple": "rgba(56, 39, 58, 0.75)",
        "yellow-gold": "#ffcc33",
        "darken-yellow-gold": "#f9bc04",
        "lighten-yellow-gold": "rgba(255, 204, 51, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

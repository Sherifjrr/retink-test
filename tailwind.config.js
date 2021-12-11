const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // prettier-ignore
      backgroundImage: {
        "Hero": "url('../src/images/Background.png')",
      },
      colors: {
        blueText: "#525F7F",
        blueButton: "#3D55DF",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "100% 100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

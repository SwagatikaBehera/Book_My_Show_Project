module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        runu: {
          50: "#dffdf9",
          100: "#bef0e9",
          200: "#98e4db",
          300: "#72d9cd",
          400: "#4ecfbe",
          500: "#35b5a5",
          600: "#268d80",
          700: "#17655c",
          800: "#053d37",
          900: "#001613",
        },
        navGrey: {
          50: "#efeffd",
          100: "#d0d3e4",
          200: "#b2b5cd",
          300: "#9397b8",
          400: "#757aa3",
          500: "#5b6089",
          600: "#464b6b",
          700: "#32354d",
          800: "#1d2030",
          900: "#070b16",
        },
        premier: {
          700: "#2B3148",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

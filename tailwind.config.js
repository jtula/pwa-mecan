module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      listStyleType: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

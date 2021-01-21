module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        "primary-light": "#E51809",
        "primary-dark": "#9E3333",
        secondary: "#539FEC",
        terciary: "#E2B02F",
        gray: "#C7C4C4",
        "gray-light": "F2EEEE",
        "gray-dark": "959494",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      fontSize: {
        smaller: "12px",
        small: "14px",
        normal: "16px",
        big: "20px",
      },
      borderRadius: {
        normal: "2px",
      },
      boxShadow: {
        normal: "0 2px 2px #80000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

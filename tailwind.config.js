module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        dark: "#060818",
      },

      maxWidth: {
        120: "480px",
      },

      fontFamily: {
        body: ["-apple-system", "sans-serif", "Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

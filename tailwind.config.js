module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
      },

      maxWidth: {
        120: "480px",
      },

      backgroundImage: (theme) => ({
        hero: "url('./img/hero.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

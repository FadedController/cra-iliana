module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/components/*.tsx", "./src/*.tsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'regalBlue': '#243c5a',
      },
      backgroundColor: (theme) => ({
        // 'brand-color': '#5d3ebc'
        "brand-color": "#243c5a",
      }),
    },
  },
  plugins: [],
};

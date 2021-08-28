module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "hero-pattern": "url('pattern-bg.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

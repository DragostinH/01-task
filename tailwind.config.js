module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      container: "#444"
    },
    fontFamily:{
      sans:["Quicksand", "Source Sans Pro","BlinkMacSystemFont",
      "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "serif"]
    }
  },
  plugins: [],
}
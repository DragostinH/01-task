module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      dropShadow:{
        "xl": '0 15px 15px rgba(255, 255,255 0.5)'
      }
    },
    colors:{
      container: "#444",
      postShadow : "#",
    },
    fontFamily:{
      sans:["Quicksand", "Source Sans Pro","BlinkMacSystemFont",
      "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "serif"]
    }
  },
  plugins: [],
}
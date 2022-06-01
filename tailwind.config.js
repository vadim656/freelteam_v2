module.exports = {
  content: [
    "./components/**/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '7.25rem',
    },
    screens: {
      '2xl': '1440px',
    },
    extend: {
      brightness: {
        30: '.3',
       
      }
    },
  },
  plugins: [],
}

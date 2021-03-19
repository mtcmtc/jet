module.exports = {
  purge: {
    content: ['./src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
        aurora: {
          DEFAULT: "#76bc21",
          dark : "#122100"
        },
        lake: {
          light : {
            DEFAULT : "hsl(207, 43%, 92%)",
            interact : "hsl(207, 48%, 87%)"
          },
          DEFAULT: "#236092",
          dark : "#1b486d"
        },
        midnight: "#0a2240",
      },
    },
  },
  variants: {},
  plugins: [],
}
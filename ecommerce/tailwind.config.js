// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#68c3b7'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}


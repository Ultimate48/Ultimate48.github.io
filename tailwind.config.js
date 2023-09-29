/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    boxShadow: {
      "box-shadow": "0px 0px 6px rgba(0, 0, 0, 0.2)",
    },
    borderRadius: {
      'lg': '0.5rem',
      "full": "9999px",
    },
    extend: {
      height:{
        "100":"25rem",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white100: "#fff",
        black100: "#000",
        yellow100: "#fdc700",
      }
    },
  },
  plugins: [],
}
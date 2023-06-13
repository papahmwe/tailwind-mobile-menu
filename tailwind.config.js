/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#FFFFFE",
        "text-color": "#0C1D31",
        "button-bg-color": "#DBB5A2",
        "support-color": "#901F32",
      },
      screens: {
        md: "920px",
      },
    },
  },
  plugins: [],
};

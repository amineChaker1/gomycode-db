/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B4CDF666",
        secondary: "#5a94c580",
        dark: " #5A94C5",
      },
    },
  },
  plugins: [],
};

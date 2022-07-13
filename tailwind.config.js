/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      glassy: "rgba(255,255,255,0.1)",
      white: "rgba(255,255,255)",
    },
    extend: {},
  },
  plugins: [],
};

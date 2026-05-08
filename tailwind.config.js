/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0c10", // Deep Slate Black
        secondary: "#8b949e", // GitHub-style secondary
        tertiary: "#161b22", // GitHub-style tertiary
        "black-100": "#0d1117",
        "black-200": "#010409",
        "white-100": "#c9d1d9",
        accent: "#58a6ff", // Blue Accent (Professional)
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0d1117",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at 50% 50%, #161b22 0%, #0a0c10 100%)",
      },
    },
  },
  plugins: [],
};

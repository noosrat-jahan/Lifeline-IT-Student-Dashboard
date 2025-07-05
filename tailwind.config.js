/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Da 2"', "cursive"],
      },
      colors: {
        brand: "#8c2dff",
        accent: "#00c4ff",
        orangeText: "#ff9f3e",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#50C878",
        secondary: "#ffffff",
        accent: "#2F27CE",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};

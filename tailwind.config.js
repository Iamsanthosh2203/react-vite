/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
        montserrat: "Montserrat",
      },
      colors: {
        footer: "rgb(58, 58, 58)",
      },
    },
  },
  plugins: [],
};

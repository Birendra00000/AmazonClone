/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEDED",
          lightBluE: "#232F3A",
          yellow: "#FEBD69",
          Default: "#131921",
        },
      },
    },
  },
  plugins: [],
};

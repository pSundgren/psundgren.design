/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1416px",
      },
      fontFamily: {
        primary: "GT-Walsheim",
        bold: "GT-Walsheim-Bold",
        secondary: "Playfair Display",
      },
      backgroundImage: {
        waves: "url('./assets/images/waves_gray.jpg')",
      },
      height: {
        "90vh": "calc(100vh * 0.9)",
        "16/9": "calc(((100vw - 24px)/16)*9)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1416px",
      },
      fontFamily: {
        primary: "Aeonik-Regular",
        bold: "Aeonik-Bold",
        secondary: "Gloria Hallelujah",
        "sf-pro-regular": "SF-Pro-Regular",
        "sf-pro-semibold": "SF-Pro-Semibold",
        inter: "Inter",
        lato: "Lato",
        "dm-sans": "DM Sans",
      },
      backgroundImage: {
        waves: "url('./assets/images/waves_gray.jpg')",
        "black-texture": "url('./assets/images/black_bg.jpg')",
        dotted: "url('./assets/images/tiled-background.jpg')",
      },
      height: {
        "90vh": "calc(100vh * 0.9)",
        "16/9": "calc(((100vw - 24px)/16)*9)",
      },
    },
  },
  plugins: [],
};

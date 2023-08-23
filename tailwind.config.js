/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "GT-Walsheim",
      },
      backgroundImage: {
        waves: "url('./assets/images/waves-gray.jpg')",
      },
      height: {
        "90vh": "calc(100vh * 0.9)",
      },
    },
  },
  plugins: [],
};

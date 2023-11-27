/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-20": "#362D2D",
        "black-50": "#040202",
        "gray-100": "#DFCCCC",
        "gray-500": "#000000",
        "primary-100": "#868585",
        "primary-300": "#645C5C",
        "primary-500": "#443939",
        "secondary-400": "#A7AADA",
        "secondary-500": "#CECECE",
        "secondary-600":"#E80505"

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #53579C 0%, #131977 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        oil: "url('./assets/oil.png')",
        oil1: "url('./assets/oil1.png')",
        circles: "url('./assets/Circles.png')",
        nissan: "url('./assets/nissan.png')",
        mercedes: "url('./assets/mercedes.png')",
        kia: "url('./assets/kia.png')",
        chevrolet: "url('./assets/chevrolet.png')",
        alhambra: "url('./assets/alhambrapng.png')",
        alhambra2: "url('./assets/Logo.png')",

      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
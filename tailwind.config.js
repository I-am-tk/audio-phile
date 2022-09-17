/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bg: "#fafafa",
        accent: "#d87d4a",
        accentLight: "#fbaf85",
        gray: "#f1f1f1",
        lightGray: "#d3d3d3",
        white: "#fff",
        black: "#191919",
        text: "rgba(0,0,0,0.5)",
        textLight: "rgba(255,255,255,0.5)",
        divider: "rgba(255,255,255,0.1)",
        placeholder: "rgba(0,0,0,.4)",
        inputBorder: "#CFCFCF",
        inputError: "#CD2C2C",
      },
      gridTemplateColumns: {
        itemGallery: "40% 1fr",
      },
    },
  },
  plugins: [],
};

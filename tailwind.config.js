module.exports = {
  content: (() => {
    const pathsToScan = ["./src/**/*.{js,jsx,ts,tsx}"];
    return pathsToScan;
  })(),
  darkMode: "media", // or 'media' or 'class'
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
       
      },
      fontFamily: {
        
        
      },
      maxWidth: {
        "8xl": "100rem",
      },
      backgroundImage: {
        
      },
    },
  },
};

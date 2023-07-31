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
      keyframes: {
        'spin-half': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-to-black': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'spin-half': 'spin-half 2s linear infinite',
        'fade-to-black': 'fade-to-black 1s ease-in-out forwards',
      },
      transitionDuration: {
        '5000': '5000ms',
      },
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

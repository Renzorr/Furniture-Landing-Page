/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1D2025",
        "pale-gray": "#afaeae",
      },
      fontSize: {
        lg: "clamp(13px,5cqw,16px)",
        "3xl": "clamp(56px,15cqw,120px)",
      },
      backgroundImage: {
        "bg-furniture": "url(/assets/hero.png)",
      },
      screens: {
        desktop: "1150px",
        tablet: "650px",
      },
    },
  },
  plugins: [],
};

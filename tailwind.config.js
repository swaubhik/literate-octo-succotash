const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"],
        quicksand: ["Quicksand"],
        phil: ["Philosopher"],
      },
      colors: {
        primary: "#1B1B50",
      },
    },
  },
  plugins: [],
};

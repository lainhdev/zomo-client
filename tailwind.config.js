/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      primary: "#246BFD",
      gray: colors.gray,
      yellow: colors.yellow,
      pink: colors.pink,
      secondary: "#FC9A0D",
      'watermelon-pink': "#FF7085",
    },
  },
  plugins: [],
};

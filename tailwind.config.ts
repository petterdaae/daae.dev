import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#252a34",
        red: "#ff2e63",
        blue: '#DAF0F7',
        darkBlue: '#06133d'
      },
    },
  },
  plugins: [],
} satisfies Config;

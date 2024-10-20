import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#252a34",
        red: "#ff2e63",
      },
    },
  },
  plugins: [],
} satisfies Config;

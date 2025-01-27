import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        pink: {
          500: "#F9B7E0",
        },
        amber: {
          300: "#E4C790",
        },
        stone: {
          500: "#828282",
        },
        emerald: {
          400: "#B6C3B9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

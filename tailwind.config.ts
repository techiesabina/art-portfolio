import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        sparkleSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
        sparkleComeInOut: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
      },
      animation: {
        sparkleSvg: "sparkleSpin 1000ms linear",
        sparkleWrapper: "sparkleComeInOut 700ms forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

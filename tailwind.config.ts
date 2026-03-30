import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: {
          DEFAULT: "#c2d951",
          dark: "#a8bf3a",
        },
        gray: {
          100: "#f5f5f5",
          200: "#e4e4e4",
          400: "#999999",
          600: "#666666",
          800: "#333333",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.07)",
        "card-lg": "0 12px 48px rgba(0,0,0,0.10)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

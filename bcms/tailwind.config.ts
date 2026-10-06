import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#063B72",
        darknavy: "#032B55",
        blue: {
          ...colors.blue,
          DEFAULT: "#0B63CE",
          50: "#F1F7FF",
          100: "#E4EFFF",
          200: "#C9DFFF",
          300: "#9DC3F4",
          400: "#5798E8",
          500: "#0B63CE",
          600: "#0B63CE",
          700: "#063B72",
          800: "#032B55",
          900: "#032B55",
          950: "#032B55",
        },
        red: {
          ...colors.red,
          DEFAULT: "#FF1717",
          50: "#FFF1F1",
          100: "#FFDADA",
          200: "#FFBABA",
          300: "#FF9292",
          400: "#FF6060",
          500: "#FF2A2A",
          600: "#FF1717",
          700: "#FF1717",
        },
        orange: {
          ...colors.orange,
          DEFAULT: "#FF6A1A",
          400: "#FF6A1A",
          500: "#FF6A1A",
          600: "#FF6A1A",
        },
        slate: {
          ...colors.slate,
          50: "#F6F8FB",
          100: "#EDF2F8",
          200: "#DCE7F3",
          700: "#334966",
          800: "#10233F",
          900: "#10233F",
        },
        skysoft: "#F1F7FF",
        softgray: "#F6F8FB",
        ink: "#10233F",
        gold: "#FF6A1A",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 59, 114, 0.12)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp .7s ease both",
        shimmer: "shimmer 2.2s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;

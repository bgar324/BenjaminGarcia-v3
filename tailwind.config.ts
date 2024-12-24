// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
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
        "custom-hover": "#d87474",
        "navbar-bg": "#101110",
      },
      fontFamily: {
        cabinet: [
          "CabinetGrotesk-Variable",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        letterFloat: {
          "0%, 100%": {
            transform: "translateY(0)",
            color: "theme('colors.white')",
          },
          "50%": {
            transform: "translateY(-1rem)",
            color: "theme('colors.custom-hover')",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        letterFloat:
          "letterFloat 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".filter-custom-hover": {
          filter:
            "invert(54%) sepia(58%) saturate(342%) hue-rotate(314deg) brightness(90%) contrast(105%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;

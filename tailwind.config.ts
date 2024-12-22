import type { Config } from "tailwindcss";
import filters from "tailwindcss-filters";

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
        "custom-hover": "#d87474",
      },
      fontFamily: {
        cabinet: ["CabinetGrotesk-Variable", "Arial", "Helvetica", "sans-serif"],
      },
      filter: {
        "custom-hover": "invert(54%) sepia(58%) saturate(342%) hue-rotate(314deg) brightness(90%) contrast(105%)",
      },
    },
  },
  plugins: [filters],
} satisfies Config;

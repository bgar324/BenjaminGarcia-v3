import type { Config } from "tailwindcss";
import filters from "tailwindcss-filters"; 
// I'm gonna be honest. ^ gives an error throughout development, but the website runs just fine. so IDK

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
        "navbar-bg": "#101110",
      },
      fontFamily: {
        cabinet: ["CabinetGrotesk-Variable", "Arial", "Helvetica", "sans-serif"],
      },
      filter: {
        "custom-hover":
          "invert(54%) sepia(58%) saturate(342%) hue-rotate(314deg) brightness(90%) contrast(105%)",
      },
      keyframes: {
        // Existing fadeIn keyframes
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // New letterFloat keyframes
        letterFloat: {
        '0%, 100%': { 
            transform: 'translateY(0)', 
            color: 'theme("colors.white")' 
          },
          '50%': { 
            transform: 'translateY(-1rem)', 
            color: 'theme("colors.custom-hover")' 
          },
        },
      },
      animation: {
        // Existing fadeIn animation
        fadeIn: "fadeIn 1.2s ease-out forwards",
        // New letterFloat animation
        letterFloat: "letterFloat .8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [filters],
} satisfies Config;

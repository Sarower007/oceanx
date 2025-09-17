import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Map the CSS variables from layout.tsx to Tailwind font classes
        cinzel: ["var(--font-cinzel)"],
        garamond: ["var(--font-garamond)"],
        pirata: ["var(--font-pirata)"],
      },
      colors: {
        'cream': '#EAE0D5', // A custom off-white/cream color for text and buttons
      },
    },
  },
  plugins: [],
};
export default config;
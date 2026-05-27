import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#080806",
        ember: "#f07800",
        rust: "#9a3600",
        bone: "#f3eee4",
      },
      fontFamily: {
        display: ["Arial Black", "Impact", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 34px rgba(240, 120, 0, 0.36)",
      },
    },
  },
  plugins: [],
};

export default config;

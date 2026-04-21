import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        d2: {
          forest: "#1F3D2E",
          aubergine: "#4A2E52",
          stone: "#7A756A",
          warmgray: "#6B6860",
          ink: "#1A1A1A",
          paper: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cambria", "Lora", "Georgia", "serif"],
        body: ["var(--font-body)", "Calibri", "Source Sans 3", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1040px",
      },
      letterSpacing: {
        section: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;

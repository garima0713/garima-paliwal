import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1F",
        deep: "#070B17",
        soft: "#9CA7C6",
        line: "rgba(255,255,255,0.09)",
        violet: "#9B8CFF",
        sky: "#6AA2FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

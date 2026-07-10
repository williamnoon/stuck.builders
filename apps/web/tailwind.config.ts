import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F1E8",
        panel: "#FFFFFF",
        line: "#D8D3C2",
        gray: {
          DEFAULT: "#5A5D53",
          dim: "#A09E92",
        },
        paper: "#F4F1E8",
        ink: "#14140F",
        signal: "#128A4B",
        "signal-ink": "#0E6E3B",
        chalk: "#A56A11",
        alert: "#C93A2B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;

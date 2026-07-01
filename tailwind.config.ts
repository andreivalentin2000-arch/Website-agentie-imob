import type { Config } from "tailwindcss";

// Design tokens — see DESIGN.md for the full rationale.
// Palette is deliberately warm and desaturated: dark olive + cream + brown + muted gold.
// No pure white, no pure black — everything is tinted toward earth.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#181B13", // near-black olive, hero/dark section backgrounds
          soft: "#232719",
        },
        olive: {
          DEFAULT: "#3C4A32", // primary brand green
          deep: "#262F1F",
          light: "#5A6B49",
        },
        cream: {
          DEFAULT: "#F4EEE1", // warm cream, main content background
          dim: "#EAE1CC",
          paper: "#FBF8F1",
        },
        brown: {
          DEFAULT: "#4A3626", // deep brown, primary text on cream
          soft: "#6B5842",
        },
        gold: {
          DEFAULT: "#B68A4E", // muted gold accent, CTAs, dividers
          soft: "#D9BD8C",
          dim: "#8C6B3C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "fade-ink": "linear-gradient(180deg, rgba(24,27,19,0) 0%, rgba(24,27,19,0.85) 70%, #181B13 100%)",
        "fade-ink-top": "linear-gradient(0deg, rgba(24,27,19,0) 0%, rgba(24,27,19,0.7) 100%)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "lab-blue":       "#2563c4",
        "lab-blue-light": "#e8eef9",
        "lab-border":     "#e5e0d8",
        "lab-muted":      "#666666",
        "lab-bg":         "#f8f7f3",
        "dark-bg":        "#0f1117",
        "dark-mid":       "#151820",
        "dark-surface":   "#1a1d26",
        "dark-border":    "#272c3d",
        "dark-blue-tint": "#1a2e5a",
      },
      fontFamily: {
        sans:  ['"DM Sans"',          "ui-sans-serif", "sans-serif"],
        serif: ['"DM Serif Display"', "ui-serif",      "serif"],
      },
      screens: {
        tablet: "900px",
      },
      boxShadow: {
        "card-hover": "0 3px 14px rgba(37,99,196,0.09)",
        "card-team":  "0 8px 24px rgba(0,0,0,0.15)",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

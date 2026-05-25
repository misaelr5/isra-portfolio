import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1720",
        orange: "#FF5A1F",
        sand: "#F3EDE4",
        panel: "#F7F4EE",
        page: "#F3EDE4",
        section: "#F7F4EE",
        card: "#FFFFFF",
        "card-alt": "#FFFFFF",
        teal: "#FF5A1F",
        purple: "#FF5A1F",
        muted: "rgba(15, 23, 32, 0.72)",
        faint: "rgba(15, 23, 32, 0.52)",
        line: "rgba(15, 23, 32, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        teal: "0 18px 45px rgba(255, 90, 31, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

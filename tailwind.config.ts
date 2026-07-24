import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#080B22",
          900: "#0B1130",
          800: "#131A44",
        },
        accent: {
          blue: "#4C6FFF",
          purple: "#8B5CF6",
          cyan: "#38BDF8",
        },
        ink: {
          100: "#F5F6FF",
          300: "#C7CBEE",
          400: "#A8ADD1",
          600: "#6C71A0",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "peak-gradient":
          "linear-gradient(135deg, #4C6FFF 0%, #7C5CF0 45%, #38BDF8 100%)",
        "peak-radial":
          "radial-gradient(circle at 20% 20%, rgba(76,111,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.30), transparent 40%), radial-gradient(circle at 50% 100%, rgba(56,189,248,0.18), transparent 45%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(8, 11, 34, 0.45)",
        "glass-hover": "0 12px 40px 0 rgba(76, 111, 255, 0.25)",
        glow: "0 0 60px -12px rgba(139, 92, 246, 0.55)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf8ff",
          100: "#d6f0ff",
          200: "#a8e0ff",
          300: "#75cdff",
          400: "#47b9ff",
          500: "#1fa6ff",
          600: "#0f85db",
          700: "#0e68ac",
          800: "#0d4b7d",
          900: "#0a334f",
          DEFAULT: "#1fa6ff",
        },
        accent: {
          50: "#fff4f6",
          100: "#ffe8ed",
          200: "#ffcdd6",
          300: "#ff9fb3",
          400: "#ff6a8a",
          500: "#ff3b63",
          600: "#db2049",
          700: "#ae1839",
          800: "#800f28",
          900: "#510718",
          DEFAULT: "#ff3b63",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          DEFAULT: "#1e293b",
        },
        success: {
          100: "#dcfce7",
          500: "#22c55e",
          700: "#15803d",
          DEFAULT: "#22c55e",
        },
        warning: {
          100: "#fef9c3",
          500: "#f59e0b",
          700: "#b45309",
          DEFAULT: "#f59e0b",
        },
        danger: {
          100: "#fee2e2",
          500: "#ef4444",
          700: "#b91c1c",
          DEFAULT: "#ef4444",
        },
        info: {
          100: "#dbeafe",
          500: "#3b82f6",
          700: "#1d4ed8",
          DEFAULT: "#3b82f6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 20px -5px rgba(2, 6, 23, 0.08)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};

export default config;
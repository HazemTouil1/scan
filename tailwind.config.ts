import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        dark: {
          50: "#f8f9fa",
          100: "#f0f2f5",
          200: "#e7eaf3",
          300: "#d0d5dd",
          600: "#5f6a74",
          700: "#3d4452",
          800: "#132a47",
          900: "#01263f",
        },
      },
      fontSize: {
        cap: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
      },
    },
  },
  plugins: [],
};
export default config;

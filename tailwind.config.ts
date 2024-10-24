import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#1D2A44",
          900: "#041330",
        },
        cyan: {
          DEFAULT: "#0AC9BD",
        },
        orange: {
          DEFAULT: "#FE7E00",
        },
        blue: {
          100: "#F4F8FF",
          500: "#5B6E95",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

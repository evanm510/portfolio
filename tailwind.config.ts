import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#454545",
        primary: "#825A8D",
        softBlack: "#1e1e1e",
        mediumGray: "#5A5A5A",
      },
    },
  },
  plugins: [],
} satisfies Config;

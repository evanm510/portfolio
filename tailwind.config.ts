import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#454545",
        primary: "#825A8D",
        softBlack: "#1e1e1e",
        mediumGray: "#5A5A5A",
        background: "#1F1F1F",
        card: "#3d3d3d",
        bodyText: "#E0E0E0",
        mutedText: "#BDBDBD",
        heading: "#FFFFFF",
        buttonBackground: "#9D65C9",
        accent: "#9D65C9",
        button: "#FFFFFF;",
        other: "#3A3A3A",
      },
    },
  },
  plugins: [],
} satisfies Config;

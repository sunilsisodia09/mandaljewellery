import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#201b17",
        gold: "#b58a4b",
        cream: "#faf7f2",
        sand: "#eee5d8"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: { soft: "0 12px 40px rgba(32, 27, 23, 0.08)" }
    }
  },
  plugins: []
};
export default config;

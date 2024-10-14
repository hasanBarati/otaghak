import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Tertiary: "#767786",
        Emphasise:"#2B2B36",
        Primary:"#EF3857"

      },
      
    },
  },
  plugins: [],
};
export default config;

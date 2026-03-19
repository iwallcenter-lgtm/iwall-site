import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "#e7dfd2",
        stone: "#c9c1b3",
        ink: "#171717",
        bronze: "#8f6f4d",
        olive: "#4a5246",
        fog: "#f4f1eb"
      },
      boxShadow: {
        panel: "0 20px 80px rgba(18, 18, 18, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(23,23,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

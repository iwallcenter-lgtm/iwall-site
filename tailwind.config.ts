import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pine: "#0B3D2E",
        "pine-deep": "#072a1f",
        "pine-soft": "#124d3a",
        gold: "#D4AF37",
        sand: "#e7dfd2",
        stone: "#c9c1b3",
        ink: "#171717",
        bronze: "#8f6f4d",
        olive: "#4a5246",
        fog: "#f4f1eb"
      },
      boxShadow: {
        panel: "0 24px 70px rgba(4, 24, 18, 0.18)",
        luxury: "0 24px 70px rgba(7, 42, 31, 0.22)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "green-luxury":
          "radial-gradient(circle at top left, rgba(212,175,55,0.14), transparent 30%), radial-gradient(circle at bottom right, rgba(18,77,58,0.55), transparent 35%), linear-gradient(160deg, #0b3d2e 0%, #082f23 45%, #061f18 100%)"
      }
    }
  },
  plugins: []
};

export default config;

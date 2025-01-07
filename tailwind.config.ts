import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const themesDaisy = [
  "light",
  "dark",
  "aqua",
  "synthwave",
  "cyberpunk",
  "retro",
  "coffee",
];

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        "192": "48rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: themesDaisy,
  },
};

export { themesDaisy };
export default config;

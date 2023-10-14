import { Config } from "tailwindcss";

import { shadcnPreset } from "./src/lib/shadcn/shadcn-preset";
import { tremorPreset } from "./src/lib/tremor/tremor-preset";

const config = {
  presets: [shadcnPreset, tremorPreset],
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
} satisfies Config;

export default config;

// require("tailwindcss-animate")

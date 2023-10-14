import type { Config } from "tailwindcss";
import { tremorPlugin } from "./tremor-plugin";
import headlessUI from "@headlessui/tailwindcss";

export const tremorPreset = {
  content: [],
  plugins: [headlessUI, tremorPlugin],
} satisfies Config;

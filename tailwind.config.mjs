import prose from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import { ACCENT_COLOR, BASE_COLOR, MANUAL_DARK_MODE } from "./src/config";
import { customColors } from "./src/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      colors: {
        // Custom color palette that adapts to light/dark mode
        accent: customColors.light,
        base: customColors.light,
        // Dark mode variants
        'accent-dark': customColors.dark,
        'base-dark': customColors.dark,
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  darkMode: MANUAL_DARK_MODE ? "class" : "media",
  plugins: [
    prose,
    forms,
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
    }),
  ],
};

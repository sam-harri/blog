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
            // Override typography colors to use CSS variables
            color: 'var(--fg)',
            '[class~="lead"]:not(:where([class~="not-prose"] *))': {
              color: 'var(--fg)',
            },
            a: {
              color: 'var(--fg)',
            },
            strong: {
              color: 'var(--fg)',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: 'var(--fg)',
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::marker': {
              color: 'var(--fg)',
            },
            hr: {
              borderColor: 'var(--fg)',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'var(--fg)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--fg)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            h1: {
              color: 'var(--fg)',
              fontWeight: '800',
            },
            h2: {
              color: 'var(--fg)',
              fontWeight: '700',
            },
            h3: {
              color: 'var(--fg)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--fg)',
              fontWeight: '600',
            },
            'figure figcaption': {
              color: 'var(--fg)',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            code: {
              color: 'var(--fg)',
              fontWeight: '600',
            },
            'a code': {
              color: 'var(--fg)',
            },
            pre: {
              color: 'var(--fg)',
              backgroundColor: 'var(--bg)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'ol > li::marker': {
              color: 'var(--fg)',
            },
            'ul > li::marker': {
              color: 'var(--fg)',
            },
            table: {
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              color: 'var(--fg)',
              borderBottomColor: 'var(--fg)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--fg)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tfoot tr': {
              borderTopColor: 'var(--fg)',
            },
            'tfoot tr:last-child': {
              borderTopWidth: '0',
            },
          },
        },
        // Add dark mode variant
        dark: {
          css: {
            color: 'var(--fg)',
            '[class~="lead"]:not(:where([class~="not-prose"] *))': {
              color: 'var(--fg)',
            },
            a: {
              color: 'var(--fg)',
            },
            strong: {
              color: 'var(--fg)',
            },
            'ol > li::marker': {
              color: 'var(--fg)',
            },
            'ul > li::marker': {
              color: 'var(--fg)',
            },
            hr: {
              borderColor: 'var(--fg)',
            },
            blockquote: {
              color: 'var(--fg)',
              borderLeftColor: 'var(--fg)',
            },
            h1: {
              color: 'var(--fg)',
            },
            h2: {
              color: 'var(--fg)',
            },
            h3: {
              color: 'var(--fg)',
            },
            h4: {
              color: 'var(--fg)',
            },
            'figure figcaption': {
              color: 'var(--fg)',
            },
            code: {
              color: 'var(--fg)',
            },
            'a code': {
              color: 'var(--fg)',
            },
            pre: {
              color: 'var(--fg)',
              backgroundColor: 'var(--bg)',
            },
            thead: {
              color: 'var(--fg)',
              borderBottomColor: 'var(--fg)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--fg)',
            },
            'tfoot tr': {
              borderTopColor: 'var(--fg)',
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

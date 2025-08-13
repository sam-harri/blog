export const customColors = {
  light: {
    50: '#f1f8f5',
    100: '#e6f2ed',
    200: '#d1e8e0',
    300: '#b3d8c9',
    400: '#8cc4b0',
    500: '#66b393',
    600: '#4da681',
    700: '#33996f',
    800: '#1a8c5d',
    900: '#0b3d2e',
    950: '#0b3d2e',
  },
  dark: {
    50: '#0b3d2e',
    100: '#1a8c5d',
    200: '#33996f',
    300: '#4da681',
    400: '#66b393',
    500: '#8cc4b0',
    600: '#b3d8c9',
    700: '#d1e8e0',
    800: '#e6f2ed',
    900: '#f1f8f5',
    950: '#f1f8f5',
  }
};

// Legacy color classes for compatibility (if needed)
export const colorBaseClasses: Record<string, string> = {
  slate: "prose-slate",
  stone: "prose-stone",
  gray: "prose-gray",
  neutral: "prose-neutral",
  zinc: "prose-zinc",
};

export const colorAccentClasses: Record<string, string> = {
  red: "prose-red",
  orange: "prose-orange",
  amber: "prose-amber",
  yellow: "prose-yellow",
  lime: "prose-lime",
  green: "prose-green",
  emerald: "prose-emerald",
  teal: "prose-teal",
  cyan: "prose-cyan",
  sky: "prose-sky",
  blue: "prose-blue",
  indigo: "prose-indigo",
  violet: "prose-violet",
  purple: "prose-purple",
  fuchsia: "prose-fuchsia",
  pink: "prose-pink",
  rose: "prose-rose",
};

export type AccentColor =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type BaseColor = "slate" | "stone" | "gray" | "neutral" | "zinc";

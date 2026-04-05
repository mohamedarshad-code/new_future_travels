/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#e5e2da",
        "inverse-on-surface": "#f1f1ec",
        "on-error": "#ffffff",
        "surface-container-high": "#e8e8e4",
        "on-primary-container": "#3f6300",
        "secondary": "#5f5e58",
        "tertiary-fixed-dim": "#c8c7bb",
        "surface-dim": "#dadad6",
        "on-tertiary-fixed-variant": "#47473e",
        "surface-variant": "#e2e3de",
        "on-secondary-fixed-variant": "#484741",
        "primary": "#436900",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#112000",
        "primary-fixed-dim": "#92db14",
        "outline": "#727a63",
        "primary-container": "#9ce625",
        "on-tertiary-fixed": "#1b1c15",
        "error": "#ba1a1a",
        "surface-container": "#eeeee9",
        "on-secondary": "#ffffff",
        "surface": "#fafaf5",
        "surface-container-low": "#f4f4ef",
        "surface-container-highest": "#e2e3de",
        "background": "#fafaf5",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#e4e3d7",
        "on-secondary-fixed": "#1c1c17",
        "primary-fixed": "#acf83a",
        "on-primary-fixed-variant": "#314f00",
        "inverse-primary": "#92db14",
        "on-surface": "#1a1c19",
        "on-surface-variant": "#424a35",
        "on-tertiary-container": "#5a5a51",
        "surface-bright": "#fafaf5",
        "outline-variant": "#c1caaf",
        "on-error-container": "#93000a",
        "tertiary": "#5f5f55",
        "on-secondary-container": "#64635c",
        "inverse-surface": "#2f312e",
        "surface-tint": "#436900",
        "tertiary-container": "#d3d2c6",
        "secondary-container": "#e2dfd7",
        "on-background": "#1a1c19",
        "secondary-fixed-dim": "#c9c6be",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Inter"],
        "body": ["Inter"],
        "label": ["Inter"],
        "sans": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

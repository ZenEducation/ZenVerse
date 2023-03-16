/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const navyColor = {
  50: "#E7E9EF",
  100: "#C2C9D6",
  200: "#A3ADC2",
  300: "#697A9B",
  400: "#5C6B8A",
  450: "#465675",
  500: "#384766",
  600: "#313E59",
  700: "#26334D",
  750: "#222E45",
  800: "#202B40",
  900: "#192132",
};

const customColors = {
  navy: navyColor,
  "slate-150": "#E9EEF5",
  primary: colors.indigo["600"],
  "primary-focus": colors.indigo["700"],
  "secondary-light": "#ff57d8",
  secondary: "#F000B9",
  "secondary-focus": "#BD0090",
  "accent-light": colors.indigo["400"],
  accent: "#5f5af6",
  "accent-focus": "#4d47f5",
  info: colors.sky["500"],
  "info-focus": colors.sky["600"],
  success: colors.emerald["500"],
  "success-focus": colors.emerald["600"],
  warning: "#ff9800",
  "warning-focus": "#e68200",
  error: "#ff5724",
  "error-focus": "#f03000",
};

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./configs/**.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    asideScrollbars: {
      light: "light",
      gray: "gray",
    },
    extend: {
      colors: { ...customColors },
      zIndex: {
        "-1": "-1",
      },
      flexGrow: {
        5: "5",
      },
      maxHeight: {
        "screen-menu": "calc(100vh - 3.5rem)",
        modal: "calc(100vh - 160px)",
      },
      transitionProperty: {
        position: "right, left, top, bottom, margin, padding",
        textColor: "color",
      },
      keyframes: {
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-out": "fade-out 250ms ease-in-out",
        "fade-in": "fade-in 250ms ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "aside-scrollbars": (value) => {
            const track = value === "light" ? "100" : "900";
            const thumb = value === "light" ? "300" : "600";
            const color = value === "light" ? "gray" : value;

            return {
              scrollbarWidth: "thin",
              scrollbarColor: `${theme(`colors.${color}.${thumb}`)} ${theme(
                `colors.${color}.${track}`
              )}`,
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme(`colors.${color}.${track}`),
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "0.25rem",
                backgroundColor: theme(`colors.${color}.${thumb}`),
              },
            };
          },
        },
        { values: theme("asideScrollbars") }
      );
    }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

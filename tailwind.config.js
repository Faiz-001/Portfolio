/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#EF4444",     // FizTECH red
      dark: "#0B0B0B",        // main background
      dark2: "#111111",       // cards
      dark3: "#1A1A1A",       // hover
      text: "#E5E5E5"
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [];
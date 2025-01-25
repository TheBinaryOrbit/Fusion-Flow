import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "graident": "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 0, 0, 0.9) 80%)",
        "btn": 'radial-gradient(43.3% 44.23% at 50% 49.51%, #FFFFF7 29%, #FFFACC 48.5%, #F4D2BF 60.71%, rgba(214, 211, 210, 0.00) 100%)',
        'gradient-radial': 'radial-gradient(ellipse_at_top,_circle,_white_30%,_transparent_70%)',
        "startexture" : "url(https://www.transparenttextures.com/patterns/stardust.png)",
        "squaretexture" : "url(https://www.transparenttextures.com/patterns/gplay.png)"
      },
      boxShadow:{
        "button": "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

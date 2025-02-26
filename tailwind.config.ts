import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#282425',
        'background': '#ebe2c9',
        'primary': '#EA5455',
        'accent': '#FF4500',
        "accent2": "#FFD466",
      },
      fontFamily: {
        "Ibm-sans": "IBM_Plex_Mono"
      }
    },
  },
  plugins: [require('daisyui'),],
} satisfies Config;

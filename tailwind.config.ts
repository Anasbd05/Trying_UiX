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
        'text': '#08060e',
        'background': '#ffedd5',
        'primary': '#fb923c',
        'accent': '#f97316',
      },
      fontFamily: {
        "Ibm-sans": "IBM_Plex_Mono"
      }
    },
  },
  plugins: [],
} satisfies Config;

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
        'background': '#f6f2ff',
        'primary': '#6d4acc',
        'secondary': '#9c82e3',
        'accent': '#7d58e3',
      },
      fontFamily: {
        "Ibm-sans": "IBM_Plex_Mono"
      }
    },
  },
  plugins: [],
} satisfies Config;

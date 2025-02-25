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
        'primary': '#f38378',
        'accent': '#FF4500',
      },
      fontFamily: {
        "Ibm-sans": "IBM_Plex_Mono"
      }
    },
  },
  plugins: [],
} satisfies Config;

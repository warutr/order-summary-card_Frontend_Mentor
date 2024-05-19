import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: {
        paleBlue: 'hsl(225, 100%, 94%)',
        brightBlue: 'hsl(245, 75%, 52%)',
      },
      neutral: {
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)'
      },
    },
    },
    backgroundImage: {
      "desktop": "url('/images/pattern-background-desktop.svg')",
      "mobile": "url('/images/pattern-background-mobile.svg')",
    },
    screens: {  
      'desktop': '1440px',
      'mobile': '443px',
    },
    boxShadow: {
      card: '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
      orderButton: '0px 20px 20px 0px rgba(56, 42, 225, 0.19)'
    },
  plugins: [],
  },
};
export default config;

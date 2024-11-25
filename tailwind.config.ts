import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(90deg, rgba(24,0,36,1) 13%, rgba(47,8,108,1) 29%, rgba(19,9,121,1) 70%, rgba(40,0,76,1) 94%)'
  		},
  		fontFamily: {
  			Montserrat: ["Montserrat", "sans-serif"],
  			serif: ['var(--font-playfair)'],
  			sans: ['var(--font-opensans)']
  		},
  		colors: {
  			customYellow: '#c69a5e',
  			customBlue: '#a2bbbf'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

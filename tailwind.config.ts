import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#20232B',
        Gray: '#f2f3f3',
        iconColor: '#969fac'
      },
      spacing: {
        '256': '57rem',
      },
      screens: {
        'sm300': { 'min': '300px', 'max': '399px' },
        'sm400': { 'min': '400px', 'max': '499px' },
        'sm500': { 'min': '500px', 'max': '599px' },
        'ipad-mini': { 'min': '750px', 'max': '850' },
        'ipad-air': '820px',
        'ipad-pro': '1024px',
        'custom-912': '912px',
        'custom-1024': { 'min': '1024px', 'max': '1280px' },
      },

    },
  },
  plugins: [],
} satisfies Config;

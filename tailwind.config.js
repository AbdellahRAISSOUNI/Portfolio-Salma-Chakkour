/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3182ce',
        secondary: '#2d3748',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        'xs': '480px', // Extra small breakpoint
      },
    },
  },
  plugins: [],
} 
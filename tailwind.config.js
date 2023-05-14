/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkd: 'rgb(17 24 39)',
        darkl: 'rgb(30 41 59)',
        darkt: 'rgb(229 231 235)',
        lightd: 'rgb(226 232 240)',
        lightl: 'rgb(241 245 249)',
        lightt: 'rgb(17 24 39)',
        first: 'rgb(6 182 212)',
        second: 'rgb(14 165 233)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

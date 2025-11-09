/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        google: {
          green: '#0F9D58',
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
        }
      },
    },
  },
  plugins: [],
}
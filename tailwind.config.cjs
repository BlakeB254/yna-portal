/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        'xs': '8px',
        'sm': '13px',
        'md': '21px',
        'lg': '34px',
        'xl': '55px',
      },
      fontSize: {
        'body': '16px',
        'subheading': '26px',
        'heading': '42px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        darkBlue: '#020817',
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
      }
    },
  },
  plugins: [],
};

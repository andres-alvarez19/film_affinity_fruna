/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        customText: '#BAC8D7',
        customBg: '#374151',
      },
    },
  },
  plugins: [],
}


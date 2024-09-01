/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-950': '#0c2233', // 95% dark blue
        'maroon-red': '#800000', // Maroon-red
      },
      width: {
        '150px': '150px',
      },
      height: {
        '220px': '220px',
      },
    },
  },
  plugins: [],
}


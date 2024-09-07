/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the class strategy

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-950': '#0c2233', // 95% dark blue
        'maroon-red': '#800000', // Maroon-red
        beige: '#f5f5dc',
        'light-gray': '#d3d3d3',
        'pastel-green': '#77dd77',
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


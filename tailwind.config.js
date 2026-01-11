/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0f172a', // Derin lacivert/siyah
        'tech-accent': '#38bdf8', // AI mavisi
        'pm-accent': '#f472b6',   // PM tarafın için hafif bir kontrast
      }
    },
  },
  plugins: [],
}
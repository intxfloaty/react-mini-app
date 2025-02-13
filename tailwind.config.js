/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Custom blue
        secondary: '#10b981', // Custom green
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade 1s ease-out forwards',
        float: 'float 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}


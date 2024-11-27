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
        marquee: 'marquee 20s linear infinite', // Add marquee animation
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // Starts off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Ends off-screen to the left
        },
      },
    },
  },
  plugins: [],
}

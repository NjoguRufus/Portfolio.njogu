/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'wobble': 'wobble 0.8s ease-in-out',
      },
      keyframes: {
        wobble: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-15deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '45%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
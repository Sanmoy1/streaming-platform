/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#1DB954',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'music-bar-1': {
          '0%, 100%': { height: '0.5rem' },
          '50%': { height: '1rem' },
        },
        'music-bar-2': {
          '0%, 100%': { height: '1rem' },
          '50%': { height: '1.5rem' },
        },
        'music-bar-3': {
          '0%, 100%': { height: '0.75rem' },
          '50%': { height: '1.25rem' },
        },
      },
      animation: {
        'music-bar-1': 'music-bar-1 1s ease-in-out infinite',
        'music-bar-2': 'music-bar-2 1s ease-in-out infinite',
        'music-bar-3': 'music-bar-3 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

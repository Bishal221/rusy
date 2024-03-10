/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['"Playfair Display", serif'],
    },
    extend: {

      keyframes: {
          updown: {
            '0%, 50%, 100%': { top: 0 },
            '25%': { top: '1rem' },
            '75%': { top: '-1rem' },
          },
          right_left: {
            '0%, 50%, 100%': { left: 0 },
            '25%': { left: '1rem' },
            '75%': { left: '-1rem' },
          },
          bounce_slow: {
            '0%, 50%, 100%': { transform: 'translateY(0)' },
            '25%': { transform: 'translateY(30px)' },
            '75%': { transform: 'translateY(-30px)' },
          },
          bounce_slow_reserse: {
            '0%, 50%, 100%': { transform: 'translateY(0)' },
            '25%': { transform: 'translateY(-30px)' },
            '75%': { transform: 'translateY(30px)' },
          },
        },
        animation: {
          updown: 'updown 3s linear infinite',
          right_left: 'right_left 3s linear infinite',
          bounce_slow: 'bounce_slow 3s linear infinite',
          bounce_slow_reserse: 'bounce_slow_reserse 3s linear infinite',
        }
      },
    },

    plugins: [],
  }
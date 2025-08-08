/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-20px)' }, 
        },
      },
      animation: {
        'slow-bounce': 'subtleBounce 4s ease-in-out infinite',
      },
       fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', /*…fallbacks…*/],
        serif: ['Lora', 'ui-serif', 'Georgia', /*…fallbacks…*/],
      },
       colors: {
        'lightning-aqua': '#7DF9FF',
        'lightning-aqua-dark': '#3ED2E7',
        'lightning-aqua-dim': '#5FCFD4',

        'lightning-aqua': {
          50:  '#f0feff',
          100: '#d8fcff',
          200: '#b3f9ff',
          300: '#8df6ff',
          400: '#66f3ff',
          500: '#3ff0ff',
          600: '#3adede',
          700: '#319c9c',
          800: '#257373',
          900: '#184c4c',
        },
      },
    },
  },
  plugins: [],
}


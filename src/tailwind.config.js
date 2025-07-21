/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#DCCA87',
        black: '#0C0C0C',
        gray: '#545454',
        crimson: '#F5EFDB',
        grey: '#AAAAAA', // Mantive 'grey' para corresponder ao seu CSS
      },
      fontFamily: {
        base: ['Cormorant Upright', 'serif'],
        alt: ['Open Sans', 'sans-serif'],
      },
      // Vamos adicionar a animação de bounce para o indicador de scroll aqui
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      className: { disabled: 'drop-shadow-sm; opacity-10' },
      keyframes: {
        from: { transform: 'translateX(-300px)' },
        to: { transform: 'translateX(0)' }
      }
    }
  },
  plugins: [],
}

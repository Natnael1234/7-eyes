/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#4A148C',
        'purple-light': '#E8E0F5',
        'yellow-brand': '#FFD700',
        'yellow-light': '#FFF9E6',
        'orange-light': '#FFE5CC',
        'beige': '#F5E6D3',
      },
    },
  },
  plugins: [],
}

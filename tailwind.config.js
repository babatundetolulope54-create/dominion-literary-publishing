/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dominion-black': '#0a0a0a',
        'dominion-dark': '#1a1a1a',
        'dominion-charcoal': '#2a2a2a',
        'dominion-gold': '#d4af37',
        'dominion-ivory': '#f5f1e8',
        'dominion-silver': '#c0c0c0',
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'editorial': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cinematic-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f5f1e8 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
        'cinematic': '0 50px 100px -20px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

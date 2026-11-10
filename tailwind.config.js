/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#06130d',
          900: '#0b1f15',
          800: '#143826',
          700: '#1b4d35',
          600: '#236545',
          500: '#2d8058',
          400: '#409e6f',
          300: '#62be8f',
          200: '#91d6b2',
          100: '#c5ecd6',
          50: '#edf9f2',
        },
        maroon: {
          950: '#1a0407',
          900: '#2d070c',
          800: '#4a0c14',
          700: '#68111d',
          600: '#871626',
          500: '#a61b2f',
          400: '#c72e44',
          300: '#de5669',
          200: '#ec8c99',
          100: '#f6c3cb',
          50: '#fbebed',
        },
        obsidian: '#070a08',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow-forest': '0 0 30px -5px rgba(35, 101, 69, 0.3)',
        'glass-glow-maroon': '0 0 30px -5px rgba(104, 17, 29, 0.3)',
      }
    },
  },
  plugins: [],
}

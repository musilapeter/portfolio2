/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#ccd6f6',
        dark: '#0a192f',
        'dark-light': '#112240',
        'slate': '#8892b0',
      },
      fontFamily: {
        'mono': ['SF Mono', 'Fira Code', 'monospace'],
        'sans': ['Calibre', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
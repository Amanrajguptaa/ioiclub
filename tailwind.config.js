/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ['Permanent Marker', 'cursive'],
        rampart: ['Rampart One', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        allura: ['Allura', 'cursive'],
        petitFormal: ['Petit Formal Script', 'cursive'],
        merienda: ['Merienda', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        custom: ['YourCustomFont', 'sans-serif'], 
    }
  },
  plugins: [],
}
}

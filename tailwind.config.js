/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paperItem': "url('src/assets/images/paperItem.png')",
        'paperBackground': "url('src/assets/images/paperBackground.jpg')",
        'paperBackground2': "url('src/assets/images/paperBackground2.jpg')",
        'hand': "url('src/assets/images/hand.png')",
      }
    },
  },
  plugins: [],
}

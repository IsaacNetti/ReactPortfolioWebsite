/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Nanum Pen Script","cursive"],
      },
      backgroundImage: {
        'paperItem': "url('src/assets/images/paperItem.png')",
        'mePaper': "url('src/assets/images/mePaper.png')",
        'githubPaper': "url('src/assets/images/githubPaper.png')",
        'linkedInPaper': "url('src/assets/images/linkedInPaper.png')",
        'rippedPaper': "url('src/assets/images/rippedPaper.png')",
        'paperBackground': "url('src/assets/images/paperBackground.jpg')",
        'paperBackground2': "url('src/assets/images/paperBackground2.jpg')",
        'hand': "url('src/assets/images/hand.png')",
      }
    },
  },
  plugins: [],
}

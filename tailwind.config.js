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
        'hireMePaper': "url('src/assets/images/hireMePaper.png')",
        'githubPaper': "url('src/assets/images/githubPaper.png')",
        'linkedInPaper': "url('src/assets/images/linkedInPaper.png')",
        'htmlPaper': "url('src/assets/images/htmlPaper.png')",
        'jsPaper': "url('src/assets/images/jsPaper.png')",
        'reactPaper': "url('src/assets/images/reactPaper.png')",
        'cssPaper': "url('src/assets/images/cssPaper.png')",
        'sqlPaper': "url('src/assets/images/sqlPaper.png')",
        'stickyNote': "url('src/assets/images/stickyNote.png')",
        'stickyNote2': "url('src/assets/images/stickyNote2.png')",
        'rippedPaper': "url('src/assets/images/rippedPaper.png')",
        'rippedPaperBottom': "url('src/assets/images/rippedPaperBottom.png')",
        'paperProject': "url('src/assets/images/paperProject.png')",
        'paperBackground': "url('src/assets/images/paperBackground.jpg')",
        'paperBackground2': "url('src/assets/images/paperBackground2.jpg')",
        'hand': "url('src/assets/images/hand.png')",
      }
    },
  },
  plugins: [],
}

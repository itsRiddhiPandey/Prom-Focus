/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgbutton:'#ffffff33',
        loaderbg:'#0000001a',
        modebackground:'#00000026',
        settingscolor:'#EFEFEF',
        pomodoro:'#FCA5A5',
        shortbreak:'#397097',
        longbreak:'#518A58'
      }
    },
  },
  plugins: [],
}
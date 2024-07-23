/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "screens":"#E5E5E5",
        "button_manager":"#897BDA",
        "button_manager_color":"#862796",
        "manager_progrees":"#E1CAE4",
        "task_progress":"#BAA5ED"

      },
      width : {
        "screen" :"100vh",
        "ttt" : "500px",
        "colorTrafic":"50px",
        "home_manager":"799px",
        "button_form_manager":"227px",
        "option_manager":"176px",
        "task_progress":"21px"
      },
      height : {
        "screen":"100vh",
        "ttt" : "500px",
        "colorTrafic":"50px",
        "home_manager":"853px",
        "button_manager" :"100px",
        "manager_progrees":"198px",
        "task_progress":"178px"
      },
      fontFamily :{
        "Manager" : ['roboto','sans-serif'],
   
      },
      padding: {
        "home_manager" : "30px"
      }
      
    }

  },
  plugins: [],
}
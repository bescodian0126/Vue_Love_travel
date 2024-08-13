/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,ts,js,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "menu-item-color": "#FD661E",
        "banner-adventure-blue" : "#1E92FD"
      },
      fontFamily: {  
        jost: ['Jost'],  
        poppins:['Poppins', 'sans-serif']
      },
      boxShadow: {
        "custom-y": "0 4px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}


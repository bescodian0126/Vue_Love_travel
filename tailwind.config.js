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
      screens: {
        
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'lg_desktop': '1450px',
        // => @media (min-width: 1450px) { ... }

        'xl_desktop' : '1750px',
        // => @media (min-width: 1750px) { ... }
      },
    },
  },
  plugins: [],
}


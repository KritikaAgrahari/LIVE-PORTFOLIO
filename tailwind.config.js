// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         bgColor: "#0A192F",
//         primaryColor:"#64FFDA",
//         textColor:"#8892B0",
//       },
//     },
//     screens: {
//       'xs':'476px',
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       '2xl': '1536px',

//       '2xl-mx' : {'max': '1535px'},
//       'xl-mx' : {'max': '1279px'},
//       'lg-mx' : {'max': '1023px'},
//       'md-mx' : {'max': '767px'},
//       'sm-mx' : {'max': '639px'},
//       'xs-mx' : {'max': '475px'},

      
//     },

//     colors:{
//       bgColor: "#0A192F",
//       primaryColor:"#64FFDA",
//       textColor:"#8892B0",
//       // bgColor: "#7E0F25",
//       // primaryColor:"#FFFF",
//       // textColor:"#F6665A"
      
//     }
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#ADE8F4",
        primaryColor: "#03045E",
        textColor: "#0077B6"
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }
    }

  },
  plugins: [],
}
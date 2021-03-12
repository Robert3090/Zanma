module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

 

    extend: {
      fontFamily:{
        'Diamond' : ["Diamond", "sans-serif"],
        'Diamond-bold' : ['Diamond-bold', 'sans-serif-bold'],
        'Diamond-thin' : ['Diamond-thin' , 'sans-serif-thin']
      },
      colors: {
        'Zamna-color' : '#34B8D5'
      }
    },

   
  },
  variants: {
    extend: { borderWidth: ['responsive', 'hover', 'focus'],},
  },
  plugins: [],
}

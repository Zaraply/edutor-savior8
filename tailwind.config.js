/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'greyscale-Grey' : '#292929',
        'dark-25%-Grey' : '#212121',
        'light-25%-Grey' : '#333333',
        'grey-bgButton' : '#D9DADC',
        'lightGrey' : '#d6d6d6',
        'darkBlue' : '#0C356A',
        'lightBlue' : '#0174BE',
        'light-lightBlue' : '#01BEAA',
        'darkBrown' : '#6A410C',
        'lightyellow-Yellow' : '#FFC436',
        'pearl-lightYellow' : '#FFF0CE',
        'lightText' : '#FFF',
        'darkText' : '#040507',
        'pearl-lightYellow' : '#FFF0CE',
        'black' : '#000000',
        
        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


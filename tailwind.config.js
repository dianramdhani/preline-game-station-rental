/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      lightGray: '#B7B7B7',
      gray: '#8F8F8F',
    },
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      padding: {
        10: '10px',
        20: '20px',
      },
      gap: {
        5: '5px',
        10: '10px',
      },
      borderRadius: {
        4: '4px',
      },
      width: {
        28: '28px',
      },
      height: {
        28: '28px',
      },
      fontSize: {
        10: '10px',
        12: '12px',
      },
    },
  },
  plugins: [require('preline/plugin')],
}

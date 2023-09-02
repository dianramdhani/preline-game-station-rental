/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
}

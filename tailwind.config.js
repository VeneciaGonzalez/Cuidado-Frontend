/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e1065',
        'white': '#fafafa',
      },
    },
  },
  important: true, //aqui le decimos a tenwil que todas sus clases sean important para que cuando agreguemos otras librerias talwin sobreescriba lo que asiganmos, es decir que talwin prevalezca la co figuracion de los colores que le estamos asignando
  plugins: [],
}

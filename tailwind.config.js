/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    './src/components/**/*.{html,js}',
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


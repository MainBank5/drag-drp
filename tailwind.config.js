/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor:{
      start:"hsl(192, 100%, 67%)",
      end:"hsl(237, 14%, 26%)",
      lightgray:"hsl(0, 0%, 98%)",
    },
    extend: {},
  },
  plugins: [],
}


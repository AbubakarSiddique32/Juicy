/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mina: ["Mina", "sans-serif"], // or 'MyFont' for local
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

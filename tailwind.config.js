/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 0.4s reverse",
        "bounce-fast": "bounce 0.4s ease-out ",
        "ping-fast": "ping 0.5s ease-out reverse",
        "ltr-linear-infinite": "normal 100s linear infinite",
      },
    },
  },
};

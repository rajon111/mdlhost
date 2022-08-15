/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          whit:"#ffffff",
          "base-100": "#0A1B26",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}

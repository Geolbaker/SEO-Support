/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-alt": "var(--brand-alt)",
        "brand-alt-2": "var(--brand-alt-2)"
      },
    },
  },
  plugins: [],
}

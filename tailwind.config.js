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
        "brand-alt-2": "var(--brand-alt-2)",
        "palette-1": "var(--colour-palette-1)",
        "palette-2": "var(--colour-palette-2)",
        "palette-3": "var(--colour-palette-3)",
        "palette-4": "var(--colour-palette-4)",
        "palette-5": "var(--colour-palette-5)",

      },
    },
  },
  plugins: [],
}

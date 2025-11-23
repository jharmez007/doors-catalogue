/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors (sampled / approximated from provided logo)
        "brand-gold": "#C88A2B",
        "brand-gold-2": "#E6C08A",
        "brand-dark": "#111214",
        "brand-muted": "#F6F5F3"
      },
      borderRadius: {
        'lg-2': '12px'
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(10,10,10,0.06)'
      }
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}", "./content/**/*.{md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        accent: {
          500: "#f59e0b"
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".timeline-spine": {
          position: "fixed",
          insetInlineStart: "max(4rem, 8vw)",
          blockSize: "100vh",
          inlineSize: "2px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(59 130 246 / 0.25) 10%, rgb(59 130 246 / 0.5) 50%, rgb(59 130 246 / 0.25) 90%, transparent 100%)",
          transform: "translateZ(0)"
        }
      })
    }
  ],
};

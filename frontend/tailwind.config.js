/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // optional, if you have a pages/ dir
  ],
  theme: {
    extend: {
      colors: {
        swiftGreen: "#0A9A5B",
        swiftDark: "#0D3B2E",
        swiftLight: "#E6F4EC",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

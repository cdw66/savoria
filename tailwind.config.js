/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   tan: "#C4A47D",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // hero: "url('../public/interior.jpg')",
      },
      colors: {
        tan: "#C4A47D",
        dark: "#333333",
      },
      fontFamily: {
        caveat: ["Caveat"],
        "eb-garamond": ["EB Garamond"],
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
};

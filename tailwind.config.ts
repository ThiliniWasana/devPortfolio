// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   },
//   plugins: [],
// };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        prociono: ['Prociono', 'serif'],
      },
      colors: {
        primary: "#8750f7", // You can define custom colors here
        secondary: "#ffff",
        yellowAccent: "#ffd700",
      },
      spacing: {
        '3px': '3px', // Custom spacing for underline height
      },
    },
  },
  plugins: [],
};

export default config;


import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coffee-light": "#F4E1D2", // Color suave y cálido para fondo
        "coffee-dark": "#4B3621", // Color oscuro para texto y iconos
        "coffee-text": "#6A4E36", // Color para textos secundarios
        brown: {
          50: "#f7f0e1",
          100: "#f0e0c3",
          200: "#e4b897",
          300: "#d18d6b",
          400: "#bb6d3f",
          500: "#9f4e1d",
          600: "#7f3b15",
          700: "#5f290c",
          800: "#3e1706",
          900: "#200b01",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss'
 
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "coffee-light": "#F4E1D2", // Color suave y cálido para fondo
        "coffee-dark": "#4B3621", // Color oscuro para texto y iconos
        "coffee-text": "#6A4E36", // Color para textos secundarios
      },
    },
  },
  plugins: [],
} satisfies Config
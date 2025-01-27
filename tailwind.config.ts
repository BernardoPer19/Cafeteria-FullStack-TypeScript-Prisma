import type { Config } from "tailwindcss";

export default {
  content: [
    // Asegúrate de que las rutas cubran todos los archivos relevantes
    "./app/**/*.{js,ts,jsx,tsx}", // Para todas las páginas y componentes en app/
    "./src/sections/**/*.{js,ts,jsx,tsx}", // Para tus componentes específicos en src/sections
  ],
  theme: {},
  plugins: [],
} satisfies Config;

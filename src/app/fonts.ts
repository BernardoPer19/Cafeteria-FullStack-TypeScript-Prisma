import { Sora } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'], // Incluye el soporte para caracteres latinos
  weight: ['400', '500', '600', '700'], // Ajusta los pesos que necesitas
  variable: '--font-sora', // Define una variable CSS para usar la fuente
});

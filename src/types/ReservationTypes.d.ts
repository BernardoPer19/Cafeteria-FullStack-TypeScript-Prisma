export interface ReservationType {
  id: number;
  nombreCliente: string;
  apellidoCliente: string;
  plan: "ESTUDIOS" | "TRABAJO" | "CUMPLEAÑOS" | "REUNION";
  estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
  horarioInicio?: string | null; // Si viene como JSON, será string
  horarioFin?: string | null;    // Si viene como JSON, será string
  createdAt: string;            // Las fechas de Prisma se serializan como string
  updatedAt: string;
}

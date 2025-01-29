
export interface FormData {
    nombreCliente: string;
    apellidoCliente?: string;
    plan: "ESTUDIOS" | "TRABAJO" | "CUMPLEAÑOS" | "REUNION";
    estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
    horarioInicio?: string | null; // Si viene como JSON, será string
    horarioFin?: string | null;    // Si viene como JSON, será string
  }

  export interface updateReservation {
    estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
  }
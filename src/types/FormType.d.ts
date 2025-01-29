
export interface FormData {
    nombreCliente: string;
    apellidoCliente?: string;
    plan: "ESTUDIOS" | "TRABAJO" | "CUMPLEAÑOS" | "REUNION";
    estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
    horarioInicio?: string | null; 
    horarioFin?: string | null;   
  }

  export interface updateReservation {
    estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
  }

export interface ReservationType {
  id: number;
  nombreCliente: string;
  apellidoCliente: string;
  plan: "ESTUDIOS" | "TRABAJO" | "CUMPLEAÑOS" | "REUNION";
  estado: "PENDIENTE" | "ACEPTADO" | "RECHAZADO";
  horarioInicio?: string ; 
  horarioFin?: string ;   
  createdAt: string;           
  updatedAt: string;
}

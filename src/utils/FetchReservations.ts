import { ReservationType } from "@/types/ReservationTypes";

export const fetchReservations = async (): Promise<ReservationType[]> => {
  try {
    const res = await fetch("http://localhost:3000/api/reservations", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al cargar datos!");
    }
    const data: ReservationType[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};

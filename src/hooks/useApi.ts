import { FormData, updateReservation } from "@/types/FormType";
import { ReservationType } from "@/types/ReservationTypes";
import { useState } from "react";

const useAPI = () => {
  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    nombreCliente: "",
    apellidoCliente: "",
    plan: "REUNION",
    estado: "PENDIENTE",
    horarioInicio: "",
    horarioFin: "",
  });

  // Cargar las reservas
  const loadDataFetch = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/reservations");
      if (!res.ok) {
        throw new Error("Error al cargar datos");
      }
      const data = await res.json();
      setReservations(data); 
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
      setError("Error al cargar datos");
    }
  };

  // Crear una nueva reserva
  const createReservation = async () => {
    if (!formData.nombreCliente || !formData.apellidoCliente) {
      setError("Nombre y apellido son requeridos");
      return;
    }
    setLoading(true);

    try {
      const newReservation = { ...formData };
      const res = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReservation),
      });

      if (!res.ok) {
        throw new Error("Error al añadir reserva");
      }
      const data = await res.json();
      setReservations((prevReservations) => [...prevReservations, data]);
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      setError("Error al crear la reserva");
    } finally {
      setLoading(false);
    }
  };

  // Actualizar una reserva
  const updateData = async (id: number, resUpdate: updateReservation) => {
    try {
      const res = await fetch(`http://localhost:3000/api/reservations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resUpdate),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar reserva");
      }
      const data = await res.json();
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation.id === id ? data : reservation
        )
      );
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
      setError("Error al actualizar reserva");
    }
  };

  // Eliminar una reserva
  const deleteData = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/reservations/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error al eliminar reserva");
      }
      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
      setError("Error al eliminar reserva");
    }
  };

  return {
    reservations,
    formData,
    setFormData,
    createReservation,
    loadDataFetch,
    updateData,
    deleteData,
    loading,
    error,
  };
};

export default useAPI;

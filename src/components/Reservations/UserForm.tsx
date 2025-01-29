"use client";
import { useState } from "react";
import { FormData } from "@/types/FormType";
import useAPI from "@/hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Link from "next/link";

const ReservationForm = () => {
  const { formData, setFormData, createReservation, loading, error } = useAPI();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createReservation();
      toast.success("¡Reserva creada con éxito!");
    } catch (error) {
      toast.error("Hubo un error al crear la reserva.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-semibold text-center text-brown-800 mb-4">
        Crea tu Reserva
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-brown-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombreCliente"
            value={formData.nombreCliente}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700">
            Apellido
          </label>
          <input
            type="text"
            name="apellidoCliente"
            value={formData.apellidoCliente}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Escribe tu apellido"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700">
            Plan de Reserva
          </label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          >
            <option value="REUNION">Reunión</option>
            <option value="ESTUDIOS">Estudios</option>
            <option value="CUMPLEAÑOS">Cumpleaños</option>
            <option value="TRABAJO">Trabajo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700">
            Hora de Inicio
          </label>
          <input
            type="datetime-local"
            name="horarioInicio"
            value={formData.horarioInicio}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700">
            Hora de Fin
          </label>
          <input
            type="datetime-local"
            name="horarioFin"
            value={formData.horarioFin}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-brown-600 text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-brown-700"
            }`}
          >
            {loading ? "Creando..." : "Crear Reserva"}
          </button>
        </div>
      </form>
      <Link href={"/reservations"}>
        <button className="w-full py-2 px-4 bg-brown-600 text-white rounded-md mt-5 hover:bg-brown-700">
          ¡Mira las reservas!
        </button>
      </Link>
      {error && (
        <div className="mt-4 text-center text-red-500">
          <p>{error}</p>
        </div>
      )}

   
      <ToastContainer />
    </div>
  );
};

export default ReservationForm;

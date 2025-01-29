import { ReservationType } from "@/types/ReservationTypes";
import { fetchReservations } from "@/utils/FetchReservations";
import { formatDate } from "@/utils/FormatDates";
import React from "react";
import { FaCoffee, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ReservationTable = async () => {
  const reservations: ReservationType[] = await fetchReservations();

  return (
    <main className="bg-[#e1d6c6] min-h-screen mt-24">
      <div className="container mx-auto p-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-[#5a432a] mb-8">
          Reservas en nuestra Cafetería
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white border border-[#d1a28e] rounded-lg">
            <thead>
              <tr className="bg-[#f7e7c7] text-[#5a432a] uppercase text-sm font-semibold">
                <th className="py-4 px-6 text-left">Nombre</th>
                <th className="py-4 px-6 text-left">Hora de Inicio</th>
                <th className="py-4 px-6 text-left">Hora de Fin</th>
                <th className="py-4 px-6 text-left">Estado</th>
                <th className="py-4 px-6 text-left">Plan</th>
              </tr>
            </thead>
            <tbody className="text-[#5a432a] text-sm font-light">
              {reservations.map((res) => (
                <tr
                  key={res.id}
                  className="border-b border-[#d1a28e] hover:bg-[#f5e1cc] transition duration-300"
                >
                  <td className="py-4 px-6">{res.nombreCliente}</td>
                  <td className="py-4 px-6">
                    {formatDate(res.horarioInicio) || "Sin horario"}
                  </td>
                  <td className="py-4 px-6">
                    {formatDate(res.horarioFin) || "Sin horario"}
                  </td>
                  <td className="py-4 px-6 flex items-center">
                    <span className="mr-2">
                      {res.estado === "ACEPTADO" ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : res.estado === "RECHAZADO" ? (
                        <FaTimesCircle className="text-red-600" />
                      ) : (
                        <FaCoffee className="text-[#5a432a]" />
                      )}
                    </span>
                    <span
                      className={`${
                        res.estado === "ACEPTADO"
                          ? "bg-green-200 text-green-600"
                          : res.estado === "RECHAZADO"
                          ? "bg-red-200 text-red-600"
                          : "bg-[#d1a28e] text-[#5a432a]"
                      } py-2 px-4 rounded-full text-xs font-semibold`}
                    >
                      {res.estado}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {res.plan || "Plan No Especificado"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ReservationTable;

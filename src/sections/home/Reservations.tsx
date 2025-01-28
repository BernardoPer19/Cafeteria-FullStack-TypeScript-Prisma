import React from "react";
import { FaCoffee, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Iconos para cafetería

const ReservationTable = () => {
  return (
    <main className="bg-[#e1d6c6] ">
      <div className="container mx-auto p-8  max-w-7xl">
        <h2 className="text-4xl font-semibold text-start text-brown-800 mb-8">
          Reservas en nuestra Cafetería
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-[#d1a28e] rounded-lg shadow-lg">
            <thead>
              <tr className="bg-[#f7e7c7] text-brown-800 uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Nombre</th>
                <th className="py-4 px-6 text-left">Hora de Inicio</th>
                <th className="py-4 px-6 text-left">Hora de Fin</th>
                <th className="py-4 px-6 text-left">Estado</th>
                <th className="py-4 px-6 text-left">Plan</th>
              </tr>
            </thead>
            <tbody className="text-brown-600 text-sm font-light">
              {/* Ejemplo de fila de reserva */}
              <tr className="border-b border-[#d1a28e] hover:bg-[#f5e1cc] transition duration-200">
                <td className="py-4 px-6">Juan Pérez</td>
                <td className="py-4 px-6">10:00 AM</td>
                <td className="py-4 px-6">11:00 AM</td>
                <td className="py-4 px-6 flex items-center">
                  <span className="mr-2">
                    <FaCheckCircle className="text-green-600" />
                  </span>
                  <span className="bg-green-200 text-green-600 py-2 px-4 rounded-full text-xs font-semibold">
                    Confirmada
                  </span>
                </td>
                <td className="py-4 px-6">Plan Básico</td>
              </tr>
              {/* Otra fila de reserva */}
              <tr className="border-b border-[#d1a28e] hover:bg-[#f5e1cc] transition duration-200">
                <td className="py-4 px-6">María López</td>
                <td className="py-4 px-6">12:00 PM</td>
                <td className="py-4 px-6">1:00 PM</td>
                <td className="py-4 px-6 flex items-center">
                  <span className="mr-2">
                    <FaTimesCircle className="text-red-600" />
                  </span>
                  <span className="bg-red-200 text-red-600 py-2 px-4 rounded-full text-xs font-semibold">
                    Cancelada
                  </span>
                </td>
                <td className="py-4 px-6">Plan Premium</td>
              </tr>
              {/* Fila adicional */}
              <tr className="border-b border-[#d1a28e] hover:bg-[#f5e1cc] transition duration-200">
                <td className="py-4 px-6">Carlos Gómez</td>
                <td className="py-4 px-6">2:00 PM</td>
                <td className="py-4 px-6">3:00 PM</td>
                <td className="py-4 px-6 flex items-center">
                  <span className="mr-2">
                    <FaCoffee className="text-brown-600" />
                  </span>
                  <span className="bg-brown-200 text-brown-600 py-2 px-4 rounded-full text-xs font-semibold">
                    En Proceso
                  </span>
                </td>
                <td className="py-4 px-6">Plan Especial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-8">
          {" "}
          <button className="mt-8 bg-[#5a432a] text-white px-10 py-4 rounded-xl hover:bg-[#947048] transition duration-300 shadow-md hover:scale-105">
            ¡Haz tu reserva!
          </button>
          <button className="mt-8 bg-[#947048] text-white px-10 py-4 rounded-xl ] transition duration-300 shadow-md hover:scale-105">
            ¡Mira las reservas!
          </button>
        </div>
      </div>
    </main>
  );
};

export default ReservationTable;

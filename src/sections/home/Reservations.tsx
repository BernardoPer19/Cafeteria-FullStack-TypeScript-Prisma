import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Importar iconos

const ReservationTable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-brown-800">Reservas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-brown-100 text-brown-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Hora de Inicio</th>
              <th className="py-3 px-6 text-left">Hora de Fin</th>
              <th className="py-3 px-6 text-left">Estado</th>
              <th className="py-3 px-6 text-left">Plan</th>
            </tr>
          </thead>
          <tbody className="text-brown-600 text-sm font-light">
            {/* Ejemplo de fila de reserva */}
            <tr className="border-b border-gray-200 hover:bg-brown-50 transition duration-200">
              <td className="py-3 px-6">Juan Pérez</td>
              <td className="py-3 px-6">10:00 AM</td>
              <td className="py-3 px-6">11:00 AM</td>
              <td className="py-3 px-6 flex items-center">
                <span className="mr-2">
                  <FaCheckCircle className="text-green-500" />
                </span>
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Confirmada</span>
              </td>
              <td className="py-3 px-6">Plan Básico</td>
            </tr>
            {/* Puedes agregar más filas aquí */}
            <tr className="border-b border-gray-200 hover:bg-brown-50 transition duration-200">
              <td className="py-3 px-6">María López</td>
              <td className="py-3 px-6">12:00 PM</td>
              <td className="py-3 px-6">1:00 PM</td>
              <td className="py-3 px-6 flex items-center">
                <span className="mr-2">
                  <FaTimesCircle className="text-red-500" />
                </span>
                <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Cancelada</span>
              </td>
              <td className="py-3 px-6">Plan Premium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationTable;
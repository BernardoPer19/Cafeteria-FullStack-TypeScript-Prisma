import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

// PUT
export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    try {
      const id = Number(params.id);
      if (isNaN(id) || id <= 0) {
        return NextResponse.json(
          { error: "ID inválido" },
          { status: 400 }
        );
      }
  
      const {
        nombreCliente,
        apellidoCliente,
        plan,
        estado,
        horarioInicio,
        horarioFin,
      } = await req.json();
  
      const validPlans = ["ESTUDIOS", "TRABAJO", "CUMPLEAÑOS", "REUNION"];
      if (plan && !validPlans.includes(plan)) {
        return NextResponse.json(
          { error: "El plan proporcionado no es válido" },
          { status: 400 }
        );
      }
  
      const validEstados = ["PENDIENTE", "ACEPTADO", "RECHAZADO"];
      if (estado && !validEstados.includes(estado)) {
        return NextResponse.json(
          { error: "El estado proporcionado no es válido" },
          { status: 400 }
        );
      }
  
      const reservaActualizada = await prisma.reserva.update({
        where: {
          id,
        },
        data: {
          nombreCliente,
          apellidoCliente,
          plan,
          estado,
          horarioInicio: horarioInicio ? new Date(horarioInicio) : undefined,
          horarioFin: horarioFin ? new Date(horarioFin) : undefined,
        },
      });
  
      return NextResponse.json(reservaActualizada);
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Reserva no encontrada" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Error al actualizar la reserva" },
        { status: 500 }
      );
    }
  };
  
  // DELETE
  export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
      const id = Number(params.id);
      if (isNaN(id) || id <= 0) {
        return NextResponse.json(
          { error: "ID inválido" },
          { status: 400 }
        );
      }
  
      const reservaEliminada = await prisma.reserva.delete({
        where: {
          id,
        },
      });
  
      return NextResponse.json(reservaEliminada);
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
      if (error.code === "P2025") {
        return NextResponse.json(
          { error: "Reserva no encontrada" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Error al eliminar la reserva" },
        { status: 500 }
      );
    }
  };
  
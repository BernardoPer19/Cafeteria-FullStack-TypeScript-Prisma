import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const reservas = await prisma.reserva.findMany();
    return NextResponse.json(reservas);
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    return NextResponse.json(
      { error: "Error al mostrar las reservas" },
      { status: 500 }
    );
  }
};


export const POST = async (req: Request) => {
  try {
    const {
      nombreCliente,
      apellidoCliente,
      plan,
      estado,
      horarioInicio,
      horarioFin,
    } = await req.json();

    if (!nombreCliente || !apellidoCliente || !plan) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios (nombreCliente, apellidoCliente o plan)" },
        { status: 400 }
      );
    }

    const validPlans = ["ESTUDIOS", "TRABAJO", "CUMPLEAÑOS", "REUNION"];
    if (!validPlans.includes(plan)) {
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

    const nuevaReserva = await prisma.reserva.create({
      data: {
        nombreCliente,
        apellidoCliente,
        plan,
        estado: estado || "PENDIENTE",
        horarioInicio: horarioInicio ? new Date(horarioInicio) : null,
        horarioFin: horarioFin ? new Date(horarioFin) : null,
      },
    });

    return NextResponse.json(nuevaReserva);
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    return NextResponse.json(
      { error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
};


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

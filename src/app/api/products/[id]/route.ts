import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

interface ParamsType {
  params: { id: number };
}

export const DELETE = async (request: Request, { params }: ParamsType) => {
  try {
    const deleteProd = await prisma.coffes.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deleteProd);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar los productos" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request, { params }: ParamsType) => {
  try {
    const id = Number(params.id);
    if (isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const { name, description, img, price, coffee_flavor, rating } =
      await req.json();

    const updateProduct = await prisma.coffes.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        coffee_flavor,
        img,
        price,
        rating,
      },
    });

    return NextResponse.json(updateProduct);
  } catch (error) {
    console.error("Error:", error); // Log para depuración
    return NextResponse.json(
      { error: "Error al actualizar el producto" },
      { status: 500 }
    );
  }
};

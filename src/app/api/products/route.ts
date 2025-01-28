import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const products = await prisma.coffes.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al mostrar los productos" },
      { status: 500 }
    );
  }
};

// POST
export const POST = async (req: Request) => {
  try {
    const {
      name,
      description,
      coffee_flavor,
      categoty,
      img,
      rating,
      country,
      price,
    } = await req.json();


    if (
      !name ||
      !description ||
      !coffee_flavor ||
      !categoty ||
      !img ||
      !country ||
      !price
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.coffes.create({
      data: {
        name,
        description,
        coffee_flavor,
        categoty,
        img,
        rating,
        country,
        price,
      },
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear el producto" },
      { status: 500 }
    );
  }
};

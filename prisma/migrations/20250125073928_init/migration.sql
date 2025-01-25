-- CreateTable
CREATE TABLE "Coffes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coffee_flavor" TEXT NOT NULL,
    "categoty" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "price" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreCliente" TEXT NOT NULL,
    "apellidoCliente" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "horarioInicio" DATETIME,
    "horarioFin" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

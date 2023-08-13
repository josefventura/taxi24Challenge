-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'inactive', 'inprocess');

-- CreateTable
CREATE TABLE "drivers" (
    "id" INTEGER NOT NULL,
    "fullname" VARCHAR,
    "current_location" VARCHAR,
    "registration_number" VARCHAR,
    "status" "status",
    "created_at" TIMESTAMP(6),
    "modified_at" TIMESTAMP(6),

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" INTEGER NOT NULL,
    "travel_id" INTEGER,
    "travel_price" DECIMAL,
    "taxes" DECIMAL,
    "total" DECIMAL,
    "status" "status",

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passengers" (
    "id" INTEGER NOT NULL,
    "fullname" VARCHAR,
    "current_location" VARCHAR,
    "status" "status",
    "created_at" TIMESTAMP(6),
    "modified_at" TIMESTAMP(6),

    CONSTRAINT "passengers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travels" (
    "id" INTEGER NOT NULL,
    "passenger_id" INTEGER,
    "driver_id" INTEGER,
    "from" VARCHAR,
    "to" VARCHAR,
    "status" "status",
    "created_at" TIMESTAMP(6),

    CONSTRAINT "travels_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_travel_id_fkey" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travels" ADD CONSTRAINT "travels_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travels" ADD CONSTRAINT "travels_passenger_id_fkey" FOREIGN KEY ("passenger_id") REFERENCES "passengers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

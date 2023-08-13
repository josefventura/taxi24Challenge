SELECT "CREATE DATABASE taxi24db"
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'taxi24db');
CREATE TYPE status AS ENUM ('active', 'inactive', 'inprocess');

CREATE TABLE "drivers" (
  "id" integer PRIMARY KEY,
  "fullname" varchar,
  "current_location" varchar,
  "registration_number" varchar,
  "status" status,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "passengers" (
  "id" integer PRIMARY KEY,
  "fullname" varchar,
  "current_location" varchar,
  "status" status,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "travels" (
  "id" integer PRIMARY KEY,
  "passenger_id" integer,
  "driver_id" integer,
  "from" varchar,
  "to" varchar,
  "status" status,
  "created_at" timestamp
);

CREATE TABLE "invoice" (
  "id" integer PRIMARY KEY,
  "travel_id" integer,
  "travel_price" decimal,
  "taxes" decimal,
  "total" decimal,
  "status" status
);

ALTER TABLE "invoice" ADD FOREIGN KEY ("travel_id") REFERENCES "travels" ("id");

ALTER TABLE "drivers" ADD FOREIGN KEY ("id") REFERENCES "travels" ("driver_id");

ALTER TABLE "passengers" ADD FOREIGN KEY ("id") REFERENCES "travels" ("passenger_id");

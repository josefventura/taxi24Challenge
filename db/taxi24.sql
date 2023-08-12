SELECT 'CREATE DATABASE taxi24db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'taxi24db' )

CREATE TABLE "drivers" (
  "driver_id" integer PRIMARY KEY,
  "driver_fullname" varchar,
  "driver_current_location" varchar,
  "registration_number" varchar,
  "driver_status" varchar,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "passengers" (
  "passenger_id" integer PRIMARY KEY,
  "passenger_fullname" varchar,
  "passenger_current_location" varchar,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "travels" (
  "travel_id" integer PRIMARY KEY,
  "passenger_id" integer,
  "driver_id" integer,
  "travel_from" varchar,
  "travel_to" varchar,
  "travel_status" varchar,
  "created_at" timestamp
);

CREATE TABLE "invoice" (
  "invoice_id" integer PRIMARY KEY,
  "travel_price" decimal,
  "invoice_taxes" decimal,
  "invoice_total" decimal
);

CREATE TABLE "invc_travel_rel" (
  "id" integer PRIMARY KEY,
  "invoice_id" integer,
  "travel_id" integer,
  "status" varchar
);

ALTER TABLE "invoice" ADD FOREIGN KEY ("invoice_id") REFERENCES "invc_travel_rel" ("invoice_id");

ALTER TABLE "travels" ADD FOREIGN KEY ("travel_id") REFERENCES "invc_travel_rel" ("travel_id");

ALTER TABLE "drivers" ADD FOREIGN KEY ("driver_id") REFERENCES "travels" ("driver_id");

ALTER TABLE "passengers" ADD FOREIGN KEY ("passenger_id") REFERENCES "travels" ("passenger_id");

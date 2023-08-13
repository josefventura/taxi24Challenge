-- AlterTable
CREATE SEQUENCE drivers_id_seq;
ALTER TABLE "drivers" ALTER COLUMN "id" SET DEFAULT nextval('drivers_id_seq');
ALTER SEQUENCE drivers_id_seq OWNED BY "drivers"."id";

-- AlterTable
CREATE SEQUENCE invoice_id_seq;
ALTER TABLE "invoice" ALTER COLUMN "id" SET DEFAULT nextval('invoice_id_seq');
ALTER SEQUENCE invoice_id_seq OWNED BY "invoice"."id";

-- AlterTable
CREATE SEQUENCE passengers_id_seq;
ALTER TABLE "passengers" ALTER COLUMN "id" SET DEFAULT nextval('passengers_id_seq');
ALTER SEQUENCE passengers_id_seq OWNED BY "passengers"."id";

-- AlterTable
CREATE SEQUENCE travels_id_seq;
ALTER TABLE "travels" ALTER COLUMN "id" SET DEFAULT nextval('travels_id_seq');
ALTER SEQUENCE travels_id_seq OWNED BY "travels"."id";

-- AlterTable
ALTER TABLE "meal" ALTER COLUMN "calories" DROP NOT NULL,
ALTER COLUMN "carbohydrates" DROP NOT NULL,
ALTER COLUMN "fat" DROP NOT NULL,
ALTER COLUMN "fibre" DROP NOT NULL,
ALTER COLUMN "portion" DROP NOT NULL,
ALTER COLUMN "protein" DROP NOT NULL,
ALTER COLUMN "sugar" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL;

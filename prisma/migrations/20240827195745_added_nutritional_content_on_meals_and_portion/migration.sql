/*
  Warnings:

  - Added the required column `calories` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbohydrates` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibre` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portion` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meal" ADD COLUMN     "calories" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "portion" TEXT NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sugar" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

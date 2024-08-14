/*
  Warnings:

  - You are about to drop the column `coachProfileId` on the `client_profile` table. All the data in the column will be lost.
  - You are about to drop the `foods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `client_profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `coach_profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "client_profile" DROP CONSTRAINT "client_profile_coachProfileId_fkey";

-- DropIndex
DROP INDEX "client_profile_coachProfileId_key";

-- AlterTable
ALTER TABLE "client_profile" DROP COLUMN "coachProfileId",
ADD COLUMN     "coach_profile_id" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "coach_profile" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "foods";

-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibre" DOUBLE PRECISION NOT NULL,
    "sugar" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "client_id" INTEGER,
    "coach_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "client_id" INTEGER,
    "coach_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods_in_meals" (
    "meal_id" INTEGER NOT NULL,
    "food_id" INTEGER NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by" TEXT NOT NULL,

    CONSTRAINT "foods_in_meals_pkey" PRIMARY KEY ("meal_id","food_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "food_name_key" ON "food"("name");

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_coach_profile_id_fkey" FOREIGN KEY ("coach_profile_id") REFERENCES "coach_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coach_profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client_profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coach_profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods_in_meals" ADD CONSTRAINT "foods_in_meals_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foods_in_meals" ADD CONSTRAINT "foods_in_meals_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

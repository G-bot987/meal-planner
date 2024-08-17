/*
  Warnings:

  - You are about to drop the column `client_id` on the `food` table. All the data in the column will be lost.
  - You are about to drop the column `coach_id` on the `food` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `coach_id` on the `meal` table. All the data in the column will be lost.
  - Made the column `user_id` on table `client_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `coach_profile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "food" DROP CONSTRAINT "food_client_id_fkey";

-- DropForeignKey
ALTER TABLE "food" DROP CONSTRAINT "food_coach_id_fkey";

-- DropForeignKey
ALTER TABLE "meal" DROP CONSTRAINT "meal_client_id_fkey";

-- DropForeignKey
ALTER TABLE "meal" DROP CONSTRAINT "meal_coach_id_fkey";

-- AlterTable
ALTER TABLE "client_profile" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "coach_profile" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "food" DROP COLUMN "client_id",
DROP COLUMN "coach_id",
ADD COLUMN     "user_id" INTEGER;

-- AlterTable
ALTER TABLE "meal" DROP COLUMN "client_id",
DROP COLUMN "coach_id",
ADD COLUMN     "user_id" INTEGER;

-- CreateTable
CREATE TABLE "logged_meals" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logged_meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LoggedMealsToMeal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LoggedMealsToFood" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "logged_meals_user_id_idx" ON "logged_meals"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_LoggedMealsToMeal_AB_unique" ON "_LoggedMealsToMeal"("A", "B");

-- CreateIndex
CREATE INDEX "_LoggedMealsToMeal_B_index" ON "_LoggedMealsToMeal"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LoggedMealsToFood_AB_unique" ON "_LoggedMealsToFood"("A", "B");

-- CreateIndex
CREATE INDEX "_LoggedMealsToFood_B_index" ON "_LoggedMealsToFood"("B");

-- AddForeignKey
ALTER TABLE "logged_meals" ADD CONSTRAINT "logged_meals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoggedMealsToMeal" ADD CONSTRAINT "_LoggedMealsToMeal_A_fkey" FOREIGN KEY ("A") REFERENCES "logged_meals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoggedMealsToMeal" ADD CONSTRAINT "_LoggedMealsToMeal_B_fkey" FOREIGN KEY ("B") REFERENCES "meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoggedMealsToFood" ADD CONSTRAINT "_LoggedMealsToFood_A_fkey" FOREIGN KEY ("A") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LoggedMealsToFood" ADD CONSTRAINT "_LoggedMealsToFood_B_fkey" FOREIGN KEY ("B") REFERENCES "logged_meals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

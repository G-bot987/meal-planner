/*
  Warnings:

  - Made the column `user_id` on table `meal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "meal" DROP CONSTRAINT "meal_user_id_fkey";

-- AlterTable
ALTER TABLE "meal" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

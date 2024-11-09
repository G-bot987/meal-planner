/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `food` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "food_name_user_id_key" ON "food"("name", "user_id");

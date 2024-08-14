/*
  Warnings:

  - You are about to drop the column `coachId` on the `clientProfile` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `foods` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[name]` on the table `foods` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "clientProfile" DROP COLUMN "coachId";

-- AlterTable
ALTER TABLE "foods" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");

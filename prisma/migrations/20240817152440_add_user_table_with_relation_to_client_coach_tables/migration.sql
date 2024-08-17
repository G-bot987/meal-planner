/*
  Warnings:

  - You are about to drop the column `email` on the `client_profile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `client_profile` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `client_profile` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `coach_profile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `coach_profile` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `coach_profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `client_profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `coach_profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "client_profile_email_key";

-- DropIndex
DROP INDEX "coach_profile_email_key";

-- AlterTable
ALTER TABLE "client_profile" DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "user_id" INTEGER;

-- AlterTable
ALTER TABLE "coach_profile" DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "user_id" INTEGER;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "coach_id" INTEGER,
    "client_id" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_profile_user_id_key" ON "client_profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "coach_profile_user_id_key" ON "coach_profile"("user_id");

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "coach_profile" ADD CONSTRAINT "coach_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

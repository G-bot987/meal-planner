/*
  Warnings:

  - You are about to drop the `clientProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coachProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "clientProfile" DROP CONSTRAINT "clientProfile_coachProfileId_fkey";

-- DropTable
DROP TABLE "clientProfile";

-- DropTable
DROP TABLE "coachProfile";

-- CreateTable
CREATE TABLE "client_profile" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "coachProfileId" INTEGER,

    CONSTRAINT "client_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coach_profile" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "coach_profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_profile_email_key" ON "client_profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_profile_coachProfileId_key" ON "client_profile"("coachProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "coach_profile_email_key" ON "coach_profile"("email");

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_coachProfileId_fkey" FOREIGN KEY ("coachProfileId") REFERENCES "coach_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

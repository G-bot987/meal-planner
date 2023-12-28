-- CreateTable
CREATE TABLE "clientProfile" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "coachId" UUID NOT NULL,
    "coachProfileId" INTEGER,

    CONSTRAINT "clientProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coachProfile" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "coachProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientProfile_email_key" ON "clientProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientProfile_coachProfileId_key" ON "clientProfile"("coachProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "coachProfile_email_key" ON "coachProfile"("email");

-- AddForeignKey
ALTER TABLE "clientProfile" ADD CONSTRAINT "clientProfile_coachProfileId_fkey" FOREIGN KEY ("coachProfileId") REFERENCES "coachProfile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AlterTable
ALTER TABLE "meal" ADD COLUMN     "original_meal_id" INTEGER,
ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_original_meal_id_fkey" FOREIGN KEY ("original_meal_id") REFERENCES "meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

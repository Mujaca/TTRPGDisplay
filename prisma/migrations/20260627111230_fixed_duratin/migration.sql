/*
  Warnings:

  - Changed the type of `duration` on the `CurrentAudio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CurrentAudio" DROP COLUMN "duration",
ADD COLUMN     "duration" BIGINT NOT NULL;

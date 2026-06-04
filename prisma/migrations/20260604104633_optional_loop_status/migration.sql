-- DropForeignKey
ALTER TABLE "RoomData" DROP CONSTRAINT "RoomData_loopStatusId_fkey";

-- AlterTable
ALTER TABLE "RoomData" ALTER COLUMN "loopStatusId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_loopStatusId_fkey" FOREIGN KEY ("loopStatusId") REFERENCES "LoopStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

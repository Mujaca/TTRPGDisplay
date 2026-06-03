-- DropForeignKey
ALTER TABLE "RoomData" DROP CONSTRAINT "RoomData_currentAudioId_fkey";

-- DropForeignKey
ALTER TABLE "RoomData" DROP CONSTRAINT "RoomData_temporaryMessageId_fkey";

-- AlterTable
ALTER TABLE "LoopStatus" ALTER COLUMN "loopStart" DROP NOT NULL,
ALTER COLUMN "loopEnd" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RoomData" ALTER COLUMN "currentAudioId" DROP NOT NULL,
ALTER COLUMN "temporaryMessageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_currentAudioId_fkey" FOREIGN KEY ("currentAudioId") REFERENCES "CurrentAudio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_temporaryMessageId_fkey" FOREIGN KEY ("temporaryMessageId") REFERENCES "TemporaryMessage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

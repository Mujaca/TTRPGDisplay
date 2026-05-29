-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" BIGINT NOT NULL,
    "fileType" TEXT NOT NULL,
    "parent" TEXT,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentAudio" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "currentTime" BIGINT NOT NULL,
    "audioStatus" TEXT NOT NULL,

    CONSTRAINT "CurrentAudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dataId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomData" (
    "id" TEXT NOT NULL,
    "currentView" TEXT NOT NULL,
    "image" TEXT,
    "currentAudioId" TEXT NOT NULL,
    "temporaryMessageId" TEXT NOT NULL,
    "loopStatusId" TEXT NOT NULL,
    "queuedAudio" TEXT[],

    CONSTRAINT "RoomData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoopStatus" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "loopStart" BIGINT NOT NULL,
    "loopEnd" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "TemporaryMessage" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "TemporaryMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "File_id_key" ON "File"("id");

-- CreateIndex
CREATE UNIQUE INDEX "File_path_key" ON "File"("path");

-- CreateIndex
CREATE UNIQUE INDEX "File_ownerId_key" ON "File"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "CurrentAudio_id_key" ON "CurrentAudio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Room_id_key" ON "Room"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Room_dataId_key" ON "Room"("dataId");

-- CreateIndex
CREATE UNIQUE INDEX "Room_ownerId_key" ON "Room"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "RoomData_id_key" ON "RoomData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RoomData_currentAudioId_key" ON "RoomData"("currentAudioId");

-- CreateIndex
CREATE UNIQUE INDEX "RoomData_temporaryMessageId_key" ON "RoomData"("temporaryMessageId");

-- CreateIndex
CREATE UNIQUE INDEX "RoomData_loopStatusId_key" ON "RoomData"("loopStatusId");

-- CreateIndex
CREATE UNIQUE INDEX "LoopStatus_id_key" ON "LoopStatus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TemporaryMessage_id_key" ON "TemporaryMessage"("id");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "RoomData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_currentAudioId_fkey" FOREIGN KEY ("currentAudioId") REFERENCES "CurrentAudio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_temporaryMessageId_fkey" FOREIGN KEY ("temporaryMessageId") REFERENCES "TemporaryMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomData" ADD CONSTRAINT "RoomData_loopStatusId_fkey" FOREIGN KEY ("loopStatusId") REFERENCES "LoopStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

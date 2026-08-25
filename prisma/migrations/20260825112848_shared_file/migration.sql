-- CreateTable
CREATE TABLE "SharedFile" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SharedFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SharedFile_id_key" ON "SharedFile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SharedFile_fileId_key" ON "SharedFile"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "SharedFile_url_key" ON "SharedFile"("url");

-- AddForeignKey
ALTER TABLE "SharedFile" ADD CONSTRAINT "SharedFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

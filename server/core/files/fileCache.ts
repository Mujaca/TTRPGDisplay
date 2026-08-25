import NodeCache from "node-cache";
import { s3, S3_BUCKET } from "~~/server/lib/s3";
import { prisma } from "~~/server/lib/db";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export const fileCache = new NodeCache({
    stdTTL: 60 * 60 * 12, // 12 hours
    checkperiod: 60 * 10, // 10 minutes
    useClones: false,
    deleteOnExpire: true,
    enableLegacyCallbacks: false,
});

export async function getFileUrl(fileId: string): Promise<string | null> {
    const cachedUrl = fileCache.get<string>(fileId);
    if (cachedUrl) {
        return cachedUrl;
    }

    const file = await prisma.file.findUnique({
        where: { id: fileId },
    });

    if (!file || file.fileType === "organisation/folder") {
        return null;
    }

    const command = new GetObjectCommand({
        Bucket: S3_BUCKET,
        Key: file.path,
    });

    // @ts-expect-error
    const url = await getSignedUrl(s3, command, { expiresIn: 60 * 60 * 12 }); // URL valid for 12 hour
    fileCache.set(fileId, url);

    await prisma.sharedFile.upsert({
        where: { fileId },
        update: { url },
        create: {
            url,
            file: {
                connect: {
                    id: fileId,
                },
            },
        },
    });

    return url;
}

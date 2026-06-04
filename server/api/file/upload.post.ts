import { auth } from "~~/server/lib/auth";
import { prisma } from "~~/server/lib/db";
import { s3, S3_BUCKET } from "~~/server/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default defineEventHandler(async (event) => {
    const session = await auth.api.getSession({ headers: event.headers });
    if (!session) {
        setResponseStatus(event, 401);
        return {
            error: "Unauthorized",
        };
    }

    const body = await readBody(event);

    if (!body) {
        setResponseStatus(event, 400);
        return {
            error: "Content type is required",
        };
    }

    const contentType = body?.contentType;
    const fileName = body?.fileName;

    if (!contentType) {
        setResponseStatus(event, 400);
        return {
            error: "Content type is required",
        };
    }

    if (!fileName) {
        setResponseStatus(event, 400);
        return {
            error: "File name is required",
        };
    }

    const uploadKey = `users/${session.user.id}/${Date.now()}`;  

    const command = new PutObjectCommand({
        Bucket: S3_BUCKET,
        Key: uploadKey,
    });

    //@ts-expect-error - getSignedUrl is not typed correctly for S3Client
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    await prisma.file.create({
        data: {
            ownerId: session.user.id,
            path: uploadKey,
            fileType: contentType,
            fileName: "",
            fileSize: 0,
            parent: body.parent ?? null,
        },
    });

    return {
        uploadUrl,
        key: uploadKey,
    };
});

import { auth } from "~~/server/lib/auth";
import { prisma } from "~~/server/lib/db";
import { s3, S3_BUCKET } from "~~/server/lib/s3";
import { HeadObjectCommand } from "@aws-sdk/client-s3";

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
            error: "file is required",
        };
    }

    const file = body.file;
    
    if (!file) {
        setResponseStatus(event, 400);
        return {
            error: "file is required",
        };
    }

    const headCommand = new HeadObjectCommand({
        Bucket: S3_BUCKET,
        Key: file,
    });

    const res = await s3.send(headCommand);

    await prisma.file.update({
        where: {
            path: file,
        },
        data: {
            fileSize: res.ContentLength ?? 0,
        },
    });

    setResponseStatus(event, 200);
    return {
        message: "success",
    };
})
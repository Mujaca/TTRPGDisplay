import { auth } from "~~/server/lib/auth";
import { prisma } from "~~/server/lib/db";

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
            error: "fileId and targetFolderId are required",
        };
    }

    const fileId = body.fileId;
    const targetFolderId = body.targetFolderId;

    if (!fileId || !targetFolderId) {
        setResponseStatus(event, 400);
        return {
            error: "fileId and targetFolderId are required",
        };
    }

    const file = await prisma.file.findFirst({
        where: {
            id: fileId,
            ownerId: session.user.id,
        },
    });

    if (!file) {
        setResponseStatus(event, 404);
        return {
            error: "File not found",
        };
    }

    const targetFolder = await prisma.file.findFirst({
        where: {
            id: targetFolderId,
            ownerId: session.user.id,
            fileType: "organisation/folder",
        },
    });

    if (!targetFolder) {
        setResponseStatus(event, 404);
        return {
            error: "Target folder not found",
        };
    }

    await prisma.file.update({
        where: {
            id: fileId,
        },
        data: {
            parent: targetFolderId,
        },
    });

    return {
        
    };
})
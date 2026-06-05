import { mapFolderStructor } from "~~/server/core/files/fileHelper";
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

    const files = await prisma.file.findMany({
        where: {
            ownerId: session.user.id,
            uploadStatus: {
                in: ["uploaded"],
            },
        },
        select: {
            id: true,
            path: true,
            fileName: true,
            fileSize: true,
            fileType: true,
            parent: true,
        },
        orderBy: {
            fileName: "asc"
        }
    });

    return mapFolderStructor(files);
});

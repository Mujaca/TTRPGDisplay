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
            fileSize: {
                gt: 0,
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
    });

    const mappedFiles: any = {};

    for (const file of files) {
        if (file.parent) {
            if (!mappedFiles[file.parent]) {
                mappedFiles[file.parent] = {
                    id: file.parent,
                    children: [],
                };
            }

            mappedFiles[file.parent].children.push(mapFile(file));
            continue;
        }

        if (!mappedFiles[file.id]) {
            mappedFiles[file.id] = mapFile(file);

            if (file.fileType === "organisation/folder") {
                mappedFiles[file.id].children = [];
            }
        }
    }

    return Object.values(mappedFiles);
});

// TODO fix typing
function mapFile(file: any) {
    return {
        id: file.id,
        path: file.path,
        fileName: file.fileName,
        fileType: file.fileType,
        fileSize: Number(file.fileSize),
    };
}

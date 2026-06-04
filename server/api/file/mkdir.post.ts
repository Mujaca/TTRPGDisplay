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
    if(!body) {
        setResponseStatus(event, 400);
        return {
            error: "Name is required",
        };
    }

    const { name, parent } = body;
    
    if (!name) {
        setResponseStatus(event, 400);
        return {
            error: "Name is required",
        };
    }

    const folder = await prisma.file.create({
        data: {
            ownerId: session.user.id,
            path: `users/${session.user.id}/${Date.now()}-${name}`,
            fileName: name,
            fileType: "organisation/folder",
            fileSize: 1,
            parent: parent ?? null,
        },
    });

    setResponseStatus(event, 200);
    return {
        message: "success",
        id: folder.id
    };
});
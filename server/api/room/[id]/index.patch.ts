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

    const id = getRouterParam(event, "id");
    if (!id) {
        setResponseStatus(event, 400);
        return {
            error: "Room id is required",
        };
    }

    const room = await prisma.room.findFirst({
        where: {
            id: id,
            ownerId: session.user.id,
        },
    });

    if (!room) {
        setResponseStatus(event, 404);
        return {
            error: "Room not found",
        };
    }

    const body = await readBody(event);
    if (!body) {
        setResponseStatus(event, 400);
        return {
            error: "No data found",
        };
    }

    await prisma.room.update({
        data: {
            name: body.name ?? room.name,
            description: body.description ?? room.description,
        },
        where: {
            id: id,
        },
    });

    setResponseStatus(event, 200);
    return "success";
});

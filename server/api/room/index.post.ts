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
            error: "Name and description are required",
        };
    }

    const { name, description } = body;

    if (!name || !description) {
        setResponseStatus(event, 400);
        return {
            error: "Name and description are required",
        };
    }

    const loopStatus = await prisma.loopStatus.create({
        data: {
            type: "no-loop",
        },
    });

    const roomData = await prisma.roomData.create({
        data: {
            currentView: "base",
            loopStatusId: loopStatus.id,
        },
    });

    const room = await prisma.room.create({
        data: {
            name,
            description,
            dataId: roomData.id,
            ownerId: session.user.id,
        },
    });

    setResponseStatus(event, 200);
    return {
        roomId: room.id,
    };
});
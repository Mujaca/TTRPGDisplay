import { auth } from "~~/server/lib/auth";
import { prisma } from "~~/server/lib/db";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");
    if(!id) {
        setResponseStatus(event, 400);
        return {
            error: "Room id is required",
        };
    }

    const session = await auth.api.getSession({ headers: event.headers });
    if (!session) {
        setResponseStatus(event, 401);
        return {
            error: "Unauthorized",
        };
    }

    const room = await prisma.room.findFirst({
        where: {
            id,
            ownerId: session.user.id,
        },
        include: {
            data: {
                include: {
                    currentAudio: {
                        select: {
                            url: true,
                            audioStatus: true,
                            currentTime: true,
                            duration: true,
                        },
                    },
                    loopStatus: {
                        select: {
                            type: true,
                            loopStart: true,
                            loopEnd: true,
                        },
                    },
                    temporaryMessage: {
                        select: {
                            message: true,
                            title: true,
                        },
                    },
                },
            },
        },
    });

    if (!room) {
        setResponseStatus(event, 404);
        return {
            error: "Room not found",
        };
    }

    setResponseStatus(event, 200);
    return {
        room
    };
});

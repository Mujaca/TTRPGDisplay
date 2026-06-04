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
        include: {
            data: true,
        },
    });

    if (!room) {
        setResponseStatus(event, 404);
        return {
            error: "Room not found",
        };
    }

    await prisma.room.delete({
        where: {
            id: id,
        },
    });

    await prisma.roomData.delete({
        where: {
            id: room.dataId,
        },
    }); 

    if (room.data.currentAudioId) {
        await prisma.currentAudio.delete({
            where: {
                id: room.data.currentAudioId,
            },
        });
    }

    if (room.data.loopStatusId) {
        await prisma.loopStatus.delete({
            where: {
                id: room.data.loopStatusId,
            },
        });
    }

    if (room.data.temporaryMessageId) {
        await prisma.temporaryMessage.delete({
            where: {
                id: room.data.temporaryMessageId,
            },
        });
    }

    setResponseStatus(event, 200);
    return "success";
});

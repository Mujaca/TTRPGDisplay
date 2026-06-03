import { getRoom, startRoom } from "~~/server/core/room/roomHandler";
import { prisma } from "~~/server/lib/db";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");
    const room = await getRoom(id ?? "");

    if (room) {
        setResponseStatus(event, 200);

        return {
            socket: "",
            roomId: room.id,
        };
    }

    const databaseRoom = await prisma.room.findFirst({
        where: {
            id: id,
        },
    });

    if (!databaseRoom) {
        setResponseStatus(event, 404);
        return {
            error: "Room not found",
        };
    }

    startRoom(databaseRoom.id, databaseRoom.name, databaseRoom.description);

    return {
        socket: "",
        roomId: databaseRoom.id,
    };
});

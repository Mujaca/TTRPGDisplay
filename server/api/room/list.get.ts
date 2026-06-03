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

    const rooms = await prisma.room.findMany({
        select: {
            id: true,
            name: true,
            description: true,
        },
        where: {
            ownerId: session.user.id,
        },
    });

    setResponseStatus(event, 200);
    return {
        rooms,  
    };
});

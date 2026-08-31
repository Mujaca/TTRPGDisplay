import { findRoomOwner } from "../core/room/roomHandler";
import { auth } from "../lib/auth";

export const defineRequireOwnRoomHandler = <T extends EventHandlerRequest, D>(
    handler: EventHandler<T, D>,
): EventHandler<T, D> =>
    defineEventHandler<T>(async (event) => {
        try {
            const session = await auth.api.getSession({
                headers: event.headers,
            });
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

            const roomOwner = await findRoomOwner(id);
            if (!roomOwner && session.user.role !== "admin") {
                setResponseStatus(event, 404);
                return {
                    error: "Room not found",
                };
            }

            const response = await handler(event);
            
            return { response };
        } catch (err) {
            // Error handling
            return { err };
        }
    });

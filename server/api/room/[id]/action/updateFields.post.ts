import { getRoom } from "../../../../core/room/roomHandler";

export default defineRequireOwnRoomHandler(async (event) => {
    // Validated by defineRequireOwnRoomHandler, so we can safely assert that id is not null
    const id = getRouterParam(event, "id")!;
    const room = await getRoom(id);

    const body = await readBody(event);
    const { fields } = body;

    if (!fields || typeof fields !== "object") {
        setResponseStatus(event, 400);
        return {
            error: "Fields object is required",
        };
    }

    room?.updateFields(fields);

    return room?.serializeData();
})
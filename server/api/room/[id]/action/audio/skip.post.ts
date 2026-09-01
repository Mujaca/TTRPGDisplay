import { getRoom } from "../../../../../core/room/roomHandler";

export default defineRequireOwnRoomHandler(async (event) => {
    // Validated by defineRequireOwnRoomHandler, so we can safely assert that id is not null
    const id = getRouterParam(event, "id")!;
    const room = await getRoom(id);

    const body = await readBody(event);
    const { time } = body;

    if (typeof time !== "number") {
        setResponseStatus(event, 400);
        return {
            error: "Time is required and must be a number",
        };
    }

    room?.skipMusic(BigInt(time));

    return room?.serializeData();
})
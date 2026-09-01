import { getRoom } from "../../../../../core/room/roomHandler";

export default defineRequireOwnRoomHandler(async (event) => {
    // Validated by defineRequireOwnRoomHandler, so we can safely assert that id is not null
    const id = getRouterParam(event, "id")!;
    const room = await getRoom(id);
    room?.playMusic();

    return room?.serializeData();
})
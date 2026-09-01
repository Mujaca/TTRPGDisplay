import { getFileUrl } from "../../../../core/files/fileCache";
import { getRoom } from "../../../../core/room/roomHandler";

export default defineRequireOwnRoomHandler(async (event) => {
    // Validated by defineRequireOwnRoomHandler, so we can safely assert that id is not null
    const id = getRouterParam(event, "id")!;
    const room = await getRoom(id);

    const body = await readBody(event);
    const { audio } = body;

    if (!audio || typeof audio !== "string") {
        setResponseStatus(event, 400);
        return {
            error: "Audio url is required",
        };
    }

    const audioFile = await getFileUrl(audio);
    if(!audioFile) {
        setResponseStatus(event, 400);
        return {
            error: "Audio not found",
        };
    }

    room?.addToQueue(audioFile);

    return room?.serializeData();
});

import { Room } from "./room";
import { v4 } from "uuid";

const rooms: Map<string, Room> = new Map();

async function getRoom(id: string): Promise<Room | undefined> {
    return rooms.get(id);
}

const id = v4();
const room = new Room(id, "name", "");
rooms.set(id, room);

export { getRoom };

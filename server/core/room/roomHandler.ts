import { Room } from "./room";
import * as jwt from "jsonwebtoken";
import { v4 } from "uuid";

const rooms: Map<string, Room> = new Map();

function getRoom(id: string) {
    return rooms.get(id);
}

const id = v4();
const room = new Room(id);
rooms.set(id, room);

export { getRoom };

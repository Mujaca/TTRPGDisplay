import { EventEmitter } from "events";
import { Socket } from "socket.io";

interface RoomData {
    image: string | undefined;
    audio: string | undefined;
}

export class Room extends EventEmitter {
    public id: string;
    private connections: Socket[] = [];
    private data: RoomData = {
        image: undefined,
        audio: undefined,
    };

    constructor(id: string) {
        super();
        this.id = id;

        console.log(`Started room with id ${this.id}`);
    }

    async startRoom() {
        // startUp room
        this.emit("startUp")
    }

    connectToRoom(socket: Socket) {
        this.connections.push(socket);
        this.emit("connection");
    }

    private shutdownRoom() {
        this.connections.forEach((socket) => socket.disconnect());
        this.emit("shutdown");
    }
}

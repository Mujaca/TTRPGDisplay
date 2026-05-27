import { EventEmitter } from "events";
import { Socket } from "socket.io";
import { RoomData } from "~~/@types/room";
import { socketServer } from "../../plugins/socket.io";

export class Room extends EventEmitter {
    public id: string;

    public name: string;
    public description: string;

    private connections: Socket[] = [];
    private data: RoomData = {
        currentView: "base",
        image: undefined,
        currentAudio: undefined,
        queuedAudio: [],
        loopStatus: {
            type: "no-loop",
        },
    };

    private updateIntervallId: NodeJS.Timeout;

    public static desirialiseRoom(
        id: string,
        name: string,
        description: string,
        dataObject: RoomData,
    ): Room {
        const room = new Room(id, name, description);
        room.data = dataObject;

        console.log(`Loaded data for room with id ${id}`)
        room.startRoom();
        return room;
    }

    constructor(id: string, name: string, description: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;

        console.log(`Started room with id ${this.id}`);
        this.updateIntervallId = setInterval(() => this.syncMusic(), 3000);
    }

    async startRoom() {
        // startUp room
        this.emit("startUp", this.data);
    }

    connectToRoom(socket: Socket) {
        this.connections.push(socket);
        this.emit("connection");

        socket.on("connection-ready", () => this.emitDataToSocket(socket));
    }

    private syncMusic() {
        if (this.data.currentAudio === undefined) return;

        socketServer.to(this.id).emit("music-sync", {
            currentTime: this.data.currentAudio.currentTime,
            audioStatus: this.data.currentAudio.audioStatus,
        });
    }

    private shutdownRoom() {
        clearInterval(this.updateIntervallId);
        this.connections.forEach((socket) => socket.disconnect());
        this.emit("shutdown");
    }

    private emitDataToSocket(socket: Socket) {
        socket.emit("data", this.data);
    }

    private updateData() {
        socketServer.to(this.id).emit("update-data");
    }
}

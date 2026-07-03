import EventEmitter2 from "eventemitter2";
import { Socket } from "socket.io";
import { RoomData } from "~~/@types/room";
import { removeRoom } from "./roomHandler";
import { prisma } from "../../lib/db";

export class Room extends EventEmitter2 {
    public id: string;

    public name: string;
    public description: string;

    private connections: Socket[] = [];
    private data: RoomData = {
        currentView: "base",
        image: undefined,
        imageName: undefined,
        imageDescription: undefined,
        currentAudio: undefined,
        queuedAudio: [],
        loopStatus: {
            type: "no-loop",
        },
    };

    private databaseIdMap: Map<string, string> = new Map<string, string>();

    private updateIntervallId: NodeJS.Timeout;
    //private shutdownTimeout: NodeJS.Timeout;

    public static desirialiseRoom(
        id: string,
        name: string,
        description: string,
        dataObject: RoomData,
    ): Room {
        const room = new Room(id, name, description);
        room.data = dataObject;

        console.log(`Loaded data for room with id ${id}`);
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

        socket.on("connection-ready", () => this.emitDataToSocket(socket));
        socket.on("disconnect", () =>
            this.connections.splice(this.connections.indexOf(socket), 1),
        );
    }

    private async saveDataChange(skipAudioTime: boolean = true) {
        if (!this.databaseIdMap.has("loopStatusId")) {
            const loopStatus = await prisma.loopStatus.findFirst({
                select: {
                    id: true,
                },
                where: {
                    data: {
                        room: {
                            id: this.id,
                        },
                    },
                },
            });

            if (loopStatus?.id) {
                this.databaseIdMap.set("loopStatusId", loopStatus?.id);
            }
        }
    }

    private syncMusic() {
        if (this.data.currentAudio === undefined) return;

        this.emit("music-sync", {
            currentTime: this.data.currentAudio.currentTime,
            audioStatus: this.data.currentAudio.audioStatus,
            url: this.data.currentAudio.url,
        });
    }

    private shutdownRoom() {
        this.emit("shutdown");
        clearInterval(this.updateIntervallId);
        this.connections.forEach((socket) => socket.disconnect());
        removeRoom(this.id);
        this.saveDataChange();
    }

    private emitDataToSocket(socket: Socket) {
        socket.emit("data", this.data);
    }
}

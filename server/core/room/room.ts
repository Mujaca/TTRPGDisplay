import EventEmitter2 from "eventemitter2";
import { Socket } from "socket.io";
import { RoomData } from "~~/@types/room";
import { removeRoom } from "./roomHandler";
import { prisma } from "../../lib/db";
import { getFileByUrl } from "../files/fileHelper";
import { getFileUrl } from "../files/fileCache";

/**
 * Available events:
 * - startUp: Emitted when the room is started up and ready to use
 * - data-update: Emitted when the room data is updated, contains the updated fields and data
 * - music-sync: Emitted every second to sync the music for all clients, contains currentTime, audioStatus and url
 * - music-update: Emitted when the music is paused or played, contains audioStatus
 * - queue-update: Emitted when the queue is updated, contains queuedAudio
 * - shutdown: Emitted when the room is shut down
 */
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

    public static async desirialiseRoom(
        id: string,
        name: string,
        description: string,
        dataObject: RoomData,
    ): Promise<Room> {
        const room = new Room(id, name, description);
        room.data = dataObject;

        console.log(`Loaded data for room with id ${id}`);
        await room.startRoom();
        return room;
    }

    constructor(id: string, name: string, description: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;

        console.log(`Started room with id ${this.id}`);
        this.updateIntervallId = setInterval(() => this.syncMusic(), 1000);
    }

    async startRoom() {
        await this.refreshMusicLink();
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

    public serializeData(): RoomData {
        return this.data;
    }

    public updateFields(updateData: Partial<RoomData>) {
        this.data = { ...this.data, ...updateData };
        const updatedFields = Object.keys(updateData);

        this.emit("data-update", {
            updatedFields,
            data: updateData,
        });
    }

    public skipMusic(newTime: bigint) {
        if (this.data.currentAudio === undefined) return;

        this.data.currentAudio.currentTime = newTime;
        this.saveDataChange(false);
        this.emit("music-sync", {
            currentTime: this.data.currentAudio.currentTime,
            audioStatus: this.data.currentAudio.audioStatus,
            url: this.data.currentAudio.url,
        });
    }

    public pauseMusic() {
        if(!this.data.currentAudio) return;

        this.data.currentAudio.audioStatus === "paused";
        this.emit("music-update", {
            audioStatus: this.data.currentAudio.audioStatus
        })
    }

    public playMusic() {
        if(!this.data.currentAudio) return;

        this.data.currentAudio.audioStatus === "playing";
        this.emit("music-update", {
            audioStatus: this.data.currentAudio.audioStatus
        })
    }

    public addToQueue(url: string) {
        this.data.queuedAudio.push(url);
        this.saveDataChange();
        this.emit("queue-update", {
            queuedAudio: this.data.queuedAudio,
        });
    }

    public removeFromQueue(url: string) {
        const index = this.data.queuedAudio.indexOf(url);
        if (index > -1) {
            this.data.queuedAudio.splice(index, 1);
            this.saveDataChange();
            this.emit("queue-update", {
                queuedAudio: this.data.queuedAudio,
            });
        }
    }

    private async fetchDatabaseIds() {
        if (!this.databaseIdMap.has("roomDataId")) {
            const roomData = await prisma.roomData.findFirst({
                select: {
                    id: true,
                },
                where: {
                    id: this.id,
                },
            });

            if (roomData?.id) {
                this.databaseIdMap.set("roomDataId", roomData?.id);
            }
        }

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

        if (!this.databaseIdMap.has("temporaryMessageId")) {
            const temporaryMessage = await prisma.temporaryMessage.findFirst({
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

            if (temporaryMessage?.id) {
                this.databaseIdMap.set(
                    "temporaryMessageId",
                    temporaryMessage?.id,
                );
            }
        }

        if (!this.databaseIdMap.has("currentAudioId")) {
            const currentAudio = await prisma.currentAudio.findFirst({
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

            if (currentAudio?.id) {
                this.databaseIdMap.set("currentAudioId", currentAudio?.id);
            }
        }
    }

    private async saveDataChange(skipAudioTime: boolean = true) {
        await this.fetchDatabaseIds();

        await prisma.roomData.update({
            where: {
                id: this.databaseIdMap.get("roomDataId")!,
            },
            data: {
                currentView: this.data.currentView,
                image: this.data.image,
                imageName: this.data.imageName,
                imageDescription: this.data.imageDescription,
                queuedAudio: this.data.queuedAudio,
            },
        });

        await prisma.loopStatus.update({
            where: {
                id: this.databaseIdMap.get("loopStatusId")!,
            },
            data: {
                type: this.data.loopStatus.type,
                currentTime: skipAudioTime
                    ? undefined
                    : this.data.currentAudio?.currentTime,
                audioStatus: skipAudioTime
                    ? undefined
                    : this.data.currentAudio?.audioStatus,
                url: skipAudioTime ? undefined : this.data.currentAudio?.url,
            },
        });

        await prisma.temporaryMessage.update({
            where: {
                id: this.databaseIdMap.get("temporaryMessageId")!,
            },
            data: {
                message: this.data.temporaryMessage?.message,
                title: this.data.temporaryMessage?.title,
            },
        });

        if (!skipAudioTime) {
            await prisma.currentAudio.update({
                where: {
                    id: this.databaseIdMap.get("currentAudioId")!,
                },
                data: {
                    currentTime: this.data.currentAudio?.currentTime,
                    audioStatus: this.data.currentAudio?.audioStatus,
                    url: this.data.currentAudio?.url,
                },
            });
        }
    }

    private syncMusic() {
        if (this.data.currentAudio === undefined) return;
        this.handleMusicTicket();

        this.emit("music-sync", {
            currentTime: this.data.currentAudio.currentTime,
            audioStatus: this.data.currentAudio.audioStatus,
            url: this.data.currentAudio.url,
        });
    }

    private handleMusicTicket() {
        if (this.data.currentAudio === undefined) return;

        this.data.currentAudio.currentTime++;
        const loopStatus = this.data.loopStatus;
        const loopEnd = loopStatus.loopEnd ?? this.data.currentAudio.duration;

        let override = false;
        if (this.data.currentAudio.currentTime >= loopEnd) {
            this.data.currentAudio.currentTime = BigInt(
                loopStatus.loopStart ?? 0,
            );

            switch (loopStatus.type) {
                case "loop-one":
                    // Current Song is already playing, no reason to change it
                    break;
                case "loop-playlist":
                    this.data.queuedAudio.push(this.data.currentAudio.url);
                    break;
                case "no-loop":
                    if (this.data.queuedAudio.length > 0) {
                        this.data.currentAudio.url =
                            this.data.queuedAudio.shift()!;
                        this.data.currentAudio.currentTime = BigInt(0);
                    } else {
                        this.data.currentAudio.audioStatus = "paused";
                    }
                    break;
            }
            override = true;
        }

        // Save time every 60 seconds or when something changed
        this.saveDataChange(
            override
                ? true
                : this.data.currentAudio.currentTime % BigInt(60) === BigInt(0),
        );
    }

    private async refreshMusicLink() {
        if(this.data.currentAudio === undefined || this.data.currentAudio.url === undefined) return;
        const file = await getFileByUrl(this.data.currentAudio!.url);

        if(!file) return;

        const newFileUrl = await getFileUrl(file.id);
        return newFileUrl;
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

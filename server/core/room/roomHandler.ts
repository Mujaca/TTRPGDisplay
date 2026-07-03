import { prisma } from "~~/server/lib/db";
import { Room } from "./room";
import { RoomData } from "~~/@types/room";
import { socketServer } from "../../plugins/socket.io";

const rooms: Map<string, Room> = new Map();
const lockedForStartUp: string[] = [];

async function getRoom(id: string): Promise<Room | undefined> {
    const room = await getRoomFromDb(id);
    if (room && !lockedForStartUp.includes(id)) {
        lockedForStartUp.push(id);
        return await startRoom(id, room.name, room.description);
    }

    return rooms.get(id);
}

function startRoom(
    id: string,
    name: string,
    description: string,
): Promise<Room> {
    return new Promise(async (resolve) => {
        const roomData = await getRoomDataFromDb(id);
        const room = Room.desirialiseRoom(id, name, description, roomData);

        room.once("startUp", () => {
            rooms.set(id, room);
        });

        room.onAny((eventName, value) => {
            if (Array.isArray(eventName)) {
                for (let singleEvent of eventName) {
                    socketServer.to(room.id).emit(singleEvent, value);
                }
                return;
            }

            socketServer.to(room.id).emit(eventName, value);
        });

        lockedForStartUp.splice(lockedForStartUp.indexOf(id), 1);
        resolve(room);
    });
}

async function getRoomDataFromDb(id: string): Promise<RoomData> {
    const roomData = await prisma.roomData.findFirst({
        where: {
            room: {
                id,
            },
        },
        include: {
            currentAudio: true,
            loopStatus: true,
            temporaryMessage: true,
        },
    });

    if (!roomData) {
        return createEmptyRoomData();
    }

    return convertDataBaseResponseToInterface(roomData);
}

async function getRoomFromDb(id: string) {
    const room = await prisma.room.findUnique({
        where: {
            id: id,
        },
    });

    return room;
}

async function isRoomInDb(id: string): Promise<boolean> {
    const roomCount = await prisma.room.count({
        where: {
            id,
        },
    });

    return roomCount > 0;
}

function removeRoom(id: string): void {
    rooms.delete(id);
}

function createEmptyRoomData(): RoomData {
    return {
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
}

// Used to sanitise DB output, so things like Ids or otehr unwanted information isnt going out
// TODO find out how I can use included types here
function convertDataBaseResponseToInterface(data: any): RoomData {
    return {
        image: data.image ?? undefined,
        imageName: data.imageName ?? undefined,
        imageDescription: data.imageDescription ?? undefined,
        queuedAudio: data.queuedAudio ?? [],
        currentView: data.currentView,
        loopStatus: {
            type: data.loopStatus.type,
            loopStart: data.loopStatus.loopStart ?? undefined,
            loopEnd: data.loopStatus.loopEnd ?? undefined,
        },
        //@ts-expect-error typing
        currentAudio: data.currentAudio
            ? {
                  audioStatus: data.currentAudio.audioStatus,
                  currentTime: parseInt(data.currentAudio.currentTime),
                  duration: parseInt(data.currentAudio.duration),
                  url: data.currentAudio.url,
              }
            : undefined,
        temporaryMessage: data.temporaryMessage
            ? {
                  title: data.temporaryMessage.title,
                  message: data.temporaryMessage.message,
              }
            : undefined,
    };
}

export { getRoom, startRoom, isRoomInDb, getRoomDataFromDb, removeRoom };

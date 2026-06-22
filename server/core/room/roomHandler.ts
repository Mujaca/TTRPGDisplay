import { prisma } from "~~/server/lib/db";
import { Room } from "./room";
import { RoomData } from "~~/@types/room";
import { socketServer } from "../../plugins/socket.io";

const rooms: Map<string, Room> = new Map();

async function getRoom(id: string): Promise<Room | undefined> {
    return rooms.get(id);
}

function startRoom(id: string, name: string, description: string) {
    return new Promise(async (resolve) => {
        const roomData = await getRoomDataFromDb(id);
        const room = Room.desirialiseRoom(id, name, description, roomData);

        room.once("startUp", () => {
            rooms.set(id, room);
            resolve(room);
        });

        room.onAny((eventName, value) => {
            if(Array.isArray(eventName)) {
                for(let singleEvent of eventName) {
                    socketServer.to(room.id).emit(singleEvent, value);
                }
                return;
            }

            socketServer.to(room.id).emit(eventName, value);
        });
    });
}

async function getRoomDataFromDb(id: string): Promise<RoomData> {
    const roomData = await prisma.roomData.findFirst({
        where: {
            id,
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
        currentAudio: data.currentAudio
            ? {
                  audioStatus: data.currentAudio.audioStatus,
                  currentTime: data.currentAudio.currentTime,
                  duration: data.currentAudio.duration,
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

export { getRoom, startRoom };

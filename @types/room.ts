import { CurrentAudio, LoopStatus } from "./audio";

export interface RoomData {
    currentView: string;
    image: string | undefined;
    imageName: string | undefined;
    imageDescription: string | undefined;
    currentAudio: CurrentAudio | undefined;
    queuedAudio: string[];
    loopStatus: LoopStatus;
    temporaryMessage?: TemporaryRoomMessage;
}

export interface TemporaryRoomMessage {
    title: string;
    message: string;
}
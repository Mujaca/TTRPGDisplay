export interface Audio {
    url: string;
    duration: number;
}

export interface CurrentAudio extends Audio {
    currentTime: number;
    audioStatus: "playing" | "paused";
}

export interface LoopStatus {
    type: "no-loop" | "loop-one" | "loop-timed" | "loop-playlist";
    loopStart?: number;
    loopEnd?: number;
}

import { defineStore } from "pinia";

export const useSocketStore = defineStore('socket', () => {
    const socket = new WebSocket('ws://localhost:3000/_ws');

    return { socket }
})
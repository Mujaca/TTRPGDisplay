import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
import { getRoom } from "../core/room/roomHandler";

export let socketServer: Server;

export default defineNitroPlugin((nitroApp: NitroApp) => {
    const engine = new Engine();
    const io = new Server();
    socketServer = io;

    io.bind(engine);

    io.use(async (socket, next) => {
        const roomId = socket.handshake.query.room;

        if (roomId === undefined || typeof roomId !== "string") {
            next(new Error("No valid room"));
            return;
        }

        const room = await getRoom(roomId);
        socket.join(roomId);

        if (room === undefined) {
            next(new Error("No valid room"));
            return;
        }

        next();

        room.connectToRoom(socket);
    });

    nitroApp.router.use(
        "/socket.io",
        defineEventHandler({
            handler(event) {
                engine.handleRequest(event.node.req, event.node.res);
                event._handled = true;
            },
            websocket: {
                open(peer) {
                    // @ts-expect-error private method and property
                    engine.prepare(peer._internal.nodeReq);
                    // @ts-expect-error private method and property
                    engine.onWebSocket(
                        // @ts-expect-error private method and property
                        peer._internal.nodeReq,
                        // @ts-expect-error private method and property
                        peer._internal.nodeReq.socket,
                        peer.websocket,
                    );
                },
            },
        }),
    );
});

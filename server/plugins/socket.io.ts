import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";

export default defineNitroPlugin((nitroApp: NitroApp) => {
    const engine = new Engine();
    const io = new Server();

    io.bind(engine);

    io.use((socket, next) => {
        const room = socket.handshake.query.room;
        console.log(room);
        if(room !== undefined) {
            socket.join(room);
        }

        next();
    })

    io.on("connection", (socket) => {
        console.log("connection");
        socket.on("message", (data) => {
            io.to("24eb81e4-b29e-4dfe-b53f-711d9d1e6e76").emit("message", "test")
            console.log(data)
        });
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

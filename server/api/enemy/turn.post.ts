import { broadcast } from "~/server/routes/_ws";

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));

    broadcast({
        type: 'turn_change',
        data: {
            currentRound: body.currentTurn,
            currentTurn: body.currentEnemy
        }
    })

    return { body };
});
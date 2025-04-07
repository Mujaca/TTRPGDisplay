import { broadcast } from "~/server/routes/_ws";

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));

    broadcast({
        type: 'turn_change',
        data: {
            currentRound: body.currentEnemy,
            currentturn: body.currentTurn
        }
    })

    return { body };
});
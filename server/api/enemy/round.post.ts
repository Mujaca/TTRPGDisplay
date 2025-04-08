import { broadcast } from "~/server/routes/_ws";

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));

    broadcast({
        type: 'round_change',
        data: {
            currentRound: body.currentTurn,
            currentTurn: body.currentEnemy
        }
    })

    return { body };
});
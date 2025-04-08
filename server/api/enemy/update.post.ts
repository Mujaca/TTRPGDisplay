import { broadcast } from "~/server/routes/_ws";
import { getEnemies, writeEnemies } from "~/server/utils";

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));
    const enemies = getEnemies();
    const toUpdate = enemies.findIndex((enemy) => enemy.id === body.id);
    
    if (toUpdate === -1) {
        return { error: 'Enemy not found' };
    }
    enemies[toUpdate] = body;
    writeEnemies(enemies);
    
    broadcast({
        type: 'enemy_update',
        data: {
            id: body.id,
            data: body,
            enemies: body.enemies
        }
    })

    return { body };
});
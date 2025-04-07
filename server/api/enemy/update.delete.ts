import { broadcast } from "~/server/routes/_ws";
import { getEnemies, writeEnemies } from "~/server/utils";

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));
    const enemies = getEnemies();

    const enemyList = enemies.filter((enemy) => enemy.id !== body.id);
    writeEnemies(enemyList);

    broadcast({
        type: 'enemy_delete',
        data: {
            id: body.id,
            enemies: enemyList
        }
    });
});
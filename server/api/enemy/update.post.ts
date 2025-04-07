import { broadcast } from "~/server/routes/_ws";
import { writeEnemies } from "~/server/utils";

export default defineEventHandler(async (event) => {
	const body = JSON.parse(await readBody(event));
    writeEnemies(body.enemies);

    broadcast({
        type: 'enemy_list',
        data: {
            enemies: body.enemies
        }
    })

    return { body };
});
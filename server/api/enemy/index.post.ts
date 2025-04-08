import { broadcast } from "~/server/routes/_ws";
import { writeEnemies } from "~/server/utils";

export default defineEventHandler(async (event) => {
	const body = JSON.parse(await readBody(event));
    writeEnemies(body);

    broadcast({
        type: 'enemy_list',
        data: {
            enemies: body
        }
    })

    return { body };
});
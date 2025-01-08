import { broadcast } from '~/server/routes/_ws';
import { getTipDescription, getTipTitle, writeTipDescription, writeTipTitle } from '~/server/utils';

export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event));

    if (body.title) writeTipTitle(body.title);
    if (body.description) writeTipDescription(body.description);

    broadcast({
        type: 'tip',
        data: {
            title: getTipTitle(),
            description: getTipDescription(),
        }
    })

    return { body };
});

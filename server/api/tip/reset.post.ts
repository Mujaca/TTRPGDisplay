import { broadcast } from '~/server/routes/_ws';
import { getTipDescription, getTipTitle, writeTipDescription, writeTipTitle } from '~/server/utils';

export default defineEventHandler(async (event) => {
    writeTipTitle("");
    writeTipDescription("");

    broadcast({
        type: 'resetTip',
    })

    return "success";
});

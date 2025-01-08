import { broadcast } from "~/server/routes/_ws";

export default defineEventHandler(async (event) => {
    broadcast({
        type: 'audioPlay'
    })

    return "success";
});

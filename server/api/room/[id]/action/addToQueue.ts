import { auth } from "../../../../lib/auth";

export default defineEventHandler(async (event) => {
    const session = await auth.api.getSession({ headers: event.headers });
    if (!session) {
        setResponseStatus(event, 401);
        return {
            error: "Unauthorized",
        };
    }

    const id = getRouterParam(event, "id");
    if(!id) {
        setResponseStatus(event, 400);
        return {
            error: "Room id is required",
        };
    }
})
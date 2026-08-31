export default defineRequireOwnRoomHandler(async (event) => {
    const id = getRouterParam(event, "id");
    return id;
})
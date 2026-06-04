import NodeCache from "node-cache";

export const fileCache = new NodeCache({
    stdTTL: 60 * 60, // 1 hour
    checkperiod: 60 * 10, // 10 minutes
    useClones: false,
    deleteOnExpire: true,
    enableLegacyCallbacks: false,
});

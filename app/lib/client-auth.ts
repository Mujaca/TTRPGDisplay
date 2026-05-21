import { createAuthClient } from "better-auth/vue";
import { admin } from "better-auth/plugins";

export const authClient = createAuthClient({
    plugins: [
        admin()
    ]
});

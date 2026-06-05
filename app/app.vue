<template>
    <div>
        <button @click="signIn()">Test</button>
        <div>
            {{ accountInfo }}
        </div>
        <div>
            {{ sesionInfo }}
        </div>
        <input type="file" />
    </div>
</template>

<script lang="ts" setup>
import { authClient } from "./lib/client-auth";

const accountInfo = ref();
const sesionInfo = ref(authClient.useSession());

onMounted(async () => {
    accountInfo.value = await authClient.listAccounts();
});

function signIn() {
    authClient.signIn.social({
        provider: "discord",
        callbackURL: "/",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/welcome",
    });
}
</script>

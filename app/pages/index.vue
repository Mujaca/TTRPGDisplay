<template>
    <div>
        <h1>Links zu den Layout Tests:</h1>
        <ul>
            <li><NuxtLink to="/test/homepage_1">Test 1</NuxtLink></li>
            <li><NuxtLink to="/test/homepage_2">Test 2</NuxtLink></li>
            <li><NuxtLink to="/test/homepage_3">Test 3</NuxtLink></li>
            <li><NuxtLink to="/test/homepage_4">Test 4</NuxtLink></li>
            <li><NuxtLink to="/test/homepage_5">Test 5</NuxtLink></li>
        </ul>
    </div>
    <div>
        <h1>Sign In Test:</h1>
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
import { authClient } from "../lib/client-auth";

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

<template>
    <NuxtLayout>
        <NuxtPage />
        <div class="disclaimer">
            Die Layouts wurden mit Hilfe von KI erstellt. Sie sind nicht final und dienen nur als Inspiration.
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.disclaimer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 10px;
}
</style>
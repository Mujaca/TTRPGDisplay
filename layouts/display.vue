<template>
    <div class="display-container">
        <div class="logo-container">
            <img class="logo" src="../public/logo.png" alt="logo" />
        </div>
        <slot/>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playwrite+HU:wght@100..400&family=Shadows+Into+Light&display=swap');
body {
    background-color: #313131;
    color: white;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.display-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
}
.logo {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: .3rem;
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    z-index: 999999;
}
</style>
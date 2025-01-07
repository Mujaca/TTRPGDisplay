<template>
    <div>
        <slot/>
    </div>
</template>

<script lang="ts">
import { useSocketStore } from '../stores/socket.store'
const store = useSocketStore();
store.socket.on('connect', () => {
    console.log('connected')
})
</script>

<style lang="scss" scoped>

</style>
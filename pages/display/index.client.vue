<template>
    <div class="data-container">
        <img v-if="currentImage" :src="currentImage" alt="image" />
        <div>
            <p>a</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSocketStore } from '~/stores/socket'
definePageMeta({
  layout: 'display'
})
const store = useSocketStore()

const currentImage = ref();
const currentAudio = ref();
const currentTitle = ref();
const currentDescription = ref();

store.socket.onmessage = (event) => {
  const data = JSON.parse(event.data)
  switch (data.type) {
    case "image":
        currentImage.value = data.data
    break;
    case "audio":
        currentAudio.value = data.data
    break;
    case "title": 
        currentTitle.value = data.data
    break;
    case "description":
        currentDescription.value = data.data
    break;
    case "multiple": 
        currentImage.value = data.data.image
        currentAudio.value = data.data.audio
        currentTitle.value = data.data.title
        currentDescription.value = data.data.description
    break;
    default:
        break;
  }
}
</script>

<style lang="scss" scoped>
.data-container {

    padding: .3rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    img {
        padding: .8rem;
        width: 75%;
        height: 75%;
        transform: translate(0%, 0%);
    }
}
</style>
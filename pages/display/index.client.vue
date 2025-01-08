<template>
	<div class="data-container">
        <div class="information-container">
			<h1>{{ currentTitle }}</h1>
			<p>{{ currentDescription }}</p>
		</div>
		<img
			v-if="currentImage"
			:src="currentImage"
			alt="image" />
        <audio
            :src="currentAudio"
            ref="audio"
            autoplay
            loop
            style="display: hidden;"
            />
	</div>
	<div
		class="speech-bubble"
		v-if="currentTipTitle || currentTipDescription">
		<h1>{{ currentTipTitle }}</h1>
		<p>{{ currentTipDescription }}</p>
	</div>
	<img
		class="background-image"
		v-if="currentImage"
		:src="currentImage"
		alt="image" />
</template>

<script setup lang="ts">
import { useSocketStore } from '~/stores/socket';
definePageMeta({
	layout: 'display',
});
const store = useSocketStore();

const currentImage = ref();
const currentAudio = ref();
const currentTitle = ref();
const currentDescription = ref();
const currentTipTitle = ref();
const currentTipDescription = ref();

const audio = ref();

store.socket.onmessage = (event) => {
	const data = JSON.parse(event.data);
	switch (data.type) {
		case 'image':
			currentImage.value = data.data;
			break;
		case 'audio':
			currentAudio.value = data.data;
			break;
		case 'title':
			currentTitle.value = data.data;
			break;
		case 'description':
			currentDescription.value = data.data;
			break;
        case 'tip':
            currentTipTitle.value = data.data.title;
            currentTipDescription.value = data.data.description;
            break;
        case 'resetTip':
            currentTipTitle.value = '';
            currentTipDescription.value = '';
        break;
		case 'multiple':
			if(data.data.image) currentImage.value = data.data.image;
			if(data.data.audio) currentAudio.value = data.data.audio;
			if(data.data.title) currentTitle.value = data.data.title;
			if(data.data.description) currentDescription.value = data.data.description;
			if(data.data.tipTitle) currentTipTitle.value = data.data.tipTitle;
			if(data.data.tipDescription) currentTipDescription.value = data.data.tipDescription;
			break;
        case 'audioPause':
            audio.value.pause();
            break;
        case 'audioPlay':
            audio.value.play();
            break;
		default:
			break;
	}
};

onMounted(() => {
    console.log(audio.value);
    audio.value.addEventListener('canplay', () => {
        audio.value.play();
    });
})
</script>

<style lang="scss" scoped>
.data-container {
	padding: 0.3rem;
	min-width: 100vw;
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;

	.information-container {
		font-family: 'Shadows into Light';

		h1 {
			text-align: center;
			font-size: 2rem;
			font-weight: bold;
			margin: 0;
		}

		p {
			margin: 0;
		}
	}

	img {
		padding: 0.8rem;
		width: 98vh;
        max-width: 90vh;
		height: auto;
		border-radius: 32px;
	}
}

.speech-bubble {
	position: fixed;
	background: #0ecd9d;
	border-radius: 0.4em;
	bottom: 125px;
	right: 15px;
	z-index: 200;
	padding: 0.4rem;
    max-width: 20rem;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 50px solid transparent;
		border-top-color: #0ecd9d;
		border-bottom: 0;
		border-right: 0;
		margin-left: 75px;
		margin-bottom: -25px;
	}
}
.background-image {
    position: fixed;
    top: 0;
    left: 0;
    padding: .3rem;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    filter: blur(32px) brightness(0.4);
}
</style>

<template>
	<div class="data-container">
		<div class="image-container">
			<img v-if="currentImage" :src="currentImage" alt="image" />
		</div>
		<div class="battle-container">
			<h1>Kampfreinfolge</h1>
			<div class="order">
				<p> 1. Spieler (20 Schaden) </p>
				<p> 2. Gegner (30 Schaden) </p>
				<p> 3. Spieler (0 Schaden) </p>
				<p> 4. Gegner (5 Schaden) </p>
			</div>
		</div>
	</div>
	<div class="turn-change" v-if="showTurnChange">
		<div class="inner-turn-change">
			Der nächste ist dran!
		</div>
	</div>
	<div class="turn-change" v-if="showNewRound">
		<div class="inner-turn-change">
			Runde {{ currentRound }} beginnt!
		</div>
	</div>
	<audio :src="currentAudio" ref="audio" autoplay loop style="display: hidden;" />
	<div class="speech-bubble" v-if="currentTipTitle || currentTipDescription">
		<h1>{{ currentTipTitle }}</h1>
		<p>{{ currentTipDescription }}</p>
	</div>
</template>

<script setup lang="ts">
import { useSocketStore } from '~/stores/socket';
definePageMeta({
	layout: 'display',
});
const store = useSocketStore();

const currentImage = ref();
const currentAudio = ref();
const currentTipTitle = ref();
const currentTipDescription = ref();
const showTurnChange = ref(false);
const currentRound = ref(0);
const showNewRound = ref(false);

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
		case 'tip':
			currentTipTitle.value = data.data.title;
			currentTipDescription.value = data.data.description;
			break;
		case 'resetTip':
			currentTipTitle.value = '';
			currentTipDescription.value = '';
			break;
		case 'multiple':
			if (data.data.image) currentImage.value = data.data.image;
			if (data.data.audio) currentAudio.value = data.data.audio;
			if (data.data.tipTitle) currentTipTitle.value = data.data.tipTitle;
			if (data.data.tipDescription) currentTipDescription.value = data.data.tipDescription;
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

function setNewRound() {
	currentRound.value++;
	showNewRound.value = true;
	setTimeout(() => {
		showNewRound.value = false;
		setTimeout(setNewRound, 1);
	}, 6100);
}

onMounted(() => {
	audio.value.addEventListener('canplay', () => {
		audio.value.play();
	});
	setNewRound();
})
</script>

<style lang="scss" scoped>
.data-container {
	display: flex;
	height: 100vh;

	.image-container {
		padding: 1rem;
		width: 50vw;
		height: 100%;
		place-items: center;
		display: grid;
		
		img {
			width: 100%;
			height: 80%;
			object-fit: cover;
			border-radius: 16px;
		}
	}

	.battle-container {
		width: 50vw;
		height: 100%;
		padding: 1rem;

		h1 {
			font-size: 3rem;
			text-align: center;
		}

		.order {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-family: 'Shadows into Light';

			p {
				margin: 0.5rem;
			}
		}
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

.turn-change {
	position: fixed;
	background-image: url('/public/textbox.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 390px;
	height: 187px;
	animation: flyIn 2s ease-in-out, flyOut 2s ease-in-out 4s forwards;

	.inner-turn-change {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;

		padding: 0.5rem;
		font-family: 'Shadows into Light';
		font-size: 2.3rem;
		text-align: center;
	}
}

@keyframes flyIn {
	0% {
		left: -50%;
	}

	100% {
		left: 50%;
	}
}

@keyframes flyOut {
	0% {
		left: 50%;
	}

	100% {
		left: 150%;
	}
}
</style>
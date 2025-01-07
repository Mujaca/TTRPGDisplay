import { currentAudio, currentDescription, currentImage, currentTitle } from "../utils";

export default defineWebSocketHandler({
	open(peer) {
        peer.send(JSON.stringify({ type: 'multiple', data: {
            image: currentImage,
            audio: currentAudio,
            title: currentTitle,
            description: currentDescription
        }}));
	},
	message(peer, message) {
		
	},
	close(peer) {
	},
});

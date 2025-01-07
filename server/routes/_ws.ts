import { currentAudio, currentDescription, currentImage, currentTipDescription, currentTipTitle, currentTitle } from "../utils";

let peers = new Set();

export default defineWebSocketHandler({
	open(peer) {
        peers.add(peer);
        peer.send(JSON.stringify({ type: 'multiple', data: {
            image: currentImage,
            audio: currentAudio,
            title: currentTitle,
            description: currentDescription,
            tipTitle: currentTipTitle,
            tipDescription: currentTipDescription
        }}));
	},
	message(peer, message) {
	},
	close(peer) {
        peers.delete(peer);
	},
});

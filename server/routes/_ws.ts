import { getAudio, getDescription, getEnemies, getImage, getTipDescription, getTipTitle, getTitle } from "../utils";

let peers = new Set();
export const broadcast = (data:any) => {
    peers.forEach(peer => {
        // @ts-ignore
        peer.send(JSON.stringify(data));
    });
}

export default defineWebSocketHandler({
	open(peer) {
        peers.add(peer);
        peer.send(JSON.stringify({ type: 'multiple', data: {
            image: getImage(),
            audio: getAudio(),
            title: getTitle(),
            description: getDescription(),
            tipTitle: getTipTitle(),
            tipDescription: getTipDescription(),
            enemies: getEnemies(),
        }}));
	},
	message(peer, message) {
	},
	close(peer) {
        peers.delete(peer);
	},
});

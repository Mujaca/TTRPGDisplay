import { broadcast } from '../routes/_ws';
import { getAudio, getDescription, getImage, getTitle, writeAudio, writeDescription, writeImage, writeTitle } from '../utils';

export default defineEventHandler(async (event) => {
	const body = JSON.parse(await readBody(event));

	if (body.title) writeTitle(body.title);
	if (body.description) writeDescription(body.description);
	if (body.image) writeImage(body.image);
	if (body.audio) writeAudio(body.audio);

    broadcast({
        type: 'multiple',
        data: {
            image: getImage(),
            audio: getAudio(),
            title: getTitle(),
            description: getDescription()
        }
    })

	return { body };
});

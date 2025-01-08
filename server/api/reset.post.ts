import { broadcast } from '../routes/_ws';
import { getAudio, getDescription, getImage, getTipDescription, getTipTitle, getTitle, reset, writeAudio, writeDescription, writeImage, writeTitle } from '../utils';

export default defineEventHandler(async (event) => {
    reset();

    broadcast({
        type: 'multiple',
        data: {
            image: getImage(),
            audio: getAudio(),
            title: getTitle(),
            description: getDescription(),
            tipTitlte: getTipTitle(),
            tipdescription: getTipDescription()
        }
    })

    return "success";
});

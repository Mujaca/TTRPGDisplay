import { moveFile } from "move-file";
import mime from 'mime-types'
import fs from "fs";

export default defineEventHandler(async (event) => {
    const { files } = event.context.formidable;
    
    for(let key in files) {
        const file = files[key][0];
        const destination = `${process.env.storage}/${file.originalFilename}`;
        if(fs.existsSync(destination)) continue;

        moveFile(file.filepath, destination);
    }
});
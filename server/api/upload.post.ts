import { moveFile } from "move-file";
import mime from 'mime-types'
import fs from "fs";

export default defineEventHandler(async (event) => {
    const { files } = event.context.formidable;
    const result = [];
    
    for(let key in files) {
        const file = files[key][0];
        const destination = `${process.env.storage}/${file.originalFilename}`;
        if(fs.existsSync(destination)) continue;

        moveFile(file.filepath, destination);
        result.push({
            name: file.originalFilename,
            type: mime.lookup(file.originalFilename),
            size: file.size,
        });
    }

    return result;
});
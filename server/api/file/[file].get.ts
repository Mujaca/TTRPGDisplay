import fs from "fs";
import mime from 'mime-types';

export default eventHandler(async (event) => {
    const fileName = event.context.params?.file;
    if(!fileName) return "No file specified";

    const fileNameEnding = fileName.split('.').pop();
    if(fileNameEnding === "env") return "File not found";

    const fileBuffer = fs.readFileSync(process.env.storage + fileName);
    return new Response(fileBuffer, {
        headers: {
            "Content-Type": mime.contentType(fileName) as string,
        }
    });
});
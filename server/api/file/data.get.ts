import { s3, S3_BUCKET } from "~~/server/lib/s3";
import { HeadObjectCommand } from "@aws-sdk/client-s3";

export default defineEventHandler(async (event) => {
    const key = "uploads/1780572200018-bfi3234trjb";

    const command = new HeadObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
    })

    const res = await s3.send(command);
    return res;
})
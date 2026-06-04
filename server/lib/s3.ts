import { S3Client } from "@aws-sdk/client-s3";

const endpoint = process.env.S3_ENDPOINT;
const region = process.env.S3_REGION;
const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRET_KEY;

export const S3_BUCKET = process.env.S3_BUCKET ?? "ttrpgdisplay";

if (!endpoint || !region || !accessKeyId || !secretAccessKey) {
    throw new Error("Missing S3 env vars");
}

export const s3 = new S3Client({
    region,
    endpoint,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
    forcePathStyle: true,
});
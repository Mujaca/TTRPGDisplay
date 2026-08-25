import { prisma } from "../../lib/db";

// TODO fix typing
export function mapFile(file: any) {
    return {
        id: file.id,
        path: file.path,
        fileName: file.fileName,
        fileType: file.fileType,
        fileSize: Number(file.fileSize),
    };
}

export function mapFolderStructor(files: any[], folder: string = "") {
    const children = files.filter(
        (file) => file.parent === (folder == "" ? null : folder),
    );

    const folders = children.filter(
        (file) => file.fileType === "organisation/folder",
    );
    const childFiles = children.filter(
        (file) => file.fileType !== "organisation/folder",
    );

    const mappedFiles: any[] = [
        ...childFiles.map((file) => mapFile(file)),
        ...folders.map((folder) => {
            return {
                ...mapFile(folder),
                children: mapFolderStructor(files, folder.id),
            };
        }),
    ];

    return mappedFiles;
}

export async function getFileByUrl(url: string) {
    const file = await prisma.sharedFile.findUnique({
        where: {
            url,
        },
        include: {
            file: true,
        },
    });

    if (!file) return null;

    return file.file;
}
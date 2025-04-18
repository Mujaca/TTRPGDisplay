let currentImage: string | null = '/api/file/base.png';
let currentAudio: string | null = null;
let currentTitle: string | null = 'Wilkommen!';
let currentDescription: string | null = 'Es geht gleich los!';
let currentTipTitle: string | null = 'Hier gibt es GM Hinweise.';
let currentTipDescription: string | null = 'Also regelmäßig aufpassen, ob hier nicht etwas interessantes für euch steht. Man weiß ja nie.';
let enemyList: Enemy[] = [];

export function writeImage(image: string) {
	currentImage = '/api/file/' + image;
}

export function writeAudio(audio: string) {
	currentAudio = '/api/file/' + audio;
}

export function writeTitle(title: string) {
	currentTitle = title;
}

export function writeDescription(description: string) {
	currentDescription = description;
}

export function writeTipTitle(tipTitle: string) {
	currentTipTitle = tipTitle;
}

export function writeTipDescription(tipDescription: string) {
	currentTipDescription = tipDescription;
}

export function writeEnemies(enemies: Enemy[]) {
    enemyList = enemies;
}

export function getImage() {
    return currentImage;
}

export function getAudio() {
    return currentAudio;
}

export function getTitle() {
    return currentTitle;
}

export function getDescription() {
    return currentDescription;
}

export function getTipTitle() {
    return currentTipTitle;
}

export function getTipDescription() {
    return currentTipDescription;
}

export function getEnemies() {
    return enemyList;
}

export function reset() {
    currentImage = '/api/file/base.png';
    currentAudio = null;
    currentTitle = 'Wilkommen!';
    currentDescription = 'Es geht gleich los!';
    currentTipTitle = 'Euer GM hier.';
    currentTipDescription = 'Hier gibts immer eine Kleinigkeit nur für euch';
    enemyList = [];
}

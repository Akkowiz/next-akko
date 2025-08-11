let audioInstance: HTMLAudioElement | null = null;

export default function getTheRealShit() {
    if (!audioInstance) {
        audioInstance = new Audio("/youngman.mp3");
        audioInstance.preload = "auto";
    }
    return audioInstance;
}

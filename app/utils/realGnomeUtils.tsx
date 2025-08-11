let audioInstance: HTMLAudioElement | null = null;
export default function getRealGnomeAudio() {
    if (!audioInstance) {
        audioInstance = new Audio("/getgnomed.mp3");
        audioInstance.preload = "auto";
    }
    return audioInstance;
}

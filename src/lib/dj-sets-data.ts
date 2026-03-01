export interface DJSet {
    id: string;
    title: string;
    eventOrDate: string;
    previewVideoPath: string;
    youtubeId: string;
}

export const djSets: DJSet[] = [
    {
        id: "set-1",
        title: "Closing Rituals\nFebruary",
        eventOrDate: "",
        previewVideoPath: "/videos/sets/closing-rituals-february-preview.mp4",
        youtubeId: "cRe-kZgVig4",
    },
    // Add more sets here as needed
];

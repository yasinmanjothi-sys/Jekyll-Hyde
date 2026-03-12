export interface DJSet {
    id: string;
    title: string;
    eventOrDate: string;
    previewVideoPath: string;
    youtubeId: string;
    youtubeStartTime?: number;
}

export const djSets: DJSet[] = [
    {
        id: "set-1",
        title: "Closing Rituals\nJanuary",
        eventOrDate: "",
        previewVideoPath: "/videos/sets/closing-rituals-february-preview.mp4",
        youtubeId: "cRe-kZgVig4",
    },
    {
        id: "set-2",
        title: "Closing Rituals\nFebruary",
        eventOrDate: "",
        previewVideoPath: "/videos/sets/closing-rituals-february-preview-2.mp4",
        youtubeId: "l_WTPgMvQ0U",
        youtubeStartTime: 204,
    },
    // Add more sets here as needed
];

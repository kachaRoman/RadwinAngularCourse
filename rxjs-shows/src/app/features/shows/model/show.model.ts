export interface ShowImage {
    medium: string;
    original: string;
}

export interface Show {
    id: number;
    url: string;
    name: string;
    language: string;
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    weight: number;
    webChannel?: any;
    image: ShowImage;
    summary: string;
}


export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: Schedule;
    weight: number;
    webChannel?: any;
    externals: Externals;
    image: Image;
    summary: string;
}


export interface Schedule {
    time: string;
    days: string[];
}

export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

export interface Image {
    medium: string;
    original: string;
}


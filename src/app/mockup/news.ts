import { Observable } from 'rxjs';

export let news: News[];

export class News {

    private header: string;
    private description: string;
    private imgUrl: string;
    private timestamp: number;
    private tags: string;
    private official: boolean;

    constructor(header, desc, img, timestamp, tags, official) {
        this.header = header;
        this.description = desc;
        this.imgUrl = img;
        this.timestamp = timestamp;
        this.tags = tags;
        this.official = official;
    }

    public post(header: string, description: string, imgUrl: string, timestamp: number, tags: string, official: boolean) {
        const n = new News(header, description, imgUrl, timestamp, tags, official);
        news.push(n);
        return n;
    }

}



import { Comments } from "./comments.model";

export class CommentsSearchResult{
    count: number;
    results: Comments[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: any) => new Comments(elem)) || [];
    }
}
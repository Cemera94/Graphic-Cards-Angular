import { GraphicCards } from "./graphic-cards.model";

export class GraphicCardsSearchResult{
    count: number;
    results: GraphicCards[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: any) => new GraphicCards(elem)) || [];
    }
}